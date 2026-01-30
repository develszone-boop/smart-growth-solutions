
# Comprehensive Website Redesign Plan

## Summary of Changes

### 1. Remove "Our Team" Section
**File:** `src/pages/AboutPage.tsx`
- Remove the entire Team Section (lines 191-233) that shows team member photos
- Keep the Team Culture section at the bottom as it focuses on culture, not specific people

### 2. Replace Portfolio with Capabilities
Since the Portfolio shows sample projects (not actual work), we'll transform it into a **"Capabilities"** section showing what trikalnetra CAN do.

**Changes:**
- Rename "Portfolio" to "Capabilities" in navigation (`src/components/Navbar.tsx`)
- Update `src/pages/PortfolioPage.tsx` to show capabilities in 3-column grid
- Update `src/components/PortfolioPreview.tsx` on homepage to show "Our Capabilities" instead of "Featured Projects"
- Route remains `/portfolio` but displays capabilities content

### 3. Simplify Services & Process Pages
**Problem:** Too much space, visual clutter, hard to read

**Services Page (`src/pages/ServicesPage.tsx`):**
- Remove large images from service cards
- Show services in a cleaner 3-column grid
- Keep icons and descriptions, remove taglines and feature lists
- Reduce padding between sections

**Process Page (`src/pages/ProcessPage.tsx`):**
- Remove large images from each step
- Display steps in a compact numbered list
- Reduce vertical spacing significantly
- Keep the essential information

### 4. Remove Banner Gradient Effect
**File:** `src/components/PageHeader.tsx`

**Current:** Colored gradient overlays (purple, green, orange, etc.) on each page
**New:** Clean, minimal header like the homepage - just a dark overlay on the image, no colored gradients

- Remove `variantStyles` and `variant` prop
- Use consistent dark overlay like homepage hero (90% dark)
- Keep banner images but with simple treatment

### 5. Add 3-Slide Carousel to Each Page Banner
**File:** `src/components/PageHeader.tsx`

Transform the static banner into a carousel with 3 slides per page:
- Use Embla Carousel (already in project)
- Each page will have 3 different background images with auto-play
- Similar to homepage hero carousel but simpler
- Add navigation dots at bottom

### 6. Connect Contact Form to Google Sheets
**Files:** `src/components/Contact.tsx`, `src/pages/ContactPage.tsx`

**Google Apps Script URL provided:**
```
https://script.google.com/macros/s/AKfycby0TgrSzP3W7JlUlOzLxNmcNPTXf8VHAXULkhsa_eIswOjuJTapIRmXMRqCvlNnfCPN/exec
```

- Send form data via POST request to this URL
- No backend needed - direct frontend call
- Handle success/error responses

---

## Detailed Implementation

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/AboutPage.tsx` | Remove Team Section (lines 191-233) |
| `src/components/Navbar.tsx` | Rename "Portfolio" to "Capabilities" |
| `src/pages/PortfolioPage.tsx` | Complete redesign as Capabilities page with 3-column grid |
| `src/components/PortfolioPreview.tsx` | Show "Our Capabilities" in 3-column grid |
| `src/pages/ServicesPage.tsx` | Simplify to 3-column grid, remove images |
| `src/pages/ProcessPage.tsx` | Compact layout, remove images |
| `src/components/PageHeader.tsx` | Remove gradient, add 3-slide carousel |
| `src/components/Contact.tsx` | Connect to Google Sheets URL |
| `src/pages/ContactPage.tsx` | Connect to Google Sheets URL |

---

## Design Changes Detail

### Services Page - New Layout

```text
+-------------------+-------------------+-------------------+
|    Analytics      |     Marketing     |     Website       |
|    [Icon]         |     [Icon]        |     [Icon]        |
|    Brief desc     |     Brief desc    |     Brief desc    |
+-------------------+-------------------+-------------------+
|    Rebranding     |     Revenue       |     Mobile        |
|    [Icon]         |     [Icon]        |     [Icon]        |
|    Brief desc     |     Brief desc    |     Brief desc    |
+-------------------+-------------------+-------------------+
|    SEO            |    Cybersecurity  |    Branding       |
|    [Icon]         |     [Icon]        |     [Icon]        |
|    Brief desc     |     Brief desc    |     Brief desc    |
+-------------------+-------------------+-------------------+
```

### Process Page - New Layout

```text
Step 01: Discovery & Strategy
Brief description...

Step 02: Design & Concept
Brief description...

Step 03: Development
Brief description...

(Continue for all 6 steps - compact, no images)
```

### Capabilities Page - New Layout

```text
+------------------+------------------+------------------+
|   E-Commerce     |   Property       |   Technology     |
|   Solutions      |   Solutions      |   Solutions      |
|   What we do     |   What we do     |   What we do     |
+------------------+------------------+------------------+
|   Healthcare     |   Professional   |   Hospitality    |
|   Solutions      |   Services       |   Solutions      |
|   What we do     |   What we do     |   What we do     |
+------------------+------------------+------------------+
```

### Page Header - Carousel Design

Each page header will have 3 rotating slides:
- Auto-play every 4 seconds
- Navigation dots at bottom
- Consistent dark overlay (no colored gradients)
- Same text content on all slides (just background changes)

---

## Contact Form - Google Sheets Integration

```text
Frontend Form Submit
        |
        v
POST request to Google Apps Script URL
        |
        v
Google Apps Script saves to Google Sheets
        |
        v
Return success/error to frontend
```

**Form fields sent:**
- name
- email
- phone
- company
- service
- otherService (if "Other" selected)
- message
- timestamp (added automatically)

---

## Expected Outcome

After implementation:
- "Our Team" section removed from About page
- Portfolio becomes "Capabilities" - shows what you can do, not past projects
- Services page: Clean 3-column grid with icons, no images
- Process page: Compact numbered list, no images, less space
- All page banners: 3-slide carousel, no colored gradients
- Contact form: Saves directly to Google Sheets

This will create a cleaner, easier-to-read website with clear visual hierarchy.
