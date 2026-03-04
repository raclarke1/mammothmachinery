# TASK: Fix Mammoth Machinery Website

## What To Fix

### 1. Replace ALL Unsplash/stock images with real Mammoth images
All images are in `assets/` folder. Replace EVERY external image URL.

**Hero background:** Replace the Unsplash URL in `style.css` (#hero section) with `assets/hero-bg.png`
- This is a wide panoramic shot of a Mammoth truck hauling equipment with mountains
- Keep the dark overlay

**Equipment section:** Replace all 8 Unsplash images with real equipment photos from `assets/`:
Use these for the equipment cards (update both `src` and `alt`):
- Excavators → `assets/eq-excavators.png`
- Track Dozers → `assets/eq-dozers.png`
- Skid Steer Loaders → `assets/eq-skid-steers.png`
- Wheel Loaders → `assets/eq-loaders.png`
- Backhoe Loaders → `assets/eq-backhoes.png`
- Scrapers & Graders → `assets/eq-scrapers.png`
- Compaction Equipment → `assets/eq-compactors.png` (or `eq-rollers.png`)
- Cranes & Forklifts → `assets/eq-telehandlers.png`

**ALSO** — Expand the equipment grid to include ALL 22 categories. The original site has these categories:
- Excavators (`eq-excavators.png`)
- Dozers (`eq-dozers.png`)
- Skid Steers (`eq-skid-steers.png`)
- Loaders (`eq-loaders.png`)
- Backhoes (`eq-backhoes.png`)
- Scrapers (`eq-scrapers.png`)
- Motor Graders (`eq-motor-graders.png`)
- Rollers (`eq-rollers.png`)
- Compactors (`eq-compactors.png`)
- Water Trucks (`eq-water-trucks.png`)
- Brooms (`eq-brooms.png`)
- Telehandlers (`eq-telehandlers.png`)
- Lifts (`eq-lifts.png`)
- Light Plants (`eq-light-plants.png`)
- UTVs (`eq-utvs.png`)
- GPS Units (`eq-gps-units.png`)
- Air Compressors (`eq-air-compressors.png`)
- Hammers (`eq-hammers.png`)
- Buckets (`eq-buckets.png`)
- Forks (`eq-forks.png`)
- Rippers (`eq-rippers.png`)
- Trenchers (`eq-trenchers.png`)

Make the equipment grid show all 22 categories with their real photos. Use a more compact card layout (smaller images, grid 4-wide on desktop, 2-wide on mobile) since there are more items. Keep descriptions SHORT (1 line max) for each.

**Logo:** Replace the 🦣 emoji with the actual Mammoth logo. 
- In the nav: use `assets/mammoth-logo-white.png` (white version for dark nav bar)
- In the footer: also use `assets/mammoth-logo-white.png`
- Size the logo to about 36-40px height in the nav

**OG image meta tag:** Update to `assets/hero-bg.png` (relative for GitHub Pages)

### 2. Remove the "Scroll" indicator
Delete the entire `.hero-scroll` div from `index.html` and the `.hero-scroll` / `.scroll-line` / `@keyframes scrollPulse` CSS from `style.css`.

### 3. Fix ALL broken links
- ALL internal anchor links (#equipment, #why-mammoth, #locations, #contact) should work properly
- The nav links should scroll smoothly to each section
- All buttons ("Request a Quote", "Ask About Availability", etc.) should link to #contact
- The phone number link `tel:+18015551234` is a placeholder — keep it but that's fine for now
- The email link should work: `mailto:info@mammothmachinery.com`
- The Facebook link should work and open in new tab
- Footer links should all work (they're anchor links)
- **Test every single link works by reviewing the HTML**

### 4. General polish
- Make sure the equipment card images have consistent aspect ratios (the original icons are 444x444 squares, so use `object-fit: contain` with a light background so the equipment shows nicely)
- Equipment images have transparent/white backgrounds — give the image containers a subtle light gray or white background so the equipment pops against the dark card
- The contact form select dropdown should include ALL 22 equipment types now
- Make sure mobile nav toggle works (hamburger menu)
- All smooth scroll should account for the sticky nav height

## After All Changes

1. `cd /Users/jarvis/mammothmachinery`
2. `git add -A && git commit -m "v2: Real Mammoth images, fix all links, expand equipment grid, remove scroll indicator"`
3. `git push origin main`
4. `openclaw system event --text "Done: Mammoth Machinery v2 pushed — real images, all links fixed, 22 equipment categories, scroll removed" --mode now`
