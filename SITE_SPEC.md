# Dental Wisdom Website Reference Specification v2.0
**Build-Ready Master — supersedes v1**

**Changes from v1**: build runs in Claude Code with a GitHub repo from day one; Tailwind CDN replaced by one shared custom stylesheet with design tokens; conference sub-navigation added; Privacy Policy page added; Google Sheets publishing steps and fallback behavior specified; Open Items listed at the end. Everything else is verbatim from v1.

**Date**: June 12, 2026  
**Goal**: A modern, premium, calm-yet-joyful website that reflects the true Dental Wisdom experience — high-quality cross-specialty learning in a relaxed, intentional, warm Jewish community environment with space to learn, connect, rest, and recharge.

**Vibe Keywords**: Calm luxury • Warm community • Intentional • Joyful • Premium but approachable

---

## 1. Site Architecture (Final)

**13 content pages (plus a custom 404)**

<!-- TODO: Build order below for Speakers/Speaker FAQ/Sponsors/Sponsor FAQ/WhatsApp is provisional — finalize before we reach this part of the build. -->

| Page                  | File              | Purpose                                              | Update Method     | Build Order |
|-----------------------|-------------------|-------------------------------------------------------|-------------------|-------------|
| Main Conference       | `index.html`      | Core 2027 sales + experience page                    | Static HTML       | **1st**     |
| Dental Wisdom Live    | `live.html`       | Monthly online CE + calendar                         | Google Sheet      | 2nd         |
| Deals                 | `deals.html`      | Searchable + filterable partner offers               | Google Sheet      | 3rd         |
| Giving (MDA)          | `giving.html`     | Tzedaka / Ambulance fundraiser                       | Static            | 4th         |
| Terms & Conditions    | `terms.html`      | General site/community terms (links to Conference Terms) | Static       | 5th         |
| Conference Terms & Conditions | `conference-terms.html` | Conference-specific legal page (Attendees/Exhibitors) | Static     | 5th (with Terms) |
| Privacy Policy        | `privacy.html`    | Privacy page (text in §9)                            | Static            | 5th (with Terms) |
| Agenda                | `agenda.html`     | Full detailed schedule                               | Google Sheet      | 6th         |
| Speakers              | `speakers.html`   | View all speaker profiles + bios                     | Static            | 7th         |
| Speaker FAQ           | `speaker-faq.html`| FAQ + application for people who want to lecture     | Static            | 8th (TBD)   |
| Sponsors              | `sponsors.html`   | View all confirmed sponsors (~10-20 logos/list)      | Static            | 9th (TBD)   |
| Sponsor FAQ           | `sponsor-faq.html`| FAQ + inquiry for businesses who want to sponsor     | Static            | 10th (TBD)  |
| Join WhatsApp Group   | `whatsapp.html`   | Simple page with info/link to join the WhatsApp group | Static           | 11th (TBD)  |
| FAQ                   | `conference-faq.html` | Conference FAQ (includes Accessibility)          | Static            | 12th        |

**Top Navigation** (on every page):  
**Conference** | **Live** | **Deals** | **Giving**

**Footer** (on every page, 4 columns):
- **Dental Wisdom** — brand blurb + email
- **The Conference** — Overview, Agenda, Speakers, FAQs, Want to Sponsor?, Want to Lecture?
- **Programs** — Dental Wisdom Live, Deals, Giving, Join WhatsApp Group
- **Site** — Terms & Conditions, Privacy Policy, Accessibility

**Conference Sub-Navigation** (conference pages only — `index.html`, `agenda.html`, `speakers.html`, `conference-faq.html`):
A slim secondary bar under the main header: Overview • Agenda • Speakers • FAQ • **Register** (accent button). It appears only within the conference section, so Live, Deals, and Giving stay uncluttered.

---

## 2. Tech Stack & Design Decisions (Locked)

