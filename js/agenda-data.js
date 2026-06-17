/* =========================================================
   Dental Wisdom Conference — Agenda data
   See SITE_SPEC.md §6. Ben tells Claude about schedule
   changes (new session, updated time/speaker/room, etc.)
   and Claude edits this file directly. No Google Sheet.

   Fields per agenda item:
     day     - Day label shown on the agenda tabs
     time    - Time range shown on the schedule
     title   - Session / activity name
     speaker - Presenter or leader (optional — leave "" if none)
     location - Room or area name (optional — leave "" if not set)

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
  { day: "Thursday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul" },
  { day: "Thursday", time: "9:00 – 10:00 AM", title: "Lecture", speaker: "Dr. Harold Katz", speakerUrl: "conference-speakers.html#speaker-harold-katz", location: "Shul" },
  { day: "Thursday", time: "10:00 AM – 12:00 PM", title: "Lecture", speaker: "Dr. Daniel Greenbaum", speakerUrl: "conference-speakers.html#speaker-daniel-greenbaum", location: "Shul" },
  { day: "Thursday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Thursday", time: "2:00 – 4:00 PM", title: "Lecture", speaker: "Dr. Sean Ference", speakerUrl: "conference-speakers.html#speaker-sean-ference", location: "Shul" },
  { day: "Thursday", time: "4:00 – 6:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Thursday", time: "6:00 – 6:30 PM", title: "Break (Mincha & Maariv)", speaker: "", location: "Shul" },
  { day: "Thursday", time: "6:30 – 7:30 PM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Thursday", time: "8:00 PM", title: "Welcome Party", speaker: "", location: "Atrium" },

  // ---------------- Friday ----------------
  { day: "Friday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Friday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "Library" },
  { day: "Friday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "Shul" },
  { day: "Friday", time: "9:00 – 10:00 AM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Friday", time: "10:00 AM – 12:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Friday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "2:00 – 4:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Friday", time: "4:00 – 5:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Friday", time: "6:00 PM", title: "Mincha & Maariv", speaker: "", location: "Shul" },
  { day: "Friday", time: "8:00 PM", title: "Dinner", speaker: "", location: "OVO at The Altair" },
  { day: "Friday", time: "10:30 PM", title: "Oneg", speaker: "", location: "Shul" },

  // ---------------- Shabbos ----------------
  { day: "Shabbos", time: "8:15 – 9:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "Library" },
  { day: "Shabbos", time: "9:00 AM", title: "Davening", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "11:00 AM", title: "Kiddush", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "11:00 AM", title: "Dvar Torah", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "12:00 PM", title: "Lunch", speaker: "", location: "OVO at The Altair" },
  { day: "Shabbos", time: "3:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Shabbos", time: "4:30 PM", title: "Lecture", speaker: "Speaker TBD", location: "Shul" },
  { day: "Shabbos", time: "6:00 PM", title: "Mincha", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "6:30 PM", title: "Shalosh Seudos", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "7:00 PM", title: "Maariv", speaker: "", location: "Shul" },
  { day: "Shabbos", time: "8:30 PM", title: "Closing Party", speaker: "", location: "Atrium" }
];
