# CLAUDE.md — Dental Wisdom website

## What this is
Static marketing site for Dental Wisdom (dentalwisdom.org): the 2027 conference (flagship), Dental Wisdom Live monthly CE, partner Deals, plus supporting pages. All requirements and exact copy live in `SITE_SPEC.md` — read it before any work. Exact copy in the spec is final: never rewrite it, only format it. Anything missing gets a visible placeholder plus `<!-- TODO: ... -->`.

**All 16 pages + 404 are built.** The site is in maintenance/content-update mode — no new pages planned currently. `giving.html` is deferred; it lives in `_archive/` only.

**Tooth Memory game (July 2026):** A Simon-style dental memory mini-game lives on TWO pages — the bottom of `404.html` and its own page `toothmemorygame/index.html` (URL `dentalwisdom.org/toothmemorygame`; the CamelCase `/ToothMemoryGame` also works because the 404 case-insensitive redirect lowercases it). The game's code is SHARED in `css/toothmemory.css` and `js/toothmemory.js` (loaded by both pages) — edit those files, not one page, and the change applies to both. Each page only holds the `.tm` section markup inline. The 112 dentist jokes and all game logic are in `js/toothmemory.js`. Share button points at `dentalwisdom.org/toothmemorygame`. Best score is saved to the visitor's own browser (localStorage). HUD has sound (🔊), new-game/reset (↺), and a colorblind-friendly numbers toggle (🔢, faint 1–9 on the teeth) — the HUD buttons are per-page markup, so add new ones to BOTH pages. Bump `?v=` on the two asset links in both pages when editing them (currently css `?v=4`, js `?v=2`).

**Teaser pages (July 2026):** `conference-agenda/index.html` and `conference-speakers/index.html` currently serve short "coming soon" teaser pages. The full built versions are archived in `_archive/conference-agenda-full.html` and `_archive/conference-speakers-full.html`; `js/agenda-data.js` + `js/agenda.js` are ready but not loaded by any live page. Restore the full pages when Ben says the lineup is ready to publish.

