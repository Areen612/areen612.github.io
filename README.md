# Areen Albargothy — Portfolio

A responsive portfolio for Areen Albargothy, a software engineer based in Amman, Jordan.

[Visit the portfolio](https://areen612.github.io/)

## Development

The site uses semantic HTML, CSS, and a small amount of JavaScript. There are no runtime dependencies, framework build steps, or environment variables. GitHub Pages can continue serving the repository root.

Open `index.html` directly, or serve this directory with a local HTTP server:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Structure

- `index.html`: introduction, seven project summaries, biography, skills, eleven distinct course certificates, and contact links.
- `style.css`: theme tokens, component styling, responsive layouts, and reduced-motion support.
- `script.js`: mobile navigation and the optional embedded project video.
- `favicon.svg`: portfolio monogram.
- `assets/fonts/`: self-hosted Manrope variable font and its SIL Open Font License.
- `html_finalprojimages/`: original certificate images and retained reference assets.

## Content and behavior

- Project details use native `<details>` elements and remain accessible without JavaScript.
- Navigation remains visible when JavaScript is disabled. With JavaScript, mobile visitors receive a menu with an expanded state, Escape-key support, and automatic closing after selecting a section.
- The route diagram is a conceptual illustration, not a screenshot, real map, or live routing result.
- The original Google Drive demo remains linked directly. Its embedded player loads only when the visitor selects **Play demo here**.
- Certificates link to the original providers or an existing certificate image. The duplicate web-development entry has been consolidated. Course certificates are not represented as professional licenses or UI/UX certifications.
- Typography is self-hosted; no font CDN or icon library is requested. Third-party content is contacted only when visitors follow a link or explicitly play the video.
- Existing section anchors are retained, including `#recommendations` as an alias for the credentials section.

## Review before merging

Check the layout at narrow mobile, tablet, and desktop widths, plus 200% text zoom. Navigate with Tab, open and close the mobile menu with Enter and Escape, expand each project, and check contact and certificate links. Repeat navigation with JavaScript disabled and reduced motion enabled.

The redesign preserves GitHub Pages' existing static deployment structure. Merging into the Pages source branch makes the updated portfolio eligible for the repository's normal deployment; no new hosting service is needed.

## Contact

- [Email](mailto:areenali98@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/areen-albargothy/)
- [GitHub](https://github.com/Areen612)
