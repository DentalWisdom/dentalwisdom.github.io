Background music for the title-slide countdown billboard.

NOTHING IN THIS FOLDER IS PUBLISHED TO THE WEBSITE.
Audio files here stay on this Mac only (see .gitignore). That's deliberate:
putting a music file on dentalwisdom.org makes it downloadable by anyone who
finds the URL, which is distribution, not just playing it on a call.

WHAT THIS MEANS IN PRACTICE:
  - Running the deck LOCALLY (__Preview Site.command)  -> music plays.
  - The live site at dentalwisdom.org/liveslides/      -> silent.
    The timer, panels and countdown all work exactly the same either way;
    a missing music file is skipped without any error.

TO USE A TRACK:
  1. Put the .mp3 in this folder.
  2. In liveslides/index.html, find the "waitingRoom" block near the top and set
        music: "audio/your-file.mp3"
     Set it to "" for no music at all.
  3. musicVolume goes 0 to 1. 0.35 is background level, easy to talk over.

TO PUT MUSIC ON THE LIVE SITE:
  You need a track you hold the rights to - royalty-free or properly licensed.
  Then remove the audio ignore rule in .gitignore so the file publishes.

SHARING THE SOUND ON A CALL:
  On Zoom or Teams, browser audio does NOT reach attendees unless you tick
  "Share sound" when you start the screen share. Otherwise only you hear it.
