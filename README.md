<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/rivly-docs-white-no-bg.png" />
    <img alt="Rivly" src="public/rivly-docs-blue-no-bg.png" width="400" />
  </picture>
</p>

The documentation site for [Rivly](https://github.com/rivly/rivly), live at [docs.rivly.dev](https://docs.rivly.dev).

## Development

Requires [Bun](https://bun.sh).

```bash
bun install         # install dependencies
bun run dev         # dev server at localhost:3000
bun run build       # static export to out/
bun run types:check # type-check
```

## Stack

Fumadocs on Next.js 16, React 19, TypeScript 6, and Tailwind CSS 4. Content is written in MDX.

```
app/            Next.js App Router (layout, docs route, search, og, llms)
content/docs/   documentation pages (MDX)
components/     provider and static search dialog
lib/            content source and shared config
public/         logos and favicon
```

## Writing docs

Add an `.mdx` file under `content/docs/` and it appears in the sidebar automatically.

## Deployment

Deployed on Cloudflare Pages as a Next.js static export: build `bun run build`, output directory `out`. Use the "Next.js (Static HTML Export)" preset, not `@cloudflare/next-on-pages` (deprecated).

## License

MIT
