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

   NOTE: These 8 entries are SAMPLES so we can preview the
   feature. Tell Claude which real sponsors to show and they'll
   be swapped in here.
   ========================================================= */

window.SPONSORS_DATA = [
  {
    name: "orthobrain",
    logoUrl: "images/deals/orthobrain.png",
    link: "https://orthobrain.com/",
    blurb: "Integrate orthodontics into your practice easily and profitably with orthodontist-led planning and SimplyClear aligners."
  },
  {
    name: "Apex Reimbursement Specialists",
    logoUrl: "images/deals/apex-reimbursement.jpg",
    link: "https://apexreimbursement.com/dental-wisdom/",
    blurb: "PPO and revenue cycle management consulting to increase practice revenue and efficiency."
  },
  {
    name: "Pearl",
    logoUrl: "images/deals/pearl.png",
    link: "https://discover.hellopearl.com/dental-wisdom/",
    blurb: "Leading dental AI platform for real-time pathology detection, practice intelligence, and insurance verification."
  },
  {
    name: "Dental Intelligence",
    logoUrl: "images/deals/dental-intelligence.png",
    link: "https://www.dentalintel.com/referral-partner/dental-wisdom",
    blurb: "End-to-end practice performance platform with analytics, patient engagement, and revenue tools."
  },
  {
    name: "Cherry",
    logoUrl: "images/deals/cherry.png",
    link: "https://withcherry.com/dental-wisdom/?utm_source=dental-wisdom&utm_medium=partner-page&leadsource=referral",
    blurb: "Patient financing platform that helps practices get paid upfront while offering patients affordable monthly payments."
  },
  {
    name: "Lasso MD",
    logoUrl: "images/deals/lasso-md.png",
    link: "https://www.lassomd.com/work-with-us/partners/dental-wisdom",
    blurb: "AI-powered digital marketing, website design, and growth platform built exclusively for dentists."
  },
  {
    name: "Mango Voice",
    logoUrl: "images/deals/mango-voice.png",
    link: "https://mangovoice.com/dental-wisdom/",
    blurb: "Enterprise-grade VoIP phone system popular in dental offices with AI call summaries and integrations."
  },
  {
    name: "Dental Warranty",
    logoUrl: "images/deals/dental-warranty.png",
    link: "https://go.dentalwarrantycorp.com/wisdom",
    blurb: "Nationwide patient smile protection plan that covers post-treatment surprises at no added cost to the practice."
  }
];
