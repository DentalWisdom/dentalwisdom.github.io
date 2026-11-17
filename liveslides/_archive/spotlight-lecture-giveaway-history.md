# Dental Wisdom Live — Slide Content Archive

A plain-English history of past Vendor Spotlight, Featured Lecture, and Giveaway
content from the monthly Live slide deck (`liveslides/index.html`). Kept here —
not deleted — so if a vendor or speaker comes back, their info can be pasted
straight back into the `DECK` object instead of being rebuilt from scratch.

Most recent first, grouped by slide. Each entry should include the month it
aired and enough detail to drop back into the deck as-is.

---

## Vendor Spotlight (slide 4)

### October 15, 2026 — Chaim Glazer · Crazy Dental Prices
Aired October 15, 2026 (replaced Adam Baumwald / MB Precious Metals on the day of the session). Includes the scan-to-text QR to Chaim (`qr/crazydental-text-chaim.svg`).

```js
  spotlight: {                                         // slide 4 — the built-in vendor spotlight (right after the Dvar Torah)
    category: "Dental Supplies",
    logo:     "logos/crazy-dental.png",
    tagline1: "Guaranteed Lowest Price",               // ink-colored part of headline
    tagline2: "on Our Top-Selling Products",           // gold part of headline
    taglineBreak: true,                                // true = gold part starts its own line
    bullets:  [
      "Manufacturer Authorized",
      "Premier Customer Service",
      "110% Price Match Guarantee",
      "Best-In-Class Logistics"
    ],
    name:      "Chaim Glazer",
    company:   "Crazy Dental Prices",
    // pop-up that lands on the slide with the phone number — set popup: "" to hide it
    popup:     "Send a message here",
    popupAfter: "and Chaim will reach out ASAP!",
    callLabel: "Call or Text",
    phone:     "(404) 944-5293",
    website:   "crazydentalprices.com/dentalwisdom",
    // QR inside the pop-up: scanning it opens a text to Chaim with the message already
    // written. The image is pre-made in liveslides/qr/ - a new number or message needs a
    // new QR file. Set textQr: "" to hide the card.
    textQr:      "qr/crazydental-text-chaim.svg",
    textQrLabel: "Or scan to text Chaim"
  },

```

### October 15, 2026 — Adam Baumwald · MB Precious Metals
Replaced on the day of the session by Crazy Dental (Chaim Glazer). The QR file
`liveslides/qr/mb-text-adam.svg` is still in use on the giveaway slide; it texts Adam
"Hi Adam, I got your number from Dental Wisdom Live. Can we please chat about selling
dental scrap? Thank You!"

```js
  spotlight: {                                         // slide 4 — the built-in vendor spotlight (right after the Dvar Torah)
    category: "Dental Refining",
    logo:     "logos/mb-precious-metals.png",
    tagline1: "Turn Your Scrap",                // ink-colored part of headline
    tagline2: "Into Top Value",                        // gold part of headline
    taglineBreak: true,                                // true = gold part starts its own line
    bullets:  [
      "Over 50 Years of Experience",
      "Come to Your Office",
      "Scrap Assayed On-Site",
      "Gold, Silver, Platinum & Palladium"
    ],
    name:      "Adam Baumwald",
    company:   "MB Precious Metals",
    // pop-up that lands on the slide with the phone number — set popup: "" to hide it
    popup:     "Send a message here",
    popupAfter: "and Adam will reach out ASAP!",
    callLabel: "Call",
    phone:     "(443) 253-4143",
    website:   "MBPreciousMetals.com",
    // QR inside the pop-up: scanning it opens a text to Adam with the message already
    // written. The image is pre-made in liveslides/qr/ - a new number or message needs a
    // new QR file. Set textQr: "" to hide the card.
    textQr:      "qr/mb-text-adam.svg",
    textQrLabel: "Or scan to text Adam"
  },
```

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

### October 15, 2026 — Darren Sardoff & Dr. Kelly Jastremski · Launch Point / Crown Catapult
Two lecture sponsors (Crown Catapult + Launch Point), with the Launch Point “book a call with David” takeaway card and Calendly QR on the sponsor thank-you slide.

