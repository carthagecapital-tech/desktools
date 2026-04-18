UPLOAD THESE FILES TO THE ROOT OF YOUR GITHUB REPO.

All 66 .html files go in the same folder as your existing index.html,
sitemap.xml, robots.txt, shared.js, etc.

They replace the existing HTML files at the repo root.
Do not upload _README.txt itself — it's just instructions.

After upload and Vercel deploy, verify with this PowerShell one-liner:
  (Invoke-WebRequest "https://desktools.dev/json-formatter" -UseBasicParsing).Content | Select-String 'og:image'

You should see 3 lines (og:image, og:image:width, og:image:height, twitter:image).
