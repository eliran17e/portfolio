# eliran-portfolio

Personal developer portfolio — Eliran Elisha. Static single-page site: React + TypeScript + Vite + Tailwind CSS v4.

## Develop

```
npm install
npm run dev
```

## Before deploying

Drop the two resume PDFs into `public/` with exactly these names:

- `public/resume-general.pdf`
- `public/resume-python.pdf`

The download buttons in the hero and footer point at those paths.

## Deploy (Vercel)

Push to GitHub, import the repo at vercel.com — Vercel auto-detects Vite, no config needed. Or from the CLI: `npx vercel`.

## Screenshots

Project screenshots live in `public/shots/` (fetched once from thum.io and committed — no runtime dependency). To swap one, just replace the PNG at the same path. Console projects use terminal mockups defined in `src/data/projects.ts` instead of images.

## Editing content

All project/content data lives in `src/data/projects.ts` (typed by `src/types.ts`). Contact links are in `src/components/ContactLinks.tsx`, resume buttons in `src/components/ResumeButtons.tsx`. The `?track=` URL param (e.g. `/?track=cpp`) pre-filters the project list — useful for sending recruiters a track-specific link.
