# Axtra Labs Website

The site that deploys (Next.js on Vercel, root directory `web`) lives in [`web/`](web/README.md). These root `*.html` files are a legacy static snapshot. `web/scripts/migrate-html.py` is disabled so a sync cannot copy this snapshot, including retired case studies, over `web/content`.

Static HTML site. No build step for this snapshot.

## Local setup

```bash
cd ~/axtra-labs-website
./serve.sh
```

Open **http://localhost:8080**

Optional custom port:

```bash
./serve.sh 3000
```

## Pages

**Services:** `ai-services.html`, `data-bi.html`, `embedded-software.html`, `ai-robotics.html`, `devops.html`, `ai-software-development.html`, `services.html`

**Industries:** `manufacturing.html`, `retail.html`, `travel.html`, `home-services.html`
