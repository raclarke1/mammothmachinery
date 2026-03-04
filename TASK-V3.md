# TASK V3: Major Update — Mammoth Machinery Website

Working directory: `/Users/jarvis/mammothmachinery/`

Read `index.html`, `style.css`, and `script.js` first. Then make ALL changes below.

---

## 1. REBRAND TEXT STYLING — Match Original Site Fonts

The original mammothmachinery.com uses these fonts:
- **Antonio** (Google Fonts / Fontshare) — for headings and the "MAMMOTH MACHINERY" brand text
- **Public Sans** (Google Fonts) — for body text
- **Inter** — as fallback

**Add Google Fonts import** to the `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Update CSS typography:**
- Headings (h1, h2, h3): `font-family: 'Antonio', sans-serif;` — uppercase, bold
- Body text: `font-family: 'Public Sans', sans-serif;`
- The brand name "MAMMOTH MACHINERY" in nav/footer: `font-family: 'Antonio', sans-serif; text-transform: uppercase; letter-spacing: 2px;`

**Update color scheme** — the original site uses a warm earthy palette:
- Primary dark: `#292929` (near black)
- Primary accent: `#A53D2A` (terracotta/brick red — this is the Mammoth brand red)
- Warm cream: `#E1D8C7` (light warm background)
- White: `#FFFFFF`
- Border/subtle: `#949494`

Update `--primary` and other CSS custom properties to use `#A53D2A` as the accent color instead of whatever is there now. Keep the dark theme for sections but use the warm earthy tones. The hero overlay, buttons, and accent elements should use the terracotta red `#A53D2A`.

---

## 2. REMOVE ALL EMOJIS — Professional Business Site

Strip every emoji from the entire site. No exceptions. Replace with text or nothing.

---

## 3. ADD CLICK-TO-DIAL CALL BUTTON IN NAV

Add a prominent call button in the top nav bar next to the menu:
```html
<a href="tel:801-295-3302" class="nav-phone">801-295-3302</a>
```
Style it as a visible button/link that's always accessible. On mobile, make it a phone icon that's tap-to-call. The number is **801-295-3302**.

Also add the emergency after-hours number somewhere on the site: **801-712-8394**

---

## 4. ADD NEW PAGES — Rental Instructions, Equipment List, Service & Repairs

Create these as separate HTML files that share the same nav, footer, and styling:

### rental-guide.html — Rental Instructions

Content from the original site:

**Starting With Mammoth**

STEP 1: Credit Application
Download the Credit Application. This sets you up as a Mammoth Customer, we'll inform you of your approved payment terms. Email to accounting@mammothmachinery.com
Download link: https://drive.google.com/file/d/1Y8k4Dn1-D_KKYsGgNKwp_jxb7lEGVe5G/view?usp=sharing

STEP 2: Master Rental Contract
Download the Mammoth Master Rental Agreement which includes the rental terms and conditions. This will expedite all future rentals.
Download link: https://drive.google.com/file/d/1gBczVICcRLT0PpiPQ9bO4hAR7Oyhbp4m/view?usp=drive_link

STEP 3: Certificate of Insurance
We require a certificate of insurance. Two options:
Download template: https://drive.google.com/file/d/1cDWnoflRzpT9auk4hy_dgUVX0mPfPfie/view?usp=sharing

Option 1: Damage waiver — 19% of gross rental charge. $5,000 deductible.
Option 2: Your own insurance — Commercial General Liability ($1M/$2M), Physical Damage Insurance ($250K min). Email signed cert to mammothemail@mammothmachinery.com

STEP 4: Start Renting!
Once documentation received, your customer file is set up and renting can begin.

Also include FAQ sections:
- "My Rental Won't Start/Is Giving Errors" — Call your sales rep. We'll send a tech or swap the unit.
- "Calling Off & Returning Your Rental" — Call or text your sales rep for pickup/return.
- "Accounts Payable/Invoicing" — ACH, credit card, or check. Call office or email inquiries@mammothmachinery.com
- "Lien Notice" — Standard pre-lien and lien notices sent as part of process (no upfront deposit).

