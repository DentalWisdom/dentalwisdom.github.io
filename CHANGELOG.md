# Dental Wisdom Site — Change Log
A plain-English record of every update made to the site, most recent first. This file lives in your site folder (not hidden) so you can always open it to see what's changed and when.

---

## July 11, 2026

- Swapped the order of two homepage gallery photos (gallery-9 and gallery-36) per Ben's request, and updated their photo descriptions so screen readers still describe the right picture
- Archived 10 more unused image files (old logo versions, old flyer, 2 old deal-partner logos, old favicon size) — none were used anywhere on the site
- Archived unused tooth-icon.svg from images folder — only the old, already-archived giving page used it
- Tidied up: moved the old "giveaways" prize-wheel page and the unused "content" folder (source copy docs) into the archive — neither was linked from any live page anymore
- "Join the Network" popup: now also starts loading the moment a visitor's mouse/finger reaches the button (not just after the click), so it appears even faster
- Live Slides tool: made it readable on a phone (was a tiny shrunk-down TV-style slide before) — text resizes, columns stack, controls move out of the way
- Set up an archive file for old Live Slides vendor spotlights/lectures/giveaways, plus notes in CLAUDE.md so future content swaps get saved instead of lost
- Homepage hero photo: phones now download a smaller version (33KB instead of 85KB), and the browser is told to fetch it first so it appears sooner
- Speed up the "Join the Network" popup: pages with the Join button now quietly warm up the connection to Jotform in the background, so the form appears faster the first time someone taps the pill
- Shrink + recompress homepage grid photos (conf-photo-1 through 4) and hero poster per PageSpeed audit; archive originals
- Add plain-English CHANGELOG.md; document changelog upkeep in CLAUDE.md

## July 10, 2026

