# Umer Aslam Raza – Portfolio

Personal portfolio built with Next.js (Pages Router), exported as a static site and deployed to
GitHub Pages at <https://umeraslamraza.github.io/umer/>.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out (uses the /umer base path)
```

## Editing content

All content lives in `src/data`. Pages render from these files, so you don't need to edit any JSX
to update the site.

| File | What it controls |
| --- | --- |
| `site.js` | Name, role, location, photos, email/phone, social links, contact form endpoint, default SEO tags |
| `home.js` | Home page intro, stats counters, "What I do" service cards |
| `resume.js` | Resume summary, work experience, skills, education, languages, interests |
| `projects.js` | Portfolio projects (each `id` becomes `/portfolio/<id>/`; `featured: true` shows it on the home page) |
| `projectGalleries.js` | Screenshot galleries for each project |
| `testimonials.js` | Client testimonials (`isImage` adds a screenshot, `isVideo` adds a video) |
| `navigation.js` | Sidebar / mobile navigation items (badge counts are computed automatically) |

Images and other static files go in `public/`. Reference them with a leading slash
(e.g. `/images/foo.png`). **Paths are case-sensitive on GitHub Pages**, so they must match the
file name exactly.

## Project structure

```
src/
  components/   Shared UI (Sidebar, ProjectCard, PillLink, SectionHeading, icons, ...)
  data/         Site content (see above)
  hooks/        useTheme, responsive size hooks
  lib/          Theme helpers
  pages/        Routes; portfolio/[slug].js is pre-rendered for every project
  styles/       Template stylesheets
  utils/        Base-path helper for static asset URLs
```

The base path (`/umer`) is set once in `next.config.mjs`. Page links use `next/link`, which applies
it automatically. Raw asset URLs (images, video, PDFs) use `withBasePath()` from `src/utils/basePath.js`.
