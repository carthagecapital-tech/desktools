DeskTools Open Graph Image Package
===================================

This package adds social media preview images (og:image) to all 66 pages.
When someone shares a desktools.dev link on Twitter/X, LinkedIn, Facebook,
Slack, or Discord, the branded image will now appear in the preview card.

Contents:
---------
  og-image.png           1200x630 PNG to upload to repo root
  html/*.html            66 updated HTML files (drop-in replacements)

Upload instructions:
--------------------
1. Upload og-image.png to the ROOT of your GitHub repo
   (same folder as index.html, sitemap.xml, robots.txt, shared.js).

2. Upload all files from the html/ folder, replacing the existing files
   at the repo root.
   - index.html replaces existing index.html
   - all other .html files replace their existing versions

3. After Vercel deploys, verify the image is accessible:
   https://desktools.dev/og-image.png should load the image.

4. Test the preview by pasting a link (e.g. https://desktools.dev/json-formatter)
   into LinkedIn's Post Inspector, Twitter's Card Validator, or Discord.

What changed in the HTML files:
-------------------------------
  Added 5 new meta tags (inside <head>) to each page:
    - og:image
    - og:image:width (1200)
    - og:image:height (630)
    - twitter:image
    - twitter:card = summary_large_image

  FAQ content and all other existing content is untouched.
