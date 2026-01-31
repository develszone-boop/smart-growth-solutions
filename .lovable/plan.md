

# Fix Navigation Flash and Banner Overlay Color

## Issues Identified

### Issue 1: Navigation Flash/Disappear Effect
**Problem**: When clicking on the logo or any header menu item (Home, About, Services, Process, Capabilities, FAQ, Contact Us), the navbar disappears for a moment and then slides back in.

**Root Cause**: The Navbar component in `src/components/Navbar.tsx` has an entrance animation:
```tsx
<motion.nav
  initial={{ y: -100 }}  // Starts 100px above
  animate={{ y: 0 }}      // Animates to normal position
  transition={{ duration: 0.6, ease: "easeOut" }}
  ...
>
```

Since the Navbar is included **inside each page component** (not in App.tsx), every time you navigate to a new page:
1. The old page unmounts (including its Navbar)
2. The new page mounts with a fresh Navbar
3. The fresh Navbar runs its `initial={{ y: -100 }}` animation again
4. This causes the "disappear then slide in" effect

**Solution**: Remove the initial animation from the Navbar. The navbar should just appear instantly without any entrance animation.

---

### Issue 2: Banner Overlay is White Instead of Black
**Problem**: The banner images on About, Services, Process, Capabilities, FAQ, and Contact pages have a white overlay/shade. The user wants this to be **black** instead.

**Root Cause**: In `src/components/PageHeader.tsx` line 74:
```tsx
<div className="absolute inset-0 bg-background/70" />
```

The `bg-background` uses the CSS variable `--background: 0 0% 100%` which is **white**. So the overlay is white with 70% opacity.

**Solution**: Change from `bg-background/70` to `bg-black/70` to create a black overlay that darkens the banner image properly.

---

## Technical Changes

### File 1: `src/components/Navbar.tsx`

**Current Code (lines 27-31)**:
```tsx
<motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
>
```

**New Code**:
```tsx
<nav
  className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
>
```

Remove the `motion.nav` wrapper and use a regular `<nav>` element. This eliminates the entrance animation completely and makes navigation instant.

---

### File 2: `src/components/PageHeader.tsx`

**Current Code (line 74)**:
```tsx
<div className="absolute inset-0 bg-background/70" />
```

**New Code**:
```tsx
<div className="absolute inset-0 bg-black/70" />
```

Change from `bg-background/70` (white overlay) to `bg-black/70` (black overlay) to properly darken the banner images.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/Navbar.tsx` | Replace `motion.nav` with regular `<nav>`, remove animation props |
| `src/components/PageHeader.tsx` | Change `bg-background/70` to `bg-black/70` |

---

## Expected Results

After these changes:
1. **Navigation will be instant** - Clicking on any menu item or the logo will show the new page immediately without any flash or delay
2. **Banner images will have black overlay** - The images will be darkened with a black shade instead of white, making the text more readable and the images more visible

