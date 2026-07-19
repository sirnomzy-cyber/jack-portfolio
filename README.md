# Jack — 3D Creator Portfolio

A dark-themed, single-page 3D creator portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Sections
1. **Hero** — full-screen intro with magnetic portrait image and nav
2. **Marquee** — two rows of scroll-driven horizontal project GIFs
3. **About** — scroll-reveal character animation + decorative 3D props
4. **Services** — 5 numbered service offerings
5. **Projects** — 3 sticky-stacking scroll cards

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (`motion.create()` FadeIn wrapper, `useScroll`/`useTransform` for scroll-linked effects)
- lucide-react (icons, available for future use)

## Notes
- All imagery is loaded from the external URLs specified in the design brief (Figma-hosted assets and motionsites.ai GIFs). Swap these out in `src/sections/*.tsx` for your own assets.
- `Magnet` uses a window-level `mousemove` listener so the hover-attraction effect activates within the specified padding radius even before the cursor enters the image bounds.
