

# PageHeader Banner Redesign: Split Layout with Text Left, Image Right

## Overview

Redesign the PageHeader component for inner pages (About, Services, Process, Capabilities, FAQ, Contact) to have a split layout with text on the left side and the image carousel on the right side, with no white/dark overlay on the images.

---

## Current State

The current PageHeader has:
- Full-width background image carousel with 70% dark overlay
- Text content overlaid on top of the image
- Grid pattern overlay
- Breadcrumb navigation

---

## New Design Layout

```text
+------------------------------------------------------------------+
|  Navbar                                                           |
+------------------------------------------------------------------+
|                                                                   |
|  +---------------------------+  +------------------------------+  |
|  |                           |  |                              |  |
|  |  Breadcrumb: Home > About |  |                              |  |
|  |                           |  |                              |  |
|  |  SUBTITLE (small)         |  |     IMAGE CAROUSEL           |  |
|  |  ----------------------   |  |     (No overlay)             |  |
|  |  MAIN TITLE               |  |     Rounded corners          |  |
|  |  (Large heading)          |  |     Auto-play slides         |  |
|  |                           |  |                              |  |
|  |  Description paragraph    |  |                              |  |
|  |                           |  |                              |  |
|  |                           |  |  [dot] [dot] [dot]           |  |
|  +---------------------------+  +------------------------------+  |
|         LEFT SIDE (50%)                RIGHT SIDE (50%)           |
+------------------------------------------------------------------+
```

---

## Technical Changes

### File to Modify
- `src/components/PageHeader.tsx`

### Key Changes

1. **Remove full-width background image** - Images will only appear in the right column

2. **Create 2-column grid layout**:
   - Left column: Breadcrumb, subtitle, title, description
   - Right column: Image carousel

3. **Remove dark overlay** - No `bg-background/70` overlay on images

4. **Add rounded corners to images** - `rounded-2xl` for modern look

5. **Move carousel dots below the image** - Inside the right column

6. **Maintain responsive behavior**:
   - Desktop: Side-by-side layout (grid-cols-2)
   - Mobile: Stacked layout with text on top, images below

### Updated Component Structure

```tsx
<section className="pt-32 pb-16 relative overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 bg-secondary/30" />
  <div className="absolute inset-0 grid-pattern" />
  
  <div className="container mx-auto px-6 relative z-10">
    {/* Two Column Grid */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Column - Text Content */}
      <motion.div>
        {/* Breadcrumb */}
        <div className="breadcrumb">Home > {breadcrumb}</div>
        
        {/* Subtitle */}
        <span className="subtitle">{subtitle}</span>
        
        {/* Title */}
        <h1 className="title">{title}</h1>
        
        {/* Description */}
        <p className="description">{description}</p>
      </motion.div>
      
      {/* Right Column - Image Carousel */}
      <motion.div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-2xl">
          <div className="flex">
            {images.map((image, index) => (
              <div 
                key={index}
                className="flex-[0_0_100%] aspect-[16/10]"
              >
                <img 
                  src={image} 
                  className="w-full h-full object-cover"
                  // NO OVERLAY
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots below image */}
        <div className="flex justify-center gap-2 mt-4">
          {/* Carousel dots */}
        </div>
      </motion.div>
      
    </div>
  </div>
</section>
```

---

## Visual Improvements

| Feature | Before | After |
|---------|--------|-------|
| Layout | Full-width image background | Split 50/50 layout |
| Image Overlay | 70% dark overlay | No overlay - images fully visible |
| Image Position | Behind text | Dedicated right column |
| Image Corners | Square | Rounded (rounded-2xl) |
| Text Background | Over image | Clean solid background |
| Mobile | Text over image | Stacked: Text then Image |

---

## Pages Affected

All pages using PageHeader will automatically get the new design:
1. About (`/about`)
2. Services (`/services`)
3. Process (`/process`)
4. Capabilities (`/portfolio`)
5. FAQ (`/faq`)
6. Contact (`/contact`)

---

## Responsive Behavior

- **Desktop (lg and up)**: Two columns side-by-side
- **Tablet/Mobile**: Single column, text on top, image carousel below

---

## Animation Updates

- Left column: Slide in from left with fade
- Right column: Slide in from right with fade (slight delay)
- Staggered animation for a polished feel

