/* Tooth Memory — Simon-style memory game with dentist jokes. Shared by 404.html and /toothmemorygame. */
      (function () {
        var board    = document.getElementById('tmBoard');
        var roundEl  = document.getElementById('tmRound');
        var bestEl   = document.getElementById('tmBest');
        var statusEl = document.getElementById('tmStatus');
        var overlay  = document.getElementById('tmOverlay');
        var startBtn = document.getElementById('tmStart');
        var soundBtn = document.getElementById('tmSound');
        var resetBtn = document.getElementById('tmReset');
        var numbersBtn = document.getElementById('tmNumbers');
        var modesWrap = document.getElementById('tmModes');
        var pEmoji   = document.getElementById('tmPanelEmoji');
        var pTitle   = document.getElementById('tmPanelTitle');
        var pText    = document.getElementById('tmPanelText');
        var shareWrap = document.getElementById('tmShare');
        var shareBtn = document.getElementById('tmShareBtn');
        var shareFallback = document.getElementById('tmShareFallback');
        var shareEmail = document.getElementById('tmShareEmail');
        var shareCopy = document.getElementById('tmShareCopy');
        var copied   = document.getElementById('tmCopied');
        var jokeEl   = document.getElementById('tmJoke');
        if (!board) return;

        var TEETH = 9;
        var TONES = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];
        var DIFF = {
          easy:   { base: 720, dec: 14, min: 460, gap: 260 },
          normal: { base: 560, dec: 18, min: 320, gap: 180 },
          hard:   { base: 430, dec: 22, min: 210, gap: 110 }
        };
        var SHARE_URL = 'https://dentalwisdom.org/toothmemorygame';
        var JOKES = [
          "What time is it when you go to the dentist? Tooth-hurty!",
          "What did the dentist say to the computer? This won't hurt a byte.",
          "Why did the tooth go to school? To get a little brighter.",
          "What do you call a bear with no teeth? A gummy bear.",
          "What's a dentist's favorite time of day? Tooth-thirty.",
          "Why did the dentist make a good baseball coach? She knows the drill.",
          "What did the dentist give the marching band? A tuba toothpaste.",
          "What does a dentist call an astronaut's cavity? A black hole.",
          "Why was the dentist unshakable? Nothing could get under his enamel.",
          "What did the judge ask the dentist? Do you swear to pull the tooth, the whole tooth, and nothing but the tooth?",
          "Why did the king visit the dentist? To get a new crown.",
          "What do dentists call their X-rays? Tooth pics.",
          "How does a dentist fix a tooth on a boat? With a root canoe.",
          "What's a dentist's favorite animal? The molar bear.",
          "Why did the smartphone go to the dentist? It had Bluetooth.",
          "What did the dentist say to the golfer? Nice hole in one.",
          "What does a dentist do on a roller coaster? He braces himself.",
          "Why do dentists love potatoes? They're so filling.",
          "What did one tooth say to the other? Floss you very much.",
          "Why was the tooth feeling low? It was down in the mouth.",
          "What kind of award does a dentist get? A little plaque.",
          "What did the tooth fairy use to cross the river? A tooth-ferry.",
          "Why did the dentist plant a garden? To grow her wisdom teeth.",
          "What did the dentist say to the tooth blasting off? May the floss be with you.",
          "What's a tooth's favorite subject? Fill-osophy.",
          "Why don't teeth gossip? They can't keep anything between them without floss.",
          "What did the dentist say during the earthquake? Now I really know the drill.",
          "What do you call a dentist who doesn't like tea? Denis.",
          "Why was the dentist so calm? He had it down to a science of smiles.",
          "What do you call two dentists working together? Tooth and nail.",
          "Why did the cookie go to the dentist? It was feeling crummy.",
          "What did the dentist say to the sandwich? You look a little too filling.",
          "Why was the dentist a great detective? He always got to the root of it.",
          "When is the best time to brush? Between meals and appointments.",
          "Why did the vampire go to the dentist? To improve his bite.",
          "What do you call a tooth in a glass of water? A one-molar solution.",
          "What did the tooth say before surgery? I'm nervous, fill me in.",
          "Why did the tooth join the band? It had a great filling for rhythm.",
          "What did the dentist tell the impatient patient? Hold on, we're getting to the root.",
          "What's a dentist's least favorite candy? Anything with a lot of pull.",
          "Why did the toothbrush win an award? It always bristled with confidence.",
          "What did the mother tooth say to the baby tooth? You've got a lot of growing to do.",
          "Why did the tooth cross the road? To get to the other bicuspid.",
          "What do you call a happy dentist? A flossy fellow.",
          "Why are dentists great musicians? Perfect pitch and plenty of fillings.",
          "What did the floss say to the tooth? I've got your back.",
          "Why did the tooth go to the party? To have a filling good time.",
          "What did the dentist order at dinner? Something with a little bite.",
          "What did the tooth say to the dentist on the way out? I'll fill you in later.",
          "What kind of dinosaur has the best teeth? The Floss-iraptor.",
          "Why do teeth make bad comedians? Their jokes are too cheesy.",
          "What did the dentist say to the boxer? You really need to guard that smile.",
          "What's a dentist's favorite flower? A tulip, because it's two-lips.",
          "Why did the dentist become a gardener? He loved working with plaques and roots.",
          "What's a dentist's best advice? The tooth, and nothing but the tooth.",
          "Why was the little tooth so wise? It had been through the grind.",
          "What did the dentist say to the moon? You have a lovely crescent smile.",
          "What do you call an honest dentist? One who tells the whole tooth.",
          "What did the enamel say to the toothpaste? You always brighten my day.",
          "What's a dentist's favorite music? Anything with a good filling.",
          "Why did the tooth blush? It saw the dentist's smile.",
          "What do you call a dentist in the army? A drill sergeant.",
          "Why did the tooth feel confident? It brushed off the competition.",
          "What did the dentist tell the astronaut with a toothache? Houston, we have a cavity.",
          "What kind of teeth cost the most? Buck teeth.",
          "Why did the tooth go to therapy? Too many hang-ups about being pulled.",
          "What did the wisdom tooth say? I'm only here for the deep thoughts.",
          "Why did the dentist smile all day? Business was filling up.",
          "What's the difference between a dentist and a Yankee fan? One roots for the Yankees and the other yanks for the roots.",
          "What did the tooth say to the toothbrush? You really scrub up well.",
          "Why did the dentist bring string to work? To floss the day away.",
          "What's a shark's idea of a good time? A whole lot of teeth cleaning.",
          "Why did the tooth go to the gym? To work on its bite strength.",
          "What did the dentist name his dog? Fang.",
          "Why did the dentist plant flowers by the chair? So patients wouldn't feel down in the mouth.",
          "What do you call a talkative tooth? A little long in the tooth.",
          "Why did the toothpaste refuse to argue? It didn't want any friction.",
          "What did the dentist say to the tooth fairy? Thanks for the referrals.",
          "What do you call a group of singing teeth? A molar chorus.",
          "Why was the dentist so zen? He found peace at the root of things.",
          "What's a dentist's favorite game? Cavity search and rescue.",
          "Why did the dentist go to the comedy club? To hear jokes with a little bite.",
          "What did the dentist tell the nervous patient? Open wide and think happy thoughts.",
          "Why do dentists make good friends? They fill the gaps.",
          "What kind of car does a dentist drive? One with a great grille.",
          "Why did the tooth get promoted? It always rose to the occlusion.",
          "What did one molar say to another? I think we make a great pair.",
          "Why did the dentist love math? Because of all the square roots.",
          "What do you call a dentist's boat? The S.S. Floss.",
          "Why did the tooth stay positive? It refused to let anything decay its mood.",
          "What did the dentist say to the tardy tooth? You're running behind the gums.",
          "Why did the toothbrush go to school? To brush up on its skills.",
          "What's a dentist's favorite snack? Anything but taffy.",
          "What did the dentist say to the mirror? Looking sharp, incisor-ly.",
          "Why did the dentist join the choir? For the crowning high notes.",
          "What did the tooth say to the sweet tooth? You're going to get us both in trouble.",
          "Why was the dentist a great teacher? Every lesson had a little extraction of wisdom.",
          "Why do dentists like the forest? So many roots to explore.",
          "What's a dentist's favorite holiday? The Tooth of July.",
          "What did the dentist say at the finish line? That was a real grind, but we made it.",
          "Why did the dentist always win at poker? A great poker face and a winning smile.",
          "What did the toothpaste say to the toothbrush? I've got a crush on you.",
          "Why did the tooth take a nap? It was feeling a little worn down.",
          "What's the best day to see the dentist? Toothsday.",
          "Why did the dentist frame the X-ray? It was a picture-perfect smile.",
          "What did the tooth say after its cleaning? I feel so refreshed and polished.",
          "What do you call a tooth that gives advice? A wisdom tooth.",
          "Why did the dentist keep a calendar? To keep track of tooth-morrow's appointments.",
          "What did the caramel say to the dentist? You'll be seeing more of me soon.",
          "Why are teeth like good friends? They stick together through thick and thin.",
          "What did the dentist say to the marathon runner? Keep your chin up and your smile wide.",
          "Why did the tooth wear sunglasses? Its future was looking bright."
        ];
        var jokeBag = [];
        var lastJoke = -1;
        var newBest = false;

        var teeth = [];
        var sequence = [];
        var inputIndex = 0;
        var best = 0;
        var mode = 'idle';        // 'idle' | 'watch' | 'input'
        var difficulty = 'normal';
        var soundOn = true;
        var numbersOn = false;
        var audioCtx = null;
        var run = 0;              // generation token; bumps on every start/reset to cancel stale timers

        function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
        function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

        var savedBest = parseInt(load('tmBest'), 10);
        if (!isNaN(savedBest) && savedBest > 0) { best = savedBest; bestEl.textContent = best; }
        var savedSound = load('tmSound');
        if (savedSound === 'off') setSound(false);
        var savedDiff = load('tmDiff');
        if (savedDiff && DIFF[savedDiff]) selectMode(savedDiff);
        var savedNumbers = load('tmNumbers');
        if (savedNumbers === 'on') setNumbers(true);

        for (var i = 0; i < TEETH; i++) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'tm__tooth';
          btn.setAttribute('data-index', i);
          btn.setAttribute('aria-label', 'Tooth ' + (i + 1));
          btn.innerHTML = '<span class="tm__num" aria-hidden="true">' + (i + 1) + '</span><span class="tm__face" aria-hidden="true">🦷</span>';
          btn.addEventListener('click', function (e) {
            onTooth(parseInt(e.currentTarget.getAttribute('data-index'), 10));
          });
          board.appendChild(btn);
          teeth.push(btn);
        }

        function setSound(on) {
          soundOn = on;
          soundBtn.textContent = on ? '🔊' : '🔇';
          soundBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
          soundBtn.setAttribute('aria-label', on ? 'Sound on' : 'Sound off');
          soundBtn.classList.toggle('is-off', !on);
        }
        soundBtn.addEventListener('click', function () {
          setSound(!soundOn);
          store('tmSound', soundOn ? 'on' : 'off');
          if (soundOn && !audioCtx) initAudio();
          if (soundOn && audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        });

        function setNumbers(on) {
          numbersOn = on;
          board.classList.toggle('is-numbers', on);
          numbersBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
          numbersBtn.classList.toggle('is-off', !on);
        }
        numbersBtn.addEventListener('click', function () {
          setNumbers(!numbersOn);
          store('tmNumbers', numbersOn ? 'on' : 'off');
        });

        function initAudio() {
          try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
          catch (e) { audioCtx = null; }
        }
        function tone(freq, dur) {
          if (!soundOn || !audioCtx) return;
          try {
            var osc = audioCtx.createOscillator();
            var gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur / 1000);
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.start(); osc.stop(audioCtx.currentTime + dur / 1000);
          } catch (e) {}
        }

        function selectMode(m) {
          if (!DIFF[m]) return;
          difficulty = m;
          var buttons = modesWrap.querySelectorAll('.tm__mode');
          for (var k = 0; k < buttons.length; k++) {
            var sel = buttons[k].getAttribute('data-mode') === m;
            buttons[k].classList.toggle('is-selected', sel);
            buttons[k].setAttribute('aria-pressed', sel ? 'true' : 'false');
          }
        }
        modesWrap.addEventListener('click', function (e) {
          var b = e.target.closest('.tm__mode');
          if (!b) return;
          selectMode(b.getAttribute('data-mode'));
          store('tmDiff', difficulty);
        });

        function flash(i, dur) {
          var t = teeth[i];
          t.classList.add('is-lit');
          tone(TONES[i], dur);
          setTimeout(function () { t.classList.remove('is-lit'); }, dur);
        }

        function celebrate() {
          for (var k = 0; k < TEETH; k++) {
            (function (k) { setTimeout(function () { flash(k, 150); }, k * 65); })(k);
          }
        }

        function bestChime() {
          var notes = [523.25, 659.25, 783.99, 1046.50];
          notes.forEach(function (f, n) { setTimeout(function () { tone(f, 220); }, n * 120); });
        }

        function nextJoke() {
          if (jokeBag.length === 0) {
            for (var j = 0; j < JOKES.length; j++) jokeBag.push(j);
            for (var a = jokeBag.length - 1; a > 0; a--) {
              var b = Math.floor(Math.random() * (a + 1));
              var t = jokeBag[a]; jokeBag[a] = jokeBag[b]; jokeBag[b] = t;
            }
            if (jokeBag.length > 1 && jokeBag[jokeBag.length - 1] === lastJoke) {
              var s = jokeBag[0]; jokeBag[0] = jokeBag[jokeBag.length - 1]; jokeBag[jokeBag.length - 1] = s;
            }
          }
          lastJoke = jokeBag.pop();
          return JOKES[lastJoke];
        }
        function showJoke() { jokeEl.textContent = '😄 ' + nextJoke(); jokeEl.classList.add('is-shown'); }
        function hideJoke() { jokeEl.textContent = ''; jokeEl.classList.remove('is-shown'); }

        function playSequence() {
          var myRun = run;
          mode = 'watch';
          board.classList.add('is-watching');
          statusEl.textContent = 'Watch closely…';
          var d = DIFF[difficulty];
          var litDur = Math.max(d.base - sequence.length * d.dec, d.min);
          var gap = litDur + d.gap;
          sequence.forEach(function (idx, n) {
            setTimeout(function () { if (run === myRun) flash(idx, litDur); }, n * gap + 500);
          });
          setTimeout(function () {
            if (run !== myRun) return;
            mode = 'input';
            inputIndex = 0;
            board.classList.remove('is-watching');
            statusEl.textContent = 'Your turn — 1 of ' + sequence.length;
          }, sequence.length * gap + 500);
        }

        function nextRound() {
          sequence.push(Math.floor(Math.random() * TEETH));
          roundEl.textContent = sequence.length;
          playSequence();
        }

        function onTooth(i) {
          if (mode !== 'input') return;
          flash(i, 300);
          if (i === sequence[inputIndex]) {
            inputIndex++;
            if (inputIndex === sequence.length) {
              if (sequence.length > best) {
                best = sequence.length; bestEl.textContent = best; store('tmBest', best);
                newBest = true;
              }
              mode = 'watch';
              statusEl.textContent = 'Nice! Next round…';
              showJoke();
              if (difficulty === 'hard') celebrate();
              var myRun = run;
              setTimeout(function () { if (run === myRun) nextRound(); }, 1200);
            } else {
              statusEl.textContent = 'Your turn — ' + (inputIndex + 1) + ' of ' + sequence.length;
            }
          } else {
            gameOver();
          }
        }

        function shareText(roundReached) {
          return 'I reached round ' + roundReached + ' on Dental Wisdom’s “Tooth Memory” game! 🦷 Think you can beat me?';
        }

        function setupShare(roundReached) {
          var text = shareText(roundReached);
          shareFallback.classList.add('is-hidden');
          copied.classList.add('is-hidden');
          shareEmail.setAttribute('href',
            'mailto:?subject=' + encodeURIComponent('Beat my Tooth Memory score!') +
            '&body=' + encodeURIComponent(text + '\n\nPlay here: ' + SHARE_URL));
          shareBtn.onclick = function () {
            if (navigator.share) {
              navigator.share({ title: 'Tooth Memory', text: text, url: SHARE_URL }).catch(function () {});
            } else {
              shareFallback.classList.toggle('is-hidden');
            }
          };
          shareCopy.onclick = function () {
            var full = text + ' ' + SHARE_URL;
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(full).then(showCopied, showCopied);
            } else {
              showCopied();
            }
          };
        }
        function showCopied() {
          copied.classList.remove('is-hidden');
          setTimeout(function () { copied.classList.add('is-hidden'); }, 1800);
        }

        function gameOver() {
          run++;                 // cancel any pending timers
          mode = 'idle';
          board.classList.add('is-wrong');
          statusEl.textContent = 'Oops — wrong tooth!';
          var reached = sequence.length;
          setTimeout(function () {
            board.classList.remove('is-wrong');
            teeth.forEach(function (t) { t.classList.remove('is-lit'); });
            if (newBest) {
              pEmoji.textContent = '🏆';
              pTitle.textContent = 'New personal best!';
              pText.textContent = 'You reached round ' + reached + ' — your best yet! Can anyone beat it?';
              bestChime();
            } else {
              pEmoji.textContent = '🪥';
              pTitle.textContent = 'Good memory!';
              pText.textContent = 'You made it to round ' + reached + '. Think you can go further?';
            }
            setupShare(reached);
            shareWrap.classList.remove('is-hidden');
            startBtn.textContent = 'Play Again';
            overlay.classList.remove('is-hidden');
          }, 700);
        }

        function showReadyScreen() {
          run++;                 // cancel any in-progress sequence
          mode = 'idle';
          sequence = [];
          inputIndex = 0;
          roundEl.textContent = '0';
          teeth.forEach(function (t) { t.classList.remove('is-lit'); });
          board.classList.remove('is-wrong', 'is-watching');
          pEmoji.textContent = '🦷';
          pTitle.textContent = 'Ready to test your memory?';
          pText.textContent = 'Watch the sequence, then repeat it. One wrong tooth ends the game!';
          shareWrap.classList.add('is-hidden');
          startBtn.textContent = 'Start Game';
          statusEl.textContent = 'Press start to play';
          hideJoke();
          overlay.classList.remove('is-hidden');
        }

        function startGame() {
          run++;
          newBest = false;
          if (soundOn && !audioCtx) initAudio();
          if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
          sequence = [];
          inputIndex = 0;
          roundEl.textContent = '0';
          overlay.classList.add('is-hidden');
          shareWrap.classList.add('is-hidden');
          statusEl.textContent = 'Get ready…';
          hideJoke();
          teeth.forEach(function (t) { t.classList.remove('is-lit'); });
          var myRun = run;
          setTimeout(function () { if (run === myRun) nextRound(); }, 600);
        }

        startBtn.addEventListener('click', startGame);
        resetBtn.addEventListener('click', showReadyScreen);

        document.addEventListener('keydown', function (e) {
          if (mode !== 'input') return;
          var n = parseInt(e.key, 10);
          if (n >= 1 && n <= TEETH && teeth[n - 1]) onTooth(n - 1);
        });
      })();
    
