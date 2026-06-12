# Dental Wisdom Website Reference Specification v2.0
**Build-Ready Master — supersedes v1**

**Changes from v1**: build runs in Claude Code with a GitHub repo from day one; Tailwind CDN replaced by one shared custom stylesheet with design tokens; conference sub-navigation added; Privacy Policy page added; Google Sheets publishing steps and fallback behavior specified; Open Items listed at the end. Everything else is verbatim from v1.

**Date**: June 12, 2026  
**Goal**: A modern, premium, calm-yet-joyful website that reflects the true Dental Wisdom experience — high-quality cross-specialty learning in a relaxed, intentional, warm Jewish community environment with space to learn, connect, rest, and recharge.

**Vibe Keywords**: Calm luxury • Warm community • Intentional • Joyful • Premium but approachable

---

## 1. Site Architecture (Final)

**11 content pages (plus a custom 404)**

| Page                  | File            | Purpose                                      | Update Method     | Build Order |
|-----------------------|-----------------|----------------------------------------------|-------------------|-------------|
| Main Conference       | `index.html`    | Core 2027 sales + experience page            | Static HTML       | **1st**     |
| Dental Wisdom Live    | `live.html`     | Monthly online CE + calendar                 | Google Sheet      | 2nd         |
| Deals                 | `deals.html`    | Searchable + filterable partner offers       | Google Sheet      | 3rd         |
| Giving (MDA)          | `giving.html`   | Tzedaka / Ambulance fundraiser               | Static            | 4th         |
| Terms & Conditions    | `terms.html`    | Legal page                                   | Static            | 5th         |
| Privacy Policy        | `privacy.html`  | Privacy page (text in §9)                    | Static            | 5th (with Terms) |
| Agenda                | `agenda.html`   | Full detailed schedule                       | Google Sheet      | 6th         |
| Speakers              | `speakers.html` | Speaker profiles + bios                      | Static            | 7th         |
| Want to Sponsor       | `sponsor.html`  | Full sponsorship Q&A + inquiry               | Static            | 8th         |
| Want to Lecture       | `lecture.html`  | Full lecturing Q&A + application             | Static            | 9th         |
| FAQ                   | `faq.html`      | Conference FAQ (includes Accessibility)      | Static            | 10th        |

**Top Navigation** (on every page):  
**Conference** | **Live** | **Deals** | **Giving**

**Footer Links** (on every page):  
Want to Sponsor? • Want to Lecture? • Terms & Conditions • Privacy Policy • FAQs • Accessibility

**Conference Sub-Navigation** (conference pages only — `index.html`, `agenda.html`, `speakers.html`, `faq.html`):
A slim secondary bar under the main header: Overview • Agenda • Speakers • FAQ • **Register** (accent button). It appears only within the conference section, so Live, Deals, and Giving stay uncluttered.

---

## 2. Tech Stack & Design Decisions (Locked)

- **Hosting**: GitHub Pages (free)
- **Framework**: Clean HTML + one shared custom stylesheet (`css/styles.css`, design tokens as CSS variables) + vanilla JavaScript. *(Changed from Tailwind CDN: the CDN build is a runtime script not recommended for production; a hand-written stylesheet is faster, avoids flash-of-unstyled-content, and is easier to maintain. Identical visual result.)*
- **Dynamic Content**: Google Sheets published as public CSV + Papa Parse (Deals, Live CE, Agenda)
- **Forms**: Jotform (direct links + floating Join modal)
- **Images**: Hosted in GitHub repo `/images` folder (optimized). Total recommended: **25–35 images** across the entire site for premium feel without heavy loading.
- **Logo**: Clean text + tooth icon placeholder for v1 (easy to swap)
- **Fonts**: Playfair Display (headings) + Inter (body) — generous, luxurious spacing and letter-spacing
- **Palette (proposed — tune once in Session 1, then freeze)**: ivory `#FBF9F4` page background • sand `#F1ECE2` alternate sections • ink `#1E2A38` text • sea-glass teal `#2F7E76` primary accent • warm coral `#D2603A` CTAs • soft gold `#D9A441` highlights • muted slate `#5C6670` secondary text
- **Animations**: Subtle only (fade-ins on scroll, gentle card lifts, smooth modal entrance). Never flashy.
- **Performance**: Optimized (lazy loading, reasonable image count, clean code)
- **Mobile Menu**: Clean full-screen overlay (premium default)
- **Background Texture**: Very subtle soft texture on some sections for premium, non-flat feel
- **Gallery Carousel**: Premium quality with smooth drag/swipe + momentum + subtle captions (user-controlled, not auto-advance)

---

## 3. Persistent Elements (on every page)

- Top navigation
- **Floating “Join the Network” button** (bottom-right, visible on all pages)
  - Clearly states: **“For Dentists Only”**
  - Opens modal with Jotform (you will build)
  - Uses the approved “For Dentists Only” messaging
- Consistent footer with Accessibility link

---

## 4. Main Conference Page (`index.html`) – Exact Flow & Text

### Hero Section
- **Background**: Full-bleed elegant looping aerial/drone beach video (muted, calm, golden hour feel)
  - **Recommended Video**: [Pexels – Calm Aerial Beach at Golden Hour](https://www.pexels.com/video/aerial-view-of-a-beach-at-sunset-854251/) (or similar high-quality slow drone shot over turquoise water). Silent/muted.
- **Exact Text** (broken into clean lines):
  ```
  The Dental Wisdom Conference isn’t your typical dental CE event.

  You’ll engage with high-quality, cross-specialty lectures and hands-on education at a relaxed pace that allows real learning and absorption. Time to think. Space to connect with colleagues. Room to rest, recharge, and rejuvenate — professionally, socially, and spiritually. In a warm Jewish environment.

  March 3–6, 2027
  20 CE Cross-specialty Credits
  Miami, FL

  4 nights & Shabbos at The Altair.
  Early bird pricing for a limited time.
  ```
  *Note: other 2027 materials say “March 3–7” (arrival-to-departure). Confirm one phrasing site-wide — see Open Items.*
- **Button**: “Reserve Your Place Today” → `https://pci.jotform.com/form/252998619124166`

### Conference Flyer Section
Large, prominent placement right after the hero. Use your existing conference flyer JPG.

### Overview + Pricing Section
**Exact Text** (from your PDF, broken into clean sections):
```
The 2027 Dental Wisdom Conference
Created by Jewish Dentists, for Jewish Dentists

The Dental Wisdom Conference was created to give Jewish dentists a chance to reset. To engage with meaningful, high-quality continuing education while finding calm and clarity. To reconnect with your work and yourself in the company of like-minded colleagues. An experience designed to support professional excellence, spiritual growth, and lasting community connection.

Set at The Altair Hotel in Bay Harbor Islands, the location is as intentional as the experience itself. Warm hospitality, ocean breezes, and a peaceful atmosphere support both deep focus and restoration.
```

**LIMITED TIME ONLY! Pricing Block**:
- **$1,995** Dentist
- **$1,595** Student
- **$2,995** Vendor Dentist

Note: We expect the conference to sell out. As we approach the event, both attendance prices and hotel room rates will increase.

### Additional Overview / Community Feel
**Exact Text** (from your PDF):
```
CE That Lets You Invest in Your Career, Your Wellness, and Your Community

Join us for the 2027 Dental Wisdom Conference — our third time hosting this extraordinary event — taking place March 3–6, 2027 at The Altair Hotel in Bay Harbor Islands, Miami.

We’re preparing an incredible gathering filled with inspiring shiurim, beautiful minyanim, meaningful cross-specialty lectures and hands-on CE, delicious glatt kosher meals, uplifting Shabbos programming, and genuine connections. This is a beautifully curated dental conference experience where you’ll be fully immersed in the true warmth of the Dental Wisdom community.
```

### A Glimpse of the Dental Wisdom Conference
**Exact Text** (from your PDF):
```
A Glimpse of the Dental Wisdom Conference

Last year’s Dental Wisdom Conference brought together Jewish dentists and their families for an unforgettable getaway of learning, community, and connection. Here’s a quick look at what made it special.
```

**YouTube Embed**: `https://www.youtube.com/watch?v=OQZFNNB9YE0`

### Conference Details Section
Use the full detailed content from your PDF (broken into clean, readable sections). Include links to:
- “View Full Agenda” → `/agenda.html`
- “View Featured Speakers” → `/speakers.html`

### What You Will Experience
**Exact Text** (from your PDF):
```
WHAT YOU WILL EXPERIENCE

• Engage with the Dental Wisdom community in cross-specialty lectures and hands-on classes
• Experience a warm and distinctive Jewish environment that fosters meaningful connections
• Enjoy elegant family-friendly kosher events thoughtfully designed for both professionals and their families
• Benefit from convenient on-site minyanim and inspiring Shiurim throughout
• Join an unforgettable Shabbos together with optional premium Shabbos meals

This is not simply a dental conference. This is a 3-day ‘Pesach Program’ experience designed for Jewish dentists.
```

### Photo Gallery from Past Conferences
Clean premium carousel/slider (user-controlled).  
You will replace placeholder images with photos from your Google Drive / Google Photos folder.

### Sponsors Section
Clean logo grid or tier summary + “Want to Sponsor?” link in footer.

### Final CTA
“Reserve Your Seat Before We Run Out of Space!” button → Registration link

### Have Questions?
Info@DentalWisdom.org  
The Dental Wisdom Conference is managed and organized by Dental Wisdom.

---

## 5. Dedicated Pages – Summary

**Want to Sponsor (`sponsor.html`)**  
Use the full Q&A content you provided. Format with clean accordions for premium readability.

**Want to Lecture (`lecture.html`)**  
Use the full Q&A content you provided. Format with clean accordions.  
**CTA Text**: “Apply to Speak”

**Agenda (`agenda.html`)**  
Tabbed by day. Placeholder schedule (same for all three days for v1). Powered by Google Sheet.

**Speakers (`speakers.html`)**  
Grid of 16 placeholder speaker cards. Each includes: Name, Specialty, Short Bio, Sample Course Title + Time. Click opens modal. Clearly marked as placeholders. Easy to update later.

**Dental Wisdom Live (`live.html`)**

**Overall Goal of the Page**: Explain the monthly online CE program clearly and professionally, show upcoming sessions, and encourage community participation. Keep it calm, focused, and premium (not salesy).

**Page Structure & Content**:

### 1. Hero / Intro Section
**Headline**: Dental Wisdom Live

**Subheadline**: Monthly continuing education designed exclusively for the Dental Wisdom network.

**Supporting Text**:
We have launched an online continuing education (CE) series exclusively for the Dental Wisdom network. The program features live, interactive sessions where leading industry experts and experienced practitioners present cutting-edge techniques, practical solutions, and relevant products for modern dental practice — followed by real-time Q&A.

**CTA Button**: Browse Upcoming Sessions (smooth scroll to Upcoming section)

---

### 2. What You Get Section
**Headline**: Every Dental Wisdom Live session delivers:

**Layout**: 4 clean, elegant cards or well-spaced points

- Cutting-edge techniques and practical solutions from leading industry experts and experienced practitioners
- Real-time Q&A for meaningful engagement
- Valuable CE credits with every session
- Exciting giveaways in every session

**Closing Line**:
This is high-value, interactive education designed to help you stay at the forefront of modern dentistry while strengthening our community.

---

### 3. Upcoming Sessions Section
**Headline**: Upcoming Sessions

**Subheadline**: Live, interactive CE — exclusively for the Dental Wisdom network.

**Layout**: Clean card grid (powered by Google Sheet)

Each card should include:
- Session Title
- Date & Time
- Short description (1–2 lines)
- Presenter name + title
- “Register” button (links to per-session Jotform)

**Note below the grid**:
All sessions are free for Dental Wisdom network members. Session times are chosen based on member input for maximum convenience.

---

### 4. Past Sessions Section
**Headline**: Past Sessions

**Layout**: Similar card style to Upcoming Sessions.

For each past session card:
- Session Title
- Date
- Presenter
- “Watch Recording” button (if a recording becomes available later)
- Note: “Recording available upon request for network members” (or similar, if you decide to offer this later)

**Note**: Currently, sessions are live-only. This section can be expanded in the future if recordings are added.

---

### 5. How It Works Section
**Headline**: How Dental Wisdom Live Works

**Simple 3-step layout** (clean cards or numbered list):

1. **Join the Network**  
   Become part of the Dental Wisdom WhatsApp community to receive session invitations, reminders, and updates.

2. **Register for Sessions**  
   Sign up for the sessions that interest you. All sessions are free for active network members.

3. **Attend Live & Earn CE**  
   Join the live session, participate in Q&A, and receive your CE credits after the session.

---

### 6. Final CTA Section
**Headline**: Stay connected and keep growing.

**Text**:
Dental Wisdom Live is one of the many ways we support our community year-round — with practical education, meaningful connection, and access to leading voices in dentistry.

**Buttons**:
- Join the WhatsApp Network (opens floating Join modal)
- View All Upcoming Sessions (scrolls to section)

---

**Update Method**: Upcoming and Past sessions are powered by Google Sheet (see Google Sheets section below) so you can easily add, remove, or update sessions without touching code.

**FAQ (`faq.html`)**  
Includes all the detailed content you provided + new drafted items:
- What happens after I register? (confirmed text)
- What should I expect as a first-time attendee? (drafted)
- Accessibility (drafted)

**Accessibility** also has a short discreet link in the footer that jumps to the FAQ item.

---

## 6. Google Sheets Templates (Ready to Use)

You will create and publish **three** Google Sheets as public CSV.

**How to publish each sheet**: File → Share → Publish to web → choose the tab → CSV → Publish, then paste the URLs here:
- DEALS_CSV_URL: `TBD`
- LIVE_CSV_URL: `TBD`
- AGENDA_CSV_URL: `TBD`

Published CSVs are public to anyone with the link (fine — this is public site content) and edits appear on the site within ~5 minutes. If a sheet ever fails to load, the page shows a calm “couldn’t load right now — please refresh” note instead of breaking.

### Deals Sheet
**Columns**:
- Title
- Description (short)
- Link (URL)
- Category
- ImageURL (optional)

**Sample Row**:
| Title              | Description                                      | Link                  | Category                  | ImageURL |
|--------------------|--------------------------------------------------|-----------------------|---------------------------|----------|
| ClearCorrect      | Exclusive conference pricing on aligner cases   | https://example.com  | Key Dental Solutions     | (optional) |

### Live CE Sheet
**Columns**:
- Title
- Date
- Time
- Description (short)
- RegisterLink (Jotform URL)
- Status (Upcoming / Past)
- ImageURL (optional)

### Agenda Sheet
**Columns**:
- Day
- Time
- Title
- Speaker
- Location

**Sample Row**:
| Day       | Time              | Title                        | Speaker             | Location          |
|-----------|-------------------|------------------------------|---------------------|-------------------|
| Thursday  | 6:00 – 7:00 AM   | Daf Yomi Shiur              | Rabbi David Friedman| Prayer Room      |

---

## 7. Image Asset List (Recommended for Premium Feel)

**Total recommended: 25–35 optimized images** across the entire site.

| Section                        | Recommended Images | Notes |
|--------------------------------|--------------------|-------|
| Hero                           | 1 video            | Aerial/drone beach, golden hour, slow & calm |
| Conference Flyer               | 1 JPG              | Your existing flyer, large & prominent |
| Overview + Pricing             | 3–4 photos         | Warm venue/lifestyle shots (pool, ocean, elegant spaces) |
| Photo Gallery                  | 12–20 photos       | Past conferences (networking, lectures, meals, Shabbos, beach) |
| Speakers                       | 16 headshots       | Professional-looking placeholder or real photos |
| Giving (Tzedaka)               | 2–3 photos         | Community, Israel-related, or meaningful impact images |
| Sponsor / Lecture pages        | 2–3 photos         | Professional / community feel |

**Tip**: Optimize images (WebP where possible) and keep file sizes reasonable for fast loading.

---

## 8. 404 Error Page

**Professional, calm tone** (no beach reference):

**Page Not Found**

We’re sorry, but the page you’re looking for doesn’t exist or may have been moved.

It’s possible the link is outdated or the page has been removed.

Please return to the homepage or contact us if you need assistance.

**Button**: Return to Homepage

---

## 9. Privacy Policy (Draft – Short & Professional)

**Privacy Policy**

Dental Wisdom LLC respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you register for or attend the Dental Wisdom Conference or interact with our website and community.

**Information We Collect**  
We collect personal information you provide during registration (name, email, phone, professional information, dietary requirements, etc.) and when you apply to join the Dental Wisdom WhatsApp network.

**How We Use Your Information**  
We use your information to process registrations, communicate updates and confirmations, facilitate hotel bookings, manage the community, and improve our events.

We do not sell your personal information.

**Sharing of Information**  
We may share limited attendee information with conference sponsors or partners **only** if you explicitly opt in during registration. You may withdraw consent at any time.

**Data Security**  
We take reasonable measures to protect your information. No method of transmission over the internet is 100% secure.

**Your Rights**  
You may request access to, correction of, or deletion of your personal information by emailing info@dentalwisdom.org.

**Changes to This Policy**  
We may update this Privacy Policy from time to time. Material changes will be communicated to registered attendees.

**Contact**  
For questions about this Privacy Policy, please email info@dentalwisdom.org.

---

## 10. Accessibility Statement (Added to FAQ + Short Footer Link)

**Accessibility**  
We are committed to making the Dental Wisdom Conference and website accessible to all participants. The venue complies with applicable ADA requirements. We provide reasonable accommodations upon advance written request (at least 30 days prior) to info@dentalwisdom.org.

---

## 11. First-Time Attendee FAQ Item (Drafted)

**What should I expect as a first-time attendee?**  
The Dental Wisdom Conference is intentionally intimate, warm, and unhurried. Expect high-quality cross-specialty lectures and hands-on education in a relaxed atmosphere with built-in time for reflection and genuine connection with colleagues. The event includes beautiful minyanim, inspiring shiurim, glatt kosher meals, and uplifting Shabbos programming. Many attendees bring their spouses and children. The overall vibe is professional yet welcoming and community-oriented — designed for both professional growth and personal rejuvenation in a warm Jewish environment.

---

## 12. "What Happens After I Register?" (Confirmed Text)

**What happens after I register?**  
After you complete your registration, you will receive an immediate receipt and confirmation email. If you selected hotel accommodations during registration, you will receive a separate email from The Altair Hotel to finalize your room booking. As the conference approaches, you will receive additional communications with important details, including how to optionally reserve Shabbos meals for you and your family.

---

## 13. Build Process (Claude Code — Sequential)

1. All building happens in **Claude Code** (Claude Desktop → Code tab) inside a GitHub repo created on day one — no copy-pasting HTML out of a chat. Claude Code automatically reads `CLAUDE.md` and this spec at the start of every session.
2. **One page per session**, in the build order above. Each session: short plan → build → Ben previews in the browser → tweaks → commit.
3. We only move to the next page after Ben confirms the previous one (unchanged from v1).
4. Shared elements (header, conference sub-nav, footer, Join modal, `styles.css`) are built once in Session 1 and reused everywhere; any later change to a shared element is applied to every page in that same session.
5. Launch: swap placeholders for real content, mobile QA pass, enable GitHub Pages, point the domain’s DNS at it (Google Workspace MX records stay untouched), retire Squarespace.

---

**This document is now complete and ready.**

All major decisions are locked. All drafted content is included. All supporting materials (Google Sheet templates, Image Asset List, placeholder speakers structure, video recommendation) are specified.

**Next Step**  
1. Resolve the Open Items below (one short message is enough).
2. Phase 1 setup (~1 hour): create the GitHub repo, install Claude Desktop and open the Code tab, put `CLAUDE.md` + this spec in the project folder, and add `/content` (pasted page copy) and `/images-source` (flyer + photos).
3. First Claude Code prompt: **“Read CLAUDE.md and SITE_SPEC.md, propose a plan for index.html, then build it.”**

---

## Open Items

1. **Date phrasing**: hero says “March 3–6, 2027”; other 2027 materials say “March 3–7”. Pick one site-wide.
2. **dentalwisdomconference.com**: should it redirect to the new site at launch?
3. **Design lock**: fonts + vibe match the light “calm luxury” mockup direction. Confirm, or ask to see the dark-luxe alternative before Session 1.
4. **Ben’s pre-build to-dos**: build the Join-the-Network Jotform; create + publish the 3 Google Sheets and paste the CSV URLs into §6; gather the flyer JPG and 25–35 photos into `/images-source`; paste the full Sponsor Q&A, Lecture Q&A, FAQ, and Terms text into `/content` (this spec references that copy but does not contain it).
