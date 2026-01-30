

# Fix All Issues: Google Sheets, WhatsApp Button, Page Transitions

## Summary of Issues to Fix

1. **Google Sheets Form Not Saving** - Need to verify the request format matches what the Google Apps Script expects
2. **Add WhatsApp Callout Button** - Floating button with number 9390595302 and default message
3. **Flash Screen on Page Navigation** - Page transitions causing blank flash during route changes

---

## 1. Fix Google Sheets Integration

### Problem Analysis
The current implementation uses `mode: "no-cors"` which prevents reading the response. If the Google Apps Script expects a specific format, the data might not be parsed correctly.

### Solution
The issue is likely that Google Apps Script expects data in a specific format. We'll ensure the request format is compatible:

**Files to Modify:**
- `src/components/Contact.tsx`
- `src/pages/ContactPage.tsx`

**Technical Changes:**
```typescript
// Ensure proper data serialization for Google Apps Script
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const formData = new FormData(e.target as HTMLFormElement);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    service: formData.get("service"),
    otherService: formData.get("otherService") || "",
    message: formData.get("message"),
    timestamp: new Date().toISOString(),
  };
  
  try {
    // Using fetch with mode: "no-cors" - the request will be sent
    // but we cannot verify the response. The Google Apps Script
    // should be configured to parse JSON from the request body.
    await fetch(
      "https://script.google.com/macros/s/AKfycby0TgrSzP3W7JlUlOzLxNmcNPTXf8VHAXULkhsa_eIswOjuJTapIRmXMRqCvlNnfCPN/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(data),
      }
    );
    
    // Show success since we can't read the response with no-cors
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setSelectedService("");
    (e.target as HTMLFormElement).reset();
  } catch (error) {
    // Handle network errors
    console.error("Form submission error:", error);
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

**Important Note About Google Apps Script:**
The frontend code looks correct. The issue is likely with the Google Apps Script configuration. The script should:

1. Have a `doPost(e)` function that parses JSON from `e.postData.contents`
2. Be deployed with "Execute as: Me" and "Who has access: Anyone"

Example Google Apps Script code needed on the backend:
```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.company,
      data.service,
      data.otherService,
      data.message
    ]);
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

If the script is already configured correctly, the current frontend code should work. The issue might be that the script needs to be redeployed after changes.

---

## 2. Add WhatsApp Floating Callout Button

### Implementation
Create a floating WhatsApp button that appears on all pages, positioned at the bottom-right corner.

**New File:** `src/components/WhatsAppButton.tsx`

**Features:**
- Floating green WhatsApp button
- Fixed position at bottom-right
- Opens WhatsApp with default message
- Uses number: 9390595302
- Default message: "Hi! I'm interested in trikalnetra's services. Can we discuss?"

**Component Code:**
```tsx
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919390595302"; // India country code + number
  const defaultMessage = "Hi! I'm interested in trikalnetra's services. Can we discuss?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
```

**Files to Modify:**
- `src/App.tsx` - Add WhatsAppButton component globally

```tsx
// Add to App.tsx
import WhatsAppButton from "@/components/WhatsAppButton";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
        <WhatsAppButton /> {/* Add here for global visibility */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
```

---

## 3. Fix Flash Screen on Page Navigation

### Problem Analysis
The current implementation uses `AnimatePresence` with `mode="wait"` which causes:
1. Old page fades out completely (showing blank background)
2. Then new page fades in

This creates a noticeable "flash" between pages.

### Solution
Reduce the animation duration and remove the "wait" mode to allow smoother crossfade transitions.

**File to Modify:** `src/App.tsx`

**Changes:**
1. Remove `mode="wait"` to allow overlapping transitions
2. Reduce animation duration from 0.3s to 0.15s
3. Simplify animations to just opacity (remove y-axis movement)

```tsx
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync"> {/* Changed from "wait" to "sync" for smoother transitions */}
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.15 }} {/* Reduced duration */}
        style={{ position: 'relative' }} {/* Ensure proper stacking */}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          {/* ... other routes */}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
```

**Alternative Approach (if above still has issues):**
Remove AnimatePresence entirely and use simpler page-level animations:

```tsx
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      {/* ... other routes */}
    </Routes>
  );
};
```

Then add animations within each page component instead of at the route level.

---

## Files to Create/Modify Summary

| File | Action | Changes |
|------|--------|---------|
| `src/components/WhatsAppButton.tsx` | **Create** | New floating WhatsApp button component |
| `src/App.tsx` | Modify | Add WhatsAppButton + fix page transitions |
| `src/components/Contact.tsx` | Verify | Confirm Google Sheets integration format |
| `src/pages/ContactPage.tsx` | Verify | Confirm Google Sheets integration format |

---

## Expected Outcomes

After implementation:

1. **Google Sheets** - Form submissions should save correctly (if script is configured properly on the Google side)
2. **WhatsApp Button** - Floating green button on bottom-right of all pages, clicking opens WhatsApp with pre-filled message to 9390595302
3. **Page Transitions** - Smooth, fast transitions without flash/blank screen

---

## Visual: WhatsApp Button Placement

```text
+--------------------------------------------------+
|  Navbar                                           |
+--------------------------------------------------+
|                                                   |
|                                                   |
|           Page Content                            |
|                                                   |
|                                                   |
|                                          [📱]    |  <- WhatsApp button
+--------------------------------------------------+
|  Footer                                           |
+--------------------------------------------------+
```

---

## Note About Google Sheets

The frontend implementation looks correct. If data is still not saving, the issue is likely with the Google Apps Script configuration. The user should verify:

1. The script has a proper `doPost(e)` function
2. The script is deployed with "Execute as: Me" and "Who has access: Anyone"
3. The script was redeployed after any changes
4. The spreadsheet has the correct columns to receive the data


