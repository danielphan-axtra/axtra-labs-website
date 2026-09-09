# Axtra Labs — Next.js site

Synced from the root static HTML (source of truth for content/design).

```bash
# From repo root: refresh content + assets into web/
python3 web/scripts/migrate-html.py
rsync -a --delete assets/ web/public/assets/
cp -f assets/css/*.css web/styles/

# Run Next.js
cd web
npm install
npm run build && npm run start
# → http://localhost:3000
```

Shared chrome (header/footer/nav drawer) lives in `components/`. Page bodies are HTML fragments in `content/` rendered via `HtmlPage`. Homepage is React in `app/page.tsx` with styles from `styles/home.css` (synced from `index.html`).

### Performance / SEO
- Effects are code-split (`ClientEffects`; home industries only on `/`).
- Metadata via `lib/seo.ts` (`pageMeta`) + JSON-LD in layout.
- AI-agent index: `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/robots.txt`.

### Deploy
See [DEPLOY.md](./DEPLOY.md) — Vercel Root Directory must be `web`, with `NEXT_PUBLIC_SITE_URL=https://axtralabs.com`.
