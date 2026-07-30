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
     promo   - Optional promo/offer line (e.g. discount code)
               shown as a bold gold line inside the pop-up, below
               the blurb. Mirrors the deals-page offer text.
     tier    - Sponsorship level, one of: "platinum", "gold",
               "silver", "bronze". Controls which tier the sponsor
               appears under on the Sponsors page (higher tiers are
               shown larger). Anything unrecognized falls to the
               bottom group. The Agenda page ignores tiers and
               shows everyone together.
     pastSponsor - Optional boolean. Set true for a sponsor who
               supported a past conference but isn't confirmed for
               2027 — shows a muted gray "Past Sponsor" pill on the
               card/modal. Ignored if `attending` is also true (the
               gold Attending pill takes priority).

   ========================================================= */

window.SPONSORS_DATA = [

  /* ── PLATINUM ─────────────────────────────────────────── */
  {
    name: "orthobrain",
    logoUrl: "/images/sponsors/orthobrain.webp",
    link: "https://orthobrain.com/",
    blurb: "Integrate orthodontics into your practice easily and profitably with orthodontist-led treatment planning and SimplyClear aligners — no orthodontic residency required.",
    tier: "platinum",
    attending: true
  },
  {
    name: "Touro College of Dental Medicine",
    logoUrl: "/images/sponsors/touro.webp",
    link: "https://dental.touro.edu/",
    blurb: "Touro College of Dental Medicine trains the next generation of compassionate, community-focused dental professionals with an emphasis on innovation, clinical excellence, and service.",
    tier: "platinum",
    attending: true
  },
  {
    name: "Emerald Dental Lab",
    logoUrl: "/images/sponsors/emerald-dental-lab.webp",
    link: "https://www.emeralddentallab.com/promo/",
    blurb: "Full-service digital dental laboratory in Port Washington, NY, crafting fixed, removable, implant, and sleep appliances — from precision crowns and bridges to implant prosthetics — with artisan quality and a turnaround you can count on.",
    tier: "platinum",
    attending: true,
    promo: "50% off Crowns & Free Scanner Promo"
  },
  {
    name: "LiveWell Capital",
    logoUrl: "/images/sponsors/livewell-capital.webp",
    link: "https://www.livewellcapital.com/",
    blurb: "Personalized wealth management and financial planning for dental professionals — helping dentists build, protect, and transfer lasting financial security.",
    tier: "platinum",
    attending: true
  },
  {
    name: "Crown Catapult",
    logoUrl: "/images/sponsors/crown-catapult.webp",
    link: "https://crowncatapult.com/",
    blurb: "The exclusive financial hub for dental professionals — access curated investment opportunities, expert practice valuations, and advisory services built by and for dentists.",
    blurbHtml: "<p><strong>The Financial Hub Built for Dentistry</strong></p><p>Dental professionals face uniquely complex financial decisions. Yet the financial industry has never built anything specifically for them. Crown Catapult changes that, bringing together practice valuations, retirement planning, wealth management, exclusive investment opportunities, and more into one trusted ecosystem, backed by institutional partners like UBS and US Bank.</p><p><em>Founded by dentists, for dentists.</em></p>",
    tier: "platinum",
    attending: true,
    videoUrl: "https://fast.wistia.net/embed/iframe/pww8p6dyz8?web_component=true&seo=true"
  },

  /* ── GOLD ─────────────────────────────────────────────── */
  {
    name: "MB Precious Metals",
    logoUrl: "/images/sponsors/mb-precious-metals.webp",
    link: "https://mbpreciousmetals.com/",
    blurb: "Trusted dental refiner with over 50 years of experience — MB Precious Metals comes to your office, assays your scrap on-site, and pays you the highest value for gold, silver, platinum, and palladium.",
    promo: "Call Adam for more info: 443-253-4143",
    tier: "gold",
    attending: true
  },
  {
    name: "Crazy Dental",
    logoUrl: "/images/sponsors/crazy-dental.webp",
    link: "https://www.crazydentalprices.com/dentalwisdom",
    blurb: "Members-only dental supply marketplace with over 40,000 products at guaranteed lowest prices — free to join, with AI-powered pricing so your practice never overpays for supplies.",
    tier: "gold",
    attending: true,
    promo: "10% off First Order (WISDOM10) + Free Ground Shipping (WISDOMSHIP)",
    photoUrl: "/images/deals/crazy-dental-flyer.webp"
  },
  {
    name: "Reach",
    logoUrl: "/images/sponsors/reach.webp",
    link: "https://lp.getreach.co/dentalwisdom",
    blurb: "Reach provides dedicated Virtual Assistants for dental practices across the United States, helping solve major challenges like staffing reliability, rising labor costs, and missed patient opportunities. Unlike traditional outsourcing, Reach offers fully dedicated team members who work directly within a practice's systems, supporting tasks like phone call handling, insurance verification, revenue cycle management, patient billing, and other administrative work.",
    tier: "gold",
    attending: true,
    promo: "$500 Off First Month",
    videoUrl: "https://www.youtube.com/embed/wKfRq7IJdtI"
  },
  {
    name: "Adin",
    logoUrl: "/images/sponsors/adin.webp",
    link: "https://www.adin-implants.com/",
    blurb: "Israeli-engineered implant systems distributed in over 40 countries — Adin delivers high primary stability and proven clinical performance at a price that makes implants more accessible.",
    tier: "gold",
    attending: true
  },
  {
    name: "APEX",
    logoUrl: "/images/sponsors/apex.webp",
    link: "https://apexreimbursement.com/dental-wisdom/",
    blurb: "PPO analysis and revenue cycle management consulting for dental practices — APEX Reimbursement Specialists helps practices increase collections, renegotiate fees, and maximize insurance revenue.",
    tier: "gold",
    attending: true,
    promo: "Free Consult"
  },
  {
    name: "TheraBreath",
    logoUrl: "/images/sponsors/therabreath.webp",
    link: "https://www.therabreath.com/",
    blurb: "Dentist-formulated oral health products trusted by millions — TheraBreath's clinically tested rinses, toothpastes, and sprays target the root causes of bad breath and gum issues.",
    blurbHtml: "<p>TheraBreath products are revolutionary because they attack the germs that cause bad breath. TheraBreath doesn't mask bad breath with heavy flavors, it fights bad breath bacteria. TheraBreath has been effective at helping to kill bad breath bacteria and the embarrassing odor they can cause.</p><p>TheraBreath has grown to have an extensive line of oral care products that include addressing issues such as gum health, teeth whitening, cavity prevention, and dry mouth symptoms.</p><p>TheraBreath's ongoing news and research is dedicated to educating and explaining the real causes behind dry mouth, changes in taste (including metallic, sour, and bitter), and bad breath — and how to alleviate these oral care issues using the TheraBreath products best suited to your personal oral health needs.</p>",
    tier: "silver",
    attending: true,
    videoUrl: "https://www.youtube.com/embed/pghluzNlhK0"
  },
  {
    name: "Pearl",
    logoUrl: "/images/sponsors/pearl.webp",
    link: "https://discover.hellopearl.com/dental-wisdom/",
    blurb: "Leading dental AI platform for real-time pathology detection, practice analytics, and insurance verification — helping practices deliver better care and grow production.",
    tier: "gold",
    pastSponsor: true,
    videoUrl: "https://fast.wistia.net/embed/iframe/tw1po9rwgm"
  },
  {
    name: "Lasso MD",
    logoUrl: "/images/sponsors/lasso-md.webp",
    link: "https://www.lassomd.com/work-with-us/partners/dental-wisdom",
    blurb: "A dentist-only growth platform that pairs AI-powered digital marketing with professional website design to help practices attract more ideal patients and grow revenue with less effort.",
    tier: "gold",
    pastSponsor: true,
    promo: "10-20% Off + Free Photo & Video Shoot (Limited Time)"
  },
  {
    name: "Straumann",
    logoUrl: "/images/sponsors/straumann.webp",
    link: "https://www.straumann.com/us/en/dental-professionals.html",
    blurb: "Straumann® is the flagship brand of the world's largest implant manufacturer group – the Straumann Group. Renowned as one of the most iconic brands in dentistry, we have a long-standing legacy of pioneering significant advancements in the field. We are at the forefront of expanding the scope of dental care by relentlessly and consistently providing excellence and transformational innovation to a global community of forward-thinking dental professionals.",
    tier: "gold",
    attending: true,
    videoUrl: "https://www.youtube.com/embed/_7-3kV_2KYk"
  },

  /* ── SILVER ───────────────────────────────────────────── */
  {
    name: "The Altair Hotel",
    logoUrl: "/images/sponsors/the-altair-hotel.webp",
    link: "https://www.thealtairhotel.com",
    blurb: "The Altair Hotel in Bay Harbor Islands, FL is the only Miami-area luxury hotel fully designed with kosher travel and Shabbos in mind — featuring manual hard keys, a Shabbos elevator, daily minyanim, and in-room hot plates and urns. It's also home to OVO, the premier kosher restaurant. The official partner of the Dental Wisdom Conference in March 2027.",
    tier: "silver",
    attending: true,
    videoUrl: "https://www.youtube.com/embed/W2e83n_MNGI"
  },
  {
    name: "Ultradent",
    logoUrl: "/images/sponsors/ultradent.webp",
    link: "https://www.ultradent.com/",
    blurb: "Global leader in professional dental products — from whitening and bonding to endodontics and hygiene, Ultradent's clinician-developed innovations set the standard for simplicity and quality.",
    tier: "silver",
    pastSponsor: true
  },
  {
    name: "TruAbutment",
    logoUrl: "/images/sponsors/tru-abutment.webp",
    link: "https://truabutment.com",
    blurb: "Irvine, California-based medical device manufacturer specializing in CAD/CAM titanium abutments. TruAbutment mills its abutments 'head-to-toe' on Swiss-type turning CNC machines — among the less than 1% of milling centers that do so without relying on third-party pre-milled interfaces — with tools for guided surgery, photogrammetry, and digital workflows that give technicians and clinicians greater precision and flexibility.",
    tier: "silver",
    pending: true,
    videoUrl: "https://www.youtube.com/embed/B1mbtUZxyeo"
  },
  /* ARCHIVED 2026-07-24 (Nobel Biocare removed from sponsor page — kept for future if needed):
  {
    name: "Nobel Biocare",
    logoUrl: "/images/sponsors/nobel-biocare.webp",
    link: "https://www.nobelbiocare.com/",
    blurb: "Pioneer and global leader in implant dentistry — Nobel Biocare's evidence-based solutions for full-arch and single-tooth restoration are trusted by clinicians in over 80 countries.",
    tier: "silver",
    pastSponsor: true
  },
  */
  {
    name: "Blue Sky Bio",
    logoUrl: "/images/sponsors/blue-sky-bio.webp",
    link: "https://blueskybio.com/",
    blurb: "Affordable, powerful implant planning software and surgical guide design tools — Blue Sky Bio gives clinicians everything they need to plan and deliver precise, predictable implant outcomes.",
    tier: "silver",
    pastSponsor: true
  },
  /* ARCHIVED 2026-07-28 (Ben: remove Dental Processing Solutions from the
     sponsor page — the "Credit Card Processing" deal stays on the Deals page
     but, with no sponsors-data entry, now shows no tier pill and sorts among
     non-sponsors in Run Your Practice). Restore by uncommenting.
  {
    name: "Dental Processing Solutions",
    logoUrl: "/images/sponsors/dental-processing-solutions.webp",
    link: "https://dentalprocessingsolutions.com/",
    blurb: "Streamlined payment processing and billing solutions built for dental practices — reducing administrative friction, improving cash flow, and simplifying how you collect from patients and insurers.",
    tier: "silver",
    pastSponsor: true,
    promo: "Free Onboarding Call"
  },
  */

  /* ARCHIVED 2026-07-21 (NuSmile dropped as sponsor):
  {
    name: "NuSmile",
    logoUrl: "/images/sponsors/nusmile.webp",
    link: "https://www.nusmile.com/",
    blurb: "Founded in Houston in 1991, NuSmile pioneered prefabricated esthetic pediatric crowns — introducing one of the world's first pre-veneered crowns and, in 2012, the NuSmile ZR full-coverage zirconia system with exclusive Try-In crowns that eliminate contamination and ensure reliable retention. Their line also includes bioactive luting cements, MTA pulp therapy materials, and posterior stainless steel crowns — all engineered specifically for pediatric dentistry.",
    tier: "silver",
    pending: true
  },
  */

  /* ── BRONZE / SUPPORTING ──────────────────────────────── */
  /* Attending sponsors are floated to the top of each tier automatically
     by js/sponsors.js (attendingFirst sort); order below is the tiebreak. */
  {
    name: "Citron Films",
    logoUrl: "/images/sponsors/citron-films.webp",
    link: "https://hc.citronfilms.com",
    blurb: "Strategy-first video production for practices and businesses. We find your real story, film it cinematically, and tell it in a way that earns trust and moves people to act.",
    tier: "bronze",
    attending: true,
    videoUrl: "https://www.youtube.com/embed/z019852_Zmk"
  },
  {
    name: "Pizza Biza",
    logoUrl: "/images/sponsors/pizza-bizza.webp",
    link: "https://www.pizzabiza.com/",
    blurb: "Beloved kosher pizza with locations in New York, New Jersey, and Miami — the go-to spot for Dental Wisdom conference-goers looking for a great meal with great company.",
    tier: "bronze",
    attending: true,
    videoUrl: "https://www.youtube.com/embed/f6UcDstN6Zg"
  },
  {
    name: "CG Insurance Group",
    logoUrl: "/images/sponsors/cg-insurance-group.webp",
    link: "https://cginsurancegroup.com/dental-wisdom/",
    blurb: "Comprehensive insurance solutions tailored for dental professionals — protecting your practice, team, and livelihood with coverage that understands the unique needs of dentistry.",
    tier: "bronze",
    attending: true
  },
  /* ARCHIVED 2026-07-28 (Ben: remove AAFE as a conference sponsor). Its Deals-page
     entry ("AAFE (American Academy of Facial Esthetics)") stays in Clinical &
     Chairside but now shows no tier pill and sorts among non-sponsors. Restore
     by uncommenting.
  {
    name: "AAFE",
    logoUrl: "/images/sponsors/aafe.webp",
    link: "https://facialesthetics.org/",
    blurb: "The American Academy of Facial Esthetics offers hands-on training in Botox, fillers, and facial aesthetics for dental and medical professionals — expanding your clinical scope and practice revenue.",
    tier: "bronze",
    pastSponsor: true,
    promo: "Use code DW100 for $100 discount"
  },
  */
  {
    name: "Pul Dental",
    logoUrl: "/images/sponsors/pul-dental.webp",
    link: "https://puldental.com/",
    blurb: "Innovative tools and accessories that make wearing and removing clear aligners and retainers easier for patients — boosting compliance, comfort, and satisfaction throughout treatment.",
    tier: "bronze",
    pastSponsor: true
  },
  {
    name: "Wonderful Dental",
    logoUrl: "/images/sponsors/wonderful-dental.webp",
    link: "https://wonderfuldental.com/",
    blurb: "Award-winning, dentist-developed prophy paste and fluoride varnish in delicious, kid-approved flavors — made in the USA, dye-free, and rated #1 for taste by patients and hygienists alike.",
    tier: "bronze",
    pastSponsor: true
  },
  {
    name: "Zolli Candy",
    logoUrl: "/images/sponsors/zolli-candy.webp",
    link: "https://www.zollicandy.com/",
    blurb: "The world's first clinically proven cavity-fighting candy — sugar-free, kid-loved, and dentist-approved, Zolli Candy makes it easy to promote healthy habits without sacrificing joy.",
    tier: "bronze",
    pastSponsor: true,
    promo: "Subscribe and Save 30%"
  }
];
