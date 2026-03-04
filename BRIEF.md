# Mammoth Machinery — Website Rebuild Brief

## Goal
Rebuild mammothmachinery.com as a modern, mobile-first, single-page website. Keep all existing content, improve copy, make the brand come alive. Optimize for Cloudflare Pages hosting.

## Brand Research

**Company:** Mammoth Machinery
**Industry:** Heavy Equipment Rentals
**Founded:** ~2010 (12+ years)
**HQ:** North Salt Lake, Utah
**Southern Utah Location:** Hurricane, UT (Fort Pierce Industrial Park) — GM: Shawn Bradley
**Facebook:** https://www.facebook.com/p/Mammoth-Machinery-100063455349726/
**Equipment Focus:** Exclusively CAT (Caterpillar) equipment
**PitchBook:** Listed as provider of rental services for heavy construction machinery

## Key Stats (from current site)
- 400+ pieces of equipment
- 15K+ rentals completed
- 12 years in business
- Multiple states served across the West

## Current Content to Keep/Improve

### Hero Section
- "Heavy equipment rentals and service"
- "Get the right equipment, on time, & ready to work."
- Stats: 400+, 15K+, 12 YRS

### Why Mammoth Section
- Always Speak to a Real Person
- Affordable and Competitive Pricing
- Friendly and Knowledgeable Team
- Transport Included

### Locations Section
- Wasatch Front (primary)
- Southern Utah — Hurricane location (St. George, Cedar City, Washington County, Iron County)
- Neighboring western states (Northern Nevada expansion)

### Equipment Categories (from 435locals listing)
- Mini-Excavators + Attachments
- Full-Size Excavators
- Skid Steer Loaders + Attachments (angle blades, augers, brooms, brush hogs, cutters, mulchers, buckets, cold planers, dozer blades, forks, grapple buckets, hammers, rakes, skeleton buckets, snow removal, stump grinders, tillers, trenchers)
- Wheel Loaders + Attachments
- Backhoe Loaders + Attachments
- Light Compaction Equipment (walk-behind rollers, vibratory rollers)
- Track Dozers
- Scrapers
- Cranes
- Forklifts
- Jackhammers/Hammers

### CTA
- "Ready to book or have questions?"
- Contact form or phone number

## Design Requirements

1. **Modern single-page design** — clean, bold, industrial aesthetic
2. **Mobile-first / fully responsive** — must look great on phones
3. **Brand personality:** Rugged, reliable, big (the name is MAMMOTH). Use bold typography, strong contrast, earthy/industrial color palette (think dark grays, construction yellow/amber, white)
4. **Sections:** Hero with CTA → Stats counter → Equipment categories → Why Mammoth → Locations/Map → Contact/CTA
5. **Smooth scroll navigation** with sticky header
6. **CSS animations** — subtle on-scroll reveals, counter animations for stats
7. **No frameworks required** — vanilla HTML/CSS/JS is fine, or Tailwind CDN
8. **High-quality stock imagery** — use Unsplash/Pexels URLs for construction/heavy equipment photos (or SVG icons for equipment categories)
9. **Font:** Use Google Fonts — something bold and industrial (e.g., Inter, Montserrat, or similar)
10. **Include favicon** and proper meta tags (SEO)

## Cloudflare Optimization

- Static HTML/CSS/JS only (no server-side)
- Proper cache headers via `_headers` file
- `_redirects` file for clean URLs if needed
- Minified where practical
- Lazy-load images
- Proper meta tags for SEO and social sharing (og:image, etc.)
- Include a simple `404.html`

## Deliverables

1. `index.html` — Main page
2. `style.css` — Styles (or inline/Tailwind)
3. `script.js` — Animations and interactions
4. `404.html` — Custom 404 page
5. `_headers` — Cloudflare headers
6. Any assets in `assets/` folder

## After Building

1. Commit all files
2. Push to GitHub: `git push -u origin main`
3. Enable GitHub Pages (or just push — we'll connect Cloudflare separately)
4. Run: `openclaw system event --text "Done: Mammoth Machinery website rebuilt and pushed to GitHub — ready to review at https://raclarke1.github.io/mammothmachinery/" --mode now`
