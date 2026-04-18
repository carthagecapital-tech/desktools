DeskTools Minor SEO Fixes - 33 files
=====================================

This package fixes all 37 minor SEO issues identified in the audit:
- 20 pages had missing og:description (now injected)
- 10 pages had descriptions too short (now 145-166 chars)
- 7 pages had titles too short or too long (now 50-63 chars)

Upload these 33 files to the ROOT of your GitHub repo, replacing the 
existing versions.

Do NOT upload _README.txt itself.

Files included:
  Category pages: business, developers, freelancers, security
  Tools with description/title rewrites (some got multiple fixes):
    aspect-ratio-calculator, base64-encoder, color-picker,
    css-clamp-calculator, css-minifier, diff-checker, font-pairer,
    gradient-generator, hash-generator, html-entity-encoder,
    image-to-base64, invoice-calculator, json-to-table, jwt-decoder,
    lorem-ipsum-generator, markdown-preview, meeting-cost,
    number-base-converter, password-generator, pomodoro-timer,
    qr-code-generator, regex-cheat-sheet, regex-tester, svg-optimizer,
    timestamp-converter, unit-converter, url-encoder, uuid-generator,
    word-counter

After upload and Vercel deploy, verify with your PowerShell audit script.
All 66 pages should return OK with zero issues.
