/* =========================================================
   Dental Wisdom Conference — Agenda data
   See SITE_SPEC.md §6. Ben tells Claude about schedule
   changes (new session, updated time/speaker/room, etc.)
   and Claude edits this file directly. No Google Sheet.

   Fields per agenda item:
     day        - Day label shown on the agenda filter bar
     time       - Time range shown on the schedule
     title      - Session / activity name
     speaker    - Presenter or leader (optional — leave "" if none)
     speakerUrl - Link to speaker's profile page (optional)
     location   - Room or area name (optional — leave "" if not set)
     ce         - true for CE credit lectures (adds visual highlight)
     sponsor / sponsorUrl / sponsorLabel
                - Optional. Shows "Sponsored by <name>" (or a custom
                  sponsorLabel) on the card, linked to sponsorUrl. Also
                  works inside a concurrent block (applies to that one
                  card, covering its whole time block).
     sponsors   - Optional. Use instead of sponsor/sponsorUrl when two
                  or more sponsors share credit on one card, e.g.
                  [{ name: "A", url: "/conference-sponsors" },
                   { name: "B", url: "/conference-sponsors" }].
                  Each name is its own hyperlink; the joining "&" is
                  plain text, not a link. sponsorLabel still applies.
     parts      - Optional, only used on a card inside a concurrent
                  block. For a single room's slot that's really a
                  back-to-back multi-lecture session with different
                  speakers (e.g. one 2-hour block split into two
                  1-hour lectures). Array of { title, speaker,
                  speakerUrl } — each lecture title gets its own line,
                  and all the speakers are rolled into the one shared
                  meta line below (with location and sponsor, if any)
                  exactly like every other agenda card.
                  When present, the item's top-level title/speaker are
                  ignored; sponsor/sponsorUrl still cover the card.
                  See the Friday "Built to Scale" item below.

   Lecture sessions without a confirmed speaker show "To Be Announced Soon".
   Remaining lecture topics/speakers are still TBD and will be
   filled in as they're confirmed.

   Locations: Library (Daf Yomi Shiur, Shacharis), Shul (Lectures,
   Welcoming Remarks, Davening, Dvar Torah, Kiddush, Mincha/Maariv,
   Shalosh Seudos, Oneg), OVO at The Altair (Breakfast, Lunches,
   Shabbos Dinner), Atrium (Registration, Welcome Event, Welcome Party,
   Closing Party).
   ========================================================= */

