# CLAUDE.md — Dental Wisdom website

## What this is
Static marketing site for Dental Wisdom (dentalwisdom.org): the 2027 conference (flagship), Dental Wisdom Live monthly CE, partner Deals, plus supporting pages. All requirements and exact copy live in `SITE_SPEC.md` — read it before any work. Exact copy in the spec is final: never rewrite it, only format it. Anything missing gets a visible placeholder plus `<!-- TODO: ... -->`.

**All 16 pages + 404 are built.** The site is in maintenance/content-update mode — no new pages planned currently. `giving.html` is deferred; it lives in `_archive/` only.

## Who you're working with
Ben is the sole editor and not a developer. Explain any manual step he must take (publishing a Google Sheet, swapping an image, DNS changes) in plain numbered steps. When he reports a visual issue, ask for a screenshot rather than guessing.

**Decisions/questions**: Always ask Ben as multiple-choice questions (using the question tool), never open-ended or technical phrasing. Use plain everyday language, no jargon or code terms. Describe trade-offs in terms of what Ben will see/experience, not how it's built.

## Stack (locked — do not introduce frameworks, build steps, or npm)
- GitHub Pages hosting. Plain HTML files, one shared stylesheet `css/styles.css`, vanilla JS in `js/main.js` (nav, modal, scroll reveals).
- Dynamic content (Deals, Live sessions, Agenda) lives in local data files (`js/deals-data.js`, `js/live-data.js`, `js/agenda-data.js`) that each page's script reads directly — no Google Sheets, no CSV fetching. Ben tells Claude about changes (new/updated/removed entries) in chat, and Claude edits the relevant data file and commits. See SITE_SPEC.md §6 for each file's field format.
- **Sponsor data** (`js/sponsors-data.js`): fields are `name`, `logoUrl`, `link`, `blurb`, `tier` (platinum/gold/silver/bronze), `attending` (boolean), and `videoUrl` (optional YouTube embed URL — renders at the bottom of that sponsor's modal). Set `attending: true` on any sponsor who will have a booth/table at the conference — this shows a gold "✓ ATTENDING" pill badge on their card (top-left) and in their modal (next to the tier pill). Omit or set `false` for sponsors not physically present. **Modal media**: some sponsors will have a `videoUrl`, others will have a featured photo at the bottom of their modal instead — Ben specifies which for each sponsor. Photo support is not yet built; add it (new field + `sponsors.js` render logic) when Ben asks for the first one.
- **Agenda data fields** (June 2026): `day`, `time`, `title` (use real course title, not "Lecture"; placeholders say "Lecture Title TBD"), `speaker` ("Speaker TBD" if unconfirmed), `speakerUrl` (links to `/conference-speakers#anchor`), `location`, `ce: true` (CE credit lecture), `ceCredits` (number, e.g. 1, 2, 1.5).
- **Agenda page behavior** (June 2026): defaults to **all-days view** (all days stacked, scrollable). Filter bar shows "All Days" + one button per day. Clicking a day filters to that day only; prev/next arrows appear in single-day mode. CE lectures get a teal left-border highlight and "X CE Credits" label under the time. Speaker names are teal hyperlinks to the speakers page.
- Forms: Jotform. Direct links for registration; the floating "Join the Network" button opens our own styled modal containing the Jotform iframe. Modal: focus-trapped, Esc closes, scroll-locked behind.
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts with preconnect and `display=swap`.
- Media: optimized images in `/images` (resize to max 1600px wide, WebP ~80 quality, `loading="lazy"` below the fold). Long videos = YouTube embeds. Hero = muted looping mp4 under ~8MB in `/images` with `autoplay muted loop playsinline` and a poster image; source clip per spec §4.

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
- Header, footer, floating Join button: identical markup on every page. Conference sub-nav (Overview • Agenda • Speakers • **Sponsors** • FAQ • Register) appears ONLY on index.html, conference-agenda/index.html, conference-speakers/index.html, conference-sponsors/index.html, conference-faq/index.html.
- Any change to a shared element must be applied to every page in the same session — grep to verify before finishing.
- Mobile-first CSS; full-screen overlay menu on mobile per spec. Test mentally at 375px and 1280px.
- **URL structure (June 2026)**: All pages use the folder/index.html pattern — no `.html` in URLs. `dentalwisdom.org/conference-agenda` serves `conference-agenda/index.html`, etc. Only `index.html` and `404.html` live at the root. Never create new `.html` files at the root; always create `new-page/index.html`.
- Speakers page (`conference-speakers/index.html`): **5 real speakers confirmed** (see below). Target ~16 cards total. Adding a speaker = copy one `<article class="speaker-card">` block and fill in the data attributes — no JS changes needed. Removing = delete that block.
- Speaker modal is **760px wide** (`max-width: 760px`) and **92vh tall** — larger than default to accommodate long bios. Both the ✕ button and clicking outside close it. Esc also closes.
- **Sponsor support in modal**: add `data-sponsor-name`, `data-sponsor-url`, `data-sponsor-logo` attributes to an article to show a logo + link at the bottom of the bio. Logos live in `images/sponsors/`. Currently wired for Sam Waller (LiveWell Capital) and Rabbi Dr. Katz (Touro).

### Confirmed speakers (June 2026)
| # | Name | id anchor | Session | Time | Sponsor |
|---|------|-----------|---------|------|---------|
| 1 | Dr. Harold Katz | `speaker-harold-katz` | Product Development – The Story of TheraBreath | Thu 9–10am | — |
| 2 | Dr. Daniel Greenbaum | `speaker-daniel-greenbaum` | Designing Smiles That Last… | Thu 10am–12pm | — |
| 3 | Dr. Sean Ference | `speaker-sean-ference` | 'Hopeless' to Heroic… | Thu 2–4pm | — |
| 4 | Sam Waller, CFP® | `speaker-sam-waller` | Life Insurance: Bitachon or Hishtadlus? | Shabbos 4–5pm | LiveWell Capital |
| 5 | Rabbi Dr. David J. Katz | `speaker-rabbi-david-katz` | Dental Halacha Shiur (Shalosh Seudos) | Shabbos 6:30pm | Touro College of Dental Medicine |

Speaker photos live in `images/speaker-*.{jpg,png,webp}`. Source bios/photos in `Speaker Bios & Pictures/`.
- Accessibility: semantic landmarks, alt text on every image, visible focus states, body-text contrast ≥ 4.5:1, skip-to-content link.
- Every page: unique `<title>`, meta description, Open Graph tags, favicon, custom 404 per spec §8.
- External services allowed: Jotform, YouTube, Google Fonts. Nothing else.

## Known intentional decisions (do not "fix" these)
- **Pricing label on homepage**: The homepage pricing box and accordion say "Dental Resident" (concise). The FAQ says "Dental Student or Dental Resident" (more complete). Both are correct — this discrepancy is intentional.
- **CSS cache version**: The stylesheet loads as `styles.css?v=7`. Bump the version number (e.g. `?v=8`) every time you make CSS changes so returning visitors get the updated file. Do this in every HTML file (grep for `styles.css?v=` to find all occurrences).

## Workflow rules
- One page per session, in the spec's build order. Start each session by proposing a short plan; wait for approval before writing code.
- Session 1 also builds the scaffold: folder structure, styles.css with tokens, shared header/footer/modal, and index.html.
- Commit after each approved page: `git add -A && git commit -m "Build <page>"`. Never leave a session uncommitted.
- Local preview: from the site folder: `cd ~/Desktop/Dental\ Wisdom\ Site && python3 -m http.server 8000`, then http://localhost:8000.
- **Terminal commands**: Always include the `cd` step so Ben can copy-paste the whole thing. Format: `cd ~/Desktop/Dental\ Wisdom\ Site && <command>`.
- Do not touch DNS, CNAME, or Squarespace until Ben explicitly starts the launch step.
- **File flow**: All changes go to the local Desktop folder (`/Users/dr.lisa/Desktop/Dental Wisdom Site`) first and are committed locally. Never push to GitHub — Ben pushes manually when ready with `git push origin main`. Never instruct or trigger a push; just remind Ben to push after a session if he wants GitHub updated.

## Saving tokens / chat length
- Long chats use up more of Ben's usage budget as they go (everything said so far gets re-read each turn). To keep this efficient, tell Ben when it's a good moment to start a fresh chat — right after a page is finished and committed, or after a big batch of edits is wrapped up and confirmed.
- When suggesting this, say it plainly, e.g.: "Good stopping point — feel free to start a new chat for the next page (live.html). I'll pick up context from CLAUDE.md, SITE_SPEC.md, and git history."
- Don't suggest it mid-task or before a commit — only at clean breakpoints.

## Definition of done (per page)
Spec copy verbatim; looks right at 375px and 1280px; nav, footer, and Join modal work; all links wired or marked TODO; images lazy-loaded with alt text; no console errors; committed.