- **Hosting**: GitHub Pages (free)
- **Framework**: Clean HTML + one shared custom stylesheet (`css/styles.css`, design tokens as CSS variables) + vanilla JavaScript. *(Changed from Tailwind CDN: the CDN build is a runtime script not recommended for production; a hand-written stylesheet is faster, avoids flash-of-unstyled-content, and is easier to maintain. Identical visual result.)*
- **Dynamic Content**: Local data files in `/js` (Deals, Live CE, Agenda) — Ben requests changes in chat, Claude edits and commits. See §6.
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
  - Simple coral pill, label "Join the Network" (no "For Dentists Only" tag)
  - Opens modal with Jotform (you will build)
  - Modal intro text: "This community is for dental professionals — connect with the Dental Wisdom community for session invitations, reminders, exclusive deals, and updates." The "dentists only" criteria is also covered as a question in the Jotform application itself.
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

**Sponsors (`sponsors.html`)**  
View-only page for attendees: showcase/list of confirmed sponsors (~10-20), logos + names. <!-- TODO: layout (grid vs. tiers), copy, and link from index.html Sponsors section still to be worked out -->

**Sponsor FAQ (`sponsor-faq.html`)**  
Use the full sponsorship Q&A content you provided. Format with clean accordions for premium readability. <!-- TODO: CTA wording and footer link placement still to be worked out -->

**Speaker FAQ (`speaker-faq.html`)**  
Use the full lecturing Q&A content you provided. Format with clean accordions.  
**CTA Text**: “Apply to Speak”

**Join WhatsApp Group (`whatsapp.html`)**  
<!-- TODO: page content, copy, and WhatsApp invite link not yet provided. Simple page explaining the group + a join link/button. -->

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

---

**Want to Get Involved? (`live-present-sponsor.html`)**

Page for companies/organizations interested in sponsoring, presenting giveaways, vendor spotlights, or speaking as part of Dental Wisdom Live. Linked from the Dental Wisdom Live footer column as "Want to Get Involved?" <!-- TODO: filename still says live-present-sponsor.html — reconcile with the "Want to Get Involved?" title/URL naming at some point. -->

**Hero**: "Want to Get Involved?" / "Sponsorship, giveaways, and speaker opportunities with Dental Wisdom Live"

**Intro**: Dental Wisdom Live is our monthly online continuing education series, created exclusively for the Dental Wisdom network. We welcome aligned companies and organizations that genuinely want to support high-quality education and the growth of our community. Below are the most common ways companies can get involved.

**Why Get Involved with Dental Wisdom Live?**
- *What is the value of sponsoring or participating in Dental Wisdom Live?* Dental Wisdom Live reaches a highly engaged, targeted audience of Jewish dentists who are actively invested in their professional growth. Sessions are intentionally high-quality, practical, and community-oriented. Partnering with Dental Wisdom Live allows your brand to associate with trusted education while building authentic relationships within a close-knit professional network.

**Sponsorship Opportunities**
- *What sponsorship opportunities are available for Dental Wisdom Live?* We offer limited sponsorship opportunities for individual sessions as well as multi-session packages. These can include branding during the session, recognition in pre- and post-session communications, and other integrated touchpoints. Because we keep attendance and sponsorship intentionally limited, every partner receives meaningful visibility without overwhelming the educational experience.
- *Can my company sponsor an entire Dental Wisdom Live session?* Yes. Companies may sponsor individual sessions or a series of sessions. Session sponsorship typically includes branding, a short introduction, and the opportunity to support the educational content.

**Giveaways & Promotions**
- *Can sponsors offer giveaways or door prizes during a session?* Yes. We welcome relevant, professional giveaways that add value for attendees (such as product samples, educational resources, or tools). All giveaways must be pre-approved by the organizers to ensure they align with the educational and community-focused nature of the program.
- *Are there guidelines for giveaways?* Giveaways should be thoughtful and relevant to dental professionals. We generally avoid overly promotional or low-value items. Organizers reserve the right to approve or decline proposed giveaways.

**Vendor Spotlights**
- *Can we have a short vendor spotlight or introduction during a session?* Yes. Depending on the sponsorship level, we can include a brief (approximately 30–60 second) vendor spotlight or introduction at the beginning or end of a session. These spotlights are meant to be informative rather than sales-focused and must be pre-approved.
- *What is the difference between a vendor spotlight and a full presentation?* A vendor spotlight is a short, approved introduction or mention. A full presentation or sponsored educational segment would be considered a different level of involvement and is handled on a case-by-case basis to protect the educational integrity of the program.