```js
  lecture: {                                           // slide 6 — the class
    ce:       "1 CE Credit",
    title:    "Dental Exit Planning",
    subtitle: "Building Your Practice\u2019s Endgame Before You Need It",
    doctor:   "Darren Sardoff &\nDr. Kelly Jastremski",   // \n = start a new line here
    role:     "Presented by Crown Catapult and Launch Point",
    // Two lecture sponsors this month: both logos share the logo box on this slide, and
    // EACH gets its own large "Thank you to our Lecture Sponsor" panel on the billboard.
    // A missing logo file shows the sponsor's name in its place instead of a broken image.
    partners: [
      { name: "Crown Catapult", logo: "logos/crown-catapult.webp", website: "crowncatapult.com" },
      { name: "Launch Point",   logo: "logos/launch-point.png", website: "launchpointdental.com" }
    ],
    website:  "crowncatapult.com \u00b7 launchpointdental.com",
    // The "takeaway" card on the sponsor thank-you slide (after the lecture). The logos shrink
    // to make room. Set takeaway: null to remove the card and put the logos back to full size.
    // qr = a QR code image of the booking link (in liveslides/qr/) so viewers can scan it off the screen.
    takeaway: {
      eyebrow:   "Your Takeaway \u00b7 Launch Point",
      head:      "Your exit plan starts with one 30-minute chat.",
      sub:       "Book a time with David \u2014 bring your questions, leave with a plan.",
      email:     "david@launchpointdental.com",
      link:      "https://calendly.com/david-launchpointdental/30min",
      linkLabel: "calendly.com/david-launchpointdental/30min",
      qr:        "qr/launch-point-calendly.svg",
      qrLabel:   "Scan to book"
    },
    description: [
      "<strong>Darren Sardoff</strong> is Chief Executive Officer of Launch Point Dental Partners, where he invests in dental practices and partners with owners to accelerate growth, strengthen operations, and prepare for institutional exits.",
      "<strong>Dr. Kelly Jastremski</strong> is President and Chief Clinical Officer of Launch Point Dental Partners.",
      "Every dentist eventually steps away from the chair, but far too few plan for it until the decision is already upon them. This session covers when to start planning, what you can do now to secure the best valuation, the current state of the market, the pros and cons of selling to a DSO, and new models you may not be aware of.",
      "<strong>Attend live to earn your CE credit.</strong>"
    ]
  },
```

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

### October 15, 2026 — MB Precious Metals, Live Well Capital, Crown Catapult & Launch Point
Silver coin (MB), Yeti mug (Live Well), and the featured Full Set of Shas (Crown Catapult & Launch Point) with the Launch Point Calendly QR. The Shas was the billboard’s headline-prize feature panel.

```js
  giveaways: [
    // prize stays singular — one per winner on the slide and in the winner pop-up.
    // prizePlural is used ONLY on the title-slide billboard, where the sponsor is being
    // thanked for the whole set. Leave it off and the billboard just uses `prize`.
    { sponsor: "MB Precious Metals", prize: "1 oz Silver Coin",  prizePlural: "1 oz Silver Coins",
      logo: "logos/mb-precious-metals.png",
      website: "MBPreciousMetals.com", contact: "Adam", phone: "(443) 253-4143",
      qr: "qr/mb-text-adam.svg", qrLabel: "Scan to text Adam" },
    { sponsor: "Live Well Capital",  prize: "Yeti Coffee Mug",   prizePlural: "Yeti Coffee Mugs",
      logo: "logos/livewell-capital.png",
      website: "LiveWellCapital.com",  contact: "Sam",  phone: "(917) 715-2118",
      qr: "qr/livewell-text-sam.svg", qrLabel: "Scan to text Sam" },
    // qr + qrLabel (optional): a QR code shown beside the prize on the slide. The images are
    // pre-made in liveslides/qr/ — a new phone number or message needs a new QR file.
    // Shared prize: `logos` (a list) instead of `logo` shows every logo side by side —
    // on the slide, in the winner pop-up and on the billboard. `feature: true` gives it
    // its own large thank-you panel on the billboard, AFTER the lecture sponsors, with
    // `photo` and `prizeDetail` shown there.
    { sponsor: "Crown Catapult & Launch Point", prize: "Full Set of Shas",
      logos: ["logos/crown-catapult.webp", "logos/launch-point.png"],
      logoNames: ["Crown Catapult", "Launch Point"],
      website: "crowncatapult.com \u00b7 launchpointdental.com",
      feature: true,
      photo: "slides/shas-set.webp",
      prizeDetail: "Travel Size Schottenstein Edition Talmud · English · ArtScroll",
      qr: "qr/launch-point-calendly.svg", qrLabel: "Scan to book time with David" }
  ]
```

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
