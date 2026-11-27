# whitecroft

Static rebuild of https://www.whitecroft.co.th (previously hosted on Duda), built with Next.js and Tailwind CSS and deployed to Netlify. See the repo README for how sites in this repo are built and deployed.

```bash
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

Contact details, nav links, practice areas, testimonials and the document list live in `src/lib/site.ts`. The practice-area pages (Corporate, Litigation, Employment, Notary Service) are in `src/content/pages.ts` and the news posts in `src/content/posts.ts`; adding an entry to either file adds a page. Images are in `public/images` and the downloadable documents in `public/files`.

Page addresses match the original site, including the capital letters in `/Litigation` and `/News`.

The "Free Evaluation" form at the bottom of every page uses Netlify Forms and is declared in `public/__forms.html`. The Google Analytics ID is set in `src/lib/site.ts`. The map on the contact page is a Google Maps embed, positioned from `site.map`.
