# Explore Lab

Explore Lab is a personal AI research index with a restrained editorial interface. The site organizes working notes across language models, systems, and AI safety while preserving the visual character of the original portfolio frame.

## Current experience

- Editorial landing page for the three research areas
- LLM research index featuring “Why do LLMs attend to the first token?”
- Client-side navigation with browser history support
- Native page transitions with reduced-motion support
- Responsive layouts for desktop and mobile

## Stack

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4 and reusable Radix UI primitives

## Local development

Requirements: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal. The primary routes are `/` and `/llm`.

## Production build

```bash
npm run build
```

The generated site is written to `dist/`. Build output and installed dependencies are intentionally excluded from Git.

## Environment and security

The site currently requires no environment variables or runtime secrets. If configuration is added later:

- Keep local values in `.env.local` or another ignored `.env.*` file.
- Commit only a sanitized `.env.example` containing placeholder values.
- Never expose secrets through `VITE_*` variables; Vite embeds those values in client-side JavaScript.
- Store deployment credentials in the hosting provider or GitHub Actions secrets, not in the repository.

The repository ignores dependency folders, build output, local environment files, logs, private keys, and common editor state.

## Design reference

The editorial system and interaction principles are documented in [`design.md`](./design.md). The initial visual direction originated from this [Figma frame](https://www.figma.com/design/G5oU2S8xn3hUclzjvenfr9/Enhance-Portfolio-Landing-Page).

## Attribution

Third-party visual and source acknowledgements are listed in [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md).
