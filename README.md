# Desktools Pool Service fix package

You were right — desktools still showed "coming soon" in 2 places. Fixed both.

## What's fixed

### 1. /pro-tools/ (hub page) — Pool Service was stuck in the coming-soon group
**Before:** Sat at the end of the coming-soon section (after Pest Control), showed "1 app in development", "Notify me" button.

**After:** Moved into the available-now group (right after Legal). Now shows:
- Color: #0896B8 (was #0891B2)
- Icon: P (was PL)
- Meta: "Available now"
- Desc: "Pool service estimating, proposals, invoices, and account management for pool service businesses."
- Foot: "1 app available" + "Browse" CTA

### 2. /pro-tools/pool-service/ (niche page) — was showing the old coming-soon card
**Before:** Title said "Pro Tools for Pool Service — 0 app". Content was a "Coming soon — notify me when ready" card.

**After:** Full live page with:
- Title: "Pool Service Apps for Pros | PoolPro Manager | DeskTools"
- H1: "Pool Service apps"
- Lead: "Apps for pool service businesses. Estimating, proposals, invoices, and customer account management — single-file, offline-capable, no subscription."
- PoolPro Manager pro-card: name, tagline, $39 one-time, "Try demo →" CTA linking to creatif.tools/poolpro-manager/
- Pool Service pill highlighted as current in related niches

## What's in the package (3 files)

**desktools-dev repo:**
- `index.html` (homepage niche card — was already correct, included for completeness)
- `pro-tools/index.html` (hub — moved Pool Service out of coming-soon group)
- `pro-tools/pool-service/index.html` (niche page — replaced coming-soon card with live PoolPro Manager card)

## Apply

1. Extract `desktools/` over your desktools-dev repo root
2. 3 files get replaced
3. Commit + push to trigger Vercel deploy

## ⚠️ Hard refresh

After deploy, **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Win) to bust Vercel's CDN cache. If you still see "coming soon", try an incognito window.
