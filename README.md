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

- `index.html`: introduction, eleven project summaries, biography, skills, one AWS certification, eleven course certificates, and contact options.
- `style.css`: theme tokens, component styling, responsive layouts, and reduced-motion support.
- `script.js`: mobile navigation, email choices, and the optional embedded project video.
- `favicon.svg`: portfolio monogram.
- `assets/fonts/`: self-hosted Manrope variable font and its SIL Open Font License.
- `html_finalprojimages/`: original certificate images and retained reference assets.

## Content and behavior

- Project details use native `<details>` elements and remain accessible without JavaScript.
- Navigation remains visible when JavaScript is disabled. With JavaScript, mobile visitors receive a menu with an expanded state, Escape-key support, and automatic closing after selecting a section.
- Projects run from broader system implementations to smaller scoped work. The order is an editorial estimate of implementation complexity based on application scope, integrations, business rules, and data/ML processing; it is not a measured difficulty score.
- The delivery diagram is a conceptual illustration, not a screenshot or live system. The delivery system, donor-matching collaboration, and GCI invoicing prototype lead the section. Transcript analysis, Speechlog Mini, and transaction fraud detection are included alongside earlier projects.
- Public source links are provided where available. Private repositories and restricted notebooks are described without publishing their contents or adding inaccessible links.
- Both contact triggers open a native dialog with Gmail compose, the default email app, and a copy-address button. Gmail opens in a new tab with the recipient filled in; the visitor writes and sends the message. The default-app option requires a configured mail handler. Copy failures select the address and explain how to copy it manually.
- Escape and the close button dismiss the email dialog and restore focus. Without JavaScript or dialog support, the contact links open Gmail directly; a no-JavaScript default-app link is also available.
- The original Google Drive demo remains linked directly. Its embedded player loads only when the visitor selects **Play demo here**.
- AWS Certified AI Practitioner is the first of three featured credentials, followed by the IBM Python and Django courses. Microsoft Learn AI Skills Challenge appears in the smaller list. The AWS card links to the official verification portal and includes the validation number and validity dates.
- The AWS image is rendered directly from the supplied certificate PDF at 1980 × 1530 pixels and optimized as a lossless WebP (about 75 KiB). Certificate artwork retains its issuer's original colors.
- Certificates link to the original providers or an existing certificate image. Course certificates are not represented as professional licenses or UI/UX certifications.
- The theme uses deep navy backgrounds, light-gray body text, and a sky-blue accent (`#7dd3fc`). Focus, hover, selection, diagrams, and the favicon follow the same palette.
- Typography is self-hosted; no font CDN or icon library is requested. Third-party content is contacted only when visitors follow a link or explicitly play the video.
- Existing section anchors are retained, including `#recommendations` as an alias for the credentials section.

## Review before merging

Check the layout at narrow mobile, tablet, and desktop widths, plus 200% text zoom. Navigate with Tab, open and close the mobile menu with Enter and Escape, expand each project, and check contact and certificate links. Repeat navigation with JavaScript disabled and reduced motion enabled.

The redesign preserves GitHub Pages' existing static deployment structure. Merging into the Pages source branch makes the updated portfolio eligible for the repository's normal deployment; no new hosting service is needed.

## Contact

- [Email](mailto:areenali98@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/areen-albargothy/)
- [GitHub](https://github.com/Areen612)