Make this page clean with numbered steps, clear download buttons, and easy-to-read FAQ accordion or cards. Mobile-friendly.

### equipment-list.html — Full Equipment List with Rates

This is a BIG page with rental rate tables. Create it with:
- Quick-jump navigation at top (clickable categories)
- Responsive tables that work on mobile (card layout on small screens, table on desktop)
- All categories and rates from the original site data below

**EQUIPMENT CATEGORIES & RATES:**

Track Dozers:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| D5/D6N | Dozer, 36,392 lbs, 6-way blade/Ripper | $1,478 | $4,281 | $12,415 |
| D6N | Dozer, 48,263 lbs, 6-way blade/Ripper | $1,517 | $4,335 | $12,556 |
| D6T | SU Dozer, 46,158 lbs, Ripper | $2,010 | $5,826 | $16,899 |
| D6TLGP | SU Dozer, 46,733 lbs, LGP | $2,146 | $6,233 | $18,047 |
| D8T | SU Dozer, 87,733 lbs, Ripper | $3,772 | $10,940 | $31,726 |
| D10T | SU Dozer, 161,915 lbs, Ripper | $7,456 | $21,611 | $62,667 |
| D11T | SU Dozer, 251,100 lbs | $9,908 | $28,735 | $83,334 |

Graders:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 140/150 | 14' Blade, Ripper 193 hp | $1,763 | $5,113 | $14,829 |
| 140 AWD | 14' Blade, Ripper 193 hp | $1,968 | $5,708 | $16,533 |
| 160 AWD | 14' Blade, Ripper 221 hp | $2,216 | $6,426 | $18,634 |

Mini-Excavators:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 300.9 | 2,061 lbs, 5'6" dig depth | $223 | $656 | $1,889 |
| 301.7D | 3,726 lbs, 6'10" dig depth | $355 | $1,000 | $2,888 |
| 302.7D | 5,886 lbs, 8'8" dig depth | $387 | $1,123 | $3,256 |
| 303.5E | 8,160 lbs, 10'4" dig depth | $488 | $1,417 | $4,110 |
| 304E | 8,852 lbs, 11'3" dig depth | $488 | $1,417 | $4,110 |
| 305E | 11,365 lbs, 12'1" dig depth | $547 | $1,585 | $4,589 |
| 305.5E | 12,048 lbs, 12'8" dig depth | $656 | $1,902 | $5,518 |
| 308E CR | 18,519 lbs, 15'2" dig depth | $630 | $1,800 | $5,200 |
| 309 | 21,091 lbs, 15'6" dig depth | $828 | $2,402 | $6,966 |

Mini-Excavator Attachments:
| Item | Day | Week | 4 Weeks |
|------|-----|------|---------|
| Compaction Wheel 304-308 | $82 | $238 | $689 |
| Extra Bucket 300.9-302.5 | $41 | $118 | $345 |
| Extra Bucket 304-308 | $68 | $198 | $572 |
| Hydraulic Comp Plate | $488 | $1,417 | $4,110 |
| Hydraulic Hammer | Same rate as carrier machine | | |
| Auger Drive (includes 1 bit) | 1/2 rate of carrier | | |
| Extra Auger Bit | $20 | $54 | $155 |
| Auger Extension | $10 | $28 | $80 |
| Ripper Shank | $99 | $285 | $825 |

