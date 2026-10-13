# KCTEC Website

Bilingual (Khmer/English) website for Kampong Cham Teacher Education College,
built with Next.js and deployed as a static site on GitHub Pages.

## Running it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install     # once, to fetch dependencies
npm run dev     # start the development server
```

Then open <http://localhost:3000>. Pages reload as you save changes.

## Editing the content

Most edits are text changes in one of these files. You do not need to
understand React to make them — find the Khmer and English strings sitting
next to each other and change both.

| What you want to change | File |
| --- | --- |
| Phone, email, address | `lib/site.ts` |
| News and announcements | `lib/news.ts` |
| Menu labels or page order | `lib/site.ts` |
| Home page text and statistics | `app/page.tsx` |
| About page | `app/about/page.tsx` |
| Programs and subject majors | `app/programs/page.tsx` |
| Entry requirements and key dates | `app/admissions/page.tsx` |
| Contact page details | `app/contact/page.tsx` |
| Colours, fonts, spacing | `app/globals.css` |
| Logo | `public/logo.svg` |

Bilingual text uses the `T` component, which takes both languages at once:

```tsx
<T km="ទំព័រដើម" en="Home" />
```

Both languages are written into the page and CSS shows whichever one the
visitor has selected. That means the site works without JavaScript and both
languages are visible to search engines.

### Things still to fill in

Search the project for `PLACEHOLDER` and `Editor's note` to find every spot
that needs real information. The main ones:

- Phone number, email addresses, and street address in `lib/site.ts`
- Enrolment, staff, and graduate figures on the home page
- Founding year, milestones, and leadership names on the About page
- Real intake dates on the Admissions page
- Actual subject majors on the Programs page
- The official college logo, replacing the placeholder crest
- A Google Maps embed on the Contact page

## Deploying to GitHub Pages

The repository deploys itself on every push to `main`.

**One-time setup:**

1. Push this project to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That is all. Pushing to `main` triggers `.github/workflows/deploy.yml`, which
builds the site and publishes it. The first run takes a couple of minutes;
afterwards your site is live at:

```
https://<your-username>.github.io/<repository-name>/
```

The workflow works out the base path automatically, so the site works whether
it lives at a repository subpath or at a custom domain.

## Checking your work before deploying

```bash
npm run build     # build the static site into out/
npm run verify    # check pages, links, and Pages requirements
npm run typecheck # check for TypeScript errors
```

`npm run verify` catches the problems that otherwise fail silently once
deployed: missing pages, broken internal links, unpaired Khmer/English text,
and missing accessibility landmarks.

## How the contact form works

The site is static, so there is no server to receive form submissions. The
form opens the visitor's own email application with the message prefilled.

To collect submissions properly, sign up for a form service such as
[Formspree](https://formspree.io), then replace the body of `handleSubmit` in
`components/ContactForm.tsx` with a `fetch()` POST to their endpoint. No other
file needs to change.

## Notes

- Fonts are self-hosted at build time, so pages load without calling out to
  Google — noticeably faster on slow connections.
- `public/.nojekyll` must stay. Without it GitHub Pages strips the `_next/`
  folder and the site loads with no styling.
- The site defaults to Khmer and remembers each visitor's language choice.