**Speaker & Content Opportunities**
- *Can we recommend or select a speaker for a Dental Wisdom Live session?* Yes. We welcome thoughtful recommendations for speakers and topics, especially when they are paired with sponsorship support. All speakers and topics are ultimately selected by the Dental Wisdom team to ensure they meet our standards for quality, relevance, and alignment with our community values.
- *Can a sponsor deliver or co-present educational content?* In select cases, yes — particularly when the content is genuinely educational and not primarily promotional. These opportunities are evaluated individually to maintain the high educational standard our members expect.

**Other Ways to Get Involved**
- *Are there other ways for companies to support Dental Wisdom Live?* Yes. Other opportunities include: providing relevant resources or tools for attendees; supporting giveaways or prizes across multiple sessions; exploring multi-month or annual partnership packages. We are happy to discuss custom opportunities that align with both your goals and the values of the Dental Wisdom community.

**How to Get Started**
- *How do we inquire about getting involved with Dental Wisdom Live?* Please email us at Info@DentalWisdom.org with the subject line "Dental Wisdom Live Partnership Inquiry." In your message, please include: a brief overview of your company and what you offer; the type of involvement you're most interested in (session sponsorship, giveaways, speaker recommendation, etc.); any specific sessions or timing preferences you have in mind. We review all inquiries thoughtfully and will respond within a few business days.
- *Is there a formal application or prospectus?* We currently handle Dental Wisdom Live partnerships on a more personalized basis rather than through a public prospectus. This allows us to ensure every partnership feels like a natural fit for our community.

---

**FAQ (`conference-faq.html`)**  
Includes all the detailed content you provided + new drafted items:
- What happens after I register? (confirmed text)
- What should I expect as a first-time attendee? (drafted)
- Accessibility (drafted)

**Accessibility** also has a short discreet link in the footer that jumps to the FAQ item.

---

## 6. Page Data Files (no Google Sheets)

Deals, Live CE, and Agenda content each live in a small local data file in `/js`, loaded by the matching page. There is no Google Sheet and no CSV fetch — when Ben wants to add, change, or remove an entry, he tells Claude in chat and Claude edits the data file directly and commits.

### Deals data — `js/deals-data.js`
`window.DEALS_DATA` is an array of objects with these fields:
- title
- category
- shortDescription (1-3 word tagline shown on the card, e.g. "Dental AI")
- description (1-2 sentences)
- link (URL — also makes the logo image clickable)
- promo (optional — short text shown as a highlighted badge, e.g. "10% off")
- imageUrl (relative path to a logo in the repo, e.g. `images/deals/companyname.png`; leave blank if no logo yet)

**Sample entry**:
```js
{
  title: "ClearCorrect",
  category: "Key Dental Solutions",
  shortDescription: "Clear Aligners",
  description: "Exclusive conference pricing on aligner cases.",
  link: "https://example.com",
  promo: "10% off",
  imageUrl: "images/deals/clearcorrect.png"
}
```

### Live CE data — `js/live-data.js` (TBD)
Same idea, one object per session, with fields: title, date, time, description (short), registerLink (Jotform URL), status (Upcoming / Past), imageUrl (optional).

### Agenda data — `js/agenda-data.js` (TBD)
Same idea, one object per agenda item, with fields: day, time, title, speaker, location.

**Sample entry**:
```js
{ day: "Thursday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "Rabbi David Friedman", location: "Prayer Room" }
```

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

## 9. Privacy Policy (Final — built in privacy.html)

**Privacy Policy**

Effective Date: January 1, 2025
Last Updated: January 1, 2025

Dental Wisdom LLC, a Colorado LLC ("Dental Wisdom," "we," "us," or "our"), respects your privacy. This Privacy Policy explains how we collect, use, share, and protect personal information when you visit dentalwisdom.org (the "Site"), register for or attend the Dental Wisdom Conference, join Dental Wisdom Live or our WhatsApp community, or otherwise interact with us.

By using the Site or registering for our programs, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Site or provide us with personal information.

