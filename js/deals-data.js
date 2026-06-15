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
     description     - 1-2 sentence description
     link            - Website URL (deal page / referral link)
     promo           - Optional promo code or offer text
     imageUrl        - Path to the logo image in images/deals/
   ========================================================= */

window.DEALS_DATA = [
  {
    title: "Dental Supplies",
    shortDescription: "Crazy Dental Prices",
    category: "Key Dental Solutions",
    description: "Private buyers' club offering the best dental products at the best prices with a 110% price match guarantee.",
    link: "https://www.crazydentalprices.com/dentalwisdom",
    promo: "10% off First Order (WISDOM10) + Free Ground Shipping (WISDOMSHIP)",
    imageUrl: "images/deals/dental-supplies.png"
  },
  {
    title: "Dental Equipment",
    shortDescription: "All Practice Solutions",
    category: "Key Dental Solutions",
    description: "High-quality dental equipment including chairs, imaging, surgical tools, and more. In-house financing available.",
    link: "https://allpracticesolutions.com/dental-wisdom/",
    promo: "Exclusive Deals for Dental Wisdom – Call Rod!",
    imageUrl: "images/deals/dental-equipment.png"
  },
  {
    title: "orthobrain",
    shortDescription: "Clear Aligners",
    category: "Key Dental Solutions",
    description: "Integrate orthodontics into your practice easily and profitably with orthodontist-led planning and SimplyClear aligners.",
    link: "https://orthobrain.com/",
    promo: "",
    imageUrl: "images/deals/orthobrain.png"
  },
  {
    title: "Emerald Dental Lab",
    shortDescription: "Dental Lab",
    category: "Key Dental Solutions",
    description: "Full-service digital dental laboratory in Port Washington, NY, offering fixed, removable, implant, and sleep appliances.",
    link: "https://www.emeralddentallab.com/promo/",
    promo: "",
    imageUrl: "images/deals/emerald-dental-lab.png"
  },
  {
    title: "MB Precious Metals (Dental Refining)",
    shortDescription: "Scrap Metal Refining",
    category: "Key Dental Solutions",
    description: "Trusted buyer of dental scrap metal (fillings, crowns, bridges) for over 50 years. Top-dollar payments.",
    link: "https://mbpreciousmetals.com/",
    promo: "",
    imageUrl: "images/deals/mb-precious-metals.png"
  },
  {
    title: "Apex Reimbursement Specialists",
    shortDescription: "Revenue Cycle",
    category: "Key Dental Solutions",
    description: "PPO and revenue cycle management consulting to increase practice revenue and efficiency.",
    link: "https://apexreimbursement.com/dental-wisdom/",
    promo: "Free Consult",
    imageUrl: "images/deals/apex-reimbursement.jpg"
  },
  {
    title: "Lasso MD",
    shortDescription: "Dental Marketing",
    category: "Key Dental Solutions",
    description: "AI-powered digital marketing, website design, and growth platform built exclusively for dentists.",
    link: "https://www.lassomd.com/work-with-us/partners/dental-wisdom",
    promo: "10-20% Off + Free Photo & Video Shoot (Limited Time)",
    imageUrl: "images/deals/lasso-md.png"
  },
  {
    title: "Credit Card Processing",
    shortDescription: "Payment Processing",
    category: "Key Dental Solutions",
    description: "Secure, efficient payment processing solutions with preferred pricing for Dental Wisdom members.",
    link: "https://dentalprocessingsolutions.com/",
    promo: "Free Onboarding Call",
    imageUrl: "images/deals/credit-card-processing.png"
  },
  {
    title: "Jim the OSHA & HIPAA Man",
    shortDescription: "OSHA & HIPAA",
    category: "Key Dental Solutions",
    description: "Simple, affordable OSHA & HIPAA compliance training and binders with office walk-through and guaranteed protection.",
    link: "https://www.theoshaman.com/",
    promo: "~10% off for Dental Wisdom members",
    imageUrl: "images/deals/jim-osha-hipaa.png"
  },
  {
    title: "AAFE (American Academy of Facial Esthetics)",
    shortDescription: "Botox & Filler Training",
    category: "Key Dental Solutions",
    description: "#1 Botox, Filler, and TMJ training for dental professionals. Integrate new services and increase production.",
    link: "https://facialesthetics.org/",
    promo: "Use code DW100 for $100 discount",
    imageUrl: "images/deals/aafe.png"
  },
  {
    title: "Pearl",
    shortDescription: "Dental AI",
    category: "Practice Services & Support",
    description: "Leading dental AI platform for real-time pathology detection, practice intelligence, and insurance verification.",
    link: "https://discover.hellopearl.com/dental-wisdom/",
    promo: "",
    imageUrl: "images/deals/pearl.png"
  },
  {
    title: "Dental Intelligence",
    shortDescription: "Practice Analytics",
    category: "Practice Services & Support",
    description: "End-to-end practice performance platform with analytics, patient engagement, and revenue tools.",
    link: "https://www.dentalintel.com/referral-partner/dental-wisdom",
    promo: "$1,000 Off Set-Up + $100 Off Monthly",
    imageUrl: "images/deals/dental-intelligence.png"
  },
  {
    title: "Mango Voice",
    shortDescription: "Phone System",
    category: "Practice Services & Support",
    description: "Enterprise-grade VoIP phone system popular in dental offices with AI call summaries and integrations.",
    link: "https://mangovoice.com/dental-wisdom/",
    promo: "2 Months Off 1st Year",
    imageUrl: "images/deals/mango-voice.png"
  },
  {
    title: "Stratus",
    shortDescription: "Insurance Verification",
    category: "Practice Services & Support",
    description: "AI-powered insurance eligibility verification and front desk automation to reduce denials and save staff time.",
    link: "https://www.usestratus.com/dental-wisdom",
    promo: "Waived Setup + Special Trial Package",
    imageUrl: "images/deals/stratus.png"
  },
  {
    title: "Cherry",
    shortDescription: "Patient Financing",
    category: "Practice Services & Support",
    description: "Patient financing platform that helps practices get paid upfront while offering patients affordable monthly payments.",
    link: "https://withcherry.com/dental-wisdom/?utm_source=dental-wisdom&utm_medium=partner-page&leadsource=referral",
    promo: "",
    imageUrl: "images/deals/cherry.png"
  },
  {
    title: "Dental Warranty",
    shortDescription: "Patient Warranty Plans",
    category: "Practice Services & Support",
    description: "Nationwide patient smile protection plan that covers post-treatment surprises at no added cost to the practice.",
    link: "https://go.dentalwarrantycorp.com/wisdom",
    promo: "Discount on Startup Fee through Dental Wisdom",
    imageUrl: "images/deals/dental-warranty.png"
  },
  {
    title: "Pearly",
    shortDescription: "Billing & Collections",
    category: "Practice Services & Support",
    description: "Automated patient billing, A/R collection, payment plans, and membership programs for dental practices.",
    link: "https://www.pearly.co/partner/dental-wisdom-pearly-partnership",
    promo: "30-day Free Trial + 10% Discount",
    imageUrl: "images/deals/pearly.png"
  },
  {
    title: "Ubiquity Retirement + Savings",
    shortDescription: "401(k) Plans",
    category: "Practice Services & Support",
    description: "Flat-fee 401(k) solutions with hands-on support for dental practices and their teams.",
    link: "https://www.myubiquity.com/partners/dental-wisdom",
    promo: "Free Consultation + Plan Migration & Setup Discounts",
    imageUrl: "images/deals/ubiquity.png"
  },
  {
    title: "Masserano Practice Design & Development",
    shortDescription: "Practice Design",
    category: "Practice Services & Support",
    description: "Turn-key solutions for dental practice startups, expansions, relocations, and transitions.",
    link: "https://www.masseranopractices.com/",
    promo: "Complimentary Consultation",
    imageUrl: "images/deals/masserano.png"
  },
  {
    title: "QuickBooks",
    shortDescription: "Accounting Software",
    category: "Practice Services & Support",
    description: "Industry-standard accounting software for managing finances, payroll, and expenses.",
    link: "https://quickbooks.partnerlinks.io/ibvvgku1t9am",
    promo: "30% off for 6 months (exclusive)",
    imageUrl: "images/deals/quickbooks.png"
  },
  {
    title: "Oriental Trading Company",
    shortDescription: "Patient Prizes & Toys",
    category: "Practice Services & Support",
    description: "Great source for dental prizes, toys, and fun rewards for patients and staff.",
    link: "https://goto.orientaltrading.com/c/6309674/80519/1985",
    promo: "",
    imageUrl: "images/deals/oriental-trading.png"
  },
  {
    title: "Draftss",
    shortDescription: "Graphic Design",
    category: "Practice Services & Support",
    description: "Unlimited graphic design, UI/UX, and web development on a flat monthly subscription.",
    link: "https://draftss.com/?via=dentalwisdom",
    promo: "",
    imageUrl: "images/deals/draftss.png"
  },
  {
    title: "Google Workspace",
    shortDescription: "Email & Productivity",
    category: "Practice Services & Support",
    description: "Professional email, file sharing, video chat, and productivity tools for dental offices.",
    link: "https://referworkspace.app.goo.gl/5oGK",
    promo: "Starter plan ~$7 per user/month",
    imageUrl: "images/deals/google-workspace.png"
  },
  {
    title: "Splashtop",
    shortDescription: "Remote Access",
    category: "Practice Services & Support",
    description: "Reliable remote access and remote support software for dental practices.",
    link: "https://referral.splashtop.com/mQF8Mh0",
    promo: "",
    imageUrl: "images/deals/splashtop.png"
  },
  {
    title: "Harmonious",
    shortDescription: "Payroll & HR",
    category: "Practice Services & Support",
    description: "Payroll and HR platform that integrates with Dentrix and Open Dental.",
    link: "https://www.hrmonious.com/dental",
    promo: "3 months of free payroll for new Dental Wisdom clients",
    imageUrl: "images/deals/harmonious.png"
  },
  {
    title: "Dental Recruiter (In-Office Staff)",
    shortDescription: "Staff Recruiting",
    category: "Staffing & Recruiting",
    description: "Specialized dental recruitment for in-office staff across boutique, restorative, and cosmetic practices.",
    link: "https://dentalcareerservices.com/",
    promo: "Mention Dental Wisdom to Barry",
    imageUrl: "images/deals/dental-recruiter.png"
  },
  {
    title: "Reach (Virtual Dental Assistants)",
    shortDescription: "Virtual Assistants",
    category: "Staffing & Recruiting",
    description: "Dedicated virtual dental assistants for front and back office tasks. Save up to 50% on labor costs.",
    link: "https://lp.getreach.co/dentalwisdom",
    promo: "$500 Off First Month",
    imageUrl: "images/deals/reach.png"
  },
  {
    title: "Princess Dental Staffing",
    shortDescription: "Dental Staffing",
    category: "Staffing & Recruiting",
    description: "Quick access to qualified dental temps and permanent hires (assistants, hygienists, front office, dentists).",
    link: "https://www.princessdentalstaffing.com/?via=dentalwisdom",
    promo: "",
    imageUrl: "images/deals/princess-dental-staffing.png"
  },
  {
    title: "Sam Waller - LiveWell Capital (Financial Advisor)",
    shortDescription: "Financial Planning",
    category: "Financial Management & Insurance",
    description: "Comprehensive financial planning, retirement, estate, and insurance solutions specifically for dentists.",
    link: "https://www.livewellcapital.com/",
    promo: "",
    imageUrl: "images/deals/livewell-capital.png"
  },
  {
    title: "CG Insurance Group",
    shortDescription: "Practice Insurance",
    category: "Financial Management & Insurance",
    description: "Specialized insurance solutions for dental practices including malpractice, general liability, property, and workers' comp.",
    link: "https://cginsurancegroup.com/dental-wisdom/",
    promo: "",
    imageUrl: "images/deals/cg-insurance.png"
  },
  {
    title: "Student Loan Advisor",
    shortDescription: "Student Loan Help",
    category: "Financial Management & Insurance",
    description: "Expert help navigating complex student loan forgiveness, repayment strategies, and tax optimization for dentists.",
    link: "https://www.studentloanplanner.com/dentalwisdom",
    promo: "$100 Off 1-1 Consult",
    imageUrl: "images/deals/student-loan-planner.png"
  },
  {
    title: "Hazorfim",
    shortDescription: "Judaica Silver",
    category: "Israel & Kosher",
    description: "Handcrafted sterling silver Judaica including Shabbat candlesticks, menorahs, and kiddush cups.",
    link: "https://hazorfim.com/",
    promo: "Use Code DentalWisdom for Free Gift",
    imageUrl: "images/deals/hazorfim.png"
  },
  {
    title: "Rockets into Roses",
    shortDescription: "Art & Jewelry",
    category: "Israel & Kosher",
    description: "Beautiful art and jewelry created from actual rockets that landed in Israel — symbols of resilience and hope.",
    link: "https://theisraelboutique.com/category/rocket-art/all-rocket-art/?a=dental",
    promo: "Code dental10 for 10% off",
    imageUrl: "images/deals/rockets-into-roses.png"
  },
  {
    title: "Pizza Biza",
    shortDescription: "Kosher Catering",
    category: "Israel & Kosher",
    description: "Upscale kosher catering specializing in artisanal pizzas and full event menus (NY tri-state & South Florida).",
    link: "https://www.pizzabiza.com/",
    promo: "",
    imageUrl: "images/deals/pizza-biza.jpg"
  },
  {
    title: "ArtScroll",
    shortDescription: "Jewish Books",
    category: "Israel & Kosher",
    description: "Premier publisher of Jewish books including Torah, Talmud, siddurim, and children's books.",
    link: "https://www.artscroll.com/WISDOM",
    promo: "",
    imageUrl: "images/deals/artscroll.png"
  },
  {
    title: "Nuts.com",
    shortDescription: "Nuts & Snacks",
    category: "Israel & Kosher",
    description: "Wide variety of nuts, dried fruit, snacks, and kosher products with bulk options.",
    link: "https://share.nuts.com/Benjamin19!a929aa044a!a",
    promo: "$20 Off Order",
    imageUrl: "images/deals/nuts-com.png"
  },
  {
    title: "Mulami",
    shortDescription: "Kosher Charcuterie",
    category: "Israel & Kosher",
    description: "Premium kosher charcuterie crafted with traditional Italian techniques using grass-fed beef.",
    link: "https://mulami.com/collections",
    promo: "15% Off with code DentalWisdom15%OFF",
    imageUrl: "images/deals/mulami.png"
  },
  {
    title: "Aufschnitt Meats",
    shortDescription: "Beef Jerky",
    category: "Israel & Kosher",
    description: "All-natural, gluten-free kosher beef jerky.",
    link: "https://www.aufschnittmeats.com/",
    promo: "50% off single packs with code DENTAL50 + Free shipping over $70",
    imageUrl: "images/deals/aufschnitt-meats.png"
  },
  {
    title: "My Tree",
    shortDescription: "Adopt-a-Tree Gifts",
    category: "Israel & Kosher",
    description: "Adopt an olive tree, grapevine, or whisky cask in Israel and receive premium bottles with your name on the label.",
    link: "https://www.mytree.org.il/partnership-1/dental-wisdom",
    promo: "Great promotional item for your office",
    imageUrl: "images/deals/my-tree.png"
  },
  {
    title: "Holy Oasis",
    shortDescription: "Israeli Olive Oil",
    category: "Israel & Kosher",
    description: "Israeli olive oil and products. Every purchase sends a Mishloach Manot to a soldier.",
    link: "https://www.holyoasis.com/",
    promo: "",
    imageUrl: "images/deals/holy-oasis.png"
  },
  {
    title: "Zolli Candy",
    shortDescription: "Sugar-Free Candy",
    category: "Israel & Kosher",
    description: "Dentist-recommended, sugar-free, cavity-fighting candy that reduces chair anxiety for patients.",
    link: "https://shop.zollipops.com/products/zolli-smiles-quarterly-5lbs-of-original-assorted-zollipops-hex-jar-coupons-and-brochures?selling_plan=4406477056&variant=46911495602432",
    promo: "Subscribe and Save 30%",
    imageUrl: "images/deals/zolli-candy.png"
  },
  {
    title: "Marcus by Goldman Sachs High-Yield Savings",
    shortDescription: "High-Yield Savings",
    category: "Personal & Miscellaneous",
    description: "High-yield online savings account with competitive APY, no fees, and strong mobile app.",
    link: "https://www.marcus.com/share/BEN-NBJ-Q1FB",
    promo: "~4% APY (fluctuates)",
    imageUrl: "images/deals/marcus-goldman-sachs.png"
  },
  {
    title: "Wealthfront",
    shortDescription: "Robo-Advisor",
    category: "Personal & Miscellaneous",
    description: "Leading robo-advisor with automated investing, tax-loss harvesting, and high-yield cash account.",
    link: "https://www.wealthfront.com/c/affiliates/invited/AFFD-QIKO-32DP-IFSV",
    promo: "Great option for hands-off investors",
    imageUrl: "images/deals/wealthfront.png"
  },
  {
    title: "Tesla Referral",
    shortDescription: "Tesla Referral",
    category: "Personal & Miscellaneous",
    description: "Purchase a Tesla using a referral link to receive buyer benefits.",
    link: "https://ts.la/stephen415125",
    promo: "",
    imageUrl: "images/deals/tesla.png"
  }
];
