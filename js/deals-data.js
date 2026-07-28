/* =========================================================
   Dental Wisdom Deals — partner offer data
   This is the single source of truth for the Deals page
   (see SITE_SPEC.md §6). No Google Sheet is used for this
   page anymore — Ben tells Claude about changes (new deal,
   updated link, removed deal, etc.) and Claude edits this
   file directly.

   Fields per deal:
     title           - Company / deal name (required)
     shortDescription - 1-3 word tagline shown on the card
     category        - Used for the filter buttons
     description     - 1-2 sentence description (shown in detail modal)
     link            - Website URL (deal page / referral link)
     promo           - Optional promo code or offer text
     imageUrl        - Path to the logo image in images/deals/
     keywords        - Hidden search terms (not displayed; improves search)

   CATEGORIES & ORDER (locked logic — see CLAUDE.md "Deals page —
   categories, ordering & sponsor sync"):
     1. Clinical & Chairside      2. Grow Your Practice
     3. Run Your Practice         4. Staffing & Recruiting
     5. Money & Insurance         6. Israel, Kosher & Community
     7. Extras
   Within each category: conference sponsors first (Platinum → Gold →
   Silver → Bronze, tie-broken by conference-sponsors-page order), then
   non-sponsors. Sponsor status + tier come from js/sponsors-data.js;
   the tier pill on each deal card is looked up from there. "Clinical &
   Chairside" uses a manual hand-set order (Ben's call, do not auto-sort).
   ========================================================= */

