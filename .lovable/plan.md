

# Complete Guide: Google Sheets Setup + Add Sinine Client

## Part 1: Create New Google Sheet for Form Submissions

### Step 1: Create the Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `Trikalnetra Contact Forms`
4. Rename the first sheet tab (bottom) to: `Get in Touch`
5. Add these headers in Row 1:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Company | Service | Budget | Other Requirement | Message | Source |

### Step 2: Create the Apps Script
1. In the sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this exact code:

```javascript
function doPost(e) {
  try {
    // IMPORTANT: Replace this with your actual Sheet ID
    const SHEET_ID = "PASTE_YOUR_SHEET_ID_HERE";
    
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName("Get in Touch");
    
    if (!sheet) {
      throw new Error("Sheet 'Get in Touch' not found");
    }
    
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.service || "",
      data.budget || "",
      data.otherRequirement || "",
      data.message || "",
      "Website - Contact Form"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Form submitted successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Form endpoint is working!")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### Step 3: Find Your Sheet ID
Your Google Sheet URL looks like this:
```
https://docs.google.com/spreadsheets/d/1ABC123XYZ789.../edit
                                       ^^^^^^^^^^^^^^^^
                                       This is your Sheet ID
```
Copy the ID and replace `PASTE_YOUR_SHEET_ID_HERE` in the code above.

### Step 4: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" → choose **Web app**
3. Fill in:
   - Description: `Contact Form Handler`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** → Select your Google account → Allow
6. **Copy the Web app URL** (ends with `/exec`)

### Step 5: Share the New URL with Me
Once you have the new Web app URL (format: `https://script.google.com/macros/s/AKfycby.../exec`), share it with me and I will update both form components to use it.

---

## Part 2: Add Sinine to Our Clients

### Files to Modify

**1. Copy uploaded logo:**
- `user-uploads://Logo-Sinine1.png` → `src/assets/clients/sinine.png`

**2. Update `src/components/Clients.tsx`:**
- Add import for Sinine logo
- Add Sinine to the clients array

### Changes to Clients.tsx

```typescript
// Add import at line 8
import sinineLogo from "@/assets/clients/sinine.png";

// Add to clients array (after Anika Farm)
{
  name: "Sinine",
  logo: sinineLogo,
  url: "https://sinine.in/",
},
```

The grid will now show 7 clients (responsive: 3-4 per row on tablet, 7 on desktop).

---

## Summary

| Task | Action |
|------|--------|
| Google Sheets | You create new sheet + Apps Script + deploy (steps 1-5 above) |
| Share URL | You share the new `/exec` URL with me |
| Update forms | I update both `ContactPage.tsx` and `Contact.tsx` with new URL |
| Add Sinine | I copy logo and update `Clients.tsx` |
| Test | We verify form submissions save to sheet |

---

## Next Steps

1. **You do Steps 1-5** above (create sheet, add script, deploy)
2. **Share the new Web app URL** with me
3. I will then implement:
   - Update form URLs in both components
   - Add Sinine to the Clients section




Here is the web app URL: https://script.google.com/macros/s/AKfycbyF53_8QI84yryvVphde2BooV-9vT1IAWTlU20TODAj_3hflXOsiv4YMG2b6jF28tbkbg/exec


And please don't disturb GitHub things; everything is correct and working fine to open "https://trikalnetra.com/", so please don't disturb GitHub things, I guess. 