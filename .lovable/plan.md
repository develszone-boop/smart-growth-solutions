
# Fix Header Moving and Flashing on Navigation

## Problem Identified

When clicking on any header menu item (Home, About, Services, Process, Capabilities, FAQ, Contact Us), the logo, or the mobile menu, the header "moves and flashes." 

### Root Cause

The Navbar component is included **inside each individual page component**. When you navigate between pages:

1. React Router unmounts the current page (including its Navbar)
2. React Router mounts the new page (with a new Navbar instance)  
3. The new Navbar plays its entrance animation: `initial={{ y: -100 }}` → slides down from above
4. This creates the visible "moving/flashing" effect every time you navigate

### Current Architecture (Problematic)

```text
App.tsx
└── BrowserRouter
    └── Routes
        ├── Index.tsx         ← Contains <Navbar />
        ├── AboutPage.tsx     ← Contains <Navbar />
        ├── ServicesPage.tsx  ← Contains <Navbar />
        └── ... etc           ← Each page has its own Navbar
```

Every route change = Navbar unmounts and remounts = animation replays

---

## Solution

Move the Navbar to the App level so it persists across all route changes and only animates once on initial page load.

### New Architecture (Fixed)

```text
App.tsx
└── BrowserRouter
    ├── Navbar              ← Single instance, persists across routes
    └── Routes
        ├── Index.tsx       ← No Navbar (removed)
        ├── AboutPage.tsx   ← No Navbar (removed)
        └── ... etc         ← No Navbar needed
```

---

## Technical Changes

### 1. Modify `src/App.tsx`
Add Navbar once at the root level, outside the Routes component.

### 2. Remove Navbar from All Page Components
Remove the `<Navbar />` import and usage from:
- `src/pages/Index.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ServicesPage.tsx`
- `src/pages/ProcessPage.tsx`
- `src/pages/PortfolioPage.tsx`
- `src/pages/FAQPage.tsx`
- `src/pages/ContactPage.tsx`

---

## Files to Modify

| File | Change |
|------|--------|
| `src/App.tsx` | Add `<Navbar />` before `<Routes>` |
| `src/pages/Index.tsx` | Remove Navbar import and usage |
| `src/pages/AboutPage.tsx` | Remove Navbar import and usage |
| `src/pages/ServicesPage.tsx` | Remove Navbar import and usage |
| `src/pages/ProcessPage.tsx` | Remove Navbar import and usage |
| `src/pages/PortfolioPage.tsx` | Remove Navbar import and usage |
| `src/pages/FAQPage.tsx` | Remove Navbar import and usage |
| `src/pages/ContactPage.tsx` | Remove Navbar import and usage |

---

## Expected Result

After this fix:
- Navbar will render once and stay persistent across all pages
- The slide-down animation (`y: -100 → y: 0`) will only play on initial site load
- Navigation between pages will be smooth with no header movement or flashing
- The header will remain stable and fixed at the top during all route changes
