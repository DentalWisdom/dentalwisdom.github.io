# Website Review: dentalwisdom.org — July 24, 2026

## Scope

All 17 live pages (homepage, 404, conference: agenda teaser, speakers teaser, sponsors, FAQ, new-speaker, new-sponsor, conference-terms; live, live-present; deals, deals-partner; whatsapp, whatsapp-policies; terms, privacy) plus the two not-yet-public draft pages (full Agenda and full Speakers in `_archive/`) and the two redirect stubs. Reviewed from source code, not a rendered browser view — copy, consistency, structure, and technical checks are exact; purely visual judgments (how spacing *feels* on screen) are inferred and marked as such. No changes were made.

## Executive Summary

The site is in very good shape — unusually consistent for a hand-maintained static site. Every page has a unique title, meta description, Open Graph tags, canonical link, skip link, and the same header/footer; all internal links resolve; all images have alt text; all social-share images exist; sitemap and robots are present; the stylesheet and script versions match on every page. The copy is warm, specific, and on-brand throughout.

What remains is polish: one embarrassing-if-noticed typo-level issue (a testimonial byline that reads as "Illinois" instead of "Israel"), a few small copy inconsistencies, a stale number on the speaker-application page, and a plan for the August 15 early-bird deadline, which is three weeks away and mentioned on two pages.

**Top priorities: #1 (Jerusalem, IL), #5 (Aug 15 plan), #4 (stale speaker count).**

## What's Working (protect these)

- **Consistency discipline.** Shared header/footer/nav are identical everywhere; `aria-current` is set correctly per page; the sub-nav appears on exactly the five pages it should. This is rare and valuable.
- **Technical hygiene.** One `<h1>` per page, descriptive titles/descriptions, no broken internal links, no missing images, correct social-share images per section, robots + sitemap present, hero video well under budget (2.4 MB), fonts loaded non-blocking, no stray hardcoded gold hex in page HTML (the slides deck has its own self-contained copy, which is fine).
- **Copy voice.** "Time to think. Space to connect…", the Shabbos menu descriptions, the testimonials — specific, sensory, and warm without being salesy. The FAQ is genuinely useful and answers real questions (transport, kids, Shabbos meal pricing).
- **Conversion path.** Every conference page funnels cleanly to the Jotform registration; the Register button is always visible in the sub-nav; early-bird urgency is stated plainly and honestly.
- **The teaser strategy** for Agenda/Speakers reads as intentional ("first look at the days ahead"), not broken.

## Findings (numbered for approval)

### Copy & accuracy

**1. Testimonial byline reads "Jerusalem, IL" — looks like Illinois.** *(Homepage, testimonial carousel — Dr. E.P.)* Every other byline uses US state abbreviations (Manhattan, NY · Miami, FL · Baltimore, MD), so "IL" scans as Illinois, which muddles the quote's whole point (flying in from Jerusalem). Fix: "Jerusalem, Israel". — **Impact: High (trust/credibility) · Effort: seconds**

**2. Hero fact line word order.** *(Homepage hero)* "20+ CE Cross-specialty Credits" is slightly garbled; natural order is "20+ Cross-Specialty CE Credits". — **Impact: Low · Effort: seconds**

**3. Time-format inconsistency in FAQ schedule.** *(FAQ, Thursday bullet)* "Afternoon lectures 2 PM–8:00 PM" mixes formats mid-range. Suggest "2:00–8:00 PM" (or "2–8 PM"). — **Impact: Low · Effort: seconds**

**4. Stale speaker count on the application page.** *(conference-new-speaker: "How many speakers do you typically select?")* Says "between 10–15 speakers in total." The 2027 program is heading for ~16+ named speakers across lectures, workshops, and shiurim. Suggest "roughly 15 speakers" or "12–16 speakers" so a prospective lecturer isn't misinformed. — **Impact: Medium · Effort: seconds**

**5. August 15 early-bird deadline — plan the sweep now.** *(Homepage ×3 spots: hero note, pricing box, accordion; FAQ closing section)* The deadline is 3 weeks away. On August 16 these all go stale simultaneously, and "Register now to lock in the early bird rate" becomes false advertising. Recommendation: decide the post-deadline pricing message now, and either (a) have me prep the replacement copy ready to commit on Aug 15, or (b) set a scheduled reminder. No copy change today — this is a decision + calendar item. — **Impact: High (time-sensitive) · Effort: planning now, minutes later**

