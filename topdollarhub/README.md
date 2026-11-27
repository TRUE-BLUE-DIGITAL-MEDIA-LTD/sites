# topdollarhub

Static rebuild of https://www.topdollarhub.com (previously hosted on Duda), built with Next.js and Tailwind CSS and deployed to Netlify. See the repo README for how sites in this repo are built and deployed.

```bash
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

Nav links, the phone menu's "Follow us" links, testimonials, the numbers, the events and the contact form's service list live in `src/lib/site.ts`. The team is listed in `src/app/about/page.tsx` (phones show a separate list with their own photos). The Terms & Conditions text is in `src/content/policy.ts`. Images are in `public/images`.

There are three layouts: phone (below 768px), tablet (768px to 1023px) and desktop.

The newsletter and contact forms use Netlify Forms and are declared in `public/__forms.html`. The Google Analytics ID is set in `src/lib/site.ts`. The Termly cookie-consent script is added to every built page by `scripts/inject-consent.mjs`.
