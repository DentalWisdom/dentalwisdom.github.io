# Dental Wisdom Live — Slide Content Archive

A plain-English history of past Vendor Spotlight, Featured Lecture, and Giveaway
content from the monthly Live slide deck (`liveslides/index.html`). Kept here —
not deleted — so if a vendor or speaker comes back, their info can be pasted
straight back into the `DECK` object instead of being rebuilt from scratch.

Most recent first, grouped by slide. Each entry should include the month it
aired and enough detail to drop back into the deck as-is.

---

## Vendor Spotlight (slide 4)

### August 27, 2026 — Alphaeon on the title-slide billboard
Alphaeon was also the billboard's "Tonight's Vendor Spotlight" panel. Its `waitingRoom.spotlight` value and `about` line:

```js
    spotlight: { name:    "Alphaeon",
                 logo:    "logos/alphaeon.webp",
                 line:    "Free to Enroll + 40% off Merchant Fees",
                 website: "myalphaeoncredit.com/getstarted-dentalwisdom",
                 eyebrow: "Tonight’s Vendor Spotlight" },   // the line above the logo
      "Alphaeon": {
        what:   "Patient financing that says yes more often",
        detail: "Higher approvals, broader credit profiles and 24/7 provider support — at preferred Dental Wisdom pricing"
      },
```

### August 27, 2026 — Alphaeon Patient Financing (sponsor's own slides)
From this session, slide 4 is no longer the built-in spotlight layout: it is three
full-screen slides supplied by Alphaeon, listed in `DECK.spotlightSlides` and stored
in `liveslides/slides/`. Order shown: title ("Helping Doctors Help More Patients"),
benefits ("Higher Approvals. Better Offers. 24/7 Support."), then the rate tables
("The Modern Growth Partner for Dentists"). Source PNGs came from Ben's
"To add to Dentl Wisdom Live Slides" folder at 960x540.

```js
  spotlightSlides: [
    { src: "slides/alphaeon-1.webp", alt: "Alphaeon - Helping Doctors Help More Patients" },
    { src: "slides/alphaeon-2.webp", alt: "Alphaeon - Higher Approvals. Better Offers. 24/7 Support." },
    { src: "slides/alphaeon-3.webp", alt: "Alphaeon - The Modern Growth Partner for Dentists" }
  ],
```

### July / August 2026 — Chaim Glazer * Crazy Dental Prices
Superseded August 27, 2026 by the Alphaeon slides above. The block below is still
physically present in `index.html` as `DECK.spotlight`, but it is dormant: it only
renders when `DECK.spotlightSlides` is empty. Empty that list to bring this back.

```js
  spotlight: {                                         // slide 4 - new every month
    category: "Dental Supplies",
    logo:     "logos/crazy-dental.png",
    tagline1: "Guaranteed Lowest Price",               // ink-colored part of headline
    tagline2: "on Our Top-Selling Products",           // gold part of headline
    bullets:  [                                        // optional - 0 or 4 look best; omit for none
      "Manufacturer Authorized",
      "Premier Customer Service",
      "110% Price Match Guarantee",
      "Best-In-Class Logistics"
    ],
    name:      "Chaim Glazer",
    company:   "Crazy Dental Prices",
    callLabel: "Call or Text",                         // right-side label (default: "Call")
    phone:     "(404) 944-5293",
    website:   "crazydentalprices.com/dentalwisdom"
  },
```

---

## Featured Lecture (slide 6)

### August 27, 2026 — Dr. Mitchell Rubinstein · Pearl

```js
  lecture: {                                           // slide 6 — the class
    ce:       "1 CE Credit",
    title:    "AI in Dentistry",
    subtitle: "Enhancing Patient Communication and Clinical Outcomes",
    doctor:   "Dr. Mitchell Rubinstein",
    role:     "Presented in partnership with Pearl",
    partner:  "Pearl",                                 // also named on the title-slide billboard
    logo:     "logos/pearl.png",
    website:  "hellopearl.com/dental-wisdom",
    description: [
      "This session explores the evolving role of artificial intelligence in modern dental practice, with a focus on clinical communication and operational efficiency. Dr. Rubinstein examines how AI-enhanced workflows improve case presentation accuracy, elevate chairside education, and support informed decision-making through real-time data insights.",
      "By building AI into everyday practice, dental teams strengthen patient trust, optimize team performance, and drive measurable improvements in both clinical outcomes and practice growth.",
      "<strong>Attend live to earn your CE credit \u2014 plus a free month of Pearl.</strong>"
    ]
  },
```

### July 9, 2026 — Dr. Daniel Reich · Adin Implants
Replaced August 25, 2026 by Dr. Mitchell Rubinstein / Pearl (August 27 session).
Paste this block back over `DECK.lecture` to restore it.

```js
  lecture: {                                           // slide 6 — the class
    ce:       "1 CE Credit",
    title:    "All-on-X Surgery & Restoration",
    subtitle: "Same Day or Staged? Five Patient Cases from Planning to Restoration",
    doctor:   "Dr. Daniel Reich",
    role:     "Presented in partnership with Adin Implants",
    logo:     "logos/adin.png",
    website:  "adin-implants.com",
    description: [
      "The All-on-X concept has transformed full-arch rehabilitation — but does every case require immediate surgery and restoration on the same day? Dr. Daniel Reich examines the clinical considerations, advantages, and limitations of both immediate and staged treatment approaches.",
      "Through five comprehensive patient cases, attendees follow the complete journey — from diagnosis and digital planning through surgical placement, provisionalization, and final restoration — with practical insight into patient selection, sequencing, and the real-world decisions that drive predictable, long-term results."
    ]
  }
```

---

## Giveaways (slide 7)

### August 27, 2026 — Live Well Capital, MB Precious Metals, Alphaeon

```js
  giveaways: [
    // prize stays singular — one per winner on the slide and in the winner pop-up.
    // prizePlural is used ONLY on the title-slide billboard, where the sponsor is being
    // thanked for the whole set. Leave it off and the billboard just uses `prize`.
    { sponsor: "Live Well Capital",  prize: "Yeti Coffee Mug",   prizePlural: "Yeti Coffee Mugs",
      logo: "logos/livewell-capital.png",
      website: "LiveWellCapital.com",  contact: "Sam",  phone: "(917) 715-2118" },
    { sponsor: "MB Precious Metals", prize: "1 oz Silver Coin",  prizePlural: "1 oz Silver Coins",
      logo: "logos/mb-precious-metals.png",
      website: "MBPreciousMetals.com", contact: "Adam", phone: "(443) 253-4143" },
    { sponsor: "Alphaeon",           prize: "Yeti Coffee Mug",   prizePlural: "Yeti Coffee Mugs",
      logo: "logos/alphaeon.webp",
      website: "myalphaeoncredit.com/getstarted-dentalwisdom" }
  ]
```

*(Nothing archived yet. When Ben swaps out a giveaway prize/sponsor, the
outgoing entry from `DECK.giveaways` gets logged here before being overwritten.)*
