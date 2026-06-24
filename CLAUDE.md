# CLAUDE.md — Dental Wisdom website

## What this is
Static marketing site for Dental Wisdom (dentalwisdom.org): the 2027 conference (flagship), Dental Wisdom Live monthly CE, partner Deals, plus supporting pages. All requirements and exact copy live in `SITE_SPEC.md` — read it before any work. Exact copy in the spec is final: never rewrite it, only format it. Anything missing gets a visible placeholder plus `<!-- TODO: ... -->`.

**All 16 pages + 404 are built.** The site is in maintenance/content-update mode — no new pages planned currently. `giving.html` is deferred; it lives in `_archive/` only.

**Agenda and Speakers pages are currently showing "Coming Soon" placeholders** (as of June 2026). The full built pages are archived and ready to restore:
- `_archive/conference-agenda-full.html` → restore to `conference-agenda/index.html`
- `_archive/conference-speakers-full.html` → restore to `conference-speakers/index.html`

To restore either page: copy the archive file over the placeholder and commit. Do NOT rebuild from scratch — the full pages with all content already exist in `_archive/`.

## Open follow-ups
- **Once the full agenda is finalized AND all speaker cards are done** (all "Speaker TBD" / "Lecture Title TBD" slots in `js/agenda-data.js` filled in, all ~16 speaker cards added to `conference-speakers/index.html`), revisit every line on the site that still reads as "lineup pending" — they'll be stale once the roster is final:
  - `conference-speakers/index.html` — the italic line below the speaker grid: "Additional speakers to be announced." (remove or update once no more speakers are coming)
  - `conference-faq/index.html`, "Who is lecturing and what classes will be offered?" answer — says speakers are "actively curating" and that "a full list of lectures and class topics will be published closer to the event"
  - `conference-faq/index.html`, "What is the daily schedule?" answer — says "the schedule below is tentative" and "the final schedule will be published closer to the event"
  - Re-grep the whole site for "to be announced", "TBD", "actively curating", and "published closer to the event" before closing this out, in case other pages pick up similar language later.

## Who you're working with
Ben is the sole editor and not a developer. Explain any manual step he must take (publishing a Google Sheet, swapping an image, DNS changes) in plain numbered steps. When he reports a visual issue, ask for a screenshot rather than guessing.

**Decisions/questions**: Always ask Ben as multiple-choice questions (using the question tool), never open-ended or technical phrasing. Use plain everyday language, no jargon or code terms. Describe trade-offs in terms of what Ben will see/experience, not how it's built.

