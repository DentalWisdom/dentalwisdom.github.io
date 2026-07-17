/* =========================================================
   Dental Wisdom Live — session data
   This is the single source of truth for the Live page.
   No Google Sheet is used — Ben tells Claude about changes
   (new session, updated info, status change) and Claude
   edits this file directly and commits.

   Fields per session:
     title        - Session title (required)
     date         - Display date, e.g. "May 14, 2026"
     time         - Display time, e.g. "8:00 PM – 9:30 PM EST"
                    (always label times "EST" — never "ET" or "EDT")
     presenter    - Presenter name
     description  - Full session description
     registerLink - Registration URL
     sponsor      - Sponsor display name
     sponsorLink  - Sponsor website URL
     sortDate     - ISO date for sorting, e.g. "2026-05-14"
     status       - "upcoming" or "past"
   ========================================================= */

window.LIVE_DATA = [
  {
    title: "Maximizing Your Parnassah: How to Increase Revenue Without Increasing Your Hours",
    date: "May 14, 2026",
    time: "8:00 PM – 9:30 PM EST",
    presenter: "Harold Gornbein",
    description: "Join Harold Gornbein (Apex Reimbursement Specialists) for a session dedicated to the financial health of your practice. We will move beyond the chair to discover practical strategies that streamline your billing and improve cash flow. Learn how to integrate expert reimbursement management into your daily routine, ensuring your practice achieves the operational excellence it deserves.",
    registerLink: "https://events.teams.microsoft.com/event/4973cdac-548c-407a-ba4a-1164cc9336da@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "Apex",
    sponsorName: "APEX",
    sponsorLink: "https://apexreimbursement.com/dental-wisdom/",
    sortDate: "2026-05-14",
    status: "past"
  },
  {
    title: "Straight Forward: Building Your Clear Aligner Practice",
    date: "June 18, 2026",
    time: "8:00 PM – 9:30 PM EST",
    presenter: "Dr. Sam Glick, DMD",
    description: "Straight Forward: Building Your Clear Aligner Practice is a practical, team-focused CE course designed to help dentists confidently grow their clear aligner services. Participants will learn how to empower their entire dental team, streamline workflows, and master smarter case selection to deliver more predictable, successful outcomes with fewer refinements and complications.\n\nThrough real-world strategies and proven clinical tips, this course equips you with the essential “tools” you need — from patient communication and team delegation to treatment planning and troubleshooting — so you can build a thriving, efficient clear aligner practice with greater confidence and consistency. Perfect for doctors and teams looking to take their aligner cases from good to reliably excellent.",
    registerLink: "https://events.teams.microsoft.com/event/d5759ca1-a9cd-46bb-be51-6649809a740d@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "orthobrain",
    sponsorName: "orthobrain",
    sponsorLink: "https://orthobrain.com/",
    sortDate: "2026-06-18",
    status: "past"
  },
  {
    title: "All-on-X Surgery and Restoration - Does it all have to be done on the same day or can it be staged? 5 Patient treatments showing everything from planning to restoration",
    date: "July 9, 2026",
    time: "8:00 PM – 9:30 PM EST",
    presenter: "Dr. Daniel Reich",
    description: "The All-on-X concept has transformed full-arch rehabilitation, but does every case require immediate surgery and restoration on the same day? Join Dr. Daniel Reich as he examines the clinical considerations, advantages, and limitations of both immediate and staged treatment approaches.\n\nThrough five comprehensive patient cases, attendees will follow the complete treatment journey from diagnosis and digital planning through surgical placement, provisionalization, and final restoration. Dr. Reich will discuss patient selection, treatment sequencing, prosthetic considerations, and real-world decision-making that influence clinical outcomes.\n\nThis case-based presentation will provide practical insights into when immediate loading is appropriate, when a staged approach may lead to more predictable results, and how clinicians can optimize workflows to achieve long-term functional and esthetic success for their patients.",
    registerLink: "https://events.teams.microsoft.com/event/80092a8e-92c4-4ea1-8a5a-e390fcf02300@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "Adin",
    sponsorName: "Adin",
    sponsorLink: "https://www.adin-implants.com/",
    sortDate: "2026-07-09",
    status: "past"
  },
  {
    title: "AI in Dentistry: Enhancing Patient Communication and Clinical Outcomes",
    date: "August 27, 2026",
    time: "8:00 PM – 9:30 PM EST",
    presenter: "Dr. Mitchell Rubinstein",
    description: "This program explores the evolving role of artificial intelligence in modern dental practices, with a focus on clinical communication and operational efficiency. Participants will examine how AI-enhanced workflows improve case presentation accuracy, elevate chairside education, and support informed decision-making through real-time data insights. By incorporating AI into everyday practice, dental teams can strengthen patient trust, optimize team performance, and drive measurable improvements in both clinical outcomes and practice growth.\n\nAll attendees receive a FREE MONTH of Pearl. You must register to receive CE credits and the free month.",
    registerLink: "https://events.teams.microsoft.com/event/5128a874-68bc-4008-9c38-b9a71b9b20cc@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "Pearl",
    sponsorName: "Pearl",
    sponsorLink: "https://discover.hellopearl.com/dental-wisdom/",
    sortDate: "2026-08-27",
    status: "upcoming"
  },
  {
    title: "Dental Exit Planning: Building Your Practice's Endgame Before You Need It",
    date: "October 15, 2026",
    time: "8:00 PM – 9:30 PM EST",
    presenter: "Saul Kaplan",
    description: "Every dentist eventually steps away from the chair, but far too few plan for it until the decision is already upon them. Presented by Crown Catapult, this session demystifies dental exit planning: when to start, how to position your practice for its best possible valuation, and what today's market actually looks like for sellers.\n\nWhether you're years from an exit or actively weighing your options, you'll leave with a clearer picture of the paths available — from traditional sales to DSOs to newer models many practice owners don't yet know exist.\n\nTopics include when to start planning your exit, what you can do now to secure the best valuation, the current state of the market, the pros and cons of selling to a DSO, and new models you may not be aware of. Relevant for all members of the community. 1 CE credit.",
    registerLink: "https://events.teams.microsoft.com/event/b4c4e835-2de2-4d0b-9146-5d1b8990a429@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "Crown Catapult",
    sponsorName: "Crown Catapult",
    sponsorLink: "https://crowncatapult.com/",
    sortDate: "2026-10-15",
    status: "upcoming"
  }
];
