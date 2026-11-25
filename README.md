# Aceternity UI Svelte

Svelte versions of [Aceternity UI](https://ui.aceternity.com) components, live at [aceternity.sveltekit.io](https://aceternity.sveltekit.io).

## Developing

```bash
npm install
npm run dev
```

## Hosting

Every page is prerendered with `@sveltejs/adapter-static`, and the `build/` folder is served by a static-assets-only Cloudflare Worker (`aceternity-svelte`, see `wrangler.jsonc`) in the Jack Landon Cloudflare account.

- `npm run deploy` builds and deploys the Worker.
- Pushes to `main` deploy automatically through GitHub Actions (`.github/workflows/deploy.yml`, using the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets).
