// The static export writes per-segment prefetch data to nested folders
// (out/about/__next.about/__PAGE__.txt) but the browser requests it with dots
// (out/about/__next.about.__PAGE__.txt). A plain static host can't map one to
// the other, so link prefetches 404. This copies each nested file to the
// dotted name the browser asks for. Runs after `next build`.
import { copyFile, readdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");
let copied = 0;

async function flatten(dir, prefix) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const dotted = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) {
      await flatten(full, dotted);
    } else {
      await copyFile(full, dotted);
      copied++;
    }
  }
}

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "_next") continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) await flatten(full, full);
    else await walk(full);
  }
}

await walk(outDir);
console.log(`flatten-segments: wrote ${copied} prefetch file(s)`);
