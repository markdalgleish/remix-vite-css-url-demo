# Remix + Vite + `.css?url` demo

This is a demo of how to use [Remix](https://remix.run) with [Vite's](https://vitejs.dev) new [`.css?url` feature](https://github.com/vitejs/vite/pull/15259).

> [!NOTE]
>
> This demo is currently using a nightly release of Remix. This is not required if you enable `build.cssMinify` in your Vite config.

## Getting started

This project uses [pnpm.](https://pnpm.io)

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Build and run the production server
pnpm build
pnpm start
```

## Vite compatibility

You must be using Vite `v5.1.0` or later, otherwise your CSS won't build correctly for production if it uses any of Vite's CSS processing features or plugins.

## Remix compatibility

Remix's upcoming v2.7.0 release includes built-in support for Vite's `.css?url` feature. This repo is using a nightly release of Remix (`0.0.0-nightly-3da950a-20240215`) that already includes the [relevant code changes](https://github.com/remix-run/remix/pull/8684).

If you're running Remix v2.6.0 or earlier you'll need to enable `build.cssMinify` in your Vite config:

```ts
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  build: { cssMinify: true }, // 👈 ENABLE THIS SETTING!
});
```

This is because CSS minification is disabled by default in Vite server builds, resulting in different CSS file contents between client and server builds. This means that the content hashes in CSS file names will be out of sync between your server HTML and your client assets.

For example, when `build.cssMinify` isn't configured in this project, `app/main.css` will be compiled into:

- `build/client/assets/main-AgCknDX6.css`
- `build/server/assets/main-phmi-DoL.css` (Note the different content hash)

When `build.cssMinify` is enabled, `app/main.css` will be compiled into:

- `build/client/assets/main-AgCknDX6.css`
- `build/server/assets/main-AgCknDX6.css` (Note the hashes now match)

## Credit

Thanks [@sapphi-red](https://github.com/sapphi-red) for getting this feature into Vite!

## License

MIT.
