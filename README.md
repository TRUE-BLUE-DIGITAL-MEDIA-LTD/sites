# sites

Marketing sites and landing pages, moved off Duda and hosted on Netlify. Each folder is one independent site with its own dependencies, so a change to one site never affects another.

| Folder | Live URL |
| --- | --- |
| `home-oxyclick` | https://home.oxyclick.com |
| `topdollarhub` | https://www.topdollarhub.com |
| `truebluedigitalmedia` | https://www.truebluedigitalmedia.com |
| `whitecroft` | https://www.whitecroft.co.th |

## How a site is built

Every site is a Next.js + Tailwind CSS project exported as plain static files:

- `next.config.ts` sets `output: "export"`, so `npm run build` writes the site to `out/`.
- `netlify.toml` tells Netlify the build command and publish folder.
- `scripts/flatten-segments.mjs` runs after each build. Without it, link prefetches return 404 on a static host.

## Add a site

```bash
node scripts/new-site.mjs <site-name>     # e.g. shop-oxyclick
```

This creates the folder with the same Next.js version and deploy setup as `home-oxyclick`. Then:

1. Build the pages in `<site-name>/src/app`, and put images in `<site-name>/public/images`.
2. If the site has forms, copy `src/lib/netlify-form.ts` and `public/__forms.html` from `home-oxyclick` and declare the site's own forms and field names in `__forms.html`.
3. Add the site to the table above.

## Deploy a site to Netlify

Create one Netlify site per folder, all connected to this repo:

1. Add new site → Import an existing project → pick this repo.
2. Set **Base directory** to the site's folder (for example `home-oxyclick`). The build command and publish directory come from that folder's `netlify.toml`.
3. If the site has forms, enable **Forms** and add an email notification.
4. Point the domain at the Netlify site.

With a base directory set, Netlify by default skips a build when nothing in that folder changed.

## Work on a site

```bash
cd <site-name>
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

Use Node 22 or newer.
