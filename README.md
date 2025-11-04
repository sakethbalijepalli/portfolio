# Saketh Balijepalli — SvelteKit Portfolio

Fully interactive portfolio built with **SvelteKit + TypeScript + Tailwind**.

## Quick Start
```bash
npm install
npm run dev -- --open
```

## Deploy
- **Vercel**: import the repo, Framework = SvelteKit. No extra config.
- **Netlify**: Build command: `npm run build`, Publish: `.svelte-kit/output/client` (or use SvelteKit adapter-netlify).
- **GitHub Pages**: switch adapter to `adapter-static` and run `npm run build` then publish `build/`.

## Customize
- Content lives in `src/lib/data/*.ts`.
- Sections/components in `src/lib/components` and `src/routes/+page.svelte`.
- Theme toggle is in `ThemeToggle.svelte`; CSS tokens in `src/app.css`.