Excavators:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 313EL | 32,200 lbs, 18'2" dig depth | $915 | $2,656 | $7,702 |
| KOM PC180 | 37,547 lbs, 19'6" dig depth | $943 | $2,735 | $7,932 |
| 314DLCR/315FL | 36,340 lbs, 19'6" dig depth | $943 | $2,735 | $7,932 |
| 316EL/317 | 39,029 lbs, 21'7" dig depth | $963 | $2,738 | $7,932 |
| 320EL | 49,200 lbs, 22'1" dig depth | $1,032 | $2,993 | $8,679 |
| 320ELRR | 50,265 lbs, 22'1" dig depth | $1,032 | $2,993 | $8,995 |
| 321DLRR | 52,200 lbs, 22' dig depth | $1,230 | $3,567 | $10,346 |
| KOM PC210 | 53,882 lbs, 21'8" dig depth | $1,032 | $2,993 | $8,679 |
| KOM PC220LCi-12 | 54,675 lbs, 21'9" dig depth, i3 Machine | $1,117 | $3,240 | $9,397 |
| 323 | 54,900 lbs, 22'1" dig depth | $1,117 | $3,240 | $9,397 |
| 329EL | 68,209 lbs, 23'9" dig depth | $1,318 | $3,820 | $11,077 |
| 336E/340 | 88,400 lbs, 26'10" dig depth | $1,722 | $4,994 | $14,484 |
| KOM PC360 | 78,255 lbs, 24'3" dig depth | $1,722 | $4,994 | $14,484 |
| 349EL | 117,500 lbs, 26'11" dig depth | $2,240 | $7,016 | $20,347 |

Excavator Attachments:
| Item | Day | Week | 4 Weeks |
|------|-----|------|---------|
| Compaction Wheel 311-323 | $234 | $678 | $1,996 |
| Compaction Wheel 326-349 | $299 | $866 | $2,511 |
| Extra Bucket Cat 311-316 | $125 | $363 | $1,053 |
| Extra Bucket Cat 320-330 | $187 | $542 | $1,573 |
| Hydraulic Hammer | Same rate as carrier | | |
| Hydraulic Plate Compactor | 1/2 rate of carrier | | |
| Hydraulic Thumb | $233 | $668 | $1,936 |
| Ripper Shank | $205 | $594 | $1,722 |
| Skeleton Bucket | $165 | $478 | $1,378 |

Scrapers:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| CAT 623K | 23 yd heaped elevating | $4,359 | $12,010 | $34,828 |
| CAT 627K | 22 yd heaped push-pull | $4,599 | $13,907 | $38,676 |
| CAT 631K | 34 yd heaped conventional | Call for pricing | | |
| CAT 637K | 34 yd heaped push-pull | Call for pricing | | |
Note: Additional mileage charges may apply

Wheel Loaders:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 906M | 12,346 lbs, 1.0 yd bucket | $588 | $1,765 | $5,292 |
| 924Hz/926M | 28,770 lbs, 3.0 yd bucket | $832 | $2,418 | $7,012 |
| 924K/96M | 31,270 lbs, 3.2 yd | $892 | $2,587 | $7,500 |
| 930M | 33,379 lbs, 3.2 yd bucket | $1,063 | $3,084 | $8,943 |
| KOM WA380 | 41,932 lbs, 3.4 yd bucket | $1,267 | $3,644 | $10,557 |
| 938M | 38,716 lbs, 3.5 yd bucket | $1,121 | $3,250 | $9,426 |
| 950M | 42,357 lbs, 4.5 yd bucket | $1,333 | $3,865 | $11,208 |
| 966M | 51,176 lbs, 5.5 yd bucket | $1,600 | $4,122 | $13,400 |
| WA475 | 54,739 lbs, 5.5 yd bucket | $1,968 | $5,708 | $16,553 |

Wheel Loader Attachments:
| Item | Day | Week | 4 Weeks |
|------|-----|------|---------|
| Forks (926 to 938) | $61 | $177 | $514 |
| Forks (950 to 966) | $90 | $261 | $750 |

Backhoe Loaders:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 420F E-stick | Extend-a-hoe, 17'9" dig depth, 4wd | $560 | $1,625 | $4,684 |
| 420F IT E-stick | 14'4" dig depth, 4wd | $605 | $1,754 | $5,086 |
| 430F E-stick | Extend-a-hoe, 19'5" dig depth, 4wd | $618 | $1,794 | $5,201 |
| 430F IT E-stick | 15'8" dig depth, 4wd | $687 | $1,992 | $5,775 |

