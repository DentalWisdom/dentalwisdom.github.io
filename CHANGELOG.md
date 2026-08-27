# Dental Wisdom Site — Change Log
A plain-English record of every update made to the site, most recent first. This file lives in your site folder (not hidden) so you can always open it to see what's changed and when.

---

## August 27, 2026

- **The billboard's rules are now written into `CLAUDE.md`,** so they don't have to be explained again next month. Recorded there: that a vendor-spotlight sponsor is never also listed as a giveaway sponsor on the billboard (one panel, headed "Tonight's Vendor Spotlight") and that the de-duplication works by matching the sponsor's **name**, so the spelling must be identical in both places; that the timer is set by a fixed 2:00 total with the panels dividing what's left, rather than a per-panel length; where the "what this sponsor does" lines live; the two traps in the panel build-in that caused today's bugs; and that audio files stay off the website. The `prizePlural` field is documented too — singular on the slide and winner pop-up, plural on the billboard.

- **Alphaeon added as a third giveaway.** The dropdown on the giveaway slide now reads Live Well Capital — Yeti Coffee Mug, MB Precious Metals — 1 oz Silver Coin, and **Alphaeon — Yeti Coffee Mug**. Their card shows the logo and myalphaeoncredit.com/getstarted-dentalwisdom; they have no named contact on file, so that line is simply left off and the card sits slightly shorter. The winner pop-up picks all of it up automatically.
  - **One knock-on handled:** the countdown billboard builds its sponsor panels from this same giveaway list, so adding Alphaeon there would have given them two panels — one as a giveaway sponsor and another as the Vendor Spotlight. The billboard now skips any giveaway sponsor who is already the spotlight, so Alphaeon appears once, on their spotlight panel, and the billboard stays at seven panels and a clean 2:00. If a future month's spotlight vendor isn't also a giveaway sponsor, nothing changes.

- **Removed the heavy pink rule down the left edge of the "Heads up" box** on the conference slide. It was a 5px dark pink bar — the stock "callout box" look that turns up in every template — and it sat oddly against the rest of the deck, which uses thin hairlines and quiet colour everywhere else. The box now has the same 1px border on all four sides, so it reads as part of the design rather than a widget dropped into it. Same pale pink fill and "HEADS UP" pill, just calmer.

- **Dvar Torah speaker filled in: Dr. David Abramowitz.** Slide 3 now reads "Opening — Dvar Torah / Delivered by / Dr. David Abramowitz." Both lines came back on their own once the name was set.

- **The conference slide now comes before the Alphaeon vendor slides.** New running order: title, about, Dvar Torah, **conference**, then the three Alphaeon slides, the featured lecture, the giveaway wheel, the second conference slide and the closing. Still 11 slides, and every page number recounted itself — the numbered slides now read 4/11 for the conference and pick up again at 8/11 after the three full-bleed Alphaeon ones, which carry no topbar by design.

- **Deals panel headline is now "Deals on What Dental Wisdom Members Already Buy"** (was "Deals on What You Already Buy"). Naming the members makes the panel say who the pricing is for, while keeping the "already buy" point that gives a dentist a reason to look. "Already Buy" stays in gold italic. Fits on one line at full size.

- **Conference fine print changed to "Use at checkout when registering"** (was "at checkout — before hotel rates go up"). It updates in all three places at once: the countdown billboard and both conference slides.
  - This also clears up an ambiguity worth noting. The panel says "Register Now" and "Save $175," but the old fine print talked about *hotel rates* — so a reader could reasonably have thought the $175 was off a room, or off a conference ticket, and couldn't tell which. The new wording ties the code plainly to registering.

- **Music support is built and ready, but no track is set.** The billboard can play background music — it fades up over 2 seconds, sits at a level you can talk over, and fades out across the closing countdown. It's currently set to `music: ""`, so the deck is silent and nothing extra loads.
  - **Why no track:** the file first tried was a commercial recording, and publishing it to dentalwisdom.org would have made it downloadable by anyone with the URL — distribution rather than just playing it on a call. Ben removed it. To use music on the live site you need a track you hold the rights to (royalty-free or licensed for broadcast).
  - **Nothing in `liveslides/audio/` is published.** `.gitignore` covers that whole folder apart from its README, so any music file dropped there stays on this Mac. That means a track works when the deck is run locally and the live site stays silent — with the timer, panels and countdown behaving identically either way. The README in that folder explains the whole setup.
  - The little mute icon has been removed from the billboard — with no track playing it was a control for nothing, and the whole panel is cleaner without it. If music is ever switched on, "Start now" and Esc still stop everything including the audio.
  - Confirmed with the track removed: no console errors, no failed requests, all seven panels and the countdown running exactly as before.

- **The countdown billboard can now play its own background music** — no second app, no separate player. Everything is wired; it just needs a file.
  - **To turn it on:** drop an `.mp3` (or `.m4a`) into the new `liveslides/audio/` folder, then set `music: "audio/your-file.mp3"` in the `waitingRoom` block at the top of `liveslides/index.html`. There's a `README.txt` in that folder with the same instructions. Leave `music: ""` and everything stays silent, exactly as it is now.
  - It starts when you click Start, **fades up over 2 seconds**, sits at background level (adjustable via `musicVolume`), and **fades out across the closing countdown** so it isn't competing with "Let's begin." It loops, so the track doesn't need to be exactly two minutes. A small note icon appears bottom-left while it plays — click to mute mid-run.
  - **The one thing to remember:** on Zoom or Teams, browser sound does **not** reach attendees unless you tick **"Share sound"** when you start the screen share. Without that, you'll hear it and nobody else will. Worth a dry run before using it live.
  - If the file is missing or the browser blocks it, the music is simply skipped — the timer itself is never interrupted.

- **Fixed two things in the panel build-in.** The first panel (Live Well Capital) was appearing fully formed while every later panel built in properly — the panels were created and the first one revealed in the same instant, so the browser never drew their hidden starting state and had nothing to animate from. And on the sponsor panels the **phone number was appearing first**, before the logo, because those panels have eight rows and only seven had been given a delay — the eighth had none, so it went first. Both fixed: the reveal now runs strictly top to bottom, ending on the phone number.
- **The build is also slower now** — about 3.2 seconds instead of 2, with a longer fade on each row. It was reading as a flicker rather than an unfold.

- **Each sponsor panel now says what the sponsor actually does.** The panels showed *who* — a logo, a name, a phone number — but not *what*, and "Live Well Capital" next to a logo doesn't tell a dentist whether that number is worth writing down. A plain-English line now sits under each sponsor's name, above the offer and contact details, because it's context you need before a phone number means anything:
  - **Live Well Capital** — "Financial planning and wealth management / For dentists and small business owners"
  - **MB Precious Metals** — "**Don't throw out old crowns, bridges or restorations** / They hold gold, silver, platinum and palladium — MB assays on-site and pays top value"
  - **Alphaeon** — "Patient financing that says yes more often / Higher approvals, broader credit profiles and 24/7 provider support — at preferred Dental Wisdom pricing"
  - **Pearl** — "**AI that reads the x-ray, charts the perio and writes the note** / Real-time pathology detection, periodontal charting, AI-generated clinical notes and insurance verification"
  - All four live together in one `about` list at the top of the file, keyed by sponsor name, so the wording is easy to change and a sponsor left off the list simply doesn't get a line.

- **The panels now build instead of appearing all at once.** Over roughly the first three seconds each panel fades in from the top down — logo, name, what they do, then the contact details — which walks the eye in the right order and uses the opening beat of a fifteen-second panel. After that everything holds completely still, which is what you want while someone is copying down a phone number.

- **Conference promo code changed back to `DentalWisdomLive`** (from `LOCKINHOTELRATE`). It updates in all three places at once — both conference slides and the countdown billboard — because they all read the same value. It renders with its capital letters intact, so it stays readable on screen rather than becoming one long block of capitals.
  - The amount stays at **$175**. This was worth checking, because `DentalWisdomLive` was the code on the deck until August 25 — when it was swapped for `LOCKINHOTELRATE` *and* the amount changed from $200 to $175 at the same time, so the old code could have carried the old value. Ben confirmed on August 27 that he updated the booking system and **$175 with `DentalWisdomLive` is correct and live**.

- **Three wording/detail additions to the countdown billboard.**
  - The **conference** panel now ends with **DentalWisdom.org/conference**, so people have somewhere to go rather than just a date and a code. Its heading also changed from "Save the Date" to **"Register Now for Best Rates"** — the old wording read as though the date were still far off, when the panel underneath is actively pushing a discount code before rates rise.
  - The **Pearl** panel now names the class and who's giving it — *AI in Dentistry*, "Presented by Dr. Mitchell Rubinstein" — above the hellopearl.com link. Both are read from the lecture slide's own entry, so next month's class and speaker follow automatically.
  - During the final 10-second countdown the line above "Dental Wisdom Live" now reads **"Tonight's Session"** instead of "Every Month." It reads better at the moment you're about to begin. The "Every Month" panel earlier in the rotation keeps its wording, where it's still correct.

