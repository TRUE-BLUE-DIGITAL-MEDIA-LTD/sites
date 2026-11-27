// Adds the Termly cookie-consent script as the very first script of every
// exported page. Termly has to load before any other script so it can hold
// back non-essential ones until the visitor has chosen, and Next.js always
// places its own scripts ahead of anything rendered from the layout, so the
// tag is added to the finished HTML instead. Runs after `next build`.
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const TERMLY_ID = "f8d42d09-89ec-40ae-983f-3c14d88343c7";
// Termly inserts its container as the first element of <body>. React then
// mistakes it for the page's own first element and reports a hydration error,
// so this keeps the container at the end of <body> until the page has loaded.
const KEEP_LAST = `<script>(function(){var o=new MutationObserver(function(){var e=document.getElementById("termly-code-snippet-support"),b=document.body;if(e&&b&&e.parentNode===b&&e.nextSibling)b.appendChild(e)});o.observe(document.documentElement,{childList:true,subtree:true});addEventListener("load",function(){setTimeout(function(){o.disconnect()},5000)})})()</script>`;
const TAG = `<script src="https://app.termly.io/resource-blocker/${TERMLY_ID}?autoBlock=on"></script>${KEEP_LAST}`;

const outDir = path.resolve("out");
let count = 0;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "_next") await walk(full);
    } else if (entry.name.endsWith(".html") && entry.name !== "__forms.html") {
      const html = await readFile(full, "utf8");
      if (html.includes(TAG)) continue;
      // Fail the build rather than publish a page without the consent script.
      if (!html.includes("<head>")) {
        throw new Error(`inject-consent: no <head> tag found in ${full}`);
      }
      await writeFile(full, html.replace("<head>", () => `<head>${TAG}`));
      count++;
    }
  }
}

await walk(outDir);
console.log(`inject-consent: added the consent script to ${count} page(s)`);
