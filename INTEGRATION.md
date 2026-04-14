# DeskTools — 7 New Tools Integration Guide

## Files to upload (to repo root)

1. `yaml-json-converter.html`
2. `css-clamp-calculator.html`
3. `image-compressor.html`
4. `case-converter.html`
5. `bcrypt-generator.html`
6. `markdown-table-generator.html`
7. `timezone-converter.html`

---

## 1. `vercel.json` — add these 7 route entries

Find the `rewrites` array (look for existing entries like `/slug-generator`) and add these anywhere inside it:

```json
    {
      "source": "/yaml-json-converter",
      "destination": "/yaml-json-converter.html"
    },
    {
      "source": "/css-clamp-calculator",
      "destination": "/css-clamp-calculator.html"
    },
    {
      "source": "/image-compressor",
      "destination": "/image-compressor.html"
    },
    {
      "source": "/case-converter",
      "destination": "/case-converter.html"
    },
    {
      "source": "/bcrypt-generator",
      "destination": "/bcrypt-generator.html"
    },
    {
      "source": "/markdown-table-generator",
      "destination": "/markdown-table-generator.html"
    },
    {
      "source": "/timezone-converter",
      "destination": "/timezone-converter.html"
    },
```

---

## 2. `shared.js` — add these 7 entries inside `TOOLS_DATA`

Find the `var TOOLS_DATA = [` line and add these lines inside the array (before the closing `];`):

```javascript
    {name:'YAML ↔ JSON Converter',desc:'Convert YAML to JSON and back',icon:'Y/J',tag:'Dev',url:'/yaml-json-converter'},
    {name:'CSS Clamp Calculator',desc:'Fluid typography and spacing',icon:'[ ]',tag:'Design',url:'/css-clamp-calculator'},
    {name:'Image Compressor',desc:'Compress JPG, PNG, WebP in browser',icon:'IMG',tag:'Design',url:'/image-compressor'},
    {name:'Case Converter',desc:'camelCase, snake_case, kebab-case',icon:'Aa',tag:'Text',url:'/case-converter'},
    {name:'Bcrypt Generator',desc:'Hash and verify passwords with bcrypt',icon:'$2a',tag:'Sec',url:'/bcrypt-generator'},
    {name:'Markdown Table Generator',desc:'Visual Markdown table builder',icon:'| |',tag:'Text',url:'/markdown-table-generator'},
    {name:'Time Zone Converter',desc:'Compare times across cities',icon:'UTC',tag:'Prod',url:'/timezone-converter'},
```

---

## 3. `sitemap.xml` — add these 7 entries

Add anywhere in the `<urlset>` section:

```xml
  <url><loc>https://desktools.dev/yaml-json-converter</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://desktools.dev/css-clamp-calculator</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://desktools.dev/image-compressor</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://desktools.dev/case-converter</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://desktools.dev/bcrypt-generator</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://desktools.dev/markdown-table-generator</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://desktools.dev/timezone-converter</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
```

---

## 4. Category pages — add tool cards

### `developers.html` — add these 4 cards

```html
<a class="tool-card" href="/yaml-json-converter" data-name="yaml json converter convert between yaml and json.">
  <span class="tool-icon">Y/J</span>
  <div class="tool-name">YAML ↔ JSON Converter</div>
  <div class="tool-desc">Convert YAML to JSON and JSON to YAML with live validation.</div>
</a>
<a class="tool-card" href="/case-converter" data-name="case converter camelcase snake_case kebab-case.">
  <span class="tool-icon">Aa</span>
  <div class="tool-name">Case Converter</div>
  <div class="tool-desc">camelCase, snake_case, kebab-case, PascalCase, CONSTANT_CASE.</div>
</a>
<a class="tool-card" href="/markdown-table-generator" data-name="markdown table generator visual table builder.">
  <span class="tool-icon">| |</span>
  <div class="tool-name">Markdown Table Generator</div>
  <div class="tool-desc">Visual editor for GitHub-flavored Markdown tables.</div>
</a>
<a class="tool-card" href="/bcrypt-generator" data-name="bcrypt generator hash verify passwords.">
  <span class="tool-icon">$2a</span>
  <div class="tool-name">Bcrypt Generator</div>
  <div class="tool-desc">Hash and verify passwords with bcrypt, client-side.</div>
</a>
```

### `freelancers.html` — add these 3 cards (Design/creative audience)

```html
<a class="tool-card" href="/css-clamp-calculator" data-name="css clamp calculator fluid typography.">
  <span class="tool-icon">[ ]</span>
  <div class="tool-name">CSS Clamp Calculator</div>
  <div class="tool-desc">Generate fluid clamp() values for responsive typography.</div>
</a>
<a class="tool-card" href="/image-compressor" data-name="image compressor jpg png webp.">
  <span class="tool-icon">IMG</span>
  <div class="tool-name">Image Compressor</div>
  <div class="tool-desc">Compress JPG, PNG, WebP in your browser. Nothing uploaded.</div>
</a>
<a class="tool-card" href="/case-converter" data-name="case converter camelcase snake_case.">
  <span class="tool-icon">Aa</span>
  <div class="tool-name">Case Converter</div>
  <div class="tool-desc">Convert between every common naming convention.</div>
</a>
```

### `business.html` — add these 2 cards

```html
<a class="tool-card" href="/timezone-converter" data-name="time zone converter compare cities.">
  <span class="tool-icon">UTC</span>
  <div class="tool-name">Time Zone Converter</div>
  <div class="tool-desc">Compare times across multiple cities for meetings.</div>
</a>
<a class="tool-card" href="/markdown-table-generator" data-name="markdown table generator.">
  <span class="tool-icon">| |</span>
  <div class="tool-name">Markdown Table Generator</div>
  <div class="tool-desc">Build Markdown tables visually for docs and reports.</div>
</a>
```

### `security.html` — add this card

```html
<a class="tool-card" href="/bcrypt-generator" data-name="bcrypt generator password hash.">
  <span class="tool-icon">$2a</span>
  <div class="tool-name">Bcrypt Generator</div>
  <div class="tool-desc">Hash and verify passwords with bcrypt. Adjustable cost.</div>
</a>
```

### `all-tools.html`

Add each of the 7 cards to its appropriate category section on this page (it groups by category and duplicates across sections intentionally). Match the same card HTML format as above.

---

## Verification checklist after deploy

- [ ] Visit each URL directly — all 7 should load (tests `vercel.json`)
- [ ] Open command palette (Search tools) — all 7 appear and are searchable (tests `shared.js`)
- [ ] Check breadcrumbs render on each tool page (tests `shared.js` TOOLS_DATA entry)
- [ ] Tool count on homepage / all-tools should now be 60
- [ ] Submit updated sitemap in Google Search Console
