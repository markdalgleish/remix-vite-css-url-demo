# Remix + Vite + `.css?url` demo

This is a demo of how to use [Remix](https://remix.run) with [Vite's](https://vitejs.dev) new [`.css?url` feature](https://github.com/vitejs/vite/pull/15259) which is [currently in beta.](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#510-beta0-2024-01-15)

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

## Project requirements

To use Vite's `.css?url` feature, there are some additional requirements.

Firstly, you must be using Vite `v5.1.0-beta.0` or later.

Secondly, you'll also need to enable `build.cssMinify` in your Vite config.

> [!NOTE]
>
> [This will be handled automatically in a future version of Remix.](https://github.com/remix-run/remix/pull/8684)
>
> In the meantime you'll need to enable this setting manually.

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
