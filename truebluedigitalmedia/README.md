# truebluedigitalmedia

Static rebuild of https://www.truebluedigitalmedia.com (previously hosted on Duda), built with Next.js and Tailwind CSS and deployed to Netlify. See the repo README for how sites in this repo are built and deployed.

```bash
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

Pages: Home (`/`), About (`/about`) and Contact (`/contact`). Any other address, including the old blog, shows the "page not found" page in `src/app/not-found.tsx`.

Nav links, phone and email, both addresses, opening hours, the home page service cards and values, the team and the contact form's service list live in `src/lib/site.ts`. Images are in `public/images`.

The contact form uses Netlify Forms and is declared in `public/__forms.html`. Enable Forms on the Netlify site and add an email notification so submissions reach the owner.

The previous site loaded no analytics, cookie-consent or chat scripts, so this one loads none either.