**Information We Collect**
We may collect:
- Contact details — name, email address, phone number, and mailing address.
- Registration information — professional/practice information, dietary requirements, accommodation preferences, and other details you provide when registering for the Conference, Dental Wisdom Live sessions, or to join our WhatsApp community.
- Communications — records of emails, WhatsApp messages, and other correspondence between you and Dental Wisdom.
- Website usage information — basic technical information such as browser type, device type, and pages visited, collected automatically through our website host and the third-party services described below.

We do not directly collect payment card numbers or other sensitive financial information on the Site. Where payment is required (for example, conference registration fees or hotel deposits), it is processed through our registration partner (Jotform) or directly with the hotel, subject to their own privacy and security practices.

**How We Collect Information**
We collect information:
- Directly from you, when you fill out a registration or contact form, send us an email, or join our WhatsApp community;
- Automatically, through basic website hosting logs and the third-party tools described below; and
- From our partners, such as The Altair Hotel, when needed to coordinate room bookings you've requested.

**How We Use Your Information**
We use the information we collect to:
- Process your registration for the Conference, Dental Wisdom Live sessions, or our WhatsApp community;
- Send confirmations, receipts, reminders, and updates about events and programs;
- Coordinate hotel accommodations you've requested;
- Communicate with you about Dental Wisdom programs, sessions, and community news;
- Operate, maintain, and improve the Site and our events; and
- Comply with applicable laws and enforce our Terms & Conditions.

**We Do Not Sell Your Information**
Dental Wisdom does not sell your personal information, and we do not share it with third parties for their own marketing purposes without your consent.

**How We Share Your Information**
We may share your information with:
- Service providers who help us run the Site and our programs, such as Jotform (registration and contact forms) and Google (fonts and, for video content, YouTube). These providers only use your information as needed to provide their services to us, under their own privacy policies.
- The Altair Hotel, to arrange accommodations you've specifically requested as part of your registration.
- Conference sponsors or partners, but only if you explicitly opt in (for example, by checking a box during registration). You may withdraw this consent at any time by emailing us.
- Legal or regulatory authorities, if required by law, subpoena, or other legal process.
- A successor organization, if Dental Wisdom is ever involved in a merger, sale, or transfer of its operations.

**Cookies and Similar Technologies**
The Site itself does not use advertising or analytics cookies to track you. Some pages include content from third-party services — such as Jotform registration forms and embedded YouTube videos — which may set their own cookies in accordance with their privacy policies. We encourage you to review the privacy policies of Jotform and YouTube/Google if you'd like to learn more about how they handle information.

**Joining Our WhatsApp Community**
If you choose to join the Dental Wisdom WhatsApp community, your phone number and any messages you send will be visible to other members of the group and are subject to WhatsApp's own privacy policy (operated by Meta). You can leave the group at any time.

**Data Retention**
We retain personal information for as long as needed to provide our services, maintain accurate records of our events and community, and comply with legal obligations — after which we delete or anonymize it.

**Data Security**
We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.

**Children's Privacy**
The Site is not directed to children under 16, and we do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us so we can delete it.

**Your Privacy Choices**
Wherever you live, you may contact us to:
- Ask what personal information we have about you;
- Ask us to correct inaccurate information;
- Ask us to delete your personal information; or
- Withdraw any consent you've given (for example, to share your information with a sponsor).

To make any of these requests, email us at info@dentalwisdom.org. We'll respond within a reasonable time, generally within 45 days.

**Links to Other Websites**
The Site may link to third-party websites (such as sponsor or partner sites). We are not responsible for the privacy practices of those sites and encourage you to review their policies.

**Changes to This Policy**
We may update this Privacy Policy from time to time. We'll post the revised policy on this page with an updated effective date, and where a change is significant, we'll do our best to let you know — for example, with a notice on the Site or an email to those who've registered for one of our programs.

**Contact Us**
If you have questions about this Privacy Policy or how we handle your information, email us at info@dentalwisdom.org.

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
4. **Ben’s pre-build to-dos**: build the Join-the-Network Jotform; gather the flyer JPG and 25–35 photos into `/images-source`; paste the full Sponsor Q&A, Lecture Q&A, FAQ, and Terms text into `/content` (this spec references that copy but does not contain it).
