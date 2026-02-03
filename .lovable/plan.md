

# Update Testimonials & Social Media Links

## Overview

This plan covers two updates:
1. **Testimonials Section**: Replace fake testimonials with real client experiences and use placeholder avatars
2. **Footer Social Links**: Add real social media URLs and remove Twitter

---

## Part 1: Update Testimonials

### Changes to `src/components/Testimonials.tsx`

**Replace the testimonials array with real clients:**

| Client | Person | Role |
|--------|--------|------|
| AGR Foundation | Ravi | CEO |
| Anika Farm | Jangaiah | CEO |
| LootBig-Tech | Vinodh | CEO |

**Replace profile photos with placeholder avatars:**
- Remove external Unsplash image URLs
- Use a `User` icon from lucide-react inside a styled circle as placeholder

**New testimonials data structure:**
```typescript
const testimonials = [
  {
    name: "Ravi",
    role: "CEO, AGR Foundation",
    content: "[Real testimonial content from Ravi]",
    rating: 5,
  },
  {
    name: "Jangaiah",
    role: "CEO, Anika Farm",
    content: "[Real testimonial content from Jangaiah]",
    rating: 5,
  },
  {
    name: "Vinodh",
    role: "CEO, LootBig-Tech",
    content: "[Real testimonial content from Vinodh]",
    rating: 5,
  },
];
```

**Avatar placeholder design:**
```jsx
<div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
  <User className="w-6 h-6 text-primary" />
</div>
```

---

## Part 2: Update Footer Social Links

### Changes to `src/components/Footer.tsx`

**Update social links array:**

| Platform | Action | URL |
|----------|--------|-----|
| Facebook | Update URL | https://www.facebook.com/profile.php?id=61587345544535 |
| Twitter | **Remove** | - |
| Instagram | Update URL | https://www.instagram.com/official_trikalnetra?utm_source=qr&igsh=MW9oZGFzcDc3dzE3eg== |
| LinkedIn | Update URL | https://www.linkedin.com/in/trikalnetra-techgiant-b150823aa/ |

**Updated code:**
```typescript
const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587345544535" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/official_trikalnetra?utm_source=qr&igsh=MW9oZGFzcDc3dzE3eg==" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/trikalnetra-techgiant-b150823aa/" },
];
```

Also remove the `Twitter` import from lucide-react since it's no longer used.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Testimonials.tsx` | Replace testimonials data, add User icon import, update avatar rendering |
| `src/components/Footer.tsx` | Update socialLinks with real URLs, remove Twitter |

---

## Question

Before I implement, I need the **actual testimonial quotes** from your clients. Could you provide the real feedback/experience text from:

1. **Ravi (AGR Foundation)** - What did he say about working with trikalnetra?
2. **Jangaiah (Anika Farm)** - What was his experience?
3. **Vinodh (LootBig-Tech)** - What feedback did he provide?

If you don't have exact quotes, I can write professional placeholder testimonials that you can edit later. Let me know which approach you prefer.

