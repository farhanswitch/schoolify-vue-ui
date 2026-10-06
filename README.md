# Schoolify

Landing page for Schoolify — a school LMS where teachers upload subject
material and students ask questions in a chat backed by per-subject RAG.
Every answer carries a citation that links straight to the source sentence
in the original document.

Live concept: `schoolify.farhanswitch.id` · Contact: `schoolify@farhanswitch.id`

See [BRIEF.md](./BRIEF.md) for the product concept, section structure, and
design notes.

## Stack

- Vue 3 (`<script setup>`) + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- GSAP + ScrollTrigger for the scroll-pinned feature showcase and reveals
- Three.js (`GLTFLoader`/`GLTFExporter`) for the 3D mascot

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Mascot asset

The 3D owl mascot is a real `.glb` asset at `public/models/mascot-owl.glb`,
generated once from procedural Three.js geometry via `GLTFExporter`. To
regenerate it after changing `scripts/build-mascot.mjs`:

```bash
npm run build:mascot
```