**Gobbie Cohn temporarily hidden (July 28, 2026):** Ben asked to hide Gobbie Cohn's name because his attendance is unconfirmed — restore when Ben says he's coming. Two spots, both marked with dated "HIDDEN"/"restore when he tells us" comments: (1) `js/agenda-data.js` Friday 6:15 PM line — `speaker` set to `""`, session line + APEX/CG sponsor credit kept (Ben's call); to restore, put back `speaker: "Gobbie Cohn", speakerUrl: "/conference-speakers#speaker-gobbie-cohn"`. (2) `_archive/conference-speakers-full.html` — his whole speaker card is wrapped in an HTML comment (`CARD HIDDEN 2026-07-28` … `END HIDDEN 2026-07-28 (Gobbie Cohn)`); to restore, delete those two comment lines. Nothing was deleted.

## Open follow-ups
- **Once the full agenda is finalized AND all speaker cards are done** (all "Speaker TBD" / "Lecture Title TBD" slots in `js/agenda-data.js` filled in, all ~16 speaker cards added to `conference-speakers/index.html`), revisit every line on the site that still reads as "lineup pending" — they'll be stale once the roster is final:
  - ~~`conference-speakers/index.html` — the italic line below the speaker grid: "Additional speakers to be announced."~~ DONE July 24, 2026: replaced with a schedule-change disclaimer (same disclaimer also added to the bottom of the agenda in _archive/conference-agenda-full.html).
  - `conference-faq/index.html`, "Who is lecturing and what classes will be offered?" answer — says speakers are "actively curating" and that "a full list of lectures and class topics will be published closer to the event"
  - `conference-faq/index.html`, "What is the daily schedule?" answer — says "the schedule below is tentative" and "the final schedule will be published closer to the event"
  - Re-grep the whole site for "to be announced", "TBD", "actively curating", and "published closer to the event" before closing this out, in case other pages pick up similar language later.

## Who you're working with
Ben is the sole editor and not a developer. Explain any manual step he must take (publishing a Google Sheet, swapping an image, DNS changes) in plain numbered steps. When he reports a visual issue, ask for a screenshot rather than guessing.

**Decisions/questions**: Always ask Ben as multiple-choice questions (using the question tool), never open-ended or technical phrasing. Use plain everyday language, no jargon or code terms. Describe trade-offs in terms of what Ben will see/experience, not how it's built.

**Performance guardrail**: If Ben asks for something that would make the site slower (e.g., a large uncompressed image, an embedded widget, a big uncompressed logo, extra render-blocking scripts, a big new video file), don't just build it — tell him plainly what the slowdown would be (in terms of what a visitor would notice, not technical terms) and suggest a faster alternative that gets him the same result (e.g., a compressed/resized version, a lazy-loaded version, a lighter-weight approach). Let him choose once he knows the trade-off.

## Stack (locked — do not introduce frameworks, build steps, or npm)
- GitHub Pages hosting. Plain HTML files, one shared stylesheet `css/styles.css`, vanilla JS in `js/main.js` (nav, modal, scroll reveals).
- Dynamic content (Deals, Live sessions, Agenda) lives in local data files (`js/deals-data.js`, `js/live-data.js`, `js/agenda-data.js`) that each page's script reads directly — no Google Sheets, no CSV fetching. Ben tells Claude about changes (new/updated/removed entries) in chat, and Claude edits the relevant data file and commits. See SITE_SPEC.md §6 for each file's field format.
- **Sponsor data** (`js/sponsors-data.js`): fields are `name`, `logoUrl`, `link`, `blurb`, `tier` (platinum/gold/silver/bronze), `attending` (boolean), and `videoUrl` (optional YouTube embed URL — renders at the bottom of that sponsor's modal). Set `attending: true` on any sponsor who will have a booth/table at the conference — this shows a gold "✓ ATTENDING" pill badge on their card (top-left) and in their modal (next to the tier pill). Omit or set `false` for sponsors not physically present. **Modal media**: some sponsors will have a `videoUrl`, others will have a featured photo at the bottom of their modal instead — Ben specifies which for each sponsor. Photo support is built: optional `photoUrl` field renders a featured photo at the bottom of that sponsor's modal (Crazy Dental uses it). Optional `pending: true` shows a "Pending" pill and keeps the sponsor off the homepage logo strip. **Static sponsor buttons in page HTML** (e.g. the Live page giveaway logos) must use `data-sponsor-name="Exact Name"` (matched by name in `sponsors.js`) — never `data-sponsor-index`, which breaks silently if the data file is reordered.
- **Agenda data fields** (June 2026): `day`, `time`, `title` (use real course title, not "Lecture"; placeholders say "Lecture Title TBD"), `speaker` ("Speaker TBD" if unconfirmed), `speakerUrl` (links to `/conference-speakers#anchor`), `location`, `ce: true` (CE credit lecture), `ceCredits` (number, e.g. 1, 2, 1.5).
- **Agenda page behavior** (June 2026): defaults to **all-days view** (all days stacked, scrollable). Filter bar shows "All Days" + one button per day. Clicking a day filters to that day only; prev/next arrows appear in single-day mode. **Visual style (editorial program, updated June 2026)**: day headings are italic Playfair with a centered gold rule beneath; sessions are separated by hairlines (no card backgrounds/borders) with small-caps gold time labels in a left column and the title in Playfair to the right. CE credits show as a gold outline pill badge under the title (not a left-border highlight). Sponsor credit is its own italic gold line below the meta line. Speaker names are ink-colored links with a thin gold underline to the speakers page. Concurrent sessions render as a list indented under a left gold rule (no grid of boxed cards).
- Forms: Jotform. Direct links for registration; the floating "Join WhatsApp Group" button opens our own styled modal containing the Jotform iframe. Modal: focus-trapped, Esc closes, scroll-locked behind. **(July 2026)** The floating button + modal appear ONLY on non-conference pages (live, live-present, deals, deals-partner, whatsapp, whatsapp-policies, terms, privacy, 404) — Ben's call, to avoid competing with the Register CTA. Removed from index.html and all conference-* pages. **Lazy-loaded**: the iframe ships with `data-src` (not `src`) and no Jotform script tags in the HTML; `js/main.js` (`loadJoinForm`) swaps in the src and loads Jotform's embed handler the first time the modal opens. When adding the modal to a new page, copy the block from e.g. `deals/index.html` (keep `data-src`, never `src`).
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts with preconnect and `display=swap`. **(July 2026)** Loaded non-render-blocking (the plain synchronous `<link rel="stylesheet">` was one of the flagged causes of slow mobile load — it blocked the very first paint). Canonical `<link>` block (use exactly this on every page):
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet"></noscript>
  ```
  (Inter 800 was dropped July 2026 — audited as unused on public pages. Don't use `font-weight: 800` anywhere; heaviest available Inter weight is 700.)
- Media: optimized images in `/images` (resize to max 1600px wide, WebP ~80 quality, `loading="lazy"` below the fold). Long videos = YouTube embeds — **(July 2026)** use a click-to-load facade (thumbnail + play button; see `.video-facade` in styles.css and index.html) rather than a live `<iframe>`, so YouTube's player JS/CSS only downloads once a visitor taps play, not just from scrolling past the section. Hero = muted looping mp4 under ~8MB in `/images` with `autoplay muted loop playsinline` and a poster image; source clip per spec §4.
- **Scrolling photo/logo strips** (`.logo-scroll-wrap` / `.logo-scroll-track`, e.g. homepage Gallery and Sponsors strip): images ship with `data-src` (never `src`, never `loading="lazy"`) — `js/main.js` loads every image in a strip in one go via IntersectionObserver once the strip nears the viewport. Native `loading="lazy"` on individual images inside a continuously CSS-transform-animated strip is unreliable (the browser's lazy-load distance check uses layout position, not the animated visual position), and was the cause of photos silently failing to load on mobile. When adding a new scrolling strip or new items to one, always use `data-src`.

## Deals page — categories, ordering & sponsor sync (locked logic, July 28 2026)
This is the standing logic for the Deals page (`deals/index.html` + `js/deals-data.js`). Apply it automatically on every Deals change — Ben should never have to re-explain it. When he says "add a deal," "remove a deal," "change this description," "add a video," or "this vendor is now a sponsor / a different tier," follow these rules without asking him to restate them.

**Category order (top → bottom on the page):**
1. **Clinical & Chairside** — supplies, implants, abutments, labs, aligners, chairside/clinical AI, oral-care products dispensed to patients, clinical CE/training, scrap-metal refining.
2. **Grow Your Practice** — marketing, video, design, patient financing, revenue-cycle/collections consulting, growth analytics, case-acceptance/warranty.
3. **Run Your Practice** — back-office & practice-management software, insurance verification, payroll/HR, accounting, IT, compliance (OSHA/HIPAA), practice build-out/design, office/patient supplies, payment processing.
4. **Staffing & Recruiting** — recruiters, virtual assistants, temp/permanent placement.
5. **Money & Insurance** — practice + personal wealth management, retirement/401(k), insurance, student-loan help.
6. **Israel, Kosher & Community** — Judaica, kosher food/catering, Israel-support products, the conference hotel, kosher/dental candy.
7. **Extras** — lifestyle/personal referrals that fit nowhere above (Marcus, Wealthfront, Tesla).

Place any new deal by *what the dentist is shopping for*, using the definitions above. Do not invent new categories without Ben's OK.

**Order WITHIN each category (always):**
1. Conference sponsors first, ranked by tier: **Platinum → Gold → Silver → Bronze**.
2. Within the same tier, follow the order the sponsor appears in `js/sponsors-data.js` (that file's array order = the conference sponsors page order).
3. Non-sponsors follow, after all sponsors in that category.
Re-sort the affected category by this rule after any add/remove/tier change.

**Manual order overrides (Ben's explicit call — keep as-is, do NOT auto-sort back to the tier rule):**
- **Clinical & Chairside** (set July 28 2026): orthobrain, Crazy Dental, Emerald Dental Lab, Pearl, MB Precious Metals, Adin, TruAbutment, TheraBreath, AAFE. (This intentionally deviates from strict tier order — e.g. Crazy Dental above Emerald.) When a new sponsor is added to this category, place it and ask Ben where it should sit rather than auto-sorting.

**`js/sponsors-data.js` is the single source of truth for sponsor-level facts.** A deal is a "sponsor" iff its company has an entry there. Tier, and any sponsor video (`videoUrl`) / blurb, live in sponsors-data.js — the Deals card reads from it. Consequences to rely on (so Ben never re-explains):
- Add a company to sponsors-data.js → its deal automatically gets the tier pill and jumps to the sponsor block of its category. Remove it → pill disappears and it drops to the non-sponsor block. (e.g. Dental Processing Solutions was removed from sponsors-data.js July 28 2026 — "Credit Card Processing" stays on Deals with no pill, sorted among non-sponsors in Run Your Practice.)
- Change a sponsor's `tier` → its pill and its position re-sort automatically.
- Change a sponsor's video or description in sponsors-data.js → it updates everywhere that sponsor's detail shows (sponsor page + any Deals-card sync). Keep sponsor-level copy in sponsors-data.js, not duplicated in deals-data.js.

**Name matching** (deal title ≠ sponsor `name` in several cases — match by company):
"Dental Supplies" = "Crazy Dental" · "Credit Card Processing" = "Dental Processing Solutions" · "Apex Reimbursement Specialists" = "APEX". (The LiveWell Capital deal was renamed from "Sam Waller - LiveWell Capital" to "LiveWell Capital" on July 28 2026, so its title now matches the sponsor name directly — no alias needed.) Add new aliases here when they arise.

**Tier pill:** every deal whose company is a conference sponsor shows a small tier pill (Platinum/Gold/Silver/Bronze) on the card and in its detail modal, styled to the tier. Non-sponsors show no pill.

**Offer/promo display (rule for all offers, both pages):** offer text is always **bold + gold** — sponsor pop-ups use `.sponsor-modal__promo`, deal pop-ups use `.deal-offer__text` (both gold via `--color-gold-text`). On the **Deals** pop-up, an offer containing " + " splits into separate lines (one offer per line), and any line with a promo code (e.g. `(WISDOM10)`, or "code DENTAL50") gets its own **Copy code** button — so a two-code offer like Crazy Dental's "10% off First Order (WISDOM10) + Free Ground Shipping (WISDOMSHIP)" shows two lines with two Copy buttons. This is automatic in `js/deals.js` (`buildOffers` + `extractCode`); just write the promo normally and it formats itself. Future offers need no special handling. The **Sponsors page** pop-up now does the same (same `buildOffers`/`extractCode` logic in `js/sponsors.js`, reusing the `.deal-offer`/`.deal-offer__text`/`.deal-modal__copy` classes), so a multi-code sponsor offer splits into lines with Copy buttons there too.

**Modal media placement (rule):** in the deal pop-up, any video renders **under** the "View Deal" button (consistent with the Sponsors page, e.g. Reach), followed by the optional flyer photo.

**Migration status (DONE July 28 2026):** the 7-category structure + tier pills are now live in the code. `deals-data.js` is re-categorized/re-ordered per this logic (Clinical & Chairside manual order); `deals.js` renders the tier pill on each sponsor deal card + modal by looking the company up in `js/sponsors-data.js` (via `SPONSOR_TIER` + `DEAL_SPONSOR_ALIAS`, parenthetical-stripping match); `deals/index.html` now loads `sponsors-data.js` before `deals.js`. The "Dental Equipment / All Practice Solutions" deal is archived as an in-file comment at the bottom of `deals-data.js` (it was never in sponsors-data.js). "Dental Processing Solutions" is archived (commented) in `sponsors-data.js`, so "Credit Card Processing" stays on Deals with no pill. Pill CSS: `.deal-tier` / `.deal-tier--{platinum,gold,silver,bronze}` in styles.css. To add a new sponsor deal: add the company to sponsors-data.js (pill appears automatically) and place the deal in deals-data.js per the ordering rules above.

## Design system
Tokens as CSS variables in `:root`. Vibe: calm luxury, warm Jewish community, premium but approachable. Generous whitespace, large Playfair headlines, soft sand/ivory section bands, sea-glass and coral accents used sparingly. Motion: subtle only — IntersectionObserver fade-up on scroll, gentle card lifts, smooth modal entrance. Respect `prefers-reduced-motion`. Never flashy, never salesy.

**Current spacing tokens (tuned June 2026 — do not revert):**
- `--space-xl: 3.25rem` (was 4rem) — standard section top/bottom padding
- `--space-2xl: 4rem` (was 5rem) — hero, footer, large gaps
- `.section--compact` uses `var(--space-lg)` = 2.5rem (fixed — was erroneously identical to `.section`)
- `.section-heading` margin-bottom: `2rem` (was 2.5rem)
- `.sponsor-strip-section` has no extra padding-bottom (removed duplicate stacking)
- `#section-experience` (index.html): padding `1.75rem` top/bottom, bullet list max-width `860px`, item padding `0.85rem`
- `#section-cta` (index.html): padding `1.5rem`, h2 margin-bottom `1rem`, questions margin-top `0.5rem`, gold line margin-bottom `0.75rem`

## Conventions
- Header, footer, floating Join button: identical markup on every page. Primary nav has 4 items: **Conference · Live · Deals · WhatsApp**. `aria-current="page"` is set on the matching nav link for each page. Conference sub-nav (Overview • Agenda • Speakers • **Sponsors** • FAQ • Register) appears ONLY on index.html, conference-agenda/index.html, conference-speakers/index.html, conference-sponsors/index.html, conference-faq/index.html.
- Any change to a shared element must be applied to every page in the same session — grep to verify before finishing.
- Mobile-first CSS; full-screen overlay menu on mobile per spec. Test mentally at 375px and 1280px.
- **URL structure (June 2026)**: All pages use the folder/index.html pattern — no `.html` in URLs. `dentalwisdom.org/conference-agenda` serves `conference-agenda/index.html`, etc. Only `index.html` and `404.html` live at the root. Never create new `.html` files at the root; always create `new-page/index.html`.
- Speakers page (`conference-speakers/index.html`): **13 real speakers confirmed** (see below). Target ~16 cards total. Adding a speaker = copy one `<article class="speaker-card">` block and fill in the data attributes — no JS changes needed. Removing = delete that block.
- Speaker modal is **760px wide** (`max-width: 760px`) and **92vh tall** — larger than default to accommodate long bios. Both the ✕ button and clicking outside close it. Esc also closes.
- **Sponsor support in modal**: add `data-sponsor-name`, `data-sponsor-url`, `data-sponsor-logo` attributes to an article to show a logo + link at the bottom of the bio. Logos live in `images/sponsors/`. Currently wired for Sam Waller (LiveWell Capital) and Rabbi Dr. Katz (Touro).
- **No-photo-yet placeholder**: if a speaker doesn't have a headshot yet, don't point `data-photo` at a missing file (shows a broken image icon). Instead leave `data-photo=""`, add `data-initials="XX"` (their initials), and on the card use `<div class="speaker-avatar speaker-avatar--placeholder" aria-hidden="true">XX</div>` in place of the `<img class="speaker-avatar">`. The bio modal picks this up automatically (same `speakerModal` JS checks `data-photo`; if empty it shows the matching initials circle instead of a photo). Style is a light sand/white circle with dark navy initials — already built in `conference-speakers/index.html`'s `<style>` block (`.speaker-avatar--placeholder`, `.speaker-modal__avatar--placeholder`). Currently used for Dr. Samuel Schuster.

### Confirmed speakers (June 2026)
| # | Name | id anchor | Session | Time | Sponsor |
|---|------|-----------|---------|------|---------|
| 1 | Dr. Harold Katz | `speaker-harold-katz` | Getting on the Bathroom Shelf: How Clinical Dentistry Inspires Consumer Products | Thu 9–10am | TheraBreath |
| 2 | Dr. Daniel Greenbaum | `speaker-daniel-greenbaum` | Designing Smiles That Last… | Thu 10am–12pm | — |
| 3 | Dr. Sean Ference | `speaker-sean-ference` | 'Hopeless' to Heroic… | Fri 10:30am–12pm | — |
| 4 | Sam Waller, CFP® | `speaker-sam-waller` | Life Insurance: Bitachon or Hishtadlus? Navigating the Halachic Sources | Shabbos 4:45pm | — |
| 5 | Rabbi Dr. David J. Katz | `speaker-rabbi-david-katz` | Dental Halacha Shiur (Shalosh Seudos) | Shabbos 6:30pm | Touro College of Dental Medicine |
| 6 | Dr. Tzvi Krupka | `speaker-tzvi-krupka` | Opening the Airway: Diagnosis and Management of Obstructive Sleep Apnea | Thu 2–4pm | — |
| 7 | Dr. Ariel Steinberger | `speaker-ariel-steinberger` | The Yes Blueprint: A Step by Step Approach to Case Presentation and Case Acceptance | Thu 4–6pm | — |
| 8 | Dr. Sara Werb | `speaker-sara-werb` | Pediatric Dentistry Pt. 1 & 2 — Intraosseous Anesthesia: Advanced Techniques for Predictable & Profound Pain Control; Hands-On Zirconia Crown Mastery: Anterior Esthetics & Posterior Strength Workshop | Fri 10–11am & Fri 3–5pm | NuSmile |
| 9 | Dr. Dan German | `speaker-dan-german` | Straight Talk: Game-Changing Tips and Tricks Every GP Should Know in Orthodontics | Fri 1:30–3pm | orthobrain |
| 10 | Dr. Samuel Schuster | `speaker-samuel-schuster` | Pre-Davening Shiur | Shabbos 8:15–9:15am | — |
| 11 | Dr. Marc Faber | `speaker-marc-faber` | I Buy Junk Practices: Turning Distressed Offices Into Thriving Ones (CEO, Edge Dental Management) | Thu 6:30–8pm | — |
| 12 | Yaakov Citron | `speaker-yaakov-citron` | Videography Meets AI: DIY Workshop | Fri 4–5pm | Citron Films |
| 13 | Gobbie Cohn | `speaker-gobbie-cohn` | Mincha, Kabbalas Shabbos & Maariv | Fri 6:15pm | APEX Reimbursement Specialists & CG Insurance Group |

Speaker photos live in `images/speaker-*.{jpg,png,webp}`. Source bios/photos in `_Speaker Bios & Pictures - Drop Here/`. Dr. Samuel Schuster's photo is still TODO — no headshot provided yet (see placeholder note in conference-speakers/index.html). Dr. Tzvi Krupka's photo is resized and saved as `images/speaker-tzvi-krupka.webp` (790×800, ~15KB); his bio is in `_archive/conference-speakers-full.html`, the master reference for the eventual speaker cards. Dr. Gabe Hershman's old headshot was moved to `_archive/superseded-images/speakers/` (not deleted) since Krupka is replacing his Thu 2–4pm slot.

**Confirmed (session titles + speakers locked, per Ben, July 13, 2026):** Dr. Harold Katz, Dr. Daniel Greenbaum, Dr. Tzvi Krupka, Dr. Ariel Steinberger, Dr. Sara Werb, Sam Waller.

**Speaker page reorganized (July 24, 2026)** — the table above is partially stale; _archive/conference-speakers-full.html is the source of truth. Current state: 12 active cards, ordered chronologically by speaking time within each day. Removed (archived in-file as comments, not deleted): Dr. Craig Berry, Dr. Samuel Schuster (his agenda entry stays but no longer links to a card), Yaakov Citron (session replaced by hands-on tracks; Citron Films still a sponsor), plus Dr. Sean Ference (archived earlier). Restored: Dr. Marc Faber (Thu 6:30 PM). Dr. Nathaniel Dancykier's card is first in Friday and lists both his sessions (Fri 9:00 AM lecture + Shabbos 2:45 PM DVI). Dr. Sara Werb's card is single-session (Fri 10:30 AM–12:30 PM, NuSmile sponsor removed). Gobbie Cohn's card session reads "Kabbalas Shabbos" (Ben's wording) and sits last in Friday.

**Still-pending slots (as of July 13, 2026)** — for reference, not urgent, not blocking publish:
- Thursday 6:30–8:00 PM: FILLED (July 24, 2026) — Dr. Marc Faber, CEO of Edge Dental Management, "I Buy Junk Practices" (CE, 1.5 credits). Was previously "Concurrent Classes — Topics to Be Announced."
- Friday 3:00–5:00 PM concurrent hands-on block (updated July 24, 2026 — now 5 tracks): (1) "Straight Forward: Building Your Clear Aligner Practice" — Dr. Sam Glick, sponsored by orthobrain; (2) "Cosmetic Dentistry Hands-On Workshop" — Dr. Elaine Bylis; (3) "Hands-On Implants Workshop" — speaker TBD, sponsored by Adin; (4) "Hands-On Endodontics or Periodontics Workshop" — topic & speaker TBD (the Endo and Perio tracks were merged into one line July 24, 2026, back to 4 tracks total). All three confirmed classes are provisionally set to CE 2 (2-hour block) pending Ben's confirmation of exact credits. New speaker cards for Dr. Bylis (photo saved: images/speaker-elaine-bylis.webp) and Dr. Sam Glick (photo saved July 24, 2026: images/speaker-sam-glick.webp) added to _archive/conference-speakers-full.html.
- Friday 9:00–10:00 AM: "Practice Management Lecture" — speaker TBD
- Friday 12:30–1:30 PM: Lunch — sponsor TBD
- Friday 1:30–3:00 PM: title and speaker both TBD
- Friday 10:30 PM: "Shiur & Oneg" — speaker TBD
- Shabbos 11:00 AM: "Kiddush & Dvar Torah" — speaker TBD
- Shabbos 2:45 PM: FILLED (July 24, 2026) — "Dental Volunteers for Israel (DVI)," Dr. Nathaniel Dancykier (CE, 1). Was previously a "Dental Related Shiur to Be Announced Soon" placeholder.
- Shabbos 3:45 PM: "Making Aliyah and Practicing Dentistry in Israel" — speaker TBD
- Accessibility: semantic landmarks, alt text on every image, visible focus states, body-text contrast ≥ 4.5:1, skip-to-content link. Logo scroll strips have a keyboard pause/play button (WCAG 2.2.2) injected by `js/main.js` — skip injection when `prefers-reduced-motion` is set (CSS already stops the animation). Hero video autoplay is suppressed by JS when `prefers-reduced-motion` is set.
- Every page: unique `<title>`, meta description, Open Graph tags, favicon, custom 404 per spec §8.
- External services allowed: Jotform, YouTube, Google Fonts. Nothing else.

## Known intentional decisions (do not "fix" these)
- **Time labels are always "EST"** (Ben's call, July 2026): every Live session time — and any time shown anywhere on the site — displays as "EST", e.g. "8:00 PM – 9:30 PM EST". Never use "ET" or "EDT", even for events during daylight-saving months. Ben understands "EST" is technically standard time; he wants the clock time to read as New York local time with the "EST" label used uniformly. When adding a new session to `js/live-data.js`, always write the `time` field with "EST".
- **Mobile menu focus target (`js/main.js`, `openMenu`)**: focuses the first link in `.mobile-menu__list` (e.g. "Conference"), NOT the logo link. Focusing the logo link makes the browser's gold focus ring stack on top of the logo's navy border, which looks like two nested boxes. Do not change this back to `mobileMenu.querySelector('a')`.
- **Pricing label on homepage**: The homepage pricing box and accordion say "Dental Resident" (concise). The FAQ says "Dental Student or Dental Resident" (more complete). Both are correct — this discrepancy is intentional.
- **CSS cache version**: The stylesheet currently loads as `styles.css?v=47`. Bump the version number every time you make CSS changes so returning visitors get the updated file. Use Python `os.walk()` to replace across all HTML files (the folder name has a space — never use `find | xargs sed`):
  ```python
  import os, re
  root = "/sessions/.../mnt/Dental Wisdom Site"  # use correct sandbox path
  for dp, dirs, files in os.walk(root):
      dirs[:] = [d for d in dirs if not d.startswith('.')]
      for fn in files:
          if not fn.endswith('.html'): continue
          p = os.path.join(dp, fn)
          txt = open(p).read()
          if 'styles.css?v=OLD' in txt:
              open(p,'w').write(txt.replace('styles.css?v=OLD','styles.css?v=NEW'))
  ```

## Color tokens (June 2026 — do not revert)
All gold values are tokenized. Never use hardcoded hex for gold colors anywhere:
- `--color-gold-warm: #B8892A` — decorative gold (borders, icons, backgrounds). Do NOT use for text on white.
- `--color-gold-dark: #9e7523` — button hover backgrounds only (e.g. `.btn-primary:hover`).
- `--color-gold-text: #8C6A1A` — all gold-colored text, including eyebrows, CTAs, links, meta labels. Passes WCAG AA (4.65:1 on white). Use this anywhere text is gold-colored at any size.
- `--color-accent` and `--color-cta` both resolve to `#B8892A` (decorative only — do not use for text).

**Rule**: if a CSS property is `color:` (text), use `--color-gold-text`. If it's a background, border, or icon fill, use `--color-gold-warm` or `--color-gold-dark`.

## Workflow rules
- One page per session, in the spec's build order. Start each session by proposing a short plan; wait for approval before writing code.
- Session 1 also builds the scaffold: folder structure, styles.css with tokens, shared header/footer/modal, and index.html.
- Commit after each approved page: `git add -A && git commit -m "Build <page>"`. Never leave a session uncommitted.
- **Change log**: `CHANGELOG.md` in the site root is a plain-English, most-recent-first list of every commit, grouped by date, so Ben can see what changed without touching git directly. After every commit (or batch of commits) in a session, append the new entries to the top of `CHANGELOG.md` before ending the session.
- Local preview: from the site folder: `cd ~/Desktop/Dental\ Wisdom\ Site && python3 -m http.server 8000`, then http://localhost:8000.
- **Terminal commands**: Always include the `cd` step so Ben can copy-paste the whole thing. Format: `cd ~/Desktop/Dental\ Wisdom\ Site && <command>`.
- Do not touch DNS, CNAME, or Squarespace until Ben explicitly starts the launch step.
- **Never delete files — archive instead.** This applies everywhere, not just content files: if something needs to be removed from active use (an old page, an image, a stray lock file, anything), move it aside (e.g. into `_archive/`, or rename with a `.bak`/timestamp suffix) rather than deleting it. Ben has said this explicitly more than once.
- **Live event slides (`liveslides/index.html`) — archive outgoing content before overwriting it.** This is a separate, self-contained slide deck for the monthly Dental Wisdom Live webinar (not the same thing as `js/live-data.js`, which is the session listing on the public `live/index.html` page — don't confuse the two). It's edited via the `DECK` object near the top of its `<script>` block — look for the in-file comment "EDIT EACH MONTH HERE." Fields: `title` (date/time), `opener`, `dvarSpeaker`, `conference.validUntil`, `spotlight` (slide 4, the 30-second vendor ad), `lecture` (slide 6, the featured speaker), `giveaways` (slide 7, the prize wheel). Ben tells Claude the new values in chat each month, same as other data-file updates. **Before overwriting `DECK.spotlight`, `DECK.lecture`, or `DECK.giveaways`**, copy the outgoing values (just those fields — not the whole deck/file) into `liveslides/_archive/spotlight-lecture-giveaway-history.md`, dated and labeled with the vendor/speaker name, so if that vendor or speaker comes back later their content can be pasted straight back in instead of rebuilt from scratch.
- **File flow**: All changes go to the local Desktop folder (`/Users/dr.lisa/Desktop/Dental Wisdom Site`) first and are committed locally. Never push to GitHub — Ben pushes manually when ready with `git push origin main`. Never instruct or trigger a push; just remind Ben to push after a session if he wants GitHub updated.
- **Git lock files on this mount**: `git add`/`git commit` in this folder often print `warning: unable to unlink '.git/index.lock' (or HEAD.lock, or objects/.../tmp_obj_*): Operation not permitted`, and a stale `.git/index.lock` or `.git/HEAD.lock` can make the next command fail with "Another git process seems to be running." This is a quirk of this mounted folder (deleting files here needs explicit approval that the warnings don't trigger) — it is NOT data loss and NOT a real concurrent git process. Fix: `mv` the stale lock file to a throwaway name instead of `rm` (e.g. `mv .git/index.lock .git/index.lock.bak_$(date +%s)`), then retry the git command. A commit that prints "[main <hash>] <message>" with a "files changed" line DID succeed even if unlink warnings appeared above it — check `git log --oneline -1` to confirm rather than assuming it failed.
- **After every fix, say it out loud**: explicitly tell Ben "this is saved locally but won't show on dentalwisdom.org or dentalwisdom.github.io until you push" — every time, not just once. If Ben reports a bug "still happening" right after a fix, check first whether he's looking at the live published site (uncommitted-but-unpushed fixes never show there) vs. the local preview (`localhost:8000`) — ask which one he's checking before assuming the fix failed.

## Saving tokens / chat length
- Long chats use up more of Ben's usage budget as they go (everything said so far gets re-read each turn). To keep this efficient, tell Ben when it's a good moment to start a fresh chat — right after a page is finished and committed, or after a big batch of edits is wrapped up and confirmed.
- When suggesting this, say it plainly, e.g.: "Good stopping point — feel free to start a new chat for the next page (live.html). I'll pick up context from CLAUDE.md, SITE_SPEC.md, and git history."
- Don't suggest it mid-task or before a commit — only at clean breakpoints.

## Definition of done (per page)
Spec copy verbatim; looks right at 375px and 1280px; nav, footer, and Join modal work; all links wired or marked TODO; images lazy-loaded with alt text; no console errors; committed.
