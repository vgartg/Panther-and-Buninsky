# Pantera & Buninskiye Luga

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A pet project — a single-page promo site for the "Pantera" dance atelier (Moscow, Buninskiye Luga). Pure static HTML / CSS / vanilla JS, no build step, no framework. The repository is structured as a clean separation of concerns: every section has its own HTML partial, every visual area has its own CSS file, every interactive piece has its own JS file

---

<img width="1903" height="923" alt="image" src="https://github.com/user-attachments/assets/210d53fd-ad1e-4f36-9cbe-b664ddf62716" />

---

## Features

- Editorial dark theatre layout with obsidian + antique-gold palette and three Google-served typefaces (Cormorant Garamond, Forum, Manrope)
- Custom soft-follow cursor with hover-state on interactive elements (desktop only)
- Scroll-tied reveal animations driven by `IntersectionObserver`
- Sticky navigation that compacts on scroll
- Eight sections covering studio story, directions, masters, schedule, pricing, and a trial form
- Diagonal demo watermark for client review, with a tamper-resistant JS guard that re-injects styles if removed from DevTools

## Requirements

- Any modern browser (Chrome / Firefox / Safari / Edge — the layout uses `clamp()`, `backdrop-filter`, `aspect-ratio`, and CSS custom properties)
- Any static file server for local development — opening `index.html` directly via `file://` will not work because `fetch()` for the partials is blocked by browser security on the file protocol

## Running locally

Serve the directory over HTTP and open the printed URL:

```bash
# Python 3 (no install needed on Windows / macOS / Linux)
python -m http.server 8080
```

```powershell
# Or via npx if Node is installed
npx --yes serve -l 8080 .
```

Then open <http://localhost:8080>

## Deploying

This is a plain static site. Any static host works — GitHub Pages, Netlify, Cloudflare Pages, S3, nginx. Upload the entire repository root as-is; no build step is required

## Demo watermark

The site ships with a diagonal "vgartg.ru" watermark intended for client previews. It lives in two files:

| File              | Role                                                                            |
| ----------------- | ------------------------------------------------------------------------------- |
| `css/watermark.css` | Pseudo-element ribbons drawn on `html` and `body` (cannot be deleted in DevTools) |
| `js/demo-guard.js`  | MutationObserver + interval that re-injects the CSS if anyone strips it         |

To remove the watermark before final delivery:

1. Delete `css/watermark.css` and the matching `<link>` tag in `index.html`
2. Delete `js/demo-guard.js` and the matching `<script>` tag in `index.html`
