# home.oxyclick.com

Static rebuild of the Oxyclick marketing site (previously hosted on Duda), built with Next.js and Tailwind CSS and deployed to Netlify.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy to Netlify

Create a Netlify site with this folder (`sites/home-oxyclick`) as the base directory. `netlify.toml` already sets the build command (`npm run build`) and publish directory (`out`).

Enable **Forms** in the Netlify dashboard so the newsletter and contact forms are collected. They are declared in `public/__forms.html`; keep the field names there in sync with `src/components/NewsletterForm.tsx` and `ContactForm.tsx`. Add email notifications under Forms → Form notifications.

## Editing content

Nav links, testimonials, the numbers, the event/countdown and the contact form's service list live in `src/lib/site.ts`. Images are in `public/images`.
