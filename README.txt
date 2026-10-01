JL Air Conditioning Services - website

Files
  index.html      page markup (preloader, sections, photo gallery, lightbox)
  css/style.css   all styles (colors are tokens at the top; dark mode included)
  js/main.js      preloader, pricelist, galleries, lightbox, sizing calculator, booking form, GSAP animations
  images/         placeholder photos for the Photos section

Open index.html in a browser, or upload the whole folder to any web host.
GSAP and the fonts load from CDNs, so an internet connection is needed.

Before going live, replace:
  - phone 0917 000 0000 / tel:+639170000000 and email hello@jlaircon.ph
    (index.html: contact section and footer; js/main.js: booking message)
  - Facebook link https://www.facebook.com/ with your page URL (index.html, contact section and footer)
  - service starting prices in the Services section (index.html)
  - unit pricelist: edit the `units` list and INSTALL fees in js/main.js
  - Photos section: replace the files in images/ keeping the same names,
    or add more <button class="ph-item"> lines in index.html (data-g="job" or "client")
  - illustrated Gallery: edit the `items` list in js/main.js
  - the warranty / licensed-technician claims if they don't apply