- Mobile performance fixes: resize oversized photos, reliable strip lazy-load, click-to-load video, non-blocking fonts
- Skip hero video on mobile, show poster photo instead
- Tighten intro copy and prevent orphaned words on Agenda/Speakers pages
- Add vague teaser to Speakers page (no names/specialties yet)
- Add vague day-shape teaser to Agenda page (no speaker/session details)
- Revert YouTube click-to-play facade — Ben found the thumbnail pixelated at full width
- Revert button gold to original bright shade — Ben preferred the original color over the WCAG-safe darker gold
- Performance + accessibility pass: images, button contrast, accordion, video lazy-load
- Rename drop-zone folders for consistency (add _ prefix, Drop Here suffix)
- Copy polish: Deals CTA 'Become a Deals Partner', standardize 'Email Us', first testimonial in HTML for SEO, 404 section quick links
- Compress gallery strip (2.8MB->1.6MB) + 3 homepage grid photos; add noscript fallback to Sponsors page; archive originals
- Performance batch: lazy-load Join form (loads only on click), compress hero video 5.9MB->2.4MB, hero poster + 3 headshots -> WebP, add favicon.ico, noscript fallbacks on Deals/Live, remove Join button/modal from conference pages (Ben's call), untrack Drop Here source folders, trim unused Inter 800, version main.js
- Move Adin Live session to past
- Fix: carry videoUrl field through in deals.js (was being stripped before reaching the modal)
- Housekeeping: archive unused js/sheets.js, remove stale robots.txt Disallow rules for nonexistent preview pages, add performance-guardrail note to CLAUDE.md
- Compress sponsor/deal logos: PNG -> WebP, resized to display size (18MB -> ~1.1MB); archive originals + unused mda-ambulance.png; fix 2 broken live page image refs
- Fix gold text-contrast: use --color-gold-text for eyebrow labels, FAQ titles, pricing numbers, accordion open state, link hover; bump CSS to v=30
- Optimize homepage gallery photos (3.5-5MB JPEGs -> ~50-100KB WebP, resized to display size); archive full-size originals
- Add Pearl video embed to sponsor and deals cards

## July 9, 2026

- Live slides: pre-trim sponsor logo whitespace and use safe contain sizing on slides 4/6/7 instead of CSS crop (fixes weird/overflowing crop)
- Live slides: zoom-crop sponsor logos on slides 4/6/7 for bigger visible size, add gold DentalWisdom.org CTA line to title slide
- Live slides: enlarge sponsor logos on slides 4/6/7, fix promo valid-until date to July 31
- Liveslides: unified white logo cards (2x logos on spotlight/lecture/giveaway), centered giveaway layout, deck polish
- Liveslides: reorder spotlight before conference, Chaim Glazer, bigger sponsor logos, fireworks winner celebration
- liveslides: polish pass, new closing CTA, Crazy Dental spotlight + bullets, Adin/Reich lecture, sponsor-forward giveaway (logos, thank-you popup, confetti, fine print, deferred name removal)
- liveslides: design polish, new closing CTA slide, sponsor logos on giveaway, remove Intermission
- Add liveslides presenter deck (9 editable slides + giveaway wheel)
- Altair: reword closing line to official partner (March 2027)
- Altair: promote to silver sponsor, update description (both pages)
- Add Altair Hotel video to sponsor card and new Deals page card
- Add Reach promo video + updated description to sponsor and deal popups
- Add Dental Exit Planning Live session (Saul Kaplan, Crown Catapult, Oct 15)
- Make EST the standard time label (code comments + project instructions)
- Change session time labels from ET to EST

## July 7, 2026

- Add Crazy Dental July deals flyer image
- Add flyer/photo support to sponsor + deal modals; wire Crazy Dental flyer

## July 6, 2026

- Mark Crazy Dental as attending

## June 25, 2026

- Expand Crazy Dental Prices keywords with full dental supply list

## June 24, 2026

- Housekeeping: archive flyer + temp file, fix FAQ terms link, update conference-terms date to 2026, remove flyer from sitemap
- Remove gold top accent from pricing card
- CSS cleanup: consolidate base link color, remove dead coral hover rule and duplicate :root block; bump to v=27
- Fix: focus mobile menu container instead of first nav link to remove spurious gold outline on Conference
- Fix mobile menu: focus-visible outline instead of underline so only current page is underlined
- All pages: shorten meta descriptions for better link preview truncation
- Live: shorten meta description for better link preview truncation
- Live mobile: full-width Sign Up button, tighter logo col spacing
- Live mobile: center sponsor logo card within full-width stacked column
- Live: unify all sponsor logo card sizes (200x110px shared class)
- Live: center sponsor logos in session row logo card
- Live page: rename Register → Sign Up, swap to navy btn-live style
- Live page: fix Giveaway Sponsors heading to match section-heading style
- Live page: center and shorten proud sponsor line in modal, add top rule
- Live page: reduce register button height in logo column
- Live page: move register button under sponsor logo column
- Live page: inject proud sponsor note into modal for giveaway sponsors
- Live page: add sponsor logo column to session rows (opens sponsor modal)
- Live page: hide Attending badge in sponsor modals, keep tier pill
- Preview pages: noindex meta + robots.txt disallow for agenda and speakers previews
- Live page: add missing sponsors.js/data scripts, fix card order (LiveWell left, MB right), bump sponsors.js to v=4
- Add conference-agenda-preview: shareable full agenda page for review
- sponsors.js: fix second early-return blocking modal on static-card pages (Live page)
- Track _archive folder: remove from .gitignore and commit archived pages
- sponsors.js: allow modal init when static sponsor-card elements exist (fixes Live page)
- Live giveaway sponsors: swap order to MB Precious Metals first, LiveWell Capital second
- Live page: restore giveaway sponsors section, clickable modals, swap How It Works/CTA bg colors
- Fix giveaway sponsors: sand bg, proper section-heading font classes
- Fix giveaway sponsors section: ivory bg, logo cards match index sponsor strip size
- Add giveaway sponsors section to Live page (MB Precious Metals + LiveWell Capital)
- Update CLAUDE.md: note agenda/speakers are placeholder pages with archives ready to restore
- Rename APEX to 'Apex Reimbursement Specialists' across all data files
- Fix sponsor modal trigger: use data attribute instead of broken inline onclick
- Align sponsor label/logo/name vertically; bump CSS to v=26
- Fix sponsor modal on Live page: remove early-exit guard in sponsors.js
- Fix APEX name case in live-data; bump sponsor logo to 32px
- Live page: sponsor name/logo opens shared modal from sponsors-data.js
- Create CNAME
- Delete CNAME
- Add CNAME for custom domain; hide sponsor testimonials until real quotes available
- Crown Catapult: add Wistia video embed and formatted blurb
- Hide sponsor testimonials until real quotes available; archive carousel to _archive/
- Add coming-soon placeholders for agenda and speakers; archive full pages to _archive/

## June 23, 2026

- Fix NuSmile pending pill; add past sponsor pill to Crazy Dental
- Move 'Suggest a Vendor' link to bottom of deals page
- Reorder platinum sponsors: orthobrain, Touro, LiveWell, Crown Catapult, Emerald
- Replace 'Speaker TBD'/'Lecture Title TBD' placeholders with 'To Be Announced Soon'
- Move Werb speaker card from Thursday to Friday section
- Shabbos schedule: start times only, DVI 2:45, lectures 3:45/4:45, Mincha 5:45, Shalosh Seudos 6:10; update speaker cards
- Friday lunch: 12:30 - 1:30 PM
- Speakers page: update Werb times (Thu->Fri), Ference 11-12:30, remove Faber+German cards, archive both
- Shift Friday Ference to 11:00 AM - 12:30 PM
- Update agenda: Thu Werb->TBD, Place&Restore->All-on-X/photogrammetry, Paint Night->anatomy title, Fri Marc Faber->Practice Mgmt TBD, add Fri Werb 10-11 Intraosseous/NuSmile, Straight Talk->TBD
- Add specialty credentials to speaker names on agenda
- Update implant workshop sponsors: Thursday → Blue Sky Bio, Friday → Adin
- Rename Friday implant class to GP's Guide to Surgical Guides
- Bump sponsors.js to v=3 (cache bust); swap in new NuSmile logo
- Sync speakers page with agenda: fix times, titles, card order
- Filter sponsor logo strip to confirmed 2027 sponsors only (exclude pastSponsor/pending)
- Agenda: sponsor Thursday ortho hands-on with orthobrain
- Agenda: title Friday afternoon endo hands-on session
- Agenda: title Thursday ortho hands-on session
- Agenda: title Friday implants hands-on session
- Agenda: rename Citron session to 5-Step AI Video Playbook
- Agenda: add pedo session titles for Thu/Fri; Friday afternoon breakout extended to 2hrs
- Agenda: restructure Friday schedule - Faber 9-10am, Ference 10am-12pm, Endo to afternoon breakout, Citron solo 1.5hr, remove Friday paint class

## June 22, 2026

- Update Dr. Sara Werb speaker card to match agenda (anesthesia + zirconia, not peds)
- Rename Daf Yomi Shiur to MDY Daf Yomi Shiur on all three days
- Add NuSmile sponsor: agenda, sponsor card, Sara Werb modal; pending badge system
- Reorder homepage testimonials: Jerusalem/minyanim lead, kids last
- Fix grammar in D.B. testimonial: minyanim/shiurim plural
- Populate homepage testimonials with final attendee quotes
- Add placeholder lecture titles for Hershman, Steinberger, German
- Add muted gray 'Past Sponsor' pill for past sponsors; mark Altair Hotel and Emerald Dental Lab as attending; bump CSS cache to v=23
- Add soft gold wash background to CE-credit agenda rows
- Update sponsor thank-you line wording on homepage and agenda
- Redesign agenda page schedule list (editorial style, option C)
- Document no-photo-yet placeholder convention in CLAUDE.md
- Speaker placeholder: light sand/white circle with dark navy initials
- Agenda: split APEX/CG Insurance sponsor credit into two separate links
- Shorten Part 1 agenda title to Built to Scale: 1 to 3+ Locations
- Add Yaakov Citron headshot and Citron Films video to speaker card
- Add Yaakov Citron Part 2 lecture to Built to Scale session, sponsored by Citron Films
- Add Havdalah video to Gobbie Cohn's bio card with subheader
- Split Gobbie Cohn's bio into three paragraphs in the speaker modal
- Add Gobbie Cohn (Mincha/Kabbalas Shabbos) with APEX & CG Insurance Group as 'Compliments of' sponsors
- Add Dr. Samuel Schuster as Pre-Davening Shiur speaker
- Give Friday painting breakout a distinct name: Canvas & Calm
- Rename Painting breakout to Brush & Unwind: Paint Night
- Add Dr. Marc Faber practice management session; add room numbers to breakout tracks
- Split Speakers page into Thursday/Friday/Shabbos sections; fix Sam Waller's time to 5-6pm; update Steinberger photo
- Add Shabbos meals FAQ section
- Set Atrium as location for both Registration entries; rename Wed event to Registration & Opening Night Reception
- Move Dan German to Friday Ortho Tips and Tricks; add lunch sponsors (Emerald Dental Lab Thu, TBD Fri)
- Add Dr. Dan German (orthobrain sponsor) as Thursday Ortho Hands-On speaker
- Shabbos afternoon: swap Making Aliyah talk to 4pm, Sam Waller to 5pm
- Shabbos afternoon: add DVI talk (3pm) and Making Aliyah talk (5pm), keep Sam Waller at 4pm
- Update Thu/Fri schedule (Hershman, Steinberger, Werb, hands-on tracks) and add their speaker cards
- Center conference sub-nav on desktop; bump CSS cache version
- Fix mobile menu focus box; bump CSS cache version

## June 21, 2026

- CLAUDE.md: add never-delete-only-archive policy
- CLAUDE.md: document recurring git lock-file workaround for this mount
- CLAUDE.md: note mobile menu focus fix; remind to flag local-vs-pushed status on every fix
- Fix mobile menu: stop auto-focusing logo (caused extra gold focus-ring box around it)

## June 19, 2026

- Fix mobile horizontal overflow (white sidebar, clipped Register button)
- Update sitemap and SITE_SPEC to reflect live-present URL and new footer link names
- Rename /live-get-involved to /live-present — old URL now redirects
- Rename Live footer links: Overview → CE Sessions, Want to Get Involved → Want to Present
- Fix aria-current on WhatsApp nav for whatsapp-policies page
- Review fixes: remove Sponsor TBD from agenda, fix aria-current on nav sub-pages
- Set testimonial sections to explicit white background
- Set testimonial sections to white background
- Move sponsor testimonials above Q&A
- Copy updates: WhatsApp community size, FAQ vendor dentist definition + register CTA, Deals hero categories, homepage video caption, Live H2 fix, Deals-partner CTA heading
- Fix circular --color-gold-dark CSS variable; bump stylesheet to v=11
- Increase bottom padding on What You Will Experience section
- Add canonical URL tags to all live pages
- Sort past Live sessions most-recent-first
- WCAG: gold contrast + tokenize hovers, CSS v9, copyright, nav + CLAUDE.md updates
- Fix mobile horizontal overflow: scrollable sub-nav, overflow-x hidden on body (v10)
- Update Dr. Harold Katz session title; add TheraBreath sponsorship to agenda and speaker modal
- Reorder CTA buttons on WhatsApp page to match nav order
- WCAG: gold contrast + tokenize hovers, CSS v9, copyright, nav + CLAUDE.md updates
- WCAG: gold text contrast, tokenize hover colors, CSS v9, copyright fix
- Content + nav updates
- Code quality cleanup: lowercase email, fix section numbers, remove retired CSS tokens
- Accessibility + font consistency improvements
- Site audit fixes: CG Insurance logo, agenda sponsor labels, gallery alt text, lazy load sponsors strip, archive unused images, footer scroll-to-top, sitemap whatsapp pages, CLAUDE.md notes
- Fix auto-scroll: remove Jotform onload scrollTo(0,0) from all iframes
- Add text-shadow to hero h1 and lede for legibility over bright backgrounds
- Add text-shadow to hero heading and lede for legibility
- Mobile fixes: touch-pause resume, live buttons layout, scroll cue, hamburger color, sponsor strip lazy load
- Site audit fixes: live status, FAQ schedule, sponsor logo, speakers note, deals-partner hero, gallery subtitle, video year label
- Remove Watch Recording button from past Live sessions
- Mobile fixes, sponsor updates, content changes

## June 18, 2026

- Fix Friday 3-5pm CE credits to 2, fix Kabbalas Shabbos spelling, equal-width agenda filter buttons
- Fix btn--primary typo on new-speaker and new-sponsor pages
- Agenda: concurrent sessions, event colors, schedule updates
- CLAUDE.md: sponsor modal media notes
- Update Citron Films: attending, new blurb/link, YouTube embed in modal
- Add unlisted giveaway spinner at /giveaways
- Fix orthobrain capitalization in sponsors-data.js
- Remove badge wrapper so attending pill is structurally identical to tier pill
- Force same font-family on both pills to fix alignment
- Mark Crown Catapult, Orthobrain, Touro as attending; document in CLAUDE.md
- Unify pill CSS so both badges are pixel-perfect identical
- Rename page heading to Our Sponsors & Exhibitors
- Match attending badge line-height to tier pill
- Fix attending badge height to match tier pill
- Fix attending badge: match tier pill style, pin top-left on card
- Add attending badge next to tier pill — LiveWell Capital
- Update agenda: Shiur & Oneg, extend Thursday last session to 8pm, Shabbos Pre-Davening to 9:15am, add CE credits and Speaker TBD entries
- Add 1.5 CE credits to Friday night Oneg
- Link Closing Party sponsor orthobrain to sponsors page
- FAQ: add 'What happens after I register?' and 'What should I expect as a first-time attendee?' questions
- Fix Overview href; move homepage inline styles to styles.css
- Fix relative image paths in JS data files and speaker/sponsor data attributes
- Fix relative asset paths to absolute in all subpage index.html files
- Remove .html from URLs: move pages to folder/index.html, update all internal links
- Remove arrow from sponsor buttons; add Want to Sponsor button on agenda page
- Fix Overview sub-nav on all conference pages: link to index.html top, not #overview anchor
- Agenda: add Full Schedule / CE Only toggle

## June 17, 2026

- SITE_SPEC: mark FAQ additions as complete
- Add robots.txt and sitemap.xml
- Fix yellow issues: modal WhatsApp note on all pages, gallery alt/lazy, footer 4-day, aria-current cleanup, CSS v7 everywhere
- Agenda: rename Shabbos Daf Yomi to Pre-Davening Shiur; add Daf Yomi at 10:30 PM
- Archive unused logo files; keep header-logo-blue and footer-logo-white-trimmed
- Bug fixes: redirects for prototype pages, CSS versioning, FAQ text, sheets.js stub, gitignore, archive stray images
- Add .nojekyll to fix GitHub Pages subfolder routing
- Add Preview Site launcher
- Update CLAUDE.md: URL structure notes
- Sponsor strip: pause on hover, slow to 60s
- Slow logo scroll strip to 0.35 px/frame
- Fix Overview sub-nav link: scroll to hero top instead of #overview anchor
- Speakers: group by Thursday and Shabbos
- Agenda: Friday Oneg sponsored by Crown Catapult
- Agenda: Shalosh Seudos sponsored by Touro College of Dental Medicine
- Agenda: sponsor name in gold + bold, same size as title
- Agenda: sponsor inline in title line, not as secondary row
- Agenda: Welcome Party sponsored by LiveWell Capital; sponsor links go to sponsors page
- CLAUDE.md: document speakers, modal specs, agenda behavior, CE fields
- Tidy: update speaker bios doc, add rabbi katz + sam waller source files
- Speaker modal: enlarge sponsor logo to match photo size (140px)
- Speaker modal: add sponsor logo + link for Sam Waller (LiveWell Capital) and Rabbi Katz (Touro)
- Add Sam Waller as speaker; slot into Shabbos 4-5pm agenda entry
- Shabbos: replace 2x1.5hr lectures with 3x1hr lectures (3-4, 4-5, 5-6pm)
- Add Rabbi Dr. David J. Katz as 4th speaker; update Shalosh Seudos agenda entry with CE credit
- Agenda: add CE credit counts per lecture session
- Agenda: move CE label under time column, simplify to plain text
- Agenda: all-days default view, day filter buttons, CE lecture highlight
- Agenda: replace 'Lecture' with course titles; placeholders say 'Lecture Title TBD'
- Add 3 confirmed speakers: Katz, Greenbaum, Ference
- Fix: add has-subnav to conference-sponsors.html; remove duplicate footer comments from 13 pages
- Update CLAUDE.md with tuned spacing token values
- Spacing pass: tighten experience section, CTA section, gold line margin, widen bullet list
- Tighten global spacing: reduce xl/2xl tokens, fix section--compact, remove sponsor-strip double padding, tighten section-heading margin
- index: experience dark blue, sponsors ivory, CTA parchment, tighter spacing
- live.html: equal-width buttons, 2x2 orphan fix
- styles: consistent sub-nav font size across all conference pages
- index: tighten space above experience italic quote
- styles: reduce global section padding from 5rem to 4rem
- live.html: responsive 4→2×2 CTA buttons, single-line nowrap, centered
- Copy polish pass: index, speakers, live, whatsapp, faq, sponsor, deals, live-get-involved
- Update CLAUDE.md: speakers page placeholder status
- Reduce section spacing to 5rem; rewrite deals-partner copy
- Redesign Live + WhatsApp sections; show-more sessions; copy updates
- Update modal: 'dental professionals' → 'dentists' for clarity
- Footer logo: increase spacing below logo
- Remove fuse temp files from tracking
- Fix footer logo: restore header blue logo, use trimmed white in footer, add spacing
- Fix footer logo: use white logo on all pages
- Agenda: remove lede paragraph, add compact padding to hero band
- Cleanup: terms dates, remove TODOs, move loose images, fix sponsors comment
- Fix equal-width buttons: use flex:1 so all three match the widest
- Equalize conference section buttons: relabel and set equal min-width
- Move gallery and conf-photos into images subfolders, update index.html paths
- Cleanup: archive draft files, update SITE_SPEC and CLAUDE.md to reflect confirmed decisions
- Conference Details: swap Register Now button for FAQs
- Improve section rhythm: video leads, sponsors strip, gallery lede removed
- Simplify pricing label to 'Dental Resident' on index.html
- Fix mobile: menu logo, sub-nav wrap, hero text alignment; dental student/resident copy
- Commit all session changes — palette, index rebuild, all pages updated
- Replace index.html with approved draft (new palette + editorial layout)
- Fix section-heading h1 size on non-hero pages (Live, Deals, etc.)
- Apply warm gold palette and design system to all pages
- Hero text center-align + accumulated session updates

## June 16, 2026

- CLAUDE.md: add file flow rule — all changes stay local, Ben pushes to GitHub manually
- Speakers: restore sample cards for design preview; fix Dr. Levy photo gender mismatch
- Site review fixes: remove fake speakers, fix Shalosh Seudos spelling, update copyright to 2026-2027, update gallery alt text, update all meta descriptions
- Sponsors: dynamic column layout — no orphan rows, section centered on page
- Sponsors: show tier badge (Platinum/Gold/Silver/Bronze) in modal popup
- Sponsors: enforce 3/4/5/6 per row per tier via max-width constraint
- Sponsors: flex-wrap rows with centered orphans, card width varies by tier
- Wire Jotform 261626058813055 into Join modal on all pages
- Photo mosaic: larger gaps, taller overall dimensions
- Asymmetric photo mosaic: short/tall diagonal pattern
- Swap in real conference photos with correct crops
- Fix pricing box text: scope left-column p selector to direct children only
- Fix pricing box text visibility and photo aspect ratio
- Fix agenda arrows: correct CSS tokens + scroll to tabs on nav
- Restyle overview section to navy split layout with 2x2 photo grid
- Add prev/next day arrows to agenda
- Slow down photo gallery scroll speed
- Use proven logo-scroll classes for photo gallery
- Make conference sub-nav sticky below main header
- Move gallery outside container so it scrolls full-width
- Conference Details accordion + sponsor/deal logos and JS updates
- Fix gallery: match working sponsor strip pattern
- Reduce carousel card padding further so logos fill more of the card
- Add Sponsors to conference sub-nav on all conference pages; reorder to Speakers → Sponsors → FAQ
- Make sponsor logos bigger inside carousel cards (tighter padding, full fill)
- Add auto-scroll animation to sponsor logo carousel on agenda page
- Deals: compact cards + detail modal + Crown Catapult + keyword search
- Replace sponsor cards with auto-scroll logo strip on agenda and homepage
- Wire sponsor grid into index.html
- Add MB Precious Metals logo
- Populate sponsors page with real 2027 sponsors and logos
- Bust JS cache on index
- Fix gallery auto-scroll: clone items before starting animation
- Add auto-scroll to homepage gallery
- Add 38 real photos to homepage gallery, remove captions
- Group Sponsors page into Platinum/Gold/Silver/Bronze tiers; keep Agenda flat
- Add clickable sponsor cards with popups to Sponsors and Agenda pages; add Meet Our Sponsors button on home
- Add section social-preview images; complete Open Graph + Twitter card tags on all pages
- Standardize favicon to PNG across all pages; rework conference sponsors section
- Add circular photo speaker cards (3 sample placeholders)
- Fix: replace vw-based clamp() with fixed breakpoint sizes to prevent cross-page font inconsistency in Safari
- Convert sponsor page accordion to plain visible text (matching lecture page style)
- Build conference-new-speaker.html with full content and FAQ
- Remove recording note from Past Sessions section
- Fix: deals no-results message showing on page load (hidden attr overridden by .placeholder CSS)
- Redesign Live session cards as horizontal event rows
- Build conference-new-sponsor.html — full sponsorship Q&A with accordion
- Add live-data.js with 3 sessions; switch live.js from Google Sheets to local data
- Move intro copy from deals to deals-partner; add Become a Deals Partner CTA on deals page
- Cascade new header logo + footer design to all 17 pages
- Build conference-faq.html — full FAQ content, 2027 dates, legal doc style

## June 15, 2026

- Rename pages to consistent naming convention
- Ignore raw homepage-carousel source photos
- Add Become a Deals Partner page (deals-partner.html)
- Add custom 404 page
- Rename Present/Sponsor to Want to Get Involved across footer and live page; rewrite live-present-sponsor.html content; update SITE_SPEC
- Add group policies & company info section to whatsapp.html
- Add cross-link note to conference-terms.html pointing to main Terms page
- Split terms.html into general Terms and conference-terms.html; fix scroll-reveal threshold
- Remove giving.html (not referenced anywhere on the site)
- Only show no-results message for an active text search, not category filters
- Add Present/Sponsor Live page; restructure footer (drop Giving, split Programs into Live/Deals/WhatsApp sections, new intro text)
- Improve Deals card layout: larger logos, aligned titles, restyle promo
- Agenda: add Wednesday welcome event, Thursday registration, and locations for all sessions
- Agenda: add Thu/Fri/Shabbos schedule, sponsor logo scroll strip
- Simplify Join the Network pill; move dentists-only messaging into modal text
- Add section-specific logo boxes and remove Giving from top nav/mobile menu
- Build agenda.html: tabbed day-by-day sample schedule
- Add placeholder pages: agenda, speakers, conference-faq, sponsor, lecture, giving, whatsapp
- Footer redesign (4 columns), FAQ page rename to conference-faq.html, Deals: add Suggest a Vendor link
- Deals: group cards by category with section headings, drop per-card category badge
- Expand Privacy Policy with full draft language
- Terms: add Registration & Fees and Guests sections for Exhibitors
- Build terms.html and privacy.html
- Deals: local data file (no Google Sheet), taglines, clickable logos

## June 12, 2026

- Build deals.html
- Build live.html
- Add guidance for when to start a new chat to save tokens
- Move photo gallery up, add Register buttons after Overview and What You Will Experience
- Add full Conference Details section to homepage
- Fix conference year in Terms (2026 -> 2027)
- Add Terms & Conditions content
- Add Join the 2027 Conference button to Glimpse section
- Add master copy document to content/
- Build scaffold + index.html

