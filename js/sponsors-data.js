/* =========================================================
   Dental Wisdom Conference — Sponsor logos
   Powers the scrolling sponsor strip at the bottom of
   agenda.html. No Google Sheet — Ben tells Claude about
   sponsor changes (add/remove/update) and Claude edits
   this file directly.

   Fields per sponsor:
     name    - Sponsor name (required, used as alt text and
               shown in the placeholder box until a logo is added)
     logoUrl - Path to the logo image in images/sponsors/
               (leave "" to show a placeholder box with the name)
     link    - Optional website URL (makes the logo clickable)

   TODO: Replace these placeholder entries with the confirmed
   2027 sponsor list and add logo image files to
   images/sponsors/ once Ben provides them.
   ========================================================= */

window.SPONSORS_DATA = [
  { name: "Sponsor Name", logoUrl: "", link: "" },
  { name: "Sponsor Name", logoUrl: "", link: "" },
  { name: "Sponsor Name", logoUrl: "", link: "" },
  { name: "Sponsor Name", logoUrl: "", link: "" },
  { name: "Sponsor Name", logoUrl: "", link: "" },
  { name: "Sponsor Name", logoUrl: "", link: "" }
];
