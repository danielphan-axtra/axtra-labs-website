# Deployment (axtralabs.com)

Production app lives in `web/` (Next.js 15 App Router).

## Vercel (recommended)

1. Import GitHub repo `danielphan-axtra/axtra-labs-website` in [Vercel](https://vercel.com/new).
2. Set **Root Directory** to `web` (Important — do not deploy repo root).
3. Framework Preset: **Next.js** (auto).
4. Environment variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://axtralabs.com`
5. Deploy.
6. Project → **Settings → Domains**:
   - Add `axtralabs.com` and `www.axtralabs.com`
   - Point DNS (registrar / Cloudflare) as Vercel instructs:
     - Apex: A record `76.76.21.21` (or Vercel nameservers)
     - `www`: CNAME → `cname.vercel-dns.com`
7. After DNS propagates, set primary domain to `axtralabs.com` and redirect `www` → apex (or the reverse).

### CLI alternative

```bash
cd web
npx vercel login
npx vercel link   # root directory: web
npx vercel env add NEXT_PUBLIC_SITE_URL production
# value: https://axtralabs.com
npx vercel --prod
npx vercel domains add axtralabs.com
```

## Local production check

```bash
cd web
npm ci
npm run build && npm run start -- -p 3001
```

## Notes

- `web/` is the source of truth. Do not run `web/scripts/migrate-html.py`; it is disabled because a sync from the legacy root HTML would overwrite case studies.
- `web/public/assets` is a real copy of `assets/` (required for Vercel; do not use a symlink).
- After asset edits under repo-root `assets/`, refresh the Next public copy before deploy:

```bash
rsync -a --delete assets/ web/public/assets/
cp -f assets/css/*.css web/styles/
cd web && npm run build
```