- **The Live slides now work properly on a phone.** They already reflowed into a single readable column, but three things were getting in the way:
  - **The three Alphaeon slides looked broken.** Because they're 16:9 artwork on a tall phone screen, the image sat squashed at the top of the screen with a large blank area beneath it. They're now full width and centred, so the space above and below reads as deliberate framing rather than something that failed to load.
  - **The floating buttons sat on top of the text.** On the giveaway and conference slides the "Add names" button and the arrows covered the last couple of lines — including the sponsor's phone number. Every slide now leaves room underneath for them, and the arrows and button are bigger and easier to hit with a thumb.
  - **You can now swipe.** Flick left or right to move between slides instead of aiming for a small arrow. Swiping is only triggered by a clear sideways flick, so scrolling down a long slide won't accidentally skip ahead, and each new slide starts at its top rather than wherever you'd scrolled to.
  - The three slides that are taller than a phone screen (the conference, lecture and giveaway slides) scroll normally; everything else fits on one screen. The countdown billboard stays a presenter-only tool and doesn't appear on phones.

- **Fixed: the countdown billboard was showing a blank screen.** The version pushed a few minutes ago ran the clock, the dots and the progress bar correctly but never displayed any of the six panels — just empty navy. Cause was a one-word naming clash: the big end-of-countdown number was stored in a variable called `n`, the same name already used for the panel count, so the code that works out "which panel should be on screen right now" was reading the wrong value and matching nothing. Renamed, and the panel index is now also guarded so a bad number can't blank the screen again. Verified by watching a real timed run rather than stepping the panels by hand — which is how the bug slipped through the first time.

- **Alphaeon added to the billboard, which is now seven panels.** Order: Live Well Capital → MB Precious Metals → **Alphaeon** → Conference → Pearl → Deals → next Live session. Alphaeon's panel is headed **"Tonight's Vendor Spotlight"** and shows their logo, "Free to Enroll + 40% off Merchant Fees" and myalphaeoncredit.com/getstarted-dentalwisdom, taken from their deals-page entry. That heading is editable on its own line in the config, so a future spotlight vendor can be labelled differently.
  - The Alphaeon logo on that panel was cropped: the file still carried a wide band of blank white above and below the wordmark, so it was landing about half the size of the other logos on screen. Trimmed to the artwork, it now fills the card the way Live Well Capital's and Pearl's do.
  - **The billboard is now pinned to a fixed 2:00 total** rather than a fixed time per panel. The panels divide up whatever is left after the closing countdown, so each of the seven now gets about 15.7 seconds — and adding or removing a sponsor next month changes each panel's turn instead of changing the length. It will always land on a clean 2:00.
  - The closing countdown no longer pauses on "10". Earlier it held there for a few seconds to round the total up, which read as a stall; now the countdown lasts exactly as long as it counts (10 seconds for 10, 9, 8 … 1) and every spare second goes to the panels instead. The two are tied together in the code, so it can't drift back into holding a number.
  - Tonight's featured sponsor lives in `waitingRoom.spotlight` at the top of the file. Set it to `null` in a month when nobody has the spotlight and the billboard simply drops back to six panels, still 2:00.

- **New: a "we'll start in a couple of minutes" billboard on the title slide.** There's now a small gold **Start 2:00** button in the bottom-right of the title slide. Click it when attendance is light and you want to give people a few minutes to join — instead of a bare clock, those two minutes go to work. Six full-screen panels take 18 seconds each, in this order:
  1. **Live Well Capital** — logo, "Giving away tonight: Yeti Coffee Mugs", LiveWellCapital.com, Call Sam at (917) 715-2118
  2. **MB Precious Metals** — same treatment, 1 oz Silver Coins, Call Adam at (443) 253-4143
  3. **The conference** — March 3–6, 2027, The Altair Hotel, Miami, with the $175 / LOCKINHOTELRATE promo
  4. **Pearl** — tonight's CE partner, with hellopearl.com/dental-wisdom
  5. **DentalWisdom.org/deals**
  6. **Dental Wisdom Live** — names the *actual* next session (currently "Dental Exit Planning," October 15) and points to DentalWisdom.org/live to register
  - Then the last stretch clears the panels away and the **Dental Wisdom Live** lockup stays on screen while an enormous countdown runs beneath it — 10, 9, 8… — landing on "Let's begin." It closes itself and leaves you back on a clean title slide. Press **Esc** or click **Start now** to cut it short at any point.
  - Six panels at 18 seconds is 1:48, and the finale runs 12 — so the countdown starts at 10 and simply **holds on "10" for three beats** before ticking down. That's what makes the whole thing land on a clean **2:00** rather than an odd 1:58, and it isn't something anyone watching will notice.
  - A live countdown sits top-right the whole time and a gold progress bar drains along the bottom, so people always know how long is left. Both turn pink for the final stretch. The deck's own arrows, page counter and buttons hide while it runs so nothing sits on top of it, and come straight back afterwards.
  - **It keeps itself current.** The sponsors shown are read from tonight's giveaway and lecture entries, not a separate list — change the giveaway sponsor next month and this changes with it. The conference dates are read off slide 5, and the next-session panel reads the website's own session list, so none of it can quietly go stale.
  - On the billboard the prizes read **plural** ("Yeti Coffee Mugs"), since the sponsor is being thanked for the whole set; the giveaway slide and winner pop-up stay **singular**, since each winner gets one. Timings live in `waitingRoom` at the top of the file: `secondsPerPanel: 18`, `finaleSeconds: 12` and `countFrom: 10`.
  - The button doesn't appear on phones — it's a presenter control and the deck is a reading layout there.

- **Slide 4 is now three Alphaeon slides instead of the built-in Vendor Spotlight.** You dropped three finished Alphaeon slides in the "To add to Dentl Wisdom Live Slides" folder, and they now run as slides 4, 5 and 6 in this order: the title slide ("Helping Doctors Help More Patients"), then the benefits slide ("Higher Approvals. Better Offers. 24/7 Support."), then the rate tables ("The Modern Growth Partner for Dentists"). Say the word if you want them in a different order — it's a one-line change. The deck is now 11 slides and every page number re-counted itself automatically.
  - Each one is inserted as a full-screen image at the deck's existing size, edge to edge, with no borders or cropping — nothing about the slide dimensions changed. They were converted to WebP and are 58–90 KB each, so they load instantly.
  - **One thing worth knowing:** the files you supplied are 960×540, which is half of full HD. They've been enlarged as cleanly as possible, but no process can invent detail that isn't in the original, so the small print in the rate tables will look slightly soft on a large monitor. If you can re-export those three from the original Alphaeon deck at 1920×1080 or larger, drop them in the same folder and they'll swap straight in — same file names, no other changes needed.
  - The old Crazy Dental spotlight has **not** been thrown away. Its details are saved in `liveslides/_archive/spotlight-lecture-giveaway-history.md`, and the layout itself is still in the deck, just dormant. If a future month goes back to a single built-in spotlight slide, emptying the new `spotlightSlides` list brings it back exactly as it was.

- **"Delivered by Chaim Glazer" removed from the Dvar Torah slide (slide 3).** The slide now reads just "Opening — Dvar Torah" until you know who's speaking. Both the name *and* the "Delivered by" label above it disappear together, so there's no orphaned label sitting over an empty space. When you have the speaker, put the name back in `dvarSpeaker` and both lines return on their own.

## August 26, 2026

- **Giveaway prize names changed to singular.** "Yeti Coffee Mugs" is now **Yeti Coffee Mug** and "1 oz Silver Coins" is now **1 oz Silver Coin**, since each winner receives one. This updates all three places the prize name appears — the dropdown you pick from, the prize card on the slide, and the winner pop-up.

- **The giveaway pop-ups now grow with the screen.** On a big monitor or a TV the winner pop-up (and the "Add names" box) looked small and stranded in the middle of the screen, while the slide behind it filled the display. The reason: the slides were being enlarged to fit your screen, but the pop-ups were stuck at one fixed size no matter how big the window was. They now enlarge by exactly the same amount as the slides, so everything inside them — the winner's name, the sponsor logo, the contact line, the buttons — grows in proportion. On the screen you sent, the pop-up is now a bit over twice as wide and tall as before (roughly five times the area). It looks the same as it always did on a laptop; it just no longer shrinks away on a large display, and it re-fits instantly if you resize the window or go fullscreen mid-call.

- **Sponsor contact details added to the giveaway wheel slide (slide 7) and the winner pop-up.** Each giveaway sponsor can now show a website and a phone number, so the prize is a real introduction rather than just a name-check. Live Well Capital shows **LiveWellCapital.com** and **Call Sam at (917) 715-2118**; MB Precious Metals shows **MBPreciousMetals.com** and **Call Adam at (443) 253-4143**.
  - **On the slide**, the details sit at the bottom of the prize card, under the sponsor's name and separated by a thin line — website in pink italic, phone underneath in bold. This is the version that matters most: that slide is on screen the whole time you're talking up the giveaway and spinning, so anyone who wants to write it down has a full minute. Only the sponsor currently picked in the dropdown is shown, so it never gets crowded.
  - **In the winner pop-up**, the same details appear as one small gold line inside the navy "thank you to our sponsor" band, under the sponsor's name. It's deliberately small — the winner's name is the star of that moment — but it's the frame people screenshot, and the sponsor has just handed someone a prize, so it's a good place to be reachable.
  - To fit the new lines without crowding the legal note at the bottom, the sponsor logo box on that slide is slightly shorter than before (the logo is about a fifth smaller). Everything still fits with room to spare at both laptop and TV size. Say the word if you'd rather have the bigger logo back — the contact lines can go on one line instead to buy the space back.
  - Both fields are optional per sponsor. If a future giveaway sponsor has no website or no phone, just leave it out and that line simply doesn't appear — on the slide or in the pop-up. Nothing shows up blank.