window.AGENDA_DATA = [
  // ---------------- Wednesday ----------------
  { day: "Wednesday", time: "8:30 – 10:30 PM", title: "Opening Night: Casino, Cigars & Scotch", desc: "The chips are stacked. The scotch is poured. Fresh cigars are rolled right in front of you — and the tables are calling your name.\n\nGrab your ID badge, place your bets, and roll into the weekend in style. This is the official kickoff night of the conference, and we're going all in.\n\nGrand prize: over $2,000 in gold or cash.\nSee you at the tables.\n\nAdults-only evening — 21 and over.", speaker: "", location: "Atrium", event: true, sponsorLines: [ { label: "Grand prize — sponsored by", name: "MB Precious Metals", url: "/conference-sponsors" }, { label: "Hand-rolled cigars, fresh on-site — sponsored by", name: "Emerald Dental Lab", url: "/conference-sponsors" } ] },

  // ---------------- Thursday ----------------
  { day: "Thursday", time: "6:00 – 7:00 AM", title: "MDY Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Thursday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "Library" },
  { day: "Thursday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Thursday", time: "8:15 – 8:45 AM", title: "Registration", speaker: "", location: "Atrium" },
  { day: "Thursday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul", showInCEView: true, event: true },
  { day: "Thursday", time: "9:00 – 10:00 AM", title: "Getting on the Bathroom Shelf: How Clinical Dentistry Inspires Consumer Products", speaker: "Dr. Harold Katz (General Dentist)", speakerUrl: "/conference-speakers#speaker-harold-katz", location: "Shul", ce: true, ceCredits: 1, sponsor: "TheraBreath", sponsorUrl: "/conference-sponsors" },
  { day: "Thursday", time: "10:00 AM – 12:00 PM", title: "Designing Smiles That Last: Modern Prosthodontic Strategies for Predictable, Aesthetic & Functional Excellence", speaker: "Dr. Daniel Greenbaum (Prosthodontist)", speakerUrl: "/conference-speakers#speaker-daniel-greenbaum", location: "Shul", ce: true, ceCredits: 2, sponsor: "TruAbutment", sponsorUrl: "/conference-sponsors" },
  { day: "Thursday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair", event: true, sponsor: "Reach", sponsorUrl: "/conference-sponsors" },
  { day: "Thursday", time: "2:00 – 4:00 PM", title: "Opening the Airway: Diagnosis and Management of Obstructive Sleep Apnea", speaker: "Dr. Tzvi Krupka (Oral Surgeon)", speakerUrl: "/conference-speakers#speaker-tzvi-krupka", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "4:00 – 6:00 PM", title: "The Yes Blueprint: A Step by Step Approach to Case Presentation and Case Acceptance", speaker: "Dr. Ariel Steinberger (Cosmetic Dentist)", speakerUrl: "/conference-speakers#speaker-ariel-steinberger", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "6:00 – 6:30 PM", title: "Break (Mincha & Maariv)", speaker: "", location: "Shul" },
  { day: "Thursday", time: "6:30 – 8:00 PM", title: "I Buy Junk Practices: Turning Distressed Offices Into Thriving Ones", speaker: "Dr. Marc Faber, CEO of Edge Dental Management", speakerUrl: "/conference-speakers#speaker-marc-faber", location: "Shul", ce: true, ceCredits: 1.5 },
  { day: "Thursday", time: "8:00 PM", title: "Welcome Party — Music, Food & Drinks", speaker: "", location: "Atrium", sponsor: "LiveWell Capital", sponsorUrl: "/conference-sponsors", event: true },

  // ---------------- Friday ----------------
  { day: "Friday", time: "6:00 – 7:00 AM", title: "MDY Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Friday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "Library" },
  { day: "Friday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul", showInCEView: true, event: true },
  { day: "Friday", time: "9:00 – 10:30 AM", title: "The Science and Art of Cosmetic Dentistry: Predictable, Beautiful Restorations", speaker: "Dr. Nathaniel Dancykier (Prosthodontist)", speakerUrl: "/conference-speakers#speaker-nathaniel-dancykier", location: "Shul", ce: true, ceCredits: 1.5 },
  // ARCHIVED 2026-07-24 (Werb extended to 2 hrs, absorbing 11:30 slot): { day: "Friday", time: "10:30 – 11:30 AM", title: "Intraosseous Anesthesia: Advanced Techniques for Predictable & Profound Pain Control", speaker: "Dr. Sara Werb (Pediatric Dentist)", speakerUrl: "/conference-speakers#speaker-sara-werb", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Friday", time: "10:30 AM – 12:30 PM", title: "Intraosseous Anesthesia: Advanced Techniques for Predictable & Profound Pain Control", speaker: "Dr. Sara Werb (Pediatric Dentist)", speakerUrl: "/conference-speakers#speaker-sara-werb", location: "Shul", ce: true, ceCredits: 2 },
  // ARCHIVED 2026-07-24 (removed by Ben): { day: "Friday", time: "11:00 AM – 12:30 PM", title: "'Hopeless' to Heroic: Modern Approaches to Periodontal Regeneration and Plastic Surgery", speaker: "Dr. Sean Ference (Periodontist)", speakerUrl: "/conference-speakers#speaker-sean-ference", location: "Shul", ce: true, ceCredits: 2 },
  // ARCHIVED 2026-07-24 (absorbed into Werb's extended 10:30 AM–12:30 PM block): { day: "Friday", time: "11:30 AM – 12:30 PM", title: "To Be Announced Soon", speaker: "To Be Announced Soon", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Friday", time: "12:30 – 1:30 PM", title: "Lunch", speaker: "", location: "OVO at The Altair", event: true, sponsor: "Sponsor TBD" },
  // ARCHIVED 2026-07-27 (Craig Berry restored to this slot by Ben): { day: "Friday", time: "1:30 – 3:00 PM", title: "Lecture Topic to Be Announced Soon", speaker: "To Be Announced Soon", location: "Shul", ce: true, ceCredits: 1.5 },
  { day: "Friday", time: "1:30 – 3:00 PM", title: "Your Root Canal Failed, Now What? Managing Endodontic Failures and Current Out-of-the-Box Treatment Options", speaker: "Dr. Craig Berry (Endodontist)", speakerUrl: "/conference-speakers#speaker-craig-berry", location: "Shul", ce: true, ceCredits: 2 },
  // ARCHIVED 2026-07-21 (NuSmile dropped): { day: "Friday", time: "3:00 – 5:00 PM", title: "Hands-On Zirconia Crown Mastery: Anterior Esthetics & Posterior Strength Workshop", speaker: "Dr. Sara Werb (Pediatric Dentist)", speakerUrl: "/conference-speakers#speaker-sara-werb", location: "301A1", ce: true, ceCredits: 2, concurrent: "fri-300-breakout", sponsor: "NuSmile", sponsorUrl: "/conference-sponsors" },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "Straight Forward: Building Your Clear Aligner Practice", speaker: "Dr. Sam Glick (General Dentist)", speakerUrl: "/conference-speakers#speaker-sam-glick", location: "", ce: true, ceCredits: 2, concurrent: "fri-300-breakout", sponsor: "orthobrain", sponsorUrl: "/conference-sponsors" },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "Complications in Perio Anterior Cases", speaker: "To Be Announced Soon", location: "", ce: true, ceCredits: 2, concurrent: "fri-300-breakout", sponsor: "Adin", sponsorUrl: "/conference-sponsors" },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "From Blob to Beautiful: Cosmetic Dentistry Hands-On Workshop", speaker: "Dr. Elaine Bylis (Cosmetic Dentist)", speakerUrl: "/conference-speakers#speaker-elaine-bylis", location: "", ce: true, ceCredits: 2, concurrent: "fri-300-breakout" },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "Topic to Be Announced Soon", speaker: "To Be Announced Soon", location: "", ce: true, ceCredits: 2, concurrent: "fri-300-breakout" },
  // ARCHIVED 2026-07-21 (replaced by 4 hands-on tracks): { day: "Friday", time: "3:00 – 5:00 PM", title: "The 5-Step AI Video Playbook: A Hands-On Workshop for Building Usable Digital Assets for Your Practice", speaker: "Yaakov Citron", speakerUrl: "/conference-speakers#speaker-yaakov-citron", location: "320A1", ce: true, ceCredits: 2, concurrent: "fri-300-breakout", sponsor: "Citron Films", sponsorUrl: "/conference-sponsors" },
  { day: "Friday", time: "6:09 PM", title: "Candle Lighting", speaker: "", location: "" },
  // NAME HIDDEN 2026-07-28 (Ben's call — Gobbie Cohn attendance unconfirmed; restore when he tells us). To bring back: speaker: "Gobbie Cohn", speakerUrl: "/conference-speakers#speaker-gobbie-cohn"
  { day: "Friday", time: "6:15 PM", title: "Mincha, Kabbalas Shabbos & Maariv", speaker: "", location: "Shul",
    sponsors: [
      { name: "APEX Reimbursement Specialists", url: "/conference-sponsors" },
      { name: "CG Insurance Group", url: "/conference-sponsors" }
    ], sponsorLabel: "Chazanus sponsored by" },
  { day: "Friday", time: "8:00 PM", title: "Shabbos Dinner", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "10:30 PM", title: "Oneg & Shiur: From Isolation to Achdus - Strengthening the Jewish Dental Community", speaker: "To Be Announced Soon", location: "Shul", ce: true, ceCredits: 1.5, sponsor: "Crown Catapult", sponsorUrl: "/conference-sponsors" },

  // ---------------- Shabbos ----------------
  // ARCHIVED 2026-07-24 (Schuster removed as speaker by Ben; card already off the speakers page): { day: "Shabbos", time: "8:15 AM", title: "Pre-Davening Shiur", speaker: "Dr. Samuel Schuster (General Dentist)", location: "Library", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "8:15 AM", title: "Pre-Davening Shiur", speaker: "To Be Announced Soon", location: "Library", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "8:30 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Shabbos", time: "9:00 AM", title: "Davening", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "11:00 AM", title: "Kiddush & Dvar Torah", speaker: "To Be Announced Soon", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "12:00 PM", title: "Shabbos Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Shabbos", time: "2:45 PM", title: "Dental Volunteers for Israel (DVI)", speaker: "Dr. Nathaniel Dancykier (Prosthodontist)", speakerUrl: "/conference-speakers#speaker-nathaniel-dancykier", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "3:45 PM", title: "Dental Related Shiur to Be Announced Soon", speaker: "To Be Announced Soon", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "4:45 PM", title: "Life Insurance: Bitachon or Hishtadlus? Navigating the Halachic Sources", speaker: "Sam Waller, CFP®", speakerUrl: "/conference-speakers#speaker-sam-waller", location: "Shul", ce: true, ceCredits: 1, sponsor: "LiveWell Capital", sponsorUrl: "/conference-sponsors" },
  { day: "Shabbos", time: "5:45 PM", title: "Mincha", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "6:10 PM", title: "Shalosh Seudos & Dental Halacha Shiur", speaker: "Rabbi Dr. David J. Katz (General Dentist)", speakerUrl: "/conference-speakers#speaker-rabbi-david-katz", location: "Shul", ce: true, ceCredits: 1, sponsor: "Touro College of Dental Medicine", sponsorUrl: "/conference-sponsors" },
  { day: "Shabbos", time: "7:09 PM", title: "Maariv & Havdalah", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "8:30 PM", title: "Closing Night Celebration — Music, Food & Drinks", speaker: "", location: "Atrium", sponsor: "orthobrain", sponsorUrl: "/conference-sponsors", event: true },
  { day: "Shabbos", time: "10:30 PM", title: "MDY Daf Yomi Shiur", speaker: "", location: "Library" }
];