window.DEALS_DATA = [

  /* ══════════════ 1. CLINICAL & CHAIRSIDE ══════════════
     Manual order (Ben, July 28 2026 — do NOT auto-sort to tier order):
     orthobrain, Crazy Dental, Emerald, Pearl, MB Precious, Adin,
     TruAbutment, TheraBreath, AAFE. */
  {
    title: "orthobrain",
    shortDescription: "Clear Aligners",
    category: "Clinical & Chairside",
    description: "Integrate orthodontics into your practice easily and profitably with orthodontist-led treatment planning and SimplyClear aligners — no orthodontic residency required.",
    link: "https://orthobrain.com/",
    promo: "",
    imageUrl: "/images/deals/orthobrain.webp",
    keywords: "orthodontics aligners Invisalign braces ortho treatment planning clear trays straightening teeth"
  },
  {
    title: "Dental Supplies",
    shortDescription: "Crazy Dental Prices",
    category: "Clinical & Chairside",
    description: "Members-only dental supply marketplace with over 40,000 products at guaranteed lowest prices — free to join, with AI-powered pricing so your practice never overpays for supplies.",
    link: "https://www.crazydentalprices.com/dentalwisdom",
    promo: "10% off First Order (WISDOM10) + Free Ground Shipping (WISDOMSHIP)",
    imageUrl: "/images/deals/dental-supplies.webp",
    flyerUrl: "/images/deals/crazy-dental-flyer.webp",
    keywords: "supplies consumables burs handpieces gloves composite anesthetic disposables infection control PPE materials resin bonding adhesive glass ionomer amalgam cavity liner matrix bands wedges polishing discs alginate PVS impression bite registration temporary crown dental stone local anesthetic cartridges lidocaine articaine topical anesthetic syringe needles nitrile masks N95 respirators face shields surface disinfectant sterilization pouches autoclave ultrasonic cleaner carbide diamond prophy angles cups paste scaler curettes explorer probe spoon excavator dental mirror cotton forceps fluoride varnish sealant endodontic files gutta-percha root canal sealer sodium hypochlorite EDTA elastic separators brackets cotton rolls gauze saliva ejectors HVE tips dental bibs"
  },
  {
    title: "Emerald Dental Lab",
    shortDescription: "Dental Lab",
    category: "Clinical & Chairside",
    description: "Full-service digital dental laboratory in Port Washington, NY, delivering precision-crafted restorations — crowns, bridges, implant prosthetics, fixed, removable, and sleep appliances — with artisan quality and turnaround you can count on.",
    link: "https://www.emeralddentallab.com/promo/",
    promo: "",
    imageUrl: "/images/deals/emerald-dental-lab.webp",
    keywords: "lab crowns bridges veneers implants dentures partials nightguards sleep appliances zirconia porcelain milling digital"
  },
  {
    title: "Pearl",
    shortDescription: "Dental AI",
    category: "Clinical & Chairside",
    description: "Leading dental AI platform for real-time pathology detection, practice analytics, and insurance verification — helping practices deliver better care and grow production.",
    link: "https://discover.hellopearl.com/dental-wisdom/",
    promo: "",
    imageUrl: "/images/deals/pearl.webp",
    keywords: "AI artificial intelligence radiograph x-ray detection caries cavities pathology second opinion practice analytics",
    videoUrl: "https://fast.wistia.net/embed/iframe/tw1po9rwgm"
  },
  {
    title: "MB Precious Metals (Dental Refining)",
    shortDescription: "Scrap Metal Refining",
    category: "Clinical & Chairside",
    description: "Trusted dental refiner with over 50 years of experience — MB Precious Metals comes to your office, assays your scrap on-site, and pays you the highest value for gold, silver, platinum, and palladium.",
    link: "https://mbpreciousmetals.com/",
    promo: "",
    imageUrl: "/images/deals/mb-precious-metals.webp",
    keywords: "scrap gold silver palladium platinum refining recycling crowns amalgam fillings PFM metal"
  },
  {
    title: "Adin",
    shortDescription: "Dental Implants",
    category: "Clinical & Chairside",
    description: "Israeli-engineered implant systems distributed in over 40 countries — Adin delivers high primary stability and proven clinical performance at a price that makes implants more accessible.",
    link: "https://www.adin-implants.com/",
    promo: "",
    imageUrl: "/images/deals/adin.webp",
    keywords: "implants dental implants Israeli implant system abutments guided surgery bone osseointegration primary stability affordable"
  },
  {
    title: "TruAbutment",
    shortDescription: "Custom Abutments",
    category: "Clinical & Chairside",
    description: "Irvine, California-based medical device manufacturer specializing in CAD/CAM titanium abutments. TruAbutment mills its abutments 'head-to-toe' on Swiss-type turning CNC machines — among the less than 1% of milling centers that do so without relying on third-party pre-milled interfaces — with tools for guided surgery, photogrammetry, and digital workflows that give technicians and clinicians greater precision and flexibility.",
    link: "https://truabutment.com",
    promo: "",
    imageUrl: "/images/deals/tru-abutment.webp",
    keywords: "abutment custom abutment titanium CAD CAM milling implant restoration guided surgery photogrammetry digital workflow"
  },
  {
    title: "TheraBreath",
    shortDescription: "Oral Care Products",
    category: "Clinical & Chairside",
    description: "TheraBreath products are revolutionary because they attack the germs that cause bad breath. TheraBreath doesn't mask bad breath with heavy flavors, it fights bad breath bacteria. TheraBreath has been effective at helping to kill bad breath bacteria and the embarrassing odor they can cause. TheraBreath has grown to have an extensive line of oral care products that include addressing issues such as gum health, teeth whitening, cavity prevention, and dry mouth symptoms. TheraBreath's ongoing news and research is dedicated to educating and explaining the real causes behind dry mouth, changes in taste (including metallic, sour, and bitter), and bad breath — and how to alleviate these oral care issues using the TheraBreath products best suited to your personal oral health needs.",
    link: "https://www.therabreath.com/",
    promo: "",
    imageUrl: "/images/deals/therabreath.webp",
    videoUrl: "https://www.youtube.com/embed/pghluzNlhK0",
    keywords: "therabreath oral care mouthwash rinse toothpaste bad breath halitosis bacteria dry mouth gum health teeth whitening cavity prevention Dr Harold Katz fresh breath"
  },
  {
    title: "AAFE (American Academy of Facial Esthetics)",
    shortDescription: "Botox & Filler Training",
    category: "Clinical & Chairside",
    description: "#1 Botox, Filler, and TMJ training for dental professionals. Integrate new services and increase production.",
    link: "https://facialesthetics.org/",
    promo: "Use code DW100 for $100 discount",
    imageUrl: "/images/deals/aafe.webp",
    keywords: "Botox filler injectables aesthetics esthetics facial cosmetic TMJ jaw pain neurotoxin dermal CE training course"
  },

  /* ══════════════ 2. GROW YOUR PRACTICE ══════════════ */
  {
    title: "Apex Reimbursement Specialists",
    shortDescription: "Revenue Cycle",
    category: "Grow Your Practice",
    description: "PPO analysis and revenue cycle management consulting for dental practices — APEX Reimbursement Specialists helps practices increase collections, renegotiate fees, and maximize insurance revenue.",
    link: "https://apexreimbursement.com/dental-wisdom/",
    promo: "Free Consult",
    imageUrl: "/images/deals/apex-reimbursement.webp",
    keywords: "PPO insurance fee schedule credentialing billing reimbursement revenue cycle management consulting RCM collections"
  },
  {
    title: "Lasso MD",
    shortDescription: "Dental Marketing",
    category: "Grow Your Practice",
    description: "AI-powered digital marketing, website design, and practice growth platform built exclusively for dentists — helping practices attract more ideal patients and grow revenue with less effort.",
    link: "https://www.lassomd.com/work-with-us/partners/dental-wisdom",
    promo: "10-20% Off + Free Photo & Video Shoot (Limited Time)",
    imageUrl: "/images/deals/lasso-md.webp",
    keywords: "marketing SEO Google Ads social media website design online reviews reputation branding content digital advertising"
  },
  {
    title: "Citron Films",
    shortDescription: "Video Production",
    category: "Grow Your Practice",
    description: "Strategy-first video production for practices and businesses. We find your real story, film it cinematically, and tell it in a way that earns trust and moves people to act.",
    link: "https://hc.citronfilms.com",
    promo: "",
    imageUrl: "/images/deals/citron-films.webp",
    videoUrl: "https://www.youtube.com/embed/z019852_Zmk",
    keywords: "video production videography marketing content promotional film storytelling brand practice video social media"
  },
  {
    title: "Dental Intelligence",
    shortDescription: "Practice Analytics",
    category: "Grow Your Practice",
    description: "End-to-end practice performance platform with analytics, patient engagement, and revenue tools.",
    link: "https://www.dentalintel.com/referral-partner/dental-wisdom",
    promo: "$1,000 Off Set-Up + $100 Off Monthly",
    imageUrl: "/images/deals/dental-intelligence.webp",
    keywords: "analytics dashboard KPI production collections scheduling hygiene reappointment patient engagement recall metrics"
  },
  {
    title: "Cherry",
    shortDescription: "Patient Financing",
    category: "Grow Your Practice",
    description: "Patient financing platform that helps practices get paid upfront while offering patients affordable monthly payments.",
    link: "https://withcherry.com/dental-wisdom/?utm_source=dental-wisdom&utm_medium=partner-page&leadsource=referral",
    promo: "",
    imageUrl: "/images/deals/cherry.webp",
    keywords: "financing payment plans monthly installment CareCredit alternative affordability case acceptance loans"
  },
  {
    title: "Dental Warranty",
    shortDescription: "Patient Warranty Plans",
    category: "Grow Your Practice",
    description: "Nationwide patient smile protection plan that covers post-treatment surprises at no added cost to the practice.",
    link: "https://go.dentalwarrantycorp.com/wisdom",
    promo: "Discount on Startup Fee through Dental Wisdom",
    imageUrl: "/images/deals/dental-warranty.webp",
    keywords: "warranty guarantee protection plan patient retention crown implant veneer redo failure case acceptance"
  },
  {
    title: "Draftss",
    shortDescription: "Graphic Design",
    category: "Grow Your Practice",
    description: "Unlimited graphic design, UI/UX, and web development on a flat monthly subscription.",
    link: "https://draftss.com/?via=dentalwisdom",
    promo: "",
    imageUrl: "/images/deals/draftss.webp",
    keywords: "graphic design logo branding social media flyers brochures newsletter creative subscription unlimited"
  },

  /* ══════════════ 3. RUN YOUR PRACTICE ══════════════ */
  {
    title: "Stratus",
    shortDescription: "Insurance Verification",
    category: "Run Your Practice",
    description: "AI-powered insurance eligibility verification and front desk automation to reduce denials and save staff time.",
    link: "https://www.usestratus.com/dental-wisdom",
    promo: "Waived Setup + Special Trial Package",
    imageUrl: "/images/deals/stratus.webp",
    keywords: "insurance verification eligibility benefits front desk automation denials claims ERA EOB coverage checking"
  },
  {
    title: "Pearly",
    shortDescription: "Billing & Collections",
    category: "Run Your Practice",
    description: "Automated patient billing, A/R collection, payment plans, and membership programs for dental practices.",
    link: "https://www.pearly.co/partner/dental-wisdom-pearly-partnership",
    promo: "30-day Free Trial + 10% Discount",
    imageUrl: "/images/deals/pearly.webp",
    keywords: "billing collections AR accounts receivable statements membership plans in-house subscription uninsured automation"
  },
  {
    title: "QuickBooks",
    shortDescription: "Accounting Software",
    category: "Run Your Practice",
    description: "Industry-standard accounting software for managing finances, payroll, and expenses.",
    link: "https://quickbooks.partnerlinks.io/ibvvgku1t9am",
    promo: "30% off for 6 months (exclusive)",
    imageUrl: "/images/deals/quickbooks.webp",
    keywords: "accounting bookkeeping payroll expenses invoicing taxes P&L profit loss balance sheet Intuit financial software"
  },
  {
    title: "Harmonious",
    shortDescription: "Payroll & HR",
    category: "Run Your Practice",
    description: "Payroll and HR platform that integrates with Dentrix and Open Dental.",
    link: "https://www.hrmonious.com/dental",
    promo: "3 months of free payroll for new Dental Wisdom clients",
    imageUrl: "/images/deals/harmonious.webp",
    keywords: "payroll HR human resources Dentrix Open Dental integration timekeeping PTO benefits onboarding staff management"
  },
  {
    title: "Google Workspace",
    shortDescription: "Email & Productivity",
    category: "Run Your Practice",
    description: "Professional email, file sharing, video chat, and productivity tools for dental offices.",
    link: "https://referworkspace.app.goo.gl/5oGK",
    promo: "Starter plan ~$7 per user/month",
    imageUrl: "/images/deals/google-workspace.webp",
    keywords: "Gmail email Google Drive Docs Sheets Meet Calendar professional domain office productivity cloud storage"
  },
  {
    title: "Splashtop",
    shortDescription: "Remote Access",
    category: "Run Your Practice",
    description: "Reliable remote access and remote support software for dental practices.",
    link: "https://referral.splashtop.com/mQF8Mh0",
    promo: "",
    imageUrl: "/images/deals/splashtop.webp",
    keywords: "remote access desktop control IT support work from home VPN screen sharing troubleshooting"
  },
  {
    title: "Jim the OSHA & HIPAA Man",
    shortDescription: "OSHA & HIPAA",
    category: "Run Your Practice",
    description: "Simple, affordable OSHA & HIPAA compliance training and binders with office walk-through and guaranteed protection.",
    link: "https://www.theoshaman.com/",
    promo: "~10% off for Dental Wisdom members",
    imageUrl: "/images/deals/jim-osha-hipaa.webp",
    keywords: "OSHA HIPAA compliance training safety binders regulations infection control bloodborne pathogens hazcom audit"
  },
  {
    title: "Masserano Practice Design & Development",
    shortDescription: "Practice Design",
    category: "Run Your Practice",
    description: "Turn-key solutions for dental practice startups, expansions, relocations, and transitions.",
    link: "https://www.masseranopractices.com/",
    promo: "Complimentary Consultation",
    imageUrl: "/images/deals/masserano.webp",
    keywords: "startup build-out design construction renovation office new practice expansion relocation transition de novo"
  },
  {
    title: "Oriental Trading Company",
    shortDescription: "Patient Prizes & Toys",
    category: "Run Your Practice",
    description: "Great source for dental prizes, toys, and fun rewards for patients and staff.",
    link: "https://goto.orientaltrading.com/c/6309674/80519/1985",
    promo: "",
    imageUrl: "/images/deals/oriental-trading.webp",
    keywords: "prizes toys kids children rewards goody bags trinkets stickers balloons party favors patient gifts"
  },
  {
    title: "Credit Card Processing",
    shortDescription: "Payment Processing",
    category: "Run Your Practice",
    description: "Secure, efficient payment processing solutions with preferred pricing for Dental Wisdom members.",
    link: "https://dentalprocessingsolutions.com/",
    promo: "Free Onboarding Call",
    imageUrl: "/images/deals/credit-card-processing.webp",
    keywords: "payments credit card merchant processing terminals swipe tap POS point of sale interchange rates fees"
  },

  /* ══════════════ 4. STAFFING & RECRUITING ══════════════ */
  {
    title: "Reach (Virtual Dental Assistants)",
    shortDescription: "Virtual Assistants",
    category: "Staffing & Recruiting",
    description: "Reach provides dedicated Virtual Assistants for dental practices across the United States, helping solve major challenges like staffing reliability, rising labor costs, and missed patient opportunities. Unlike traditional outsourcing, Reach offers fully dedicated team members who work directly within a practice's systems, supporting tasks like phone call handling, insurance verification, revenue cycle management, patient billing, and other administrative work.",
    link: "https://lp.getreach.co/dentalwisdom",
    promo: "$500 Off First Month",
    imageUrl: "/images/deals/reach.webp",
    videoUrl: "https://www.youtube.com/embed/wKfRq7IJdtI",
    keywords: "virtual assistant VA remote worker front desk scheduling insurance billing outsource offshore labor cost savings"
  },
  {
    title: "Dental Recruiter (In-Office Staff)",
    shortDescription: "Staff Recruiting",
    category: "Staffing & Recruiting",
    description: "Specialized dental recruitment for in-office staff across boutique, restorative, and cosmetic practices.",
    link: "https://dentalcareerservices.com/",
    promo: "Mention Dental Wisdom to Barry",
    imageUrl: "/images/deals/dental-recruiter.webp",
    keywords: "hiring recruiting staff dentist hygienist assistant front desk office manager headhunter placement job"
  },
  {
    title: "Princess Dental Staffing",
    shortDescription: "Dental Staffing",
    category: "Staffing & Recruiting",
    description: "Quick access to qualified dental temps and permanent hires (assistants, hygienists, front office, dentists).",
    link: "https://www.princessdentalstaffing.com/?via=dentalwisdom",
    promo: "",
    imageUrl: "/images/deals/princess-dental-staffing.webp",
    keywords: "temp staffing temporary fill-in hygienist assistant locum tenens coverage short notice per diem"
  },

  /* ══════════════ 5. MONEY & INSURANCE ══════════════ */
  {
    title: "LiveWell Capital",
    shortDescription: "Financial Planning",
    category: "Money & Insurance",
    description: "Personalized wealth management and financial planning for dental professionals — helping dentists build, protect, and transfer lasting financial security.",
    link: "https://www.livewellcapital.com/",
    promo: "",
    imageUrl: "/images/deals/livewell-capital.webp",
    keywords: "financial advisor wealth management retirement planning estate planning life insurance disability investments portfolio dentist"
  },
  {
    title: "Crown Catapult",
    shortDescription: "Dental Investor Hub",
    category: "Money & Insurance",
    description: "The Financial Hub Built for Dentistry. Dental professionals face uniquely complex financial decisions. Yet the financial industry has never built anything specifically for them. Crown Catapult changes that, bringing together practice valuations, retirement planning, wealth management, exclusive investment opportunities, and more into one trusted ecosystem, backed by institutional partners like UBS and US Bank. Founded by dentists, for dentists.",
    link: "https://crowncatapult.com/",
    promo: "",
    imageUrl: "/images/deals/crown-catapult.webp",
    videoUrl: "https://fast.wistia.net/embed/iframe/pww8p6dyz8?web_component=true&seo=true",
    keywords: "investing investments real estate syndications funds alternatives wealth building practice valuation retirement financial hub dentist built by dentists"
  },
  {
    title: "CG Insurance Group",
    shortDescription: "Practice Insurance",
    category: "Money & Insurance",
    description: "Comprehensive insurance solutions tailored for dental professionals — protecting your practice, team, and livelihood with coverage that understands the unique needs of dentistry.",
    link: "https://cginsurancegroup.com/dental-wisdom/",
    promo: "",
    imageUrl: "/images/deals/cg-insurance.webp",
    keywords: "insurance malpractice liability property casualty workers comp disability life BOE business overhead practice coverage"
  },
  {
    title: "Ubiquity Retirement + Savings",
    shortDescription: "401(k) Plans",
    category: "Money & Insurance",
    description: "Flat-fee 401(k) solutions with hands-on support for dental practices and their teams.",
    link: "https://www.myubiquity.com/partners/dental-wisdom",
    promo: "Free Consultation + Plan Migration & Setup Discounts",
    imageUrl: "/images/deals/ubiquity.webp",
    keywords: "401k retirement savings plan SIMPLE IRA SEP employer match employee benefits fiduciary flat fee"
  },
  {
    title: "Student Loan Advisor",
    shortDescription: "Student Loan Help",
    category: "Money & Insurance",
    description: "Expert help navigating complex student loan forgiveness, repayment strategies, and tax optimization for dentists.",
    link: "https://www.studentloanplanner.com/dentalwisdom",
    promo: "$100 Off 1-1 Consult",
    imageUrl: "/images/deals/student-loan-planner.webp",
    keywords: "student loans debt PSLF forgiveness IBR PAYE refinancing repayment dental school loans interest tax"
  },

  /* ══════════════ 6. ISRAEL, KOSHER & COMMUNITY ══════════════ */
  {
    title: "The Altair Hotel",
    shortDescription: "Official Conference Hotel",
    category: "Israel, Kosher & Community",
    description: "The Altair Hotel in Bay Harbor Islands, FL is the only Miami-area luxury hotel fully designed with kosher travel and Shabbos in mind — featuring manual hard keys, a Shabbos elevator, daily minyanim, and in-room hot plates and urns. It's also home to OVO, the premier kosher restaurant. The official partner of the Dental Wisdom Conference in March 2027.",
    link: "https://www.thealtairhotel.com",
    promo: "",
    imageUrl: "/images/deals/the-altair-hotel.webp",
    videoUrl: "https://www.youtube.com/embed/W2e83n_MNGI",
    keywords: "hotel lodging Miami Bay Harbor Islands Shabbos kosher luxury boutique conference hotel accommodation stay travel hospitality"
  },
  {
    title: "Zolli Candy",
    shortDescription: "Sugar-Free Candy",
    category: "Israel, Kosher & Community",
    description: "The world's first clinically proven cavity-fighting candy — sugar-free, kid-loved, and dentist-approved, Zolli Candy makes it easy to promote healthy habits without sacrificing joy.",
    link: "https://shop.zollipops.com/products/zolli-smiles-quarterly-5lbs-of-original-assorted-zollipops-hex-jar-coupons-and-brochures?selling_plan=4406477056&variant=46911495602432",
    promo: "Subscribe and Save 30%",
    imageUrl: "/images/deals/zolli-candy.webp",
    keywords: "sugar free candy lollipops xylitol cavity prevention kids dental health patient gift waiting room anxiety"
  },
  {
    title: "Pizza Biza",
    shortDescription: "Kosher Catering",
    category: "Israel, Kosher & Community",
    description: "Beloved kosher pizza with locations in New York, New Jersey, and Miami — the go-to spot for Dental Wisdom conference-goers looking for a great meal with great company.",
    link: "https://www.pizzabiza.com/",
    promo: "",
    imageUrl: "/images/deals/pizza-biza.webp",
    videoUrl: "https://www.youtube.com/embed/f6UcDstN6Zg",
    keywords: "kosher catering pizza event food New York NJ New Jersey Florida parties office lunch dairy milchig"
  },
  {
    title: "Hazorfim",
    shortDescription: "Judaica Silver",
    category: "Israel, Kosher & Community",
    description: "Handcrafted sterling silver Judaica including Shabbat candlesticks, menorahs, and kiddush cups.",
    link: "https://hazorfim.com/",
    promo: "Use Code DentalWisdom for Free Gift",
    imageUrl: "/images/deals/hazorfim.webp",
    keywords: "silver Judaica Shabbat candlesticks menorah chanukah kiddush cup havdalah seder plate Jewish gift Israel"
  },
  {
    title: "Rockets into Roses",
    shortDescription: "Art & Jewelry",
    category: "Israel, Kosher & Community",
    description: "Beautiful art and jewelry created from actual rockets that landed in Israel — symbols of resilience and hope.",
    link: "https://theisraelboutique.com/category/rocket-art/all-rocket-art/?a=dental",
    promo: "Code dental10 for 10% off",
    imageUrl: "/images/deals/rockets-into-roses.webp",
    keywords: "Israel support art jewelry rockets Kassam resilience hope solidarity boutique unique gift Zionist"
  },
  {
    title: "ArtScroll",
    shortDescription: "Jewish Books",
    category: "Israel, Kosher & Community",
    description: "Premier publisher of Jewish books including Torah, Talmud, siddurim, and children's books.",
    link: "https://www.artscroll.com/WISDOM",
    promo: "",
    imageUrl: "/images/deals/artscroll.webp",
    keywords: "Jewish books Torah Talmud siddur prayer book Chumash Gemara Mishna children learning Mesorah Jewish publishing"
  },
  {
    title: "Nuts.com",
    shortDescription: "Nuts & Snacks",
    category: "Israel, Kosher & Community",
    description: "Wide variety of nuts, dried fruit, snacks, and kosher products with bulk options.",
    link: "https://share.nuts.com/Benjamin19!a929aa044a!a",
    promo: "$20 Off Order",
    imageUrl: "/images/deals/nuts-com.webp",
    keywords: "nuts dried fruit snacks kosher bulk almonds cashews trail mix gift healthy office snack food"
  },
  {
    title: "Mulami",
    shortDescription: "Kosher Charcuterie",
    category: "Israel, Kosher & Community",
    description: "Premium kosher charcuterie crafted with traditional Italian techniques using grass-fed beef.",
    link: "https://mulami.com/collections",
    promo: "15% Off with code DentalWisdom15%OFF",
    imageUrl: "/images/deals/mulami.webp",
    keywords: "kosher meat charcuterie salami prosciutto beef glatt grass-fed Italian cured meats deli gourmet"
  },
  {
    title: "Aufschnitt Meats",
    shortDescription: "Beef Jerky",
    category: "Israel, Kosher & Community",
    description: "All-natural, gluten-free kosher beef jerky.",
    link: "https://www.aufschnittmeats.com/",
    promo: "50% off single packs with code DENTAL50 + Free shipping over $70",
    imageUrl: "/images/deals/aufschnitt-meats.webp",
    keywords: "kosher beef jerky snack gluten free natural meat protein on-the-go office snack gift"
  },
  {
    title: "My Tree",
    shortDescription: "Adopt-a-Tree Gifts",
    category: "Israel, Kosher & Community",
    description: "Adopt an olive tree, grapevine, or whisky cask in Israel and receive premium bottles with your name on the label.",
    link: "https://www.mytree.org.il/partnership-1/dental-wisdom",
    promo: "Great promotional item for your office",
    imageUrl: "/images/deals/my-tree.webp",
    keywords: "Israel olive oil wine whisky adopt tree unique gift personalized label support Israel agriculture"
  },
  {
    title: "Holy Oasis",
    shortDescription: "Israeli Olive Oil",
    category: "Israel, Kosher & Community",
    description: "Israeli olive oil and products. Every purchase sends a Mishloach Manot to a soldier.",
    link: "https://www.holyoasis.com/",
    promo: "",
    imageUrl: "/images/deals/holy-oasis.webp",
    keywords: "olive oil Israel soldiers Purim Mishloach Manot support IDF food gift kosher Holy Land"
  },

  /* ══════════════ 7. EXTRAS ══════════════ */
  {
    title: "Marcus by Goldman Sachs High-Yield Savings",
    shortDescription: "High-Yield Savings",
    category: "Extras",
    description: "High-yield online savings account with competitive APY, no fees, and strong mobile app.",
    link: "https://www.marcus.com/share/BEN-NBJ-Q1FB",
    promo: "~4% APY (fluctuates)",
    imageUrl: "/images/deals/marcus-goldman-sachs.webp",
    keywords: "savings HYSA high yield interest APY online bank Goldman Sachs emergency fund cash savings account"
  },
  {
    title: "Wealthfront",
    shortDescription: "Robo-Advisor",
    category: "Extras",
    description: "Leading robo-advisor with automated investing, tax-loss harvesting, and high-yield cash account.",
    link: "https://www.wealthfront.com/c/affiliates/invited/AFFD-QIKO-32DP-IFSV",
    promo: "Great option for hands-off investors",
    imageUrl: "/images/deals/wealthfront.webp",
    keywords: "robo advisor investing ETF tax loss harvesting passive portfolio automated financial planning cash account"
  },
  {
    title: "Tesla Referral",
    shortDescription: "Tesla Referral",
    category: "Extras",
    description: "Purchase a Tesla using a referral link to receive buyer benefits.",
    link: "https://ts.la/stephen415125",
    promo: "",
    imageUrl: "/images/deals/tesla.webp",
    keywords: "Tesla electric car EV Model 3 Model Y Model S referral discount vehicle auto"
  }

  /* ══════════════ ARCHIVED — off the Deals page (not deleted) ══════════════
     Dental Equipment / All Practice Solutions — removed at Ben's request
     July 28 2026. Restore by uncommenting and placing in a category.
  ,{
    title: "Dental Equipment",
    shortDescription: "All Practice Solutions",
    category: "Clinical & Chairside",
    description: "High-quality dental equipment including chairs, imaging, surgical tools, and more. In-house financing available.",
    link: "https://allpracticesolutions.com/dental-wisdom/",
    promo: "Exclusive Deals for Dental Wisdom – Call Rod!",
    imageUrl: "/images/deals/dental-equipment.webp",
    keywords: "chairs units x-ray cone beam CBCT panoramic digital imaging surgical instruments compressors sterilizers autoclaves"
  }
  */
];
