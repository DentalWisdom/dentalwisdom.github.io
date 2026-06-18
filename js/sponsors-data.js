/* =========================================================
   Dental Wisdom Conference — Sponsor cards
   Powers the clickable sponsor cards (with pop-up details) on
   conference-sponsors.html and at the bottom of
   conference-agenda.html. No Google Sheet — Ben tells Claude about
   sponsor changes (add/remove/update) and Claude edits
   this file directly.

   Fields per sponsor:
     name    - Sponsor name (required; used as the card caption,
               the pop-up heading, and image alt text)
     logoUrl - Path to the logo image in images/deals/ or
               images/sponsors/ (leave "" to show the name in a
               plain box instead of a logo)
     link    - Optional website URL (adds a "Visit website"
               button inside the pop-up; leave "" to hide it)
     blurb   - 1-2 sentence description shown inside the pop-up
     tier    - Sponsorship level, one of: "platinum", "gold",
               "silver", "bronze". Controls which tier the sponsor
               appears under on the Sponsors page (higher tiers are
               shown larger). Anything unrecognized falls to the
               bottom group. The Agenda page ignores tiers and
               shows everyone together.

   ========================================================= */

window.SPONSORS_DATA = [

  /* ── PLATINUM ─────────────────────────────────────────── */
  {
    name: "LiveWell Capital",
    logoUrl: "/images/sponsors/livewell-capital.png",
    link: "https://www.livewellcapital.com/",
    blurb: "Personalized wealth management and financial planning for dental professionals — helping dentists build, protect, and transfer lasting financial security.",
    tier: "platinum",
    attending: true
  },
  {
    name: "Crown Catapult",
    logoUrl: "/images/sponsors/crown-catapult.png",
    link: "https://crowncatapult.com/",
    blurb: "The exclusive financial hub for dental professionals — access curated investment opportunities, expert practice valuations, and advisory services built by and for dentists.",
    tier: "platinum"
  },
  {
    name: "Orthobrain",
    logoUrl: "/images/sponsors/orthobrain.png",
    link: "https://orthobrain.com/",
    blurb: "Integrate orthodontics into your practice easily and profitably with orthodontist-led treatment planning and SimplyClear aligners — no orthodontic residency required.",
    tier: "platinum"
  },
  {
    name: "Touro College of Dental Medicine",
    logoUrl: "/images/sponsors/touro.png",
    link: "https://dental.touro.edu/",
    blurb: "Touro College of Dental Medicine trains the next generation of compassionate, community-focused dental professionals with an emphasis on innovation, clinical excellence, and service.",
    tier: "platinum"
  },
  {
    name: "Emerald Dental Lab",
    logoUrl: "/images/sponsors/emerald-dental-lab.png",
    link: "https://www.emeralddentallab.com/promo/",
    blurb: "Premium full-service dental laboratory delivering precision-crafted restorations — crowns, bridges, implant prosthetics, and more — with artisan quality and turnaround you can count on.",
    tier: "platinum"
  },

  /* ── GOLD ─────────────────────────────────────────────── */
  {
    name: "MB Precious Metals",
    logoUrl: "/images/sponsors/mb-precious-metals.png",
    link: "https://mbpreciousmetals.com/",
    blurb: "Trusted dental refiner with over 50 years of experience — MB Precious Metals comes to your office, assays your scrap on-site, and pays you the highest value for gold, silver, platinum, and palladium.",
    tier: "gold"
  },
  {
    name: "Crazy Dental",
    logoUrl: "/images/sponsors/crazy-dental.png",
    link: "https://www.crazydentalprices.com/dentalwisdom",
    blurb: "Members-only dental supply marketplace with over 40,000 products at guaranteed lowest prices — free to join, with AI-powered pricing so your practice never overpays for supplies.",
    tier: "gold"
  },
  {
    name: "Lasso MD",
    logoUrl: "/images/sponsors/lasso-md.png",
    link: "https://www.lassomd.com/work-with-us/partners/dental-wisdom",
    blurb: "AI-powered digital marketing, website design, and practice growth platform built exclusively for dentists — helping practices attract more ideal patients and grow revenue with less effort.",
    tier: "gold"
  },
  {
    name: "Reach",
    logoUrl: "/images/sponsors/reach.png",
    link: "https://lp.getreach.co/dentalwisdom",
    blurb: "Dedicated virtual assistants and smart automation for dental practices — handling calls, insurance verification, recall, and reactivation so your team can focus fully on patient care.",
    tier: "gold"
  },
  {
    name: "Pearl",
    logoUrl: "/images/sponsors/pearl.png",
    link: "https://discover.hellopearl.com/dental-wisdom/",
    blurb: "Leading dental AI platform for real-time pathology detection, practice analytics, and insurance verification — helping practices deliver better care and grow production.",
    tier: "gold"
  },
  {
    name: "TheraBreath",
    logoUrl: "/images/sponsors/therabreath.png",
    link: "https://www.therabreath.com/",
    blurb: "Dentist-formulated oral health products trusted by millions — TheraBreath's clinically tested rinses, toothpastes, and sprays target the root causes of bad breath and gum issues.",
    tier: "gold"
  },
  {
    name: "APEX",
    logoUrl: "/images/sponsors/apex.png",
    link: "https://apexreimbursement.com/dental-wisdom/",
    blurb: "PPO analysis and revenue cycle management consulting for dental practices — APEX Reimbursement Specialists helps practices increase collections, renegotiate fees, and maximize insurance revenue.",
    tier: "gold"
  },

  /* ── SILVER ───────────────────────────────────────────── */
  {
    name: "Ultradent",
    logoUrl: "/images/sponsors/ultradent.png",
    link: "https://www.ultradent.com/",
    blurb: "Global leader in professional dental products — from whitening and bonding to endodontics and hygiene, Ultradent's clinician-developed innovations set the standard for simplicity and quality.",
    tier: "silver"
  },
  {
    name: "Nobel Biocare",
    logoUrl: "/images/sponsors/nobel-biocare.png",
    link: "https://www.nobelbiocare.com/",
    blurb: "Pioneer and global leader in implant dentistry — Nobel Biocare's evidence-based solutions for full-arch and single-tooth restoration are trusted by clinicians in over 80 countries.",
    tier: "silver"
  },
  {
    name: "Zolli Candy",
    logoUrl: "/images/sponsors/zolli-candy.png",
    link: "https://www.zollicandy.com/",
    blurb: "The world's first clinically proven cavity-fighting candy — sugar-free, kid-loved, and dentist-approved, Zolli Candy makes it easy to promote healthy habits without sacrificing joy.",
    tier: "silver"
  },
  {
    name: "Blue Sky Bio",
    logoUrl: "/images/sponsors/blue-sky-bio.png",
    link: "https://blueskybio.com/",
    blurb: "Affordable, powerful implant planning software and surgical guide design tools — Blue Sky Bio gives clinicians everything they need to plan and deliver precise, predictable implant outcomes.",
    tier: "silver"
  },
  {
    name: "Adin",
    logoUrl: "/images/sponsors/adin.png",
    link: "https://www.adin-implants.com/",
    blurb: "Israeli-engineered implant systems distributed in over 40 countries — Adin delivers high primary stability and proven clinical performance at a price that makes implants more accessible.",
    tier: "silver"
  },
  {
    name: "Dental Processing Solutions",
    logoUrl: "/images/sponsors/dental-processing-solutions.png",
    link: "https://dentalprocessingsolutions.com/",
    blurb: "Streamlined payment processing and billing solutions built for dental practices — reducing administrative friction, improving cash flow, and simplifying how you collect from patients and insurers.",
    tier: "silver"
  },

  /* ── BRONZE / SUPPORTING ──────────────────────────────── */
  {
    name: "AAFE",
    logoUrl: "/images/sponsors/aafe.png",
    link: "https://facialesthetics.org/",
    blurb: "The American Academy of Facial Esthetics offers hands-on training in Botox, fillers, and facial aesthetics for dental and medical professionals — expanding your clinical scope and practice revenue.",
    tier: "bronze"
  },
  {
    name: "CG Insurance Group",
    logoUrl: "/images/sponsors/gc-insurance-group.png",
    link: "https://cginsurancegroup.com/dental-wisdom/",
    blurb: "Comprehensive insurance solutions tailored for dental professionals — protecting your practice, team, and livelihood with coverage that understands the unique needs of dentistry.",
    tier: "bronze"
  },
  {
    name: "Pul Dental",
    logoUrl: "/images/sponsors/pul-dental.png",
    link: "https://puldental.com/",
    blurb: "Innovative tools and accessories that make wearing and removing clear aligners and retainers easier for patients — boosting compliance, comfort, and satisfaction throughout treatment.",
    tier: "bronze"
  },
  {
    name: "The Altair Hotel",
    logoUrl: "/images/sponsors/the-altair-hotel.png",
    link: "https://www.thealtairhotel.com",
    blurb: "The Altair Bay Harbor is a boutique Shabbos-friendly luxury hotel in Miami's Bay Harbor Islands — the official conference hotel of Dental Wisdom 2027, offering comfort, community, and exceptional hospitality.",
    tier: "bronze"
  },
  {
    name: "Pizza Biza",
    logoUrl: "/images/sponsors/pizza-bizza.png",
    link: "https://www.pizzabiza.com/",
    blurb: "Beloved kosher pizza right in Miami — the go-to spot for Dental Wisdom conference-goers looking for a great meal with great company.",
    tier: "bronze"
  },
  {
    name: "Citron Films",
    logoUrl: "/images/sponsors/citron-films.png",
    link: "https://www.citronfilms.com/",
    blurb: "Done-for-you video production for practices and businesses — Citron Films crafts cinematic, compelling content that builds trust, drives new leads, and tells your story with real impact.",
    tier: "bronze"
  },
  {
    name: "Wonderful Dental",
    logoUrl: "/images/sponsors/wonderful-dental.png",
    link: "https://wonderfuldental.com/",
    blurb: "Award-winning, dentist-developed prophy paste and fluoride varnish in delicious, kid-approved flavors — made in the USA, dye-free, and rated #1 for taste by patients and hygienists alike.",
    tier: "bronze"
  }
];
