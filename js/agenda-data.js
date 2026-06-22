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

   Lecture sessions without a confirmed speaker show "Speaker TBD".
   Remaining lecture topics/speakers are still TBD and will be
   filled in as they're confirmed.

   Locations: Library (Daf Yomi Shiur, Shacharis), Shul (Lectures,
   Welcoming Remarks, Davening, Dvar Torah, Kiddush, Mincha/Maariv,
   Shalosh Seudos, Oneg), OVO at The Altair (Breakfast, Lunches,
   Shabbos Dinner), Atrium (Welcome Event, Welcome Party, Closing
   Party).
   ========================================================= */

window.AGENDA_DATA = [
  // ---------------- Wednesday ----------------
  { day: "Wednesday", time: "8:30 – 10:30 PM", title: "Opening Night Reception: Cigars, Scotch & Hors d'Oeuvres", speaker: "", location: "Atrium", event: true },

  // ---------------- Thursday ----------------
  { day: "Thursday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Thursday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "Library" },
  { day: "Thursday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Thursday", time: "8:15 – 8:45 AM", title: "Registration", speaker: "", location: "" },
  { day: "Thursday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul", showInCEView: true, event: true },
  { day: "Thursday", time: "9:00 – 10:00 AM", title: "The Fresh Breath Revolution Started with One Dentist's Determination", speaker: "Dr. Harold Katz", speakerUrl: "/conference-speakers#speaker-harold-katz", location: "Shul", ce: true, ceCredits: 1, sponsor: "TheraBreath", sponsorUrl: "/conference-sponsors" },
  { day: "Thursday", time: "10:00 AM – 12:00 PM", title: "Designing Smiles That Last: Modern Prosthodontic Strategies for Predictable, Aesthetic & Functional Excellence", speaker: "Dr. Daniel Greenbaum", speakerUrl: "/conference-speakers#speaker-daniel-greenbaum", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair", event: true },
  { day: "Thursday", time: "2:00 – 4:00 PM", title: "OMFS Lecture Title TBD", speaker: "Dr. Gabe Hershman", speakerUrl: "/conference-speakers#speaker-gabe-hershman", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "4:00 – 6:00 PM", title: "Cosmetic Dentistry Lecture Title TBD", speaker: "Dr. Ariel Steinberger", speakerUrl: "/conference-speakers#speaker-ariel-steinberger", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "6:00 – 6:30 PM", title: "Break (Mincha & Maariv)", speaker: "", location: "Shul" },
  { day: "Thursday", time: "6:30 – 8:00 PM", title: "Pediatric Dentistry Part 1: Lecture Title TBD", speaker: "Dr. Sara Werb", speakerUrl: "/conference-speakers#speaker-sara-werb", location: "Location TBD", ce: true, ceCredits: 1.5, concurrent: "thu-630-breakout" },
  { day: "Thursday", time: "6:30 – 8:00 PM", title: "Ortho Hands-On: Lecture Title TBD", speaker: "Speaker TBD", location: "Location TBD", ce: true, ceCredits: 1.5, concurrent: "thu-630-breakout" },
  { day: "Thursday", time: "6:30 – 8:00 PM", title: "Implants Hands-On: Lecture Title TBD", speaker: "Speaker TBD", location: "Location TBD", ce: true, ceCredits: 1.5, concurrent: "thu-630-breakout" },
  { day: "Thursday", time: "6:30 – 8:00 PM", title: "Painting", speaker: "Speaker TBD", location: "Location TBD", concurrent: "thu-630-breakout" },
  { day: "Thursday", time: "8:00 PM", title: "Welcome Party — Music, Food & Drinks", speaker: "", location: "Atrium", sponsor: "LiveWell Capital", sponsorUrl: "/conference-sponsors", event: true },

  // ---------------- Friday ----------------
  { day: "Friday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Friday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "Library" },
  { day: "Friday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul", showInCEView: true, event: true },
  { day: "Friday", time: "9:00 – 10:30 AM", title: "Endo Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1.5 },
  { day: "Friday", time: "10:30 AM – 12:00 PM", title: "'Hopeless' to Heroic: Modern Approaches to Periodontal Regeneration and Plastic Surgery", speaker: "Dr. Sean Ference", speakerUrl: "/conference-speakers#speaker-sean-ference", location: "Shul", ce: true, ceCredits: 1.5 },
  { day: "Friday", time: "12:00 – 1:30 PM", title: "Lunch", speaker: "", location: "OVO at The Altair", event: true },
  { day: "Friday", time: "1:30 – 3:00 PM", title: "Ortho Tips and Tricks", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "Pediatric Dentistry Part 2: Lecture Title TBD", speaker: "Dr. Sara Werb", speakerUrl: "/conference-speakers#speaker-sara-werb", location: "Location TBD", ce: true, ceCredits: 2, concurrent: "fri-300-breakout" },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "Implants Hands-On: Lecture Title TBD", speaker: "Speaker TBD", location: "Location TBD", ce: true, ceCredits: 2, concurrent: "fri-300-breakout" },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Location TBD", ce: true, ceCredits: 2, concurrent: "fri-300-breakout" },
  { day: "Friday", time: "3:00 – 5:00 PM", title: "Painting", speaker: "Speaker TBD", location: "Location TBD", concurrent: "fri-300-breakout" },
  { day: "Friday", time: "6:09 PM", title: "Candle Lighting", speaker: "", location: "" },
  { day: "Friday", time: "6:15 PM", title: "Mincha, Kabbalas Shabbos & Maariv", speaker: "", location: "Shul" },
  { day: "Friday", time: "8:00 PM", title: "Shabbos Dinner", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "10:30 PM", title: "Shiur & Oneg", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1.5, sponsor: "Crown Catapult", sponsorUrl: "/conference-sponsors" },

  // ---------------- Shabbos ----------------
  { day: "Shabbos", time: "8:15 – 9:15 AM", title: "Pre-Davening Shiur", speaker: "", location: "Library", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "9:00 AM", title: "Davening", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "11:00 AM", title: "Kiddush & Dvar Torah", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "12:00 PM", title: "Shabbos Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Shabbos", time: "3:00 – 4:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "4:00 – 5:00 PM", title: "Life Insurance: Bitachon or Hishtadlus? Navigating the Halachic Sources", speaker: "Sam Waller, CFP®", speakerUrl: "/conference-speakers#speaker-sam-waller", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "5:00 – 6:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "6:00 PM", title: "Mincha", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "6:30 PM", title: "Shalosh Seudos & Dental Halacha Shiur", speaker: "Rabbi Dr. David J. Katz", speakerUrl: "/conference-speakers#speaker-rabbi-david-katz", location: "Shul", ce: true, ceCredits: 1, sponsor: "Touro College of Dental Medicine", sponsorUrl: "/conference-sponsors" },
  { day: "Shabbos", time: "7:09 PM", title: "Maariv & Havdalah", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "8:30 PM", title: "Closing Night Celebration — Music, Food & Drinks", speaker: "", location: "Atrium", sponsor: "orthobrain", sponsorUrl: "/conference-sponsors", event: true },
  { day: "Shabbos", time: "10:30 PM", title: "Daf Yomi Shiur", speaker: "", location: "Library" }
];
