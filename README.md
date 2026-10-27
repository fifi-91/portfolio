# sophiaakrofi.com redesign

Two pages, sharing one stylesheet and one script.

- `index.html` – homepage
- `work-with-me.html` – Work with me page (replaces the current one)
- `site.css` – all styles. The spacing scale (`--sec`, `--block`, `--head`) and the colour tokens are at the top, with dark-mode values beside them.
- `site.js` – theme toggle, menu, work filters, Selected work drawers, the testimonials row, video playback and the form sending
- `home/` – new homepage media (videos, posters, photos), plus `home/drawer/` for the Selected work drawers
- `assets/` – images and video the new pages reuse from the current site

## Deploying
Upload everything here to the site root. These files stay on the server as they are now:
`property-tech-public.html`, `copilot-public.html`, `visual-design.html`, `partner-preview.html`, and their assets.

The new pages no longer use the old `styles.css` or `scripts.js`. The case study pages still do, so keep those on the server.

## Editing the Selected work drawers
Each drawer's content is a `<template id="d-…">` block in `index.html`, directly after the Selected work grid.
Change the text there, and add or remove `<figure>` items in `.dr-gallery` (images or `<video>`). Nothing else needs to change.

## Forms
Both forms post to Web3Forms with the existing access key and show a confirmation on the page.
Send one test enquiry after going live.