### Consistency & UX

**6. Register button label varies.** Site-wide the primary CTA reads, in different places: "Reserve Your Place Today" (homepage ×2), "Secure Your Spot" (homepage pricing box), "Register Now" (FAQ), "Register for the 2027 Dental Wisdom Conference" (homepage experience section), "Join the 2027 Dental Wisdom Conference!" (video section), "Register" (sub-nav). Some variety is fine — but six variants of the same action dilutes it slightly. Suggest converging on two: "Register" (nav) and one big-button phrase (e.g. "Reserve Your Place Today") everywhere else. — **Impact: Low-Medium · Effort: minutes**

**7. Heading levels skip from h1 to h3 on five pages.** *(404, agenda teaser, speakers teaser, conference-sponsors, privacy)* Screen-reader users navigating by heading get a small jump; SEO crawlers mildly prefer clean hierarchies. Fix is changing those h3s to h2 (styling can stay identical via a class). — **Impact: Low (accessibility polish) · Effort: ~15 min across pages**

**8. Homepage "Featured Speakers" and "Full Agenda" buttons lead to "coming soon" teasers.** Not broken — but a visitor tapping "Featured Speakers" today gets a page with no speakers. Options: (a) leave as is (fine — teaser copy manages expectations), (b) soften the button labels until launch (e.g. "Agenda Preview" / "Speakers Preview"). Flagging so it's a choice, not an accident. — **Impact: Low · Effort: minutes**

### Marketing

**9. The homepage buries its strongest proof.** *(Inferred from source order — confirm visually.)* Testimonials and the 2026 recap video sit far down the page, after two pricing sections. First-time visitors deciding whether this event is "real" would be helped by seeing social proof before the ask. A light-touch option: move the testimonial carousel above (or directly beside) the first pricing block. This is a layout judgment — a screenshot/scroll-through from you would confirm whether it feels buried in practice. — **Impact: Medium (conversion) · Effort: moderate**

**10. Early-bird bonus repeated inconsistently.** The "first 25 attendees get a bottle of wine" bonus appears on the homepage accordion and FAQ hotel answer, but not near the main pricing boxes where the register decision happens. Consider one more mention next to pricing. (Also: is the "first 25" count still accurate? If most slots are claimed, the claim needs updating or removing.) — **Impact: Low-Medium · Effort: minutes + your confirmation of the count**

### Technical (no action needed — recorded for completeness)

- Redirect stubs (`/conference`, `/live-get-involved`) intentionally minimal — fine.
- 404 page keeps the Join WhatsApp button — per the July rule's allowed list, intentional.
- The `liveslides` deck self-contains its styles — intentional.
- Known-intentional items **not** flagged: "EST" time labels everywhere; "Dental Resident" vs "Dental Student or Dental Resident" wording difference between homepage and FAQ.

## Prioritized Action Plan

| # | Priority | Page(s) | Area | Issue | Effort |
|---|----------|---------|------|-------|--------|
| 1 | **High** | Homepage | Copy | "Jerusalem, IL" → "Jerusalem, Israel" | Seconds |
| 5 | **High** | Homepage, FAQ | Marketing | Aug 15 deadline sweep — decide + schedule now | Planning |
| 4 | Medium | New-speaker | Copy | "10–15 speakers" understates 2027 program | Seconds |
| 9 | Medium | Homepage | Marketing | Social proof sits below pricing — consider moving up | Moderate |
| 6 | Low-Med | Site-wide | UX | Six variants of the Register CTA label | Minutes |
| 10 | Low-Med | Homepage/FAQ | Marketing | Wine bonus placement + verify "first 25" still true | Minutes |
| 2 | Low | Homepage | Copy | "20+ CE Cross-specialty Credits" word order | Seconds |
| 3 | Low | FAQ | Copy | "2 PM–8:00 PM" time format | Seconds |
| 7 | Low | 5 pages | Technical | h1→h3 heading skips | ~15 min |
| 8 | Low | Homepage | UX | "Featured Speakers" button → empty teaser | Minutes |

*No changes have been made. Reply with the numbers to approve.*
