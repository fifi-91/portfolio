# Portfolio source structure

This is a structure-only refactor of the supplied live portfolio.

- HTML pages retain their original names, content, DOM elements and inline style attributes.
- Existing external CSS and JS files are retained without modification.
- Original embedded styles are extracted to `<page>-page-01.css` (and 02/03 only where an existing linked stylesheet or script must retain its cascade position). CSS declarations are kept in the exact original order, with comments indicating their original sections.
- Original embedded executable scripts are extracted to `<page>-script-01.js` etc, preserving their location and execution timing.
- Fonts, images, video, URLs, and paths are unchanged.

**Important:** This pass preserves original CSS override rules intentionally to minimise visual regressions. It does not claim to have deduplicated conflicting declarations or validated rendering on every device. Browser visual comparison is required before deploying.
