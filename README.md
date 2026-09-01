# Meng Zhang (Zephyr) — Personal Website

Source code and media for [mengzephyr.com](https://mengzephyr.com/).

## Local development

Requirements: Node.js 22.13 or newer and Corepack.

```powershell
corepack enable
corepack prepare pnpm@11.19.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000/`.

## Static build

```powershell
pnpm test
```

The deployable static website is generated in `dist/client/`. Deployment to
GitHub Pages is automated by `.github/workflows/deploy-pages.yml` after a push
to `master`.

See [DEPLOYMENT.md](DEPLOYMENT.md) for the initial launch, routine updates,
domain settings, and rollback instructions.
