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
  { day: "Wednesday", time: "8:30 – 10:30 PM", title: "Welcome Event", speaker: "", location: "Atrium" },

  // ---------------- Thursday ----------------
  { day: "Thursday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Thursday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "Library" },
  { day: "Thursday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Thursday", time: "8:15 – 8:45 AM", title: "Registration", speaker: "", location: "" },
  { day: "Thursday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul", showInCEView: true },
  { day: "Thursday", time: "9:00 – 10:00 AM", title: "Product Development – The Story of TheraBreath", speaker: "Dr. Harold Katz", speakerUrl: "/conference-speakers#speaker-harold-katz", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Thursday", time: "10:00 AM – 12:00 PM", title: "Designing Smiles That Last: Modern Prosthodontic Strategies for Predictable, Aesthetic & Functional Excellence", speaker: "Dr. Daniel Greenbaum", speakerUrl: "/conference-speakers#speaker-daniel-greenbaum", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Thursday", time: "2:00 – 4:00 PM", title: "'Hopeless' to Heroic: Modern Approaches to Periodontal Regeneration and Plastic Surgery", speaker: "Dr. Sean Ference", speakerUrl: "/conference-speakers#speaker-sean-ference", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "4:00 – 6:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Thursday", time: "6:00 – 6:30 PM", title: "Break (Mincha & Maariv)", speaker: "", location: "Shul" },
  { day: "Thursday", time: "6:30 – 8:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1.5 },
  { day: "Thursday", time: "8:00 PM", title: "Welcome Party", speaker: "", location: "Atrium", sponsor: "LiveWell Capital", sponsorUrl: "/conference-sponsors" },

  // ---------------- Friday ----------------
  { day: "Friday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Friday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "Library" },
  { day: "Friday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul", showInCEView: true },
  { day: "Friday", time: "9:00 – 10:00 AM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Friday", time: "10:00 AM – 12:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Friday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "2:00 – 4:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 2 },
  { day: "Friday", time: "4:00 – 5:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Friday", time: "6:00 PM", title: "Mincha & Maariv", speaker: "", location: "Shul" },
  { day: "Friday", time: "8:00 PM", title: "Dinner", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "10:30 PM", title: "Shiur & Oneg", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1.5, sponsor: "Crown Catapult", sponsorUrl: "/conference-sponsors" },

  // ---------------- Shabbos ----------------
  { day: "Shabbos", time: "8:15 – 9:15 AM", title: "Pre-Davening Shiur", speaker: "", location: "Library", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "9:00 AM", title: "Davening", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "11:00 AM", title: "Kiddush", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "11:00 AM", title: "Dvar Torah", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "12:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Shabbos", time: "3:00 – 4:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "4:00 – 5:00 PM", title: "Life Insurance: Bitachon or Hishtadlus? Navigating the Halachic Sources", speaker: "Sam Waller, CFP®", speakerUrl: "/conference-speakers#speaker-sam-waller", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "5:00 – 6:00 PM", title: "Lecture Title TBD", speaker: "Speaker TBD", location: "Shul", ce: true, ceCredits: 1 },
  { day: "Shabbos", time: "6:00 PM", title: "Mincha", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "6:30 PM", title: "Shalosh Seudos & Dental Halacha Shiur", speaker: "Rabbi Dr. David J. Katz", speakerUrl: "/conference-speakers#speaker-rabbi-david-katz", location: "Shul", ce: true, ceCredits: 1, sponsor: "Touro College of Dental Medicine", sponsorUrl: "/conference-sponsors" },
  { day: "Shabbos", time: "7:00 PM", title: "Maariv", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "8:30 PM", title: "Closing Party", speaker: "", location: "Atrium", sponsor: "orthobrain", sponsorUrl: "/conference-sponsors" },
  { day: "Shabbos", time: "10:30 PM", title: "Daf Yomi Shiur", speaker: "", location: "Library" }
];
