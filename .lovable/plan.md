

# Fix Contact Form & Add "Our Clients" Section

## Overview

This plan addresses three main tasks:
1. Fix the Google Sheets form submission field name mismatch
2. Add an "Our Clients" section below the hero carousel on the homepage
3. Ensure both contact forms are working correctly

---

## Part 1: Fix Google Sheets Form Submission

### Problem Identified

Your Google Apps Script expects `data.otherRequirement` but the website sends `otherService`:

| Apps Script Field | Website Field | Status |
|-------------------|---------------|--------|
| data.otherRequirement | otherService | MISMATCH |

### Solution

Update both form components to send `otherRequirement` instead of `otherService`.

### Files to Modify

**1. `src/pages/ContactPage.tsx`**
- Line 68: Change `otherService` to `otherRequirement`
- Lines 265-268: Change input `id` and `name` from `otherService` to `otherRequirement`

**2. `src/components/Contact.tsx`**
- Line 54: Change `otherService` to `otherRequirement`
- Lines 239-242: Change input `id` and `name` from `otherService` to `otherRequirement`

---

## Part 2: Add "Our Clients" Section

### Design

A clean section showcasing 6 client logos in a responsive grid, placed directly below the HeroCarousel on the homepage.

```text
+------------------------------------------------------------------+
|                           OUR CLIENTS                             |
|                Trusted by leading businesses                      |
+------------------------------------------------------------------+
|                                                                   |
|  [DCS Tech]   [AGR Foundation]   [Vedha Mantra]                  |
|                                                                   |
|  [SAM LootBig]   [LootBig Corp]   [Anika Farm]                   |
|                                                                   |
+------------------------------------------------------------------+
```

### Client Data

| # | Client | Logo | Link |
|---|--------|------|------|
| 1 | DCS Tech Hub | DCS_logo_svg.svg (uploaded) | https://www.dcstechhub.com/ |
| 2 | AGR Foundation | agr_logo.svg (uploaded) | https://www.agrfoundation.ngo/ |
| 3 | Vedha Mantra | Vedha_Mantra_Logo.svg (uploaded) | https://vedhamantra.com/ |
| 4 | SAM LootBig | Text logo (styled) | https://sam.lootbig.com/ |
| 5 | LootBig Corporate | Text logo (styled) | https://corporate.lootbig.com/ |
| 6 | Anika Farm | anika-farm.webp (uploaded) | https://anika.farm/ |

### Files to Create/Modify

**1. Copy uploaded logos to project assets:**
- `user-uploads://DCS_logo_svg.svg` → `src/assets/clients/dcs-tech.svg`
- `user-uploads://agr_logo.svg` → `src/assets/clients/agr-foundation.svg`
- `user-uploads://Vedha_Mantra_Logo.svg` → `src/assets/clients/vedha-mantra.svg`
- `user-uploads://anika-farm.webp` → `src/assets/clients/anika-farm.webp`

**2. Create new component:** `src/components/Clients.tsx`
- Display 6 client logos in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- Each logo is clickable and opens the client's website in a new tab
- SAM LootBig and LootBig Corporate will use styled text logos since no image was provided
- Subtle hover effect on logos
- Framer Motion animations

**3. Modify:** `src/pages/Index.tsx`
- Import and add the new `<Clients />` component after `<HeroCarousel />`

---

## Part 3: Ensure Forms Work Correctly

After the field name fix, the form data will match your Apps Script exactly:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "ABC Corp",
  "service": "website",
  "budget": "10k-25k",
  "otherRequirement": "",    // Now matches Apps Script!
  "message": "I need a website",
  "timestamp": "2026-02-01T..."
}
```

Your Apps Script will correctly parse all fields.

---

## Summary of All Changes

| File | Action | Purpose |
|------|--------|---------|
| `src/assets/clients/` | Create folder | Store client logos |
| `src/assets/clients/dcs-tech.svg` | Copy from upload | DCS Tech Hub logo |
| `src/assets/clients/agr-foundation.svg` | Copy from upload | AGR Foundation logo |
| `src/assets/clients/vedha-mantra.svg` | Copy from upload | Vedha Mantra logo |
| `src/assets/clients/anika-farm.webp` | Copy from upload | Anika Farm logo |
| `src/components/Clients.tsx` | Create | New Our Clients section |
| `src/pages/Index.tsx` | Modify | Add Clients component after Hero |
| `src/pages/ContactPage.tsx` | Modify | Fix otherRequirement field name |
| `src/components/Contact.tsx` | Modify | Fix otherRequirement field name |

---

## Expected Results

After implementation:
1. Both "Contact Us" and "Get in Touch" forms will save data correctly to Google Sheets
2. Homepage will display "Our Clients" section with 6 clickable logos
3. Clicking any logo opens the client's website in a new tab