Backhoe Loader Attachments:
| Item | Day | Week | 4 Weeks |
|------|-----|------|---------|
| Compaction Wheel | $126 | $365 | $1,059 |
| Extra Bucket | $47 | $136 | $393 |
| Hydraulic Hammer | Same rate as carrier | | |
| Hydraulic Plate Compactor | 1/2 rate of carrier | | |
| Ripper | $126 | $365 | $1,095 |

Compact Track Loaders:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 259D | 74 hp, 8,846 lbs, 2,900 lb cap | $560 | $1,625 | $4,712 |
| 279D | 74 hp, 9,865 lbs, 2,935 lb cap | $590 | $1,772 | $5,320 |
| 289D | 74 hp, 10,533 lbs, 3,800 lb cap | $676 | $1,962 | $5,691 |
| 299D | 98 hp, 11,275 lbs, 4,600 lb cap | $905 | $2,626 | $7,615 |

Skid Steer Loaders:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 246D | 74 hp, 7,490 lbs, 2,150 lb cap | $458 | $1,328 | $3,851 |
| 262D High Lift | 74 hp, 7,968 lbs, 2,700 lb cap | $676 | $1,962 | $5,691 |
| 272D High Lift | 98 hp, 8,404 lbs, 3,200 lb cap | $560 | $1,625 | $4,713 |

Skid Steer Attachments:
| Item | Day | Week | 4 Weeks |
|------|-----|------|---------|
| Angle Blade | $108 | $313 | $908 |
| Auger | $94 | $271 | $787 |
| Extra Auger Bit | $47 | $137 | $396 |
| Broom | $187 | $542 | $1,573 |
| Brush Hog/Cutter | $273 | $791 | $2,293 |
| Brush Mulcher | $561 | $1,627 | $4,719 |
| Extra Bucket | $63 | $182 | $2,360 |
| Cold Planer | $281 | $814 | $2,360 |
| Dozer Blade | $140 | $407 | $1,180 |
| Forks | $47 | $136 | $393 |
| Grapple Bucket | $125 | $363 | $1,053 |
| Hydraulic Hammer | $374 | $1,085 | $3,146 |
| Landscape/Power Rake | $141 | $409 | $1,186 |
| Skeleton Bucket | $63 | $182 | $526 |
| Snow Blower | $211 | $613 | $1,778 |
| Snow Plow/Snow Box | $159 | $460 | $1,333 |
| Stump Grinder | $198 | $574 | $1,667 |
| Tiller | $132 | $383 | $1,111 |
| Trencher | $280 | $812 | $2,353 |

Articulated Trucks:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 725 | 26 Ton | $1,777 | $5,153 | $14,944 |
| 730/HM 300 | 31 Ton | $2,037 | $5,906 | $17,128 |
| 740 | 43 Ton | $2,651 | $7,689 | $22,300 |
| 745 | 45 Ton | $2,953 | $8,651 | $24,828 |

Water Equipment:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| Water Truck 2,000 gl | On highway, 2,000 gallon | $547 | $1,586 | $4,598 |
| Water Truck 4,000 gl | On highway, 4,000 gallon | $957 | $2,775 | $8,047 |
| Water Trailer | 500 gallon | $181 | $525 | $1,523 |
Note: CDL and insurance required for on highway trucks. Mileage: 100/day, 500/week, 2,000/month | $0.05/mile

Soil Compactors:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 815K | 45,765 lbs, 12'4" Dozer | $2,378 | $6,897 | $20,000 |
| 825K | 78,326 lbs, 15'2" Dozer | $3,649 | $10,583 | $30,692 |

Rollers:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| RT82-SC (walk-behind) | 3,300 lbs, 33" Dbl Drum Pad | $417 | $1,209 | $3,506 |
| RX-1575 (walk-behind) | 3,300 lbs, 33" Dbl Drum Pad | $417 | $1,209 | $3,506 |

Vibratory Rollers:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| CP34 Single Drum Pad | 11,000 lbs, 50" Drum | $642 | $1,209 | $3,506 |
| CP44 Single Drum Pad | 16,083 lbs, 66" Drum | $916 | $2,656 | $7,702 |
| CP56 Single Drum Pad | 27,452 lbs, 84" Drum | $1,149 | $3,330 | $9,655 |
| CP74 Single Drum Pad | 36,048 lbs, 84" Drum | $547 | $1,586 | $4,980 |
| CS34 Single Drum Smooth | 9,800 lbs, 50" Drum | $642 | $1,209 | $3,506 |
| CS44 Single Drum Smooth | 15,307 lbs, 66" Drum | $547 | $1,586 | $3,506 |
| CS56 Single Drum Smooth | 25,346 lbs, 84" Drum | $911 | $2,611 | $7,556 |
| CS68 Single Drum Smooth | 31,572 lbs, 84" Drum | $970 | $2,814 | $8,161 |
| CS74 Single Drum Smooth | 35,264 lbs, 84" Drum | $1,162 | $3,370 | $9,771 |
| Shell Kits | | $288 | $834 | $2,420 |
| MVC88 | 190 lbs, 19"x23" Plate | $119 | $347 | $978 |
| MVH508 | 1,122 lbs, 28"x35" Plate | $273 | $792 | $2,299 |

Air Compressors / Air Hammer:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 185 CFM | Sullivan D185QCA, 100 psi | $242 | $703 | $2,041 |
| 90 lb/60 lb Air | Sullivan SPB 125-4j | $40 | $114 | $333 |
| Air Hose | 50' section | $18 | $33 | $66 |

Dump Buggy:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| Wacker 3001 | Wheeled Dump Buggy | $350 | $1,100 | $3,330 |

Material Separators:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| MS12 w/6" screen | 7'W x 11'10"L x 9'H | $182 | $529 | $1,534 |
| Additional Screen | 2"/3"/4" minus | $40 | $114 | $333 |

Gravel Boxes:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| GS-5.5 | 5.5 cubic yard | $167 | $485 | $1,410 |
| GS-7.5 | 7.5 cubic yard | $182 | $529 | $1,667 |
| GS-9 | 9 cubic yard | $198 | $575 | $1,667 |

Light Tower:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| Doosan Light Tower | | $167 | $485 | $1,410 |

Gensets:
| Model | Shift | Day | Week | 4 Weeks |
|-------|-------|-----|------|---------|
| 25kVA | Single | $168 | $504 | $1,514 |
| 25kVA | Double | $252 | $757 | $2,271 |
| 25kVA | Triple | $366 | $1,010 | $3,029 |
| 35kVA | Single | $547 | $1,586 | $4,980 |
| 35kVA | Double | $292 | $1,209 | $3,506 |
| 35kVA | Triple | $392 | $1,176 | $3,529 |
| Spider Box | 50 Amp | $44 | $131 | $393 |

Aerial Equipment:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 40' Boom Lift | Diesel, straight boom | $656 | $1,443 | $3,175 |
| 45' Articulating | Diesel, articulating boom | $560 | $1,233 | $2,271 |
| 60' Boom Lift | Diesel, straight boom w/ jib | $366 | $1,010 | $3,029 |
| 66' Boom Lift | Diesel, straight boom w/ jib | $756 | $1,663 | $3,659 |
| 80' Boom Lift | Diesel, straight boom w/ jib | $1,325 | $2,494 | $6,412 |
| 125' Boom Lift | Diesel, straight boom w/ jib | $392 | $1,176 | $3,529 |

Telescopic Handlers:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| RS 12-42 | 12,000 lb cap, 40' lift | $1,347 | $3,033 | $6,825 |
| RS 12-55 | 12,000 lb cap, 55' lift | $1,347 | $3,033 | $6,825 |
| RS 8-42 | 8,000 lb cap, 42' lift | $978 | $2,695 | $7,242 |

On Highway Dump Truck:
| Model | Description | Day | Week | 4 Weeks |
|-------|-------------|-----|------|---------|
| 6 Yard | 10' Dump Body | $516 | $1,498 | $4,345 |
Note: CDL and Insurance required. Mileage: 100/day, 500/week, 2,000/month. $0.35/mile

**IMPORTANT:** On mobile, tables should convert to a card/list layout (each row becomes a card with label: value pairs). Add a note at top: "Rates are based on pricing before discounts and fees. Contact us for your best pricing."

Also add at bottom: "Not seeing what you need? We'll source and help get exactly what you need! Call 801-295-3302"

### service.html — Service & Repairs

Content:

**Service That Keeps You Moving**
Mammoth Machinery now offers field service, repair, and maintenance. Our team of technicians and field service personnel are experienced and committed to solving your needs quickly and efficiently.

We use factory OEM parts whenever possible, so repairs are done with the right components, not cheap substitutes. If a job needs something specialized, we'll tell you up front and help coordinate the next best step. And if we can't fix it on site we will coordinate transportation to and from our shop.

**Service Base Pricing:**
- Shop Service: $165.00/hr
- Field/Mobile: $195.00/hr
- Travel: $195.00/hr

Note: Prices shown are base rates before discounts. Call for final quote.

**Our Services** (list these as service cards):
- Preventive Maintenance
- Engine & Drivetrain Repair
- Hydraulic System Service
- Electrical Diagnostics
- Undercarriage Work
- Welding & Fabrication
- Field Service & Emergency Repair

Add a CTA: "Ready to book or have questions? Call 801-295-3302"

---

## 5. UPDATE NAVIGATION

Update the nav in ALL pages (index.html + new pages) to include:
- Home (link to index.html or ./)
- Equipment List (link to equipment-list.html)
- Rental Guide (link to rental-guide.html)
- Service & Repairs (link to service.html)
- Contact (link to contact section or index.html#contact)
- **Call button: 801-295-3302** (prominent, right side of nav)

The mobile hamburger menu should include all these links too.

---

## 6. UPDATE FOOTER on ALL pages

Footer should include:
- Mammoth logo + "Mammoth Machinery, LLC"
- "We have strived for excellence since our foundation in 2010."

**Rentals column:**
- Rental Guide (rental-guide.html)
- Equipment List (equipment-list.html)

**Services column:**
- Service & Repairs (service.html)

**Contact column:**
- HQ: 801-295-3302
- Emergency: 801-712-8394
- Hours: Mon-Fri 7:00 AM - 5:00 PM

**Locations:**
- HQ: 205 S 1200 W, North Salt Lake, UT 84054
- Uintah Basin: 19251 W 2000 N, Duchesne, UT 84021
- Utah County: 2957 S 350 E, Spanish Fork, UT 84660
- Southern Utah: 5584 W 860 S Suite 1, Hurricane, UT 84734

"Mammoth Machinery, LLC. 2026. All rights reserved."

---

## 7. UPDATE CONTACT SECTION on index.html

Replace the placeholder phone `tel:+18015551234` with `tel:801-295-3302`
Replace placeholder email with `info@mammothmachinery.com`
Add the office hours and all 4 location addresses.

---

## AFTER ALL CHANGES

```bash
cd /Users/jarvis/mammothmachinery
git add -A
git commit -m "v3: Rebrand fonts/colors, add rental guide + equipment list + service pages, click-to-dial, full contact info"
git push origin main
openclaw system event --text "Done: Mammoth v3 pushed — Antonio font, terracotta palette, rental guide, equipment list with all rates, service page, click-to-dial 801-295-3302, all locations, mobile-responsive" --mode now
```