- **Alphaeon logo replaced with the new horizontal version.** You dropped a new logo in the deals logo folder (`AlphaeonNEW.png`, since tidied — the superseded stacked source moved to that folder's `_set aside/` as `alphaeon-stacked-credit-superseded-2026-08-26.png`, and the new one renamed to plain `Alphaeon.png` to match how the other sources there are named) — the wide "ALPHAEON PATIENT FINANCING" lockup, replacing the stacked "ALPHAEON CREDIT" one. It had a lot of blank white margin baked into the file, so rather than shrinking the whole thing, the artwork was cropped out of that margin and rescaled to sit at the same size as the other wide logos on the page (it now fills 90% of the card width, the same as Lasso MD and Cherry). Saved as WebP at the standard card size, about 6 KB. The previous logo was archived to `_archive/superseded-images/deals/alphaeon-old-2026-08-26.webp` rather than deleted, so it can be put back at any time. No change was needed to the deal entry itself — the file name is the same.
  - Worth a thought: the new logo has the words "PATIENT FINANCING" inside the artwork, and the card's subtitle underneath also reads "Patient Financing," so it now says it twice. Happy to change the subtitle to something else if you'd rather — the search terms don't depend on it.

- **New deal added: Alphaeon (patient financing).** It sits in **Grow Your Practice**, directly above Cherry, with the subtitle "Patient Financing." The card headline is *"We say yes more. It's kind of our thing."* and the write-up describes Alphaeon as the provider-first financing platform behind more "yes" moments in the chair — higher approvals, broader credit profiles, and a 24/7 team supporting the practice, serving dentists and healthcare providers in the self-pay segment, with preferred pricing for Dental Wisdom members. The offer shows as two separate lines, **Free to Enroll** and **40% off Merchant Fees**, and the "View Deal" button goes to myalphaeoncredit.com/getstarted-dentalwisdom. The **How Alphaeon Works** video plays inside the card's detail popup. The logo from your drop folder was resized to the standard deals-card size and saved at about 8 KB so it loads instantly. Hidden search terms were added too, so the card comes up for searches like "financing," "payment plans," "self-pay" and "CareCredit."
  - Note: there is no CareCredit deal on the site, so "before CareCredit" was read as *before Cherry*, the existing patient-financing card. Say the word if it belongs somewhere else.

- **Deploy troubleshooting written into `CLAUDE.md`.** Today's push reached GitHub but the site didn't rebuild for about twenty minutes — GitHub had a service incident open and never started a build for it. The commits were never at risk; a second push (an empty "trigger rebuild" commit) got it published. The whole diagnosis is now recorded in `CLAUDE.md` under Workflow rules, so it doesn't have to be worked out from scratch next time: how to tell in one step whether a deploy actually published, where to look on GitHub, the fix, and one thing *not* to do (changing the Pages source setting to force the Save button, which can take the site down). Also noted there: the Live slides deck always *looks* stale when its raw HTML is read, because the date and speaker are filled in by JavaScript — that's a false alarm, not a failed deploy.

---

## August 25, 2026

- **Dental Wisdom Live slides updated for Thursday, August 27.** The title slide now reads "Thursday, August 27 · 8:00 PM EST," and the featured-speaker slide has been rebuilt for this month's session: **AI in Dentistry — Enhancing Patient Communication and Clinical Outcomes**, presented by Dr. Mitchell Rubinstein in partnership with Pearl. The Pearl logo was added to the deck's logo folder (trimmed of its extra white border so it fills the logo card properly, and saved at about half its original file size). The session write-up on that slide is a shortened version of the description from the Live page, and it ends with a bold line noting that attending live earns a CE credit plus a free month of Pearl.

- **Both conference slides (5 and 8) now push the hotel deadline.** A pink "Heads up" bar sits directly under the March 3–6, 2027 / Altair Hotel line on both slides and reads: *"Hotel rates go up next week — book now to lock in current pricing."* The navy promo box below it was changed from **$200 off with code DentalWisdomLive** to **$175 off with code LOCKINHOTELRATE**, and its fine print now reads "at checkout — before hotel rates go up" instead of naming an expiration date.

- **The promo box is now editable in one place.** Previously the "$200" and the code "DentalWisdomLive" were typed directly into both conference slides, so changing them meant editing four separate spots. The savings amount, the code, the fine print and the "Heads up" message all now live in the edit block at the bottom of the slides file, alongside the date and speaker settings — change them once and both slides update. Setting the alert message to empty hides the pink bar entirely.

- **Spacing reworked on the conference slides.** The promo box and "Reserve your seat" block were sitting mid-slide with an empty band beneath them. They're now anchored to the bottom margin, and the air between the tagline, the date line, the pink bar and the stats strip has been evened out so the slide fills the frame.

- **About slide (slide 2) no longer stops two-thirds down.** The text is a little larger and easier to read on a shared screen, the four feature lines have real breathing room, and "Opening by Dr. Lisa Sokol" is pinned to the bottom of its column so the slide reads full top to bottom. Phone view was kept tight — the extra air is desktop only.

- **Giveaway wheel looks intentional before names are loaded.** It used to show a blank pink disc with the words "Add names" hidden behind the Spin button. It now shows a dashed outline with "No names loaded yet / Tap Add names below to fill the wheel," clear of the button. Once you load names it behaves exactly as before.

- **Crazy Dental logo cleaned up.** The logo file had a stray vertical line baked into it, running the full height near the right edge, which showed on the spotlight slide. That's cropped out and the logo now fills its card properly. The untouched original is saved at `liveslides/_archive/original-logos/crazy-dental-original.png`.

- **Slide numbers count themselves now.** The "2 / 9", "3 / 9" labels in the corner of each slide were typed in by hand, so they'd have gone wrong the first time a slide was added or removed. They're generated automatically from here on.

- **The two halves of the promo box now mirror each other.** In the right half, "USE CODE" was jammed against the code while the line beneath it had more room, and the whole block sat high in its cell. The three lines are now evenly spaced, "USE CODE" lines up exactly with "SAVE" across the dashed divider, and the italic line ends level with "OFF" — so both sides measure the same. The code itself got a touch of letter spacing, which makes it easier to read off a screen and type correctly.

- **Slide 8 is now a completely different slide.** It used to be an exact copy of slide 5, which meant the audience read the same words twice. It's now the "what it's actually like" slide: the line from your homepage — *"This is not simply a dental conference — it's a full Shabbos experience, designed for Jewish dental professionals"* — over three photo panels from your own gallery, with the same $175 promo box and Reserve Your Seat block underneath, unchanged. The photos fade to a new image one panel at a time, just under every two seconds, so only one thing ever changes at once. **28 photos are in the rotation**, drawn from your gallery and conference folders, and all three panels pull from the same shuffled pool at random: every photo gets a turn before any of them repeats, no photo is ever in two panels at once, and the order is different every time you open the deck. A full pass takes about 50 seconds. Fourteen gallery photos were left out on purpose — ones shot against a single sponsor's backdrop (so no one vendor gets featured), ones showing another company's branding on screen, and a few weak shots of the backs of people's heads. They're listed by number in a comment right above the photo list; say the word and any of them can come back in. To swap or add photos, that same list is in the edit block at the bottom of the slides file under `photos`. On a phone, only the first panel shows so the slide doesn't turn into a long scroll.

- **The closing slide now names the next session.** It used to read "Thursdays · 8:00 PM EST," which implied weekly when Live is monthly, and it didn't tell anyone what was coming. It now reads "Next session — Dental Exit Planning: Building Your Practice's Endgame Before You Need It, October 15, 2026 · 8:00 PM EST." You don't have to maintain this: the slide reads your website's own session list (`js/live-data.js`) and picks the first upcoming session after tonight, so it updates itself whenever you add a session. If you ever want to override it by hand, there's a `nextSession` line in the edit block.

- **The gold underline on the closing slide now spans the whole web address.** It was a fixed length that stopped partway through, just before "/LIVE," so it looked like it had run out rather than finished.

- **Press 1 through 9 to jump straight to a slide.** If someone asks "what was that code again?" you press 5 and you're there, instead of arrowing backward. The hint line at the bottom of the screen mentions it.

- **A note about the wording:** "next week" only reads correctly during the week before the increase. Once the exact date is known, swap the line for something like "Hotel rates go up September 1st" — there's a reminder to that effect written into the edit block.

---

## August 14, 2026

- **New deal added: KosherWine.com.** It appears in the "Israel, Kosher & Community" section of the Deals page, at the bottom of that group (they're not a conference sponsor, so no tier pill and they sit after the sponsors). The card reads "KosherWine.com / Kosher Wine Delivered," and the pop-up describes them as the largest kosher wine retailer in the country, online since 1997, with exclusive imports and private labels — plus the 50,000-customers line. No promo code or offer is shown, per your instruction; the "View Deal" button uses your referral link. The logo you dropped in `_Logos for Deals Page - Drop Here` was put on a white background and saved as a small, fast-loading file (about 16 KB) so it doesn't slow the page down. The original PNG was left in the drop folder untouched.

---

## August 12, 2026

- **New Crazy Dental August flyer is up on both pages.** The "August Crazy Deals!" flyer you dropped in now shows at the bottom of Crazy Dental's pop-up on the Sponsors page and at the bottom of their "Dental Supplies" pop-up on the Deals page — same spot, same size, same sharpness as the July one it replaces. The July flyer wasn't deleted; it's saved in `_archive/superseded-images/deals/crazy-dental-flyer-july-2026.webp` in case you ever need it back. The promo codes shown on the site (WISDOM10 for 10% off a first order, WISDOMSHIP for free shipping) still match the new flyer, so no wording changed. Note: one line on the flyer itself — the date under "Carbon Nitrile Gloves" — has two lines of text printed on top of each other and can't be read; that's how it came from Crazy Dental. Send a corrected version whenever you have one and it'll be swapped in.

---

## August 6, 2026

- **Removed TruAbutment from the Deals page.** Their listing (under Clinical & Chairside) no longer appears on the Deals page. They are still listed as a conference sponsor on the Sponsors page, and still credited on Dr. Daniel Greenbaum's speaker card — only the Deals listing was taken down. Nothing was deleted; the listing is saved as a note at the bottom of the deals file so it can be put back at any time.

- **orthobrain's Deals page listing now matches their Sponsors page listing.** Their pop-up on the Deals page was showing a short two-line description with no offer and no video, while the Sponsors page showed the full write-up. The Deals pop-up now has the same five-paragraph write-up, the same offer in gold ("Sign up for a demo and learn about the exclusive pricing available only to Dental Wisdom Group Members"), and the same video — so a visitor sees identical information wherever they find orthobrain. The Platinum pill was already showing and is unchanged. The old shorter description was kept as a note in the file rather than deleted.

---

## August 5, 2026

- **Shortened Dr. Elaine Bylis's session title.** "From Blob to Beautiful: Cosmetic Dentistry Hands-On Workshop" is now just "From Blob to Beautiful: Cosmetic Dentistry" — updated on the agenda, her speaker card and bio pop-up, and her speaker review page.

---

## August 4, 2026

- **New orthobrain logo everywhere.** Swapped in the new single-line orthobrain logo (the black wordmark with the brain icon) on the Sponsors page and the Deals page. It's been cleaned up and set on the same size canvas with the same margins as every other sponsor logo, so it lines up with the rest of the grid and the scrolling logo strips. The old logo wasn't deleted — it's saved in `_archive/superseded-images/`.
- **orthobrain now links to their Dental Wisdom partner page** (partners.orthobrain.com/dentalwisdom) instead of their main site. Updated in all five places orthobrain is linked: the Sponsors page, the Deals page, Dr. Sam Glick's speaker bio pop-up, the Dental Wisdom Live session listing, and the orthobrain sponsor review page.

---

## July 30, 2026

- **New page: the Dental Wisdom Sefer Torah (dentalwisdom.org/torah).** A standalone page for the Torah fundraising campaign. Opens with a dark navy hero ("The Dental Wisdom Sefer Torah") where the text fades up and a thin gold line draws itself in beneath the title, over a very slow, soft gold glow. Below that is the "Why We Are Writing This Torah" story — including the new paragraph about the Torah being shared with a growing local shul, carried to every Dental Wisdom gathering, and opening the door to destination events. The 304,805 letter count quietly counts up the first time you scroll to it. Then the dedication opportunities: the Cornerstone (Hakdashas HaTorah) sits at the top as a dark feature panel marked "Taken · Anonymous" with no price and no button, followed by the Premier, Major, Honor, and Family levels as cards that lift gently and reveal a gold hairline when you hover. Closes with the contact line and the note explaining that dedications go to the Dental Wisdom Network, are not tax-deductible, and that a separate 501(c)(3) effort is collecting funds for the Sefer Torah. Note: the DEDICATE buttons currently open a pre-addressed email to info@dentalwisdom.org with the chosen level filled in — send over the Jotform link and they'll be switched to open the form instead. The page is not yet linked from the menu or footer; tell me if you'd like it added.
- Added a video to Wonderful Dental's pop-up on the Sponsors page (it plays at the bottom of the details pop-up). Note: Wonderful Dental isn't listed on the Deals page, so there's no Deals card to add it to.
- Added a video to Pul Dental's pop-up on the Sponsors page (it plays at the bottom of the details pop-up). Note: Pul Dental isn't listed on the Deals page, so there's no Deals card to add it to.
- Marked Lasso MD as attending the conference — their card on the Sponsors page now shows the gold "✓ Attending" pill (instead of "Past Sponsor") and they're back on the homepage logo strip.
- Added a video to Lasso MD's pop-up on both the Sponsors page and the Deals page (it plays at the bottom of the details pop-up in both places).
- Changed Lasso MD's offer to "Up to 10% off for Dental Wisdom members" (was "10-20% Off + Free Photo & Video Shoot") on both the Sponsors page and the Deals page pop-ups.
- Replaced Lasso MD's write-up with their full description (the intro plus the 3-Step process — Generate New Patients, Master Patient Lead Flow, Become the Practice CEO — each as its own paragraph with a bold heading) in the details pop-up on both the Sponsors page and the Deals page. The short summary on the card faces is unchanged.
- Changed Dr. Daniel Greenbaum's lecture title from "Designing Smiles That Last: Modern Prosthodontic Strategies for Predictable, Aesthetic & Functional Excellence" to "Beyond “Savable”: Redefining Restorability Through a Full-Arch Lens – A Modern Approach to Full Mouth Diagnosis and Treatment" everywhere it appears — the Agenda, the Speakers page (card and pop-up), his private preview page, and the TruAbutment sponsor preview page.
- Updated Dr. Ariel Steinberger's bio (the write-up in his speaker pop-up) to the new two-paragraph version covering his psychology degree, DDS from Touro, the American Academy of Esthetic Dentistry Award of Merit, his NYU Langone residency, and his focus on cosmetic/restorative dentistry and case acceptance. Updated on the live Speakers page, his private preview page, and the archived master copy.
- Changed Dr. Marc Faber's lecture title from "I Buy Junk Practices" to "How to Buy Junk Practices: Turning Distressed Offices Into Thriving Ones" everywhere it appears — the Agenda, the Speakers page (card and pop-up), his private preview page, and the archived master copy.
- Renamed the Wednesday night event from "Opening Night: Casino, Cigars & Scotch" to "Kickoff Reception: Casino Tables, Hand-rolled Cigars, Scotch & Passed Hors d'oeuvres." (Only the title changed — the description and both sponsor-credit lines are unchanged.)
- Created a private LiveWell Capital preview page (dentalwisdom.org/sponsor-review/livewell) so you can send Sam Waller a link showing exactly how everything will appear on the site. Because LiveWell's speaker and event are both confirmed, it's the fuller "TheraBreath-style" layout (not the Adin example format): Part 1 — their Platinum sponsor card (gold "✓ Attending" pill) and the details pop-up (logo, Platinum tier, their three-paragraph write-up, Visit website button); Part 2 — Sam Waller's real agenda slot (Shabbos 4:45 PM "Life Insurance: Bitachon or Hishtadlus?", 1 CE, sponsored by LiveWell), his speaker card, and his full bio pop-up with the LiveWell logo credited as session sponsor; Part 3 — the Thursday 8:00 PM Welcome Party (Music, Food & Drinks, Atrium) they're hosting, as it appears on the Agenda with LiveWell credited beneath it. Marked "no-index" so it won't show in search or anywhere public.
- Built out Adin's private sponsor preview page (dentalwisdom.org/sponsor-review/adin): added their sponsored Friday session ("Complications in Perio Anterior Cases," 3:00–5:00 PM, CE 2) as it appears on the Agenda, plus an example speaker card and bio pop-up (using Rabbi Dr. David J. Katz with his real Touro logo, purely to show the layout) followed by a callout showing the Adin logo where their speaker's sponsor credit will sit once confirmed. Also added a line to the intro asking Adin to send their session presenter's name, photo, and bio so we can finalize the agenda and add the speaker card.
- Created a private speaker preview page for Dr. Nathaniel Dancykier (dentalwisdom.org/speaker-review/dr-nathaniel-dancykier) so you can send him a link showing exactly how his information will appear: both of his agenda slots (Friday 9:00–10:30 AM "The Science and Art of Cosmetic Dentistry," 1.5 CE; and Shabbos 2:45 PM "Dental Volunteers for Israel — DVI," 1 CE), his speaker card, and his full bio pop-up. Marked "no-index" so it won't show in search or anywhere public.
- Updated LiveWell Capital's write-up with their new copy. The details pop-up on the Sponsors page now shows the full three-paragraph message (the "Live What Matters" intro, the list of what their team handles — investments, tax, planning, executive comp, business-owner planning, risk, estate — and the closing line). The Deals-page pop-up shows the same text. All emoji icons from the source were removed. The short one-line summary on the card face was also refreshed to match.
- Removed orthobrain as the sponsor of the Saturday-night Closing Night Celebration on the Agenda (they no longer hold that sponsorship). The celebration line now shows with no sponsor credit.
- Expanded the orthobrain preview page: added their sponsored Friday session (Dr. Sam Glick's "Straight Forward: Building Your Clear Aligner Practice," 3–5 PM, CE 2) as it appears on the Agenda, plus Dr. Glick's speaker card and full bio pop-up with the orthobrain logo credited as session sponsor.
- Created a private orthobrain preview page (dentalwisdom.org/sponsor-review/orthobrain) so you can send them a link showing exactly how their sponsorship appears — their sponsor card with the new "Turnkey Orthodontics" headline and gold "✓ Attending" pill, and the details pop-up (logo, Platinum Sponsor tier, the new five-paragraph write-up, the demo offer in gold, Visit website button, and video). Marked "no-index" so it won't show in search or anywhere public.
- Changed the header shown on orthobrain's sponsor card and pop-up from "orthobrain" to "Turnkey Orthodontics" (the logo still shows the brand name). This is display-only — the Deals page still recognizes orthobrain as a sponsor behind the scenes.
- Rewrote orthobrain's write-up (the description in their details pop-up on both the Sponsors page and the Deals page): tightened and reordered your text, added the "nation's most disruptive companies" closing line, and added a demo promo — "Sign up for a demo and learn about the exclusive pricing available only to Dental Wisdom Group Members" (shows in bold gold).
- Added an orthobrain video (youtube.com/watch?v=1nvBLwGQPRk) to every place orthobrain's details appear: the conference Sponsors-page pop-up and the Deals-page pop-up (added once in the sponsor data, so it shows in both automatically).
- Added an Adin video (youtu.be/x81llmU97Vw) to every place Adin's details appear: the conference Sponsors-page pop-up and the Deals-page pop-up (and the new Adin preview page below).
- Created a private Adin preview page (dentalwisdom.org/sponsor-review/adin) so you can send Adin's contact, Jeremy Danzer, a link showing exactly how their sponsorship will appear on the site. Same format as the Straumann one: thanks them for being a Gold Sponsor, shows their sponsor card (gold "✓ Attending" pill) and the details pop-up (logo, Gold Sponsor tier, their write-up, Visit website button, and the new video). Marked "no-index" so it won't show up in search or anywhere public.
- Also committed a small pending change left over from an earlier session: an "Thank you orthobrain for being the CE sponsor" line at the bottom of the Agenda page (and its archived full version). It was already sitting in the folder unsaved; it's now saved.
- Added a Straumann video (youtu.be/_7-3kV_2KYk) to every place Straumann's details appear: the conference Sponsors-page pop-up, the Deals-page pop-up, and the Straumann preview page. (Added once in the sponsor data, so it shows in all three automatically.)
- Removed the "Straumann is now live on the Sponsors/Deals page" links line from the Straumann preview note, per your request.
- Removed the 4th (fully "To Be Announced") concurrent class from the Friday 3:00 PM hands-on block, so it now shows three tracks. (Hidden, not deleted — easy to bring back if a topic/speaker is confirmed.)
- Published the full **Agenda** and **Speakers** pages. Both previously showed short "coming soon" teasers; they now display the real, built pages — the full day-by-day agenda and the 12 speaker cards with bios. (The teaser versions were saved to the archive folder, not deleted.)
- Cleaned up placeholder labels on the agenda so nothing reads as unfinished: removed the "To Be Announced Soon" speaker line from the Friday 10:30 PM Oneg & Shiur, the Shabbos 8:15 AM Pre-Davening Shiur, the Shabbos 11:00 AM Kiddush & Dvar Torah, and the Shabbos 3:45 PM shiur; and removed the "Sponsor TBD" credit from the Friday lunch. Those sessions still show with their times and titles — just without the placeholder text.
- Refreshed the "published closer to the event" wording now that the Agenda and Speakers pages are live: the homepage "Class Options & CE Credits" box now simply points visitors to the Agenda and Speakers pages, and two FAQ answers ("What is the daily schedule?" and "Who is lecturing…") now link to those pages instead of saying the details will come later (the FAQ keeps a light "schedule may still be adjusted" note).
- Moved the early bird deadline from **August 15** to **August 31** everywhere it appears on the site (homepage hero line, homepage pricing box, homepage fees section, and the FAQ).
- Added Straumann to the Deals page (Clinical & Chairside, right after Adin), using the same description as the conference Sponsors page. Because Straumann is a Gold conference sponsor, the deal card automatically shows the gold tier pill; there's no promo code, so the card just links to Straumann's site.
- Updated the Straumann preview page: heading now reads "Thank you, Matt Mishanie"; the note says the agenda and sponsor lineup are publishing today; and it now includes clickable links showing Straumann is live on the conference Sponsors page and the Deals page. It also keeps the "just for your review / this link isn't shared with anyone else" language.
- Created a private Straumann preview page (dentalwisdom.org/sponsor-review/straumann) so you can send Straumann a link showing exactly how their sponsorship will appear on the site. The top of the page thanks them for being a Gold Sponsor. It shows their sponsor card (gold "✓ Attending" pill) and the details pop-up (logo, Gold Sponsor tier, their write-up, and a Visit website button). No speaker section, since no session is tied to Straumann, and no video (they don't have one yet — easy to add later). The page is marked "no-index" so it won't show up in search or anywhere public.

## July 29, 2026

- Embedded a TruAbutment video (youtu.be/B1mbtUZxyeo) at the bottom of TruAbutment's sponsor detail pop-up in two places: the live conference Sponsors page and the TruAbutment preview page. (Heads up: this now shows on the real Sponsors page too, even though TruAbutment is still marked Silver/Pending there — let me know if you'd rather it only appear on the preview for now.)
- Added a "Your speaker" section to the TruAbutment preview page for Dr. Daniel Greenbaum (whose Thursday session is sponsored by TruAbutment): his agenda slot, speaker card, and full bio pop-up — with the TruAbutment logo shown as the session sponsor. The page is now three parts: sponsorship, speaker, and the before/after status comparison. Also added a note that once they're an official sponsor we can adjust the wording or embed a video in their sponsor details.
- Reworked the TruAbutment preview page copy: the intro now frames it as "let's finalize your sponsorship" (rather than a thank-you), explains we need them to lock in the sponsorship to become a Gold Sponsor, and points them to the preview below. Added a "Before & After" section at the bottom showing both cards side by side — their current "Pending" card next to the "Gold + ✓ Attending" card — with a note that we'll make the switch as soon as they confirm.
- Created a private preview page for TruAbutment at dentalwisdom.org/sponsor-review/truabutment (same style as the TheraBreath one). It shows them how their sponsor card and details pop-up will look — presented as a Gold Sponsor with the "✓ Attending" pill. This is preview-only: it does NOT change how TruAbutment appears on the live site (still Silver/Pending there). The page is hidden from search engines and not linked anywhere; you share the link directly.
- Straumann is now confirmed attending and moved up to the Gold sponsor group (gold "✓ Attending" pill; the "Pending" badge is gone and their logo now appears on the homepage sponsor strip). It sits at the end of the Gold row.
- TruAbutment moved down to the Silver sponsor group (still "Pending"). On the Deals page its tier badge updates to Silver automatically; its position in the Clinical & Chairside list is unchanged.
- Added a contact line to MB Precious Metals on both the conference Sponsors page and the Deals page pop-ups: "Call Adam for more info: 443-253-4143" (bold gold, under the description). The phone number is clickable — tapping it on a phone starts a call. Any phone number in a future offer will be made tappable the same way, on both pages.
- Shortened the Wednesday Opening Night grand-prize sponsor credit from "Grand prize for biggest chip winner — sponsored by MB Precious Metals" to "Grand prize — sponsored by MB Precious Metals."
- Added Straumann to the conference Sponsors page (Silver tier, next to where Nobel Biocare sat). Their logo was converted and added, plus the description you provided. Since they haven't confirmed yet, the card shows a "Pending" badge and is kept off the homepage sponsor logo strip — the moment they confirm, remove the pending flag and they become a full sponsor.
- Shortened the pending badge wording from "Sponsorship Pending" to just "Pending" (applies to any pending sponsor).
- Moved Zolli Candy from Silver down to the Bronze group (now the last card in the bottom row).
- Set TruAbutment to "Pending" and moved its card to sit right after Lasso MD.
- Made the "Pending" pill the same width as the "Attending" and "Past Sponsor" pills, so all three status badges line up at a consistent size.

## July 28, 2026

- Finalized Wednesday night's Opening Night party (Casino, Cigars & Scotch) copy: a punchy multi-line description ("The chips are stacked. The scotch is poured…" through "See you at the tables.") plus two gold sponsor-credit lines beneath it — the $2,000+ grand prize for the biggest chip winner sponsored by MB Precious Metals, and the hand-rolled cigars sponsored by Emerald Dental Lab (both names link to the Sponsors page).
- Emerald Dental Lab is now marked as attending the conference (gold "✓ Attending" pill; the old "Past Sponsor" pill is gone, and their logo now appears on the homepage sponsor strip).
- Reordered the Platinum sponsors on the conference Sponsors page: Emerald Dental Lab now sits at the top-right of the top row, with LiveWell Capital and Crown Catapult on the second row.
- Tidied up how offers/promo codes look in the deal and sponsor pop-ups (both pages). Each offer now sits in its own soft rounded row with the offer on the left and a compact button on the right that simply reads "Copy code" (instead of the longer "Copy code: WISDOM10", since the code already shows in the offer text). Crazy Dental's two offers now read cleanly as two neat rows.
- The conference Sponsors page pop-ups now split two-part offers onto separate lines with per-code Copy buttons too, matching the Deals page — so Crazy Dental's sponsor pop-up shows Copy buttons for WISDOM10 and WISDOMSHIP.
- Deal pop-up offers are now bold and gold, matching the conference Sponsors page — and that's now the standard for every offer on both pages, current and future.
- Deal pop-ups now split a two-part offer onto two lines, each with its own "Copy code" button. Crazy Dental now shows "10% off First Order" with a Copy button for WISDOM10, and "Free Ground Shipping" with a Copy button for WISDOMSHIP.
- Deal pop-up videos now always appear under the "View Deal" button (consistent with how Reach shows on the Sponsors page), so video placement is uniform.
- Synced five sponsor descriptions so the Deals page and the conference Sponsors page tell the same story: Crown Catapult and Pearl now use their Sponsors-page wording on the Deals page; Zolli Candy uses its nicer Sponsors-page wording on both; Emerald Dental Lab and Lasso MD were merged into one description used on both pages.
- Zolli Candy's offer ("Subscribe and Save 30%") now also shows on its conference sponsor pop-up, so it matches the Deals page.
- Deals filter bar now stays pinned while scrolling on desktop only; on phones it scrolls normally so it doesn't crowd the smaller screen.
- Removed AAFE as a conference sponsor. Its deal stays on the Deals page (in Clinical & Chairside) but no longer shows a tier pill. Archived in the file, not deleted — can be restored anytime.
- Deals page improvements: (1) each category now has a one-line description under its heading; (2) a "Showing N deals" count appears under the filter bar; (3) the search + filter bar now stays pinned as you scroll the long list; (4) filter selections update the web address, so you can link straight to a filtered view (e.g. dentalwisdom.org/deals#sponsors or #clinical-chairside); (5) deal pop-ups with a promo code now show a "Copy code" button.
- Deals page: added a "Conference Sponsors" filter button (styled in gold, right after "All") that narrows the page to just the conference-sponsor deals, still grouped by category with their tier pills.
- Deals page reorganized into seven clearer categories — Clinical & Chairside, Grow Your Practice, Run Your Practice, Staffing & Recruiting, Money & Insurance, Israel Kosher & Community, and Extras — replacing the old grab-bag categories. Within every category, conference sponsors now sort to the top (Platinum, then Gold, Silver, Bronze), followed by non-sponsors. The Clinical & Chairside order is hand-set: orthobrain, Crazy Dental, Emerald Dental Lab, Pearl, MB Precious Metals, Adin, TruAbutment, TheraBreath, AAFE.
- Every deal whose company is a conference sponsor now shows a small tier pill (Platinum/Gold/Silver/Bronze) on its card and in its pop-up. The pill is pulled straight from the conference sponsor list, so it stays correct on its own: add a sponsor there and the pill appears; change their level and it updates; remove them and it disappears.
- Removed "Dental Processing Solutions" from the conference Sponsors page. The "Credit Card Processing" deal stays on the Deals page but now shows no tier pill and sits lower down (among the non-sponsors) in Run Your Practice. Nothing deleted — it's archived in the file and can be restored anytime.
- Removed the "Dental Equipment / All Practice Solutions" deal from the Deals page (archived in the file, not deleted).
- Renamed the "Sam Waller - LiveWell Capital (Financial Advisor)" deal to just "LiveWell Capital."
- Deals-page consistency pass for the attending sponsors: added Deals slots for Adin, TruAbutment, and Citron Films (not Touro, which stays sponsor-only); and made each attending sponsor's Deals description match its conference Sponsors-page write-up. Crown Catapult's Deals slot now uses the conference text and includes its video; LiveWell Capital (Sam Waller), orthobrain, MB Precious Metals, Crazy Dental, APEX, Pizza Biza, and CG Insurance were all synced to their conference wording.
- Reworded TheraBreath's third paragraph so it no longer says "on this site" (which read as referring to our site) — it now clearly refers to TheraBreath's own news and research. Updated on the Sponsors page, the Deals page, and their private review page.
- Added TheraBreath to the Deals page under "Key Dental Solutions," with their full write-up, a link to therabreath.com, and their video in the pop-up. (Logo reused from the sponsor logo; no promo code.) Note: the deals pop-up shows the description as one continuous block, since it can't display separate paragraphs.
- Updated TheraBreath's sponsor card details with their new three-paragraph write-up (how the products fight bad-breath bacteria, the full oral-care line, and their research focus). Live on the Sponsors page pop-up and on their private review page.
- Added a TheraBreath video to the bottom of their sponsor card details — it now shows on the live Sponsors page pop-up and on their private review page.
- TheraBreath moved from a Gold Sponsor to a Silver Sponsor. Updated on the live Sponsors page (it now shows in the Silver group) and on its private review page (label, card size, and the "Silver Sponsor" pill).
- New private "review your sponsorship" page for TheraBreath at dentalwisdom.org/sponsor-review/therabreath. It mirrors the speaker review pages: a warm thank-you note, then two parts — Part 1 shows TheraBreath's Gold Sponsor card and its pop-up details exactly as visitors will see them; Part 2 shows Dr. Harold Katz's sponsored agenda slot, his speaker card, and his full bio. Hidden from search engines and not linked anywhere on the site.
- Dr. Harold Katz's bio was replaced with his new full write-up (developer of TheraBreath, co-founding the California Breath Clinics in 1994 with his brother Dr. Richard Katz, "The Bad Breath Guru," the sale to Church and Dwight at the end of 2021, and TheraBreath now the #1 mouthwash brand on Amazon/Target/Walmart). Updated on his private review page and on the draft Speakers page (card summary + full bio). Not live to visitors until the Speakers page is published.
- Private "review your details" pages are now built for seven speakers: Dr. Harold Katz, Dr. Daniel Greenbaum, Dr. Tzvi Krupka, Dr. Marc Faber, Dr. Sara Werb, Dr. Craig Berry, and Dr. Elaine Bylis. Each presenter gets their own link (e.g. dentalwisdom.org/speaker-review/dr-marc-faber) showing a warm note, their agenda slot, their speaker card, and their full bio/detail exactly as visitors will see them. The intro now says the agenda is about to go live and reassures them the page is just for their review and the link isn't shared with anyone else. Every page is hidden from search engines and is not linked from anywhere on the site.
- Agenda: added specialties after two speaker names — Dr. Tzvi Krupka now reads "(Oral Surgeon)" and Dr. Ariel Steinberger "(Cosmetic Dentist)," matching the style of the other listings.
- Dr. Craig Berry's Friday 1:30 PM lecture is renamed to "Your Root Canal Failed, Now What? Managing Endodontic Failures and Current Out-of-the-Box Treatment Options" — updated on the draft Agenda and on his profile card on the draft Speakers page.
- Gobbie Cohn's name is temporarily hidden until you confirm he can attend. On the (draft) Agenda, the Friday 6:15 PM "Mincha, Kabbalas Shabbos & Maariv" line stays exactly as-is — including the APEX & CG Insurance sponsor credit — but no longer names him. On the (draft) Speakers page, his profile card is hidden. Nothing was deleted; just tell me when he's confirmed and I'll bring both back instantly. (Both pages are the draft/full versions, not yet live to visitors.)

## July 27, 2026

- Agenda: the Wednesday opening event is renamed "Opening Night: Casino, Cigars & Scotch," with a fun line beneath it — "Grab your ID badge, a drink, and a stack of chips — then hit the tables, light up a cigar, and kick off the weekend in style." The grand-prize sentence — "The night's biggest winner takes home a grand prize worth $2,000+." — is shown in bold. It's now credited as sponsored by MB Precious Metals. (This is on the draft/full Agenda page, which isn't live to visitors yet.)
- Agenda: Dr. Craig Berry is back on the Friday schedule at 1:30–3:00 PM with his session "The Comfortable Root Canal: Cutting-Edge Endodontics for Predictable, Pain-Free Outcomes" (CE, 2 credits), replacing the "to be announced" placeholder that was in that slot. His speaker profile has also been restored to the (archived) full Speakers page.
- Agenda design: the four concurrent Friday 3:00–5:00 PM classes now each sit in their own boxed card, and their titles are the same size as the main lecture titles — so the parallel tracks stand out as four distinct choices instead of a running list. Kept clean and understated to match the rest of the site.
- Agenda: the Friday 3:00–5:00 PM hands-on tracks are now ordered ortho (Dr. Sam Glick, orthobrain), "Complications in Perio Anterior Cases" (Adin, speaker to be announced), cosmetic (Dr. Elaine Bylis), then "Topic to Be Announced Soon." All four tracks carry 2 CE credits. (The implants track that previously carried the Adin sponsorship became the "Topic to Be Announced Soon" line.)
- Sponsor pop-ups now show each sponsor's special offer, the same way the Deals page does. Added the offer line to six sponsors whose pop-ups were missing it: Reach ("$500 Off First Month"), Crazy Dental ("10% off First Order (WISDOM10) + Free Ground Shipping (WISDOMSHIP)"), APEX ("Free Consult"), Lasso MD ("10-20% Off + Free Photo & Video Shoot"), Dental Processing Solutions ("Free Onboarding Call"), and AAFE ("Use code DW100 for $100 discount"). The offer appears as a bold gold line just below the sponsor's description in the pop-up. To add or change an offer for any sponsor in the future, it's the new "promo" line in the sponsor list.

---

## July 25, 2026

- FAQ page: every question is now a tidy expand/collapse. The page opens showing just the category headings and questions, so it's much shorter and easier to scan — tap any question to reveal its answer. The two long Shabbos meal menus are tucked away the same way, so they no longer flood the page (open "What's on the menu for Shabbos meals?" to see them). Nothing was reworded; only the layout changed.
- Housekeeping: confirmed the site's ignore list already keeps stray system junk files (.DS_Store, .fuse_hidden…) out of GitHub, while the archived full Agenda and Speakers pages stay saved and viewable at their long web addresses.

---

## July 24, 2026

- Tooth Memory: the heading at the top of the game now reads "Dental Wisdom Tooth Memory Game." Also added a colorblind-friendly button (🔢) that puts faint 1–9 numbers on the teeth, so players who can't easily tell the colors apart can follow the sequence by number; it remembers the setting on that person's device.
- Tooth Memory now has its own page too: dentalwisdom.org/toothmemorygame (and the capitalized dentalwisdom.org/ToothMemoryGame works as well) — great for sharing directly. It's still on the Page Not Found screen. Both share one copy of the game, so any future tweak updates both places at once.
- Tooth Memory: every time you clear a round you now get a random cheesy dentist joke (112 of them, shuffled so they don't repeat until you've seen them all). Also added a "🏆 New personal best!" moment with a little triumphant chime when you beat your own record.
- Tooth Memory: added a ↺ reset button (start a fresh game any time, e.g. to switch speed mid-play) and a "Share my score" button on the game-over screen — on phones it opens the normal share menu (WhatsApp, Messages, Mail…), and on a computer it offers an email draft and a copy button. Also, the colorful round-clear "ripple" now only shows on Hard, so Easy and Normal feel calmer.
- Tooth Memory extras: (1) a player's Best score now sticks between visits, saved privately on their own device; (2) a small speaker button lets them mute/unmute the tones (the game still plays fine silently); (3) three speed choices before starting — Easy, Normal, or Hard — and it remembers which they last picked.
- Tooth Memory tune-up: now 9 teeth (a full 3×3 grid, mapped to number keys 1–9 like a keypad), each with its own color and a note from a pleasant musical scale so any sequence sounds nice. Added a "3 of 5" progress counter so you don't lose your place mid-round, plus a little celebratory chime cascade each time you clear a round.
- Replaced the 404-page game with "Tooth Memory," a Simon-style memory game (more skill, less luck): six teeth light up in a growing sequence with a musical tone each, and you repeat it back — one extra tooth every round, one wrong tap ends it. Tracks your best round. Still emoji-based with no extra load time; the old whack-a-cavity version is saved in _archive in case you ever want it back. The "Return to Homepage" button and links stay right above it.
- Agenda page fix (draft/not-yet-public page): the "Include Davening Times" button now works while "CE Only" is selected — it adds the davening times to the CE list. Before, the button was greyed out and did nothing in that combination.
- Image tune-up: converted the last five JPG headshots (Harold Katz, Greenbaum, Citron, Rabbi Katz, German) to the site's standard WebP format, and shrank the browser-tab icon from 26 KB to 3 KB (it loads on every page). Originals kept in images/_archive_originals_2026-07-24/.
- Speaker pop-ups: sponsor logos are now larger (single logo up from 140px to 180px tall; the two-logo row from 90px to 120px).

- Site review follow-ups (Ben-approved): testimonial byline fixed to "Jerusalem, Israel" (was "Jerusalem, IL" — read as Illinois); hero fact line now reads "20+ Cross-Specialty CE Credits"; FAQ Thursday schedule time format tidied to "2:00–8:00 PM"; speaker application page now says "roughly 15 speakers" (was "10–15"). Full review saved as SITE_REVIEW_2026-07-24.md in the site folder.

- Made web addresses work no matter how they're capitalized: typing dentalwisdom.org/LIVE (or /Live, /Deals, etc.) now takes visitors to the right page instead of showing "Page Not Found." Previously only the exact lowercase spelling worked.
- Brought the draft (not-yet-public) Agenda and Speakers pages up to date with the rest of the site: fixed the broken header/footer logos, switched to the current stylesheet and faster font loading, and removed the floating "Join WhatsApp Group" button (conference pages dropped it in July so it doesn't compete with the Register button).
- Every sponsored lecture's speaker card now shows the sponsor's logo linking to their website: added TruAbutment to Dr. Greenbaum's card and orthobrain to Dr. Glick's card. Also fixed broken sponsor logos in the speaker pop-ups — all six cards with sponsors (Katz/TheraBreath, Greenbaum/TruAbutment, Glick/orthobrain, Cohn/APEX & CG, Waller/LiveWell, Rabbi Katz/Touro) were pointing at image files that didn't exist; they now use the correct files.
- Added a schedule-change disclaimer ("The event organizers reserve the right to make changes to the speaker lineup, agenda, or event schedule at any time...") to the bottom of both the full Agenda and full Speakers pages, and removed the "Additional speakers to be announced." line from the speakers page. (Both pages are still the "coming soon" teasers publicly.)
- Site-wide copy refresh (approved list): homepage accordion and FAQ now say "over 20 CE credits" (was "estimated 20" / "20"); FAQ speaker answer updated from "actively curating" to "We've assembled an outstanding lineup..."; FAQ Friday schedule bullet now says lectures run to 12:30 PM; both the Agenda and Speakers teaser pages now say "coming soon" instead of "coming in the next few weeks"; added Shabbos Breakfast (8:30 AM, OVO at The Altair) to the agenda.
- Friday 10:30 PM session now has its title: "From Isolation to Achdus: Strengthening the Jewish Dental Community" (was "Shiur & Oneg"; speaker still to be announced, Crown Catapult sponsorship unchanged).
- The 6:15 PM Kabbalas Shabbos line now reads "Chazanus sponsored by APEX Reimbursement Specialists & CG Insurance Group" (was "Compliments of..."), on both the agenda and Gobbie Cohn's speaker card.
- Reorganized the speakers page (still the "coming soon" teaser publicly — none of this is live yet):
  - Removed Dr. Craig Berry, Dr. Samuel Schuster, and Yaakov Citron from the page (all kept on file, not deleted, in case they return). Dr. Schuster still appears on the agenda; his name just no longer links to a profile.
  - Restored Dr. Marc Faber's card (Thursday 6:30 PM session).
  - All cards are now ordered by speaking time within each day.
  - Dr. Nathaniel Dancykier's card moved to the top of Friday and now lists both his sessions (Friday morning lecture + Shabbos DVI talk).
  - Updated Dr. Sara Werb's card to her current single session (Friday 10:30 AM–12:30 PM) and removed the old NuSmile sponsorship from it.
  - Gobbie Cohn's session now reads "Kabbalas Shabbos."
- Added TruAbutment as a Gold sponsor (marked attending), with their logo, website link (truabutment.com), and company description. Their card appears in the Gold row on the Sponsors page and on the homepage logo strip.
- Dr. Daniel Greenbaum's Thursday lecture is now sponsored by TruAbutment.
- Added Dr. Sam Glick's headshot (replacing the initials placeholder on his speaker card).
- Friday 1:30–3:00 PM lecture changed from 2 to 1.5 CE credits.
- Agenda controls: renamed the "Davening Info" button to "Include Davening Times" and moved it up onto the same row as "Full Schedule" and "CE Only" (it still works as an independent on/off toggle).
- Friday 3–5 PM Endo/Periodontics track now shows a "To Be Announced Soon" line, matching the format of the Implants workshop.
- Shabbos 4:45 PM — Sam Waller's "Life Insurance: Bitachon or Hishtadlus?" lecture is now sponsored by LiveWell Capital.
- Filled in Friday's 3:00–5:00 PM hands-on breakout. It now has five concurrent workshops: "Straight Forward: Building Your Clear Aligner Practice" with Dr. Sam Glick (sponsored by orthobrain); a Cosmetic Dentistry Hands-On Workshop with Dr. Elaine Bylis; a Hands-On Implants Workshop (speaker to be announced, sponsored by Adin); and a fourth "Hands-On Endodontics or Periodontics Workshop" still to be announced (the separate Endo and Perio tracks are now one combined slot, so the block is four workshops). The three named classes are set to 2 CE credits each for now — tell me if any should be different. Added new speaker profiles for Dr. Elaine Bylis (with her photo) and Dr. Sam Glick (initials placeholder until a photo comes in). Note: the agenda and speakers pages are still the "coming soon" teasers, so none of this is public yet.
- Added the "Dental Volunteers for Israel (DVI)" class back to the Shabbos schedule at 2:45 PM, with Dr. Nathaniel Dancykier speaking (CE, 1) — replacing the "Dental Related Shiur to Be Announced" placeholder in that slot. Note: the agenda page is still the "coming soon" teaser, so this isn't public yet.
- Gold level: Adin, APEX, and TheraBreath are now marked as attending. Gold now reads MB Precious Metals, Crazy Dental, Reach, Adin, APEX, TheraBreath (all attending), then Pearl and Lasso MD (past sponsors).
- On the Sponsors page, each level (Platinum, Gold, Silver, Bronze) now shows the sponsors attending the conference first, then the rest. This happens automatically from now on, so newly added attending sponsors will always rise to the top of their level.
- Set the Bronze level order to Citron Films, then Pizza Biza, then CG Insurance Group (the attending ones), followed by the past sponsors.
- Emerald Dental Lab is now marked as a "Past Sponsor" (muted gray pill) instead of "Attending." It stays on the Sponsors page but no longer appears on the homepage sponsor logo strip, which only shows confirmed 2027 sponsors.
- Added a Pizza Biza video (YouTube). It now plays at the bottom of the Pizza Biza popup on both the Deals page and the conference Sponsors page.

- Agenda now hides the davening/tefillah times by default so the schedule leads with meals, classes and parties. A "Davening Info" button reveals them (Daf Yomi, Shacharis, Mincha, Maariv, Candle Lighting, Kabbalas Shabbos, Havdalah). Any session that gives CE credit — including the shiurim that carry CE — always stays visible. (This lives in the agenda; the agenda page is still the "coming soon" teaser, so it isn't public yet.)
- Renamed the two Shabbos afternoon slots (2:45 PM and 3:45 PM) to "Dental Related Shiur to Be Announced Soon."
- Reworked Friday's morning and afternoon schedule:
  - 9:00–10:30 AM — Dr. Nathaniel Dancykier (prosthodontics & cosmetic dentistry), "The Science and Art of Cosmetic Dentistry: Predictable, Beautiful Restorations" (CE, 1.5). New speaker; saved his full bio and headshot.
  - 10:30–11:30 AM — Dr. Sara Werb's Intraosseous Anesthesia session moved here (was 10:00–11:00 AM).
  - Removed Dr. Sean Ference's 11:00 AM session from Friday. His session listing and speaker card are kept on file (archived, not deleted) in case he returns.
  - 1:30–3:00 PM — new endodontics class by Dr. Craig Berry, "The Comfortable Root Canal: Cutting-Edge Endodontics for Predictable, Pain-Free Outcomes" (CE, 2). Saved his full bio and headshot.
  - 11:30 AM–12:30 PM — added a "To Be Announced Soon" placeholder session (CE, 1) so the slot isn't empty.
  - All new speaker photos are sized and formatted (WebP) to match the others so they won't slow the page. Note: the speakers page is still the "coming soon" teaser, so these cards aren't public yet.
- Thursday's final session slot (6:30–8:00 PM) is now Dr. Marc Faber, CEO of Edge Dental Management, presenting "I Buy Junk Practices: Turning Distressed Offices Into Thriving Ones" (1.5 CE credits) — previously a placeholder ("Concurrent Classes — Topics to Be Announced").
- Updated Dr. Faber's saved speaker card to match: new session title and time, his role as CEO of Edge Dental Management, and a new bio describing Edge (a multi-location, technology-forward dental group in the greater New York area). Note: the speakers page is still the "coming soon" teaser, so this card isn't public yet.
- Removed Nobel Biocare from the sponsor page. Their details are kept on file in the sponsor data so they can be added back later if needed.
- Sponsor page updates: Reach and CG Insurance Group are now marked "attending" (they get the gold "✓ Attending" badge and appear on the homepage sponsor logo strip). Adin was moved up to the Gold tier. Within Gold, Reach now sits ahead of Lasso MD, and APEX now sits ahead of Pearl.
- The sponsor list's version number was bumped (now v4) so returning visitors see all the updated sponsor changes above.

---

## July 20, 2026

- On phones and very narrow windows, the big paragraph in the homepage hero ("You'll engage with high-quality...") now sits noticeably narrower — about 34px of space from each screen edge (was 20px). Desktop is unchanged. Stylesheet bumped to v=43

- Ran a full site review (report shared in chat) and applied a batch of approved fixes:
- Member count now says "over 950 Jewish dentists" in both places it appears — the WhatsApp page hero (was "over 1,000 Jewish dental professionals") and the Want to Lecture page (was "approximately 800"), so the two pages no longer contradict each other
- The WhatsApp page now says "dentists" instead of "dental professionals" everywhere (headline, member-benefits card, and the page's search/social descriptions), matching the group's dentists-only rule
- Standardized the community's name to "Dental Wisdom WhatsApp Community": the Group Policies page no longer says "Dental Wisdom Chat" (6 spots), and the WhatsApp page's browser-tab title now reads "Join the WhatsApp Community." The floating "Join WhatsApp Group" button is unchanged
- Two section headings now match the site's Title Case style: "What Every Session Includes" (Live page) and "What You'll Receive as a Member" (WhatsApp page)
- Fixed a grammar slip in the homepage "Class Options & CE Credits" accordion: "credits, that will be accredited" → "credits, which will be accredited"
- Fixed a homepage testimonial credential: "Prosthodontics" → "Prosthodontist" (matches how the other testimonials are labeled)
- The small gold weekday tag ("THU") on Live session date badges now uses the darker gold used for all other gold text, so it's easier to read on the white card
- Two one-off colors (the light gold in the homepage testimonial carousel, the navy hover on the Live page Sign Up button) are now named colors in the shared stylesheet, so future palette changes reach them automatically
- The Live and Deals data files now load with version numbers (like the stylesheet already does), so returning visitors always get the newest sessions and deals after an update
- The two giveaway-sponsor logo buttons on the Live page now find their pop-up by sponsor name instead of list position — adding or reordering sponsors in the data file can no longer make them open the wrong pop-up
- Privacy Policy dates updated to January 1, 2026 (was 2025), matching the Terms pages
- Updated the internal project-notes file (CLAUDE.md) to match reality: teaser Agenda/Speakers pages noted, sponsor modal photo support marked as built, floating-button label corrected, stylesheet version corrected
- Stylesheet version bumped to v=41 on all pages so visitors get the updated styles

- On the Dental Wisdom Live page, reworked that confirmation-email heads-up into a single centered note beneath all three steps (instead of tucked inside "Claim Your Spot"), so the three columns stay even. It now also reminds people that registration is required to receive CE credit for a session
- On the Dental Wisdom Live page, added a short heads-up under the "Claim Your Spot" step letting people know their sign-up confirmation email comes from noreply@dentalwisdom.s09.usa1.teams-events.com and may land in their spam or junk folder
- On the Dental Wisdom Live page, each session card's date badge now shows the day of the week (e.g. "THU") at the top, above the month and day. It's worked out automatically from the date, so you never have to enter it and it can't be wrong even if a future session lands on a different day
- Removed Mango Voice from the Deals page (their deal link wasn't working). Their full entry is saved in the archive folder (`_archive/removed-deals.md`) so it can be pasted right back if they return

## July 19, 2026

- Fixed a typo on the homepage: the line under the gallery now reads "From the 2026 Dental Wisdom Conference — here's a look at what you can expect." (was "2025")

## July 17, 2026

- Made the CE-credit note show on every upcoming Live session card, not just Pearl's. All upcoming sessions now show an italic gold line reading "Register and attend to earn CE credit." The August 27 Pearl session keeps its own version, "Register and attend to earn CE credit and a free month of Pearl." Past sessions show no such line unless specifically set later
- Set up (behind the scenes) an easy way to add a note to a past session later — for example, once the Pearl talk is over, a "request the recording to earn CE credit" line that links to a form. Just send me the wording and form link when you're ready
- On the August 27 Pearl session card, added a short italic gold line under the description that reads "Register and attend to earn CE credit and a free month of Pearl." so attendees clearly see they're getting something. It shows on that session only — other session cards are unaffected
- Added a new Dental Wisdom Live session: "AI in Dentistry: Enhancing Patient Communication and Clinical Outcomes" with Dr. Mitchell Rubinstein, August 27, 2026 at 8:00 PM EST, sponsored by Pearl. The description notes that all attendees get a free month of Pearl and must register to receive the CE credits and free month. Registration link added, so the Sign Up button is now live
- Reordered the Deals page "Key Dental Solutions" section: moved Dental Equipment, Jim the OSHA & HIPAA Man, and Credit Card Processing to the end of the list (in that order). All other listings in the section stayed in place

## July 13, 2026

- Updated Dr. Tzvi Krupka's session title to "Opening the Airway: Diagnosis and Management of Obstructive Sleep Apnea" and refreshed his bio with new details (Lakewood Oral Maxillofacial Surgery, Lenox Hill Hospital, St. Joseph's University Medical Center, Westchester Medical Center Cleft Lip and Palate team). Saved in the agenda file and the master speaker-page reference file — his card isn't built on the live speakers page yet

- Simplified the still-open concurrent class slots per Ben's call: Thursday 6:30–8pm's four separate placeholder workshops (and Friday 3–5pm's two remaining open ones) are now each one plain line — "Concurrent Classes — Topics to Be Announced" — instead of specific-sounding names and sponsor credits that weren't locked in yet. The confirmed Friday 3–5pm sessions (Dr. Sara Werb, Yaakov Citron) are untouched
- Saved a running list of every still-pending agenda slot in the site notes for easy reference later

- Marked Dr. Harold Katz, Dr. Daniel Greenbaum, Dr. Tzvi Krupka, Dr. Ariel Steinberger, Dr. Sara Werb, and Sam Waller as confirmed (speaker + session title locked in) in the site notes
- Caught and fixed a mismatch on Dr. Harold Katz's session title — three different versions existed across files; synced everything to the one currently on the live schedule: "Getting on the Bathroom Shelf: How Clinical Dentistry Inspires Consumer Products"

- Updated Dr. Ariel Steinberger's session title to "The Yes Blueprint: A Step by Step Approach to Case Presentation and Case Acceptance" — saved in the draft agenda file and the master speaker-page reference file, not on the live agenda/speakers pages yet since those still show "coming soon" placeholders
- Replaced Dr. Gabe Hershman with new speaker Dr. Tzvi Krupka in the Thursday 2–4pm slot — added his bio (from The Hershman Group) and gave his sleep-apnea session a draft title, "Restoring the Airway: A Surgeon's Approach to Diagnosing and Treating Sleep Apnea" (still needs Ben's sign-off before it's final)
- Resized and optimized Dr. Krupka's headshot to match the other speaker photos (790×800, ~15KB) so the eventual speakers page loads fast
- Archived Dr. Hershman's old headshot and an outdated speaker-bios reference document instead of deleting them, since their content is already captured elsewhere

## July 12, 2026

- Found and fixed the real cause of the missing "X": the top-right menu button was getting visually covered by the full-screen menu once it opened, so nothing was there to see or tap. Added a proper, always-visible X button inside the open menu itself (top-right) that closes it
- Mobile menu button: the three-line icon in the top-right now turns into an X while the menu is open, and back into three lines when closed (kept as a nice-to-have, though the new X above is the one people will actually see and use)

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

