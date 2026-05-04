# Agent Instructions

## Commands

- `npm run dev` - Start dev server with Turbopack (http://localhost:3000)
- `npm run build` - Production build with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

Note: No separate typecheck script. ESLint runs TypeScript checks via eslint-config-next.

## Structure

- `app/` - Next.js App Router pages (lecciones, documentacion, playground, api)
- `components/` - React components organized by feature (docs, lessons, playground, ui, etc.)
- `lib/` - Utilities; `lib/data.ts` contains content; `lib/content/` handles MDX parsing
- `scripts/` - Build scripts (migrate-docs.js)

## Content System

Uses `next-mdx-remote` + `gray-matter` for MDX content. Content is statically generated at build time.

## Dependencies

External npm package `hispano-lang` is used. Check package.json for version.