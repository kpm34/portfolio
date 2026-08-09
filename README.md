# Portfolio

Personal portfolio site for Kashyap Maheshwari.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind, Framer Motion, React Three Fiber.

## Featured Projects

1. **CFB Fantasy** — [ballknowers.app](https://ballknowers.app)
2. **Third Eye Capital** — [thirdeyecapital.ai](https://thirdeyecapital.ai)
3. **Bisect** — [bisect.app](https://bisect.app)
4. **Nightkey** — [nightkey.io](https://nightkey.io)

See `PROJECT_REVIEW.md` for the writeup on each, and `PORTFOLIO_PLAN.md` for site structure.

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Projects

All project data lives in `lib/projects.ts`. The display order on the home page is set in `app/page.tsx` via `featuredProjectIds`.

## Deploy

Pushes to `main` deploy to Vercel.