## Stack (locked — do not introduce frameworks, build steps, or npm)
- GitHub Pages hosting. Plain HTML files, one shared stylesheet `css/styles.css`, vanilla JS in `js/main.js` (nav, modal, scroll reveals).
- Dynamic content (Deals, Live sessions, Agenda) lives in local data files (`js/deals-data.js`, `js/live-data.js`, `js/agenda-data.js`) that each page's script reads directly — no Google Sheets, no CSV fetching. Ben tells Claude about changes (new/updated/removed entries) in chat, and Claude edits the relevant data file and commits. See SITE_SPEC.md §6 for each file's field format.
- **Sponsor data** (`js/sponsors-data.js`): fields are `name`, `logoUrl`, `link`, `blurb`, `tier` (platinum/gold/silver/bronze), `attending` (boolean), and `videoUrl` (optional YouTube embed URL — renders at the bottom of that sponsor's modal). Set `attending: true` on any sponsor who will have a booth/table at the conference — this shows a gold "✓ ATTENDING" pill badge on their card (top-left) and in their modal (next to the tier pill). Omit or set `false` for sponsors not physically present. **Modal media**: some sponsors will have a `videoUrl`, others will have a featured photo at the bottom of their modal instead — Ben specifies which for each sponsor. Photo support is not yet built; add it (new field + `sponsors.js` render logic) when Ben asks for the first one.
- **Agenda data fields** (June 2026): `day`, `time`, `title` (use real course title, not "Lecture"; placeholders say "Lecture Title TBD"), `speaker` ("Speaker TBD" if unconfirmed), `speakerUrl` (links to `/conference-speakers#anchor`), `location`, `ce: true` (CE credit lecture), `ceCredits` (number, e.g. 1, 2, 1.5).
- **Agenda page behavior** (June 2026): defaults to **all-days view** (all days stacked, scrollable). Filter bar shows "All Days" + one button per day. Clicking a day filters to that day only; prev/next arrows appear in single-day mode. **Visual style (editorial program, updated June 2026)**: day headings are italic Playfair with a centered gold rule beneath; sessions are separated by hairlines (no card backgrounds/borders) with small-caps gold time labels in a left column and the title in Playfair to the right. CE credits show as a gold outline pill badge under the title (not a left-border highlight). Sponsor credit is its own italic gold line below the meta line. Speaker names are ink-colored links with a thin gold underline to the speakers page. Concurrent sessions render as a list indented under a left gold rule (no grid of boxed cards).
- Forms: Jotform. Direct links for registration; the floating "Join the Network" button opens our own styled modal containing the Jotform iframe. Modal: focus-trapped, Esc closes, scroll-locked behind.
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts with preconnect and `display=swap`. Canonical `<link>` (use exactly this on every page):
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet">
  ```
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
| 1 | Dr. Harold Katz | `speaker-harold-katz` | Product Development – The Story of TheraBreath | Thu 9–10am | — |
| 2 | Dr. Daniel Greenbaum | `speaker-daniel-greenbaum` | Designing Smiles That Last… | Thu 10am–12pm | — |
| 3 | Dr. Sean Ference | `speaker-sean-ference` | 'Hopeless' to Heroic… | Fri 10:30am–12pm | — |
| 4 | Sam Waller, CFP® | `speaker-sam-waller` | Life Insurance: Bitachon or Hishtadlus? | Shabbos 5–6pm | LiveWell Capital |
| 5 | Rabbi Dr. David J. Katz | `speaker-rabbi-david-katz` | Dental Halacha Shiur (Shalosh Seudos) | Shabbos 6:30pm | Touro College of Dental Medicine |
| 6 | Dr. Gabe Hershman | `speaker-gabe-hershman` | Beyond the Extraction: Advanced Surgical Solutions for the Modern Dental Practice | Thu 2–4pm | — |
| 7 | Dr. Ariel Steinberger | `speaker-ariel-steinberger` | The Art of the Smile: Blending Science and Aesthetics for Transformative Results | Thu 4–6pm | — |
| 8 | Dr. Sara Werb | `speaker-sara-werb` | Pediatric Dentistry Pt. 1 & 2 (Lecture Titles TBD) | Thu 6:30–8pm & Fri 3–5pm | — |
| 9 | Dr. Dan German | `speaker-dan-german` | Straight Talk: Game-Changing Tips and Tricks Every GP Should Know in Orthodontics | Fri 1:30–3pm | orthobrain |
| 10 | Dr. Samuel Schuster | `speaker-samuel-schuster` | Pre-Davening Shiur | Shabbos 8:15–9:15am | — |
| 11 | Dr. Marc Faber | `speaker-marc-faber` | Built to Scale: 1 to 3+ Locations | Fri 3–4pm | — |
| 12 | Yaakov Citron | `speaker-yaakov-citron` | Videography Meets AI: DIY Workshop | Fri 4–5pm | Citron Films |
| 13 | Gobbie Cohn | `speaker-gobbie-cohn` | Mincha, Kabbalas Shabbos & Maariv | Fri 6:15pm | APEX Reimbursement Specialists & CG Insurance Group |

Speaker photos live in `images/speaker-*.{jpg,png,webp}`. Source bios/photos in `Speaker Bios & Pictures/`. Dr. Samuel Schuster's photo is still TODO — no headshot provided yet (see placeholder note in conference-speakers/index.html).
- Accessibility: semantic landmarks, alt text on every image, visible focus states, body-text contrast ≥ 4.5:1, skip-to-content link. Logo scroll strips have a keyboard pause/play button (WCAG 2.2.2) injected by `js/main.js` — skip injection when `prefers-reduced-motion` is set (CSS already stops the animation). Hero video autoplay is suppressed by JS when `prefers-reduced-motion` is set.
- Every page: unique `<title>`, meta description, Open Graph tags, favicon, custom 404 per spec §8.
- External services allowed: Jotform, YouTube, Google Fonts. Nothing else.

## Known intentional decisions (do not "fix" these)
- **Mobile menu focus target (`js/main.js`, `openMenu`)**: focuses the first link in `.mobile-menu__list` (e.g. "Conference"), NOT the logo link. Focusing the logo link makes the browser's gold focus ring stack on top of the logo's navy border, which looks like two nested boxes. Do not change this back to `mobileMenu.querySelector('a')`.
- **Pricing label on homepage**: The homepage pricing box and accordion say "Dental Resident" (concise). The FAQ says "Dental Student or Dental Resident" (more complete). Both are correct — this discrepancy is intentional.
- **CSS cache version**: The stylesheet currently loads as `styles.css?v=9`. Bump the version number every time you make CSS changes so returning visitors get the updated file. Use Python `os.walk()` to replace across all HTML files (the folder name has a space — never use `find | xargs sed`):
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
- Local preview: from the site folder: `cd ~/Desktop/Dental\ Wisdom\ Site && python3 -m http.server 8000`, then http://localhost:8000.
- **Terminal commands**: Always include the `cd` step so Ben can copy-paste the whole thing. Format: `cd ~/Desktop/Dental\ Wisdom\ Site && <command>`.
- Do not touch DNS, CNAME, or Squarespace until Ben explicitly starts the launch step.
- **Never delete files — archive instead.** This applies everywhere, not just content files: if something needs to be removed from active use (an old page, an image, a stray lock file, anything), move it aside (e.g. into `_archive/`, or rename with a `.bak`/timestamp suffix) rather than deleting it. Ben has said this explicitly more than once.
- **File flow**: All changes go to the local Desktop folder (`/Users/dr.lisa/Desktop/Dental Wisdom Site`) first and are committed locally. Never push to GitHub — Ben pushes manually when ready with `git push origin main`. Never instruct or trigger a push; just remind Ben to push after a session if he wants GitHub updated.
- **Git lock files on this mount**: `git add`/`git commit` in this folder often print `warning: unable to unlink '.git/index.lock' (or HEAD.lock, or objects/.../tmp_obj_*): Operation not permitted`, and a stale `.git/index.lock` or `.git/HEAD.lock` can make the next command fail with "Another git process seems to be running." This is a quirk of this mounted folder (deleting files here needs explicit approval that the warnings don't trigger) — it is NOT data loss and NOT a real concurrent git process. Fix: `mv` the stale lock file to a throwaway name instead of `rm` (e.g. `mv .git/index.lock .git/index.lock.bak_$(date +%s)`), then retry the git command. A commit that prints "[main <hash>] <message>" with a "files changed" line DID succeed even if unlink warnings appeared above it — check `git log --oneline -1` to confirm rather than assuming it failed.
- **After every fix, say it out loud**: explicitly tell Ben "this is saved locally but won't show on dentalwisdom.org or dentalwisdom.github.io until you push" — every time, not just once. If Ben reports a bug "still happening" right after a fix, check first whether he's looking at the live published site (uncommitted-but-unpushed fixes never show there) vs. the local preview (`localhost:8000`) — ask which one he's checking before assuming the fix failed.

## Saving tokens / chat length
- Long chats use up more of Ben's usage budget as they go (everything said so far gets re-read each turn). To keep this efficient, tell Ben when it's a good moment to start a fresh chat — right after a page is finished and committed, or after a big batch of edits is wrapped up and confirmed.
- When suggesting this, say it plainly, e.g.: "Good stopping point — feel free to start a new chat for the next page (live.html). I'll pick up context from CLAUDE.md, SITE_SPEC.md, and git history."
- Don't suggest it mid-task or before a commit — only at clean breakpoints.

## Definition of done (per page)
Spec copy verbatim; looks right at 375px and 1280px; nav, footer, and Join modal work; all links wired or marked TODO; images lazy-loaded with alt text; no console errors; committed.
