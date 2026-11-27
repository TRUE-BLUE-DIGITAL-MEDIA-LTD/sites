// Scaffolds a new site in this repo, set up the same way as the reference
// site: Next.js + Tailwind, exported as static files for Netlify.
//
//   node scripts/new-site.mjs <site-name>
//
// The Next.js version and the deploy plumbing (static-export config,
// netlify.toml, post-build step) are taken from the reference site so every
// site in the repo builds and deploys identically.
import { spawnSync } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REFERENCE = "home-oxyclick";
const COPY_FROM_REFERENCE = [
  "next.config.ts",
  "netlify.toml",
  "scripts/flatten-segments.mjs",
];
const SCAFFOLD_ASSETS = ["file.svg", "globe.svg", "next.svg", "vercel.svg", "window.svg"];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const name = process.argv[2];

if (!name || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
  console.error("Usage: node scripts/new-site.mjs <site-name>");
  console.error("The name must be lowercase letters, digits and dashes, e.g. shop-oxyclick");
  process.exit(1);
}

const reference = path.join(root, REFERENCE);
const target = path.join(root, name);
if (existsSync(target)) {
  console.error(`${name} already exists in this repo.`);
  process.exit(1);
}

const referencePkg = JSON.parse(await readFile(path.join(reference, "package.json"), "utf8"));
const nextVersion = referencePkg.dependencies.next;
if (!/^\d+\.\d+\.\d+$/.test(nextVersion)) {
  console.error(`Expected an exact Next.js version in ${REFERENCE}/package.json, found "${nextVersion}".`);
  process.exit(1);
}

// The name and version are validated above, so the command is safe to build as one string.
const created = spawnSync(
  `npx --yes create-next-app@${nextVersion} ${name} --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --disable-git --yes`,
  { cwd: root, stdio: "inherit", shell: true },
);
if (created.status !== 0) {
  console.error("create-next-app failed; nothing else was changed.");
  process.exit(created.status ?? 1);
}

for (const file of COPY_FROM_REFERENCE) {
  const dest = path.join(target, file);
  await mkdir(path.dirname(dest), { recursive: true });
  await cp(path.join(reference, file), dest);
}

for (const asset of SCAFFOLD_ASSETS) {
  await rm(path.join(target, "public", asset), { force: true });
}

const pkgPath = path.join(target, "package.json");
const pkg = JSON.parse(await readFile(pkgPath, "utf8"));
pkg.scripts.postbuild = referencePkg.scripts.postbuild;
await writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

await writeFile(
  path.join(target, "README.md"),
  `# ${name}\n\nStatic Next.js + Tailwind site, deployed to Netlify. See the repo README for how sites in this repo are built and deployed.\n\n\`\`\`bash\nnpm run dev      # http://localhost:3000\nnpm run build    # static site in ./out\n\`\`\`\n`,
);

console.log(`\nCreated ${name}. Next steps:`);
console.log(`  cd ${name} && npm run dev`);
console.log(`  On Netlify, create a site from this repo with base directory "${name}".`);
