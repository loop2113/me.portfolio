# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio site for Ireneo Atenta: a single-page React 18 app with **no build step, no package.json, no tests, and no linter**. React, ReactDOM, Babel Standalone, and Font Awesome are loaded from CDNs in `index.html`, and `script.js` is transpiled in the browser at runtime (`<script type="text/babel">`).

## Running locally

Serve the folder over HTTP (opening `index.html` via `file://` won't work, since Babel fetches `script.js` with XHR):

```bash
python -m http.server 8000
# then open http://localhost:8000/
```

To check `script.js` for JSX/syntax errors without a browser, compile it with esbuild (which is how `tmp-check.js` was generated):

```bash
npx esbuild script.js --bundle --outfile=tmp-check.js
```

`tmp-check.js` is a generated scratch file. Nothing loads it, so never edit it by hand.

## Architecture

- **`script.js`**: the whole app in one file. Components are top-level `const` arrow functions (`Modal`, `Header`, `Hero`, `About`, `Projects`, `Certificates`, `Contact`, `Footer`, `App`), and the file ends with `ReactDOM.createRoot(...).render(<App />)`. Hooks come from the global `React` object (`const { useState, useEffect } = React;`). There are no `import`/`export` statements, and adding them would break in-browser Babel.
- **Content lives inline as data arrays inside components.** To change portfolio content, edit these arrays:
  - `About` → `skills` (`{ name, level }`), plus hard-coded work-experience JSX
  - `Projects` → `projects` (`{ id, title, description, fullDescription, image, technologies[], liveUrl, githubUrl, features[] }`)
  - `Certificates` → `certificates` (`{ id, title, issuer, date, image, credentialUrl, description, skills[], validUntil }`)

  `Projects` and `Certificates` render cards, and clicking a card opens the shared `Modal` with its details.
- **Images** are referenced by relative path: `images/projects/*` (this folder also holds `profile.jpg`, used in `Hero`) and `images/certificates/*`.
- **Navigation**: the header links to section ids (`#home`, `#about`, `#projects`, `#certificates`, `#contact`). `App`'s mount effect adds smooth-scroll handlers to every `a[href^="#"]`.
- **Dark mode**: `App` toggles a `dark-mode` class on `<body>` and saves the setting in `localStorage`. The `.dark-mode ...` overrides are at the end of `style.css`. The header toggle button is currently commented out, so the feature is wired up but hidden.
- **Contact form**: UI only. `handleSubmit` shows an `alert` and resets the form, with no backend.
- **`style.css`**: one global stylesheet with plain class names, no CSS modules or preprocessor. Responsive breakpoints are at `max-width: 768px` and `480px`.
