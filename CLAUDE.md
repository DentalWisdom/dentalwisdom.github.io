# CLAUDE.md — Dental Wisdom website

## What this is
Static marketing site for Dental Wisdom (dentalwisdom.org): the 2027 conference (flagship), Dental Wisdom Live monthly CE, partner Deals, Giving (MDA), plus supporting pages. All requirements, page order, and exact copy live in `SITE_SPEC.md` — read it before any work. Exact copy in the spec is final: never rewrite it, only format it. Anything missing gets a visible placeholder plus `<!-- TODO: ... -->`.

## Who you're working with
Ben is the sole editor and not a developer. Explain any manual step he must take (publishing a Google Sheet, swapping an image, DNS changes) in plain numbered steps. When he reports a visual issue, ask for a screenshot rather than guessing.

**Decisions/questions**: Always ask Ben as multiple-choice questions (using the question tool), never open-ended or technical phrasing. Use plain everyday language, no jargon or code terms. Describe trade-offs in terms of what Ben will see/experience, not how it's built.

## Stack (locked — do not introduce frameworks, build steps, or npm)
- GitHub Pages hosting. Plain HTML files, one shared stylesheet `css/styles.css`, vanilla JS in `js/main.js` (nav, modal, scroll reveals).
- Dynamic content (Deals, Live sessions, Agenda) lives in local data files (`js/deals-data.js`, `js/live-data.js`, `js/agenda-data.js`) that each page's script reads directly — no Google Sheets, no CSV fetching. Ben tells Claude about changes (new/updated/removed entries) in chat, and Claude edits the relevant data file and commits. See SITE_SPEC.md §6 for each file's field format.
- Forms: Jotform. Direct links for registration; the floating "Join the Network" button opens our own styled modal containing the Jotform iframe. Modal: focus-trapped, Esc closes, scroll-locked behind.
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts with preconnect and `display=swap`.
- Media: optimized images in `/images` (resize to max 1600px wide, WebP ~80 quality, `loading="lazy"` below the fold). Long videos = YouTube embeds. Hero = muted looping mp4 under ~8MB in `/images` with `autoplay muted loop playsinline` and a poster image; source clip per spec §4.

## Design system
Tokens as CSS variables in `:root` (starting values in spec §2 — tune in Session 1, then frozen). Vibe: calm luxury, warm Jewish community, premium but approachable. Generous whitespace, large Playfair headlines, soft sand/ivory section bands, sea-glass and coral accents used sparingly. Motion: subtle only — IntersectionObserver fade-up on scroll, gentle card lifts, smooth modal entrance. Respect `prefers-reduced-motion`. Never flashy, never salesy.

## Conventions
- Header, footer, floating Join button: identical markup on every page. Conference sub-nav (Overview • Agenda • Speakers • FAQ • Register) appears ONLY on index.html, agenda.html, speakers.html, conference-faq.html.
- Any change to a shared element must be applied to every page in the same session — grep to verify before finishing.
- Mobile-first CSS; full-screen overlay menu on mobile per spec. Test mentally at 375px and 1280px.
- Speakers page: 16 static hand-edited cards (name, specialty, short bio, sample course + time) opening a modal. Keep each card's markup self-contained so adding/removing a speaker is a copy-paste of one block.
- Accessibility: semantic landmarks, alt text on every image, visible focus states, body-text contrast ≥ 4.5:1, skip-to-content link.
- Every page: unique `<title>`, meta description, Open Graph tags, favicon, custom 404 per spec §8.
- External services allowed: Jotform, YouTube, Google Fonts. Nothing else.

## Workflow rules
- One page per session, in the spec's build order. Start each session by proposing a short plan; wait for approval before writing code.
- Session 1 also builds the scaffold: folder structure, styles.css with tokens, shared header/footer/modal, and index.html.
- Commit after each approved page: `git add -A && git commit -m "Build <page>"`. Never leave a session uncommitted.
- Local preview: `python3 -m http.server 8000` from the repo root, then http://localhost:8000.
- Do not touch DNS, CNAME, or Squarespace until Ben explicitly starts the launch step.

## Saving tokens / chat length
- Long chats use up more of Ben's usage budget as they go (everything said so far gets re-read each turn). To keep this efficient, tell Ben when it's a good moment to start a fresh chat — right after a page is finished and committed, or after a big batch of edits is wrapped up and confirmed.
- When suggesting this, say it plainly, e.g.: "Good stopping point — feel free to start a new chat for the next page (live.html). I'll pick up context from CLAUDE.md, SITE_SPEC.md, and git history."
- Don't suggest it mid-task or before a commit — only at clean breakpoints.

## Definition of done (per page)
Spec copy verbatim; looks right at 375px and 1280px; nav, footer, and Join modal work; all links wired or marked TODO; images lazy-loaded with alt text; no console errors; committed.
