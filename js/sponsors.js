/* =========================================================
   Dental Wisdom Conference — Sponsor cards + pop-up
   Reads from window.SPONSORS_DATA (js/sponsors-data.js) and builds
   clickable sponsor cards. Clicking a card opens a pop-up showing
   the logo, a short blurb, and a "Visit website" button.

   Two layouts, chosen by which container the page provides:
     #sponsorTiers  -> Sponsors page: cards grouped into four tiers
                       (Platinum, Gold, Silver, Bronze) with higher
                       tiers shown larger.
     #sponsorGrid   -> Agenda page: one simple grid of everyone,
                       no tiers.
   A single shared pop-up is injected into the page automatically.

   Pop-up behaviour matches the rest of the site: Esc closes,
   clicking the dark backdrop closes, focus is trapped while open,
   and the page behind is scroll-locked.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var tiersEl  = document.getElementById('sponsorTiers');
  var gridEl   = document.getElementById('sponsorGrid');
  var stripEl  = document.getElementById('logoScrollStrip');
  if (!tiersEl && !gridEl && !stripEl) return;

  var TIER_ORDER = ['platinum', 'gold', 'silver', 'bronze'];
  var TIER_LABELS = {
    platinum: 'Platinum Sponsors',
    gold: 'Gold Sponsors',
    silver: 'Silver Sponsors',
    bronze: 'Bronze Sponsors'
  };

  var ATTENDING_BADGE_TEXT = '&#10003; Attending';
  var PAST_BADGE_TEXT = 'Past Sponsor';
  var PENDING_BADGE_TEXT = 'Sponsorship Pending';

  var sponsors = (window.SPONSORS_DATA || [])
    .map(function (row) {
      return {
        name: (row.name || '').trim(),
        logoUrl: (row.logoUrl || '').trim(),
        link: (row.link || '').trim(),
        blurb: (row.blurb || '').trim(),
        blurbHtml: (row.blurbHtml || '').trim(),
        tier: (row.tier || '').trim().toLowerCase(),
        attending: !!row.attending,
        pastSponsor: !!row.pastSponsor && !row.attending,
        pending: !!row.pending,
        videoUrl: (row.videoUrl || '').trim()
      };
    })
    .filter(function (s) { return s.name; });

  if (!sponsors.length) {
    var emptyMsg = '<p class="placeholder" role="status">Our 2027 sponsors will be announced here soon!</p>';
    if (tiersEl) tiersEl.outerHTML = emptyMsg;
    if (gridEl) gridEl.outerHTML = emptyMsg;
    return;
  }

  /* ----- Card markup (index points back into `sponsors`) ----- */
  function cardHtml(s, i) {
    var inner = s.logoUrl
      ? '<span class="sponsor-card__logo"><img src="' + escapeAttr(s.logoUrl) +
        '" alt="' + escapeAttr(s.name + ' logo') + '" loading="lazy"></span>'
      : '<span class="sponsor-card__logo sponsor-card__logo--text">' + escapeHtml(s.name) + '</span>';

    return '<button type="button" class="sponsor-card" data-sponsor-index="' + i +
      '" aria-haspopup="dialog">' +
      inner +
      '<span class="sponsor-card__name">' + escapeHtml(s.name) + '</span>' +
      (s.attending ? '<span class="sponsor-attending-badge sponsor-card__attending" aria-label="In attendance at conference">' + ATTENDING_BADGE_TEXT + '</span>' : '') +
      (s.pastSponsor ? '<span class="sponsor-past-badge sponsor-card__attending" aria-label="Sponsored a past conference">' + PAST_BADGE_TEXT + '</span>' : '') +
      (s.pending ? '<span class="sponsor-pending-badge sponsor-card__attending" aria-label="Sponsorship pending">' + PENDING_BADGE_TEXT + '</span>' : '') +
      '<span class="sponsor-card__cta">View details &rarr;</span>' +
      '</button>';
  }

  /* ----- Flat grid (Agenda page) ----- */
  if (gridEl) {
    gridEl.innerHTML = sponsors.map(function (s, i) {
      return cardHtml(s, i);
    }).join('');
  }

  /* ----- Tiered layout (Sponsors page) ----- */

  // Card widths (px) and ideal max columns per tier
  var TIER_CARD_W  = { platinum: 230, gold: 195, silver: 165, bronze: 145 };
  var TIER_MAX_COL = { platinum: 3,   gold: 4,   silver: 5,   bronze: 6   };
  var GRID_GAP = 24; // matches --space-md

  // Find the best column count so no row ends up with exactly 1 card.
  // Tries from maxCols downward; accepts a remainder of 0 or ≥ 2.
  function bestCols(n, maxCols) {
    for (var c = maxCols; c >= 2; c--) {
      var rem = n % c;
      if (rem === 0 || rem >= 2) return c;
    }
    return Math.min(n, maxCols);
  }

  if (tiersEl) {
    var html = '';
    var used = {};

    TIER_ORDER.forEach(function (tier) {
      var inTier = sponsors
        .map(function (s, i) { return { s: s, i: i }; })
        .filter(function (o) { return o.s.tier === tier; });
      if (!inTier.length) return;
      inTier.forEach(function (o) { used[o.i] = true; });

      var cols   = bestCols(inTier.length, TIER_MAX_COL[tier] || 4);
      var cardW  = TIER_CARD_W[tier] || 165;
      var maxW   = cols * cardW + (cols - 1) * GRID_GAP;

      html += '<section class="sponsor-tier">' +
        '<p class="sponsor-tier__label">' + escapeHtml(TIER_LABELS[tier]) + '</p>' +
        '<div class="sponsor-tier__grid sponsor-tier__grid--' + tier + '" style="max-width:' + maxW + 'px">' +
        inTier.map(function (o) { return cardHtml(o.s, o.i); }).join('') +
        '</div></section>';
    });

    // Any sponsor with an unrecognized/blank tier goes in a final group
    var leftovers = sponsors
      .map(function (s, i) { return { s: s, i: i }; })
      .filter(function (o) { return !used[o.i]; });
    if (leftovers.length) {
      var lcols  = bestCols(leftovers.length, 4);
      var lmaxW  = lcols * 165 + (lcols - 1) * GRID_GAP;
      html += '<section class="sponsor-tier">' +
        '<p class="sponsor-tier__label">Our Sponsors</p>' +
        '<div class="sponsor-tier__grid sponsor-tier__grid--silver" style="max-width:' + lmaxW + 'px">' +
        leftovers.map(function (o) { return cardHtml(o.s, o.i); }).join('') +
        '</div></section>';
    }

    tiersEl.innerHTML = html;
  }

  /* ----- Non-clickable scrolling logo strip (agenda + homepage) ----- */
  /* Strip shows only confirmed 2027 sponsors — excludes pastSponsor and pending entries.
     This keeps the strip in automatic sync with the sponsors page: edit sponsors-data.js
     once and both the page and the strip update with no manual double-checking needed. */
  if (stripEl) {
    var stripSponsors = sponsors.filter(function (s) { return !s.pastSponsor && !s.pending; });
    stripEl.innerHTML = stripSponsors.map(function (s) {
      if (s.logoUrl) {
        return '<div class="logo-scroll-item">' +
          '<img src="' + escapeAttr(s.logoUrl) + '" alt="' + escapeAttr(s.name) + '" loading="lazy">' +
          '</div>';
      }
      return '<div class="logo-scroll-item logo-scroll-item--text">' + escapeHtml(s.name) + '</div>';
    }).join('');
    // Duplicate items for seamless loop (JS in main.js drives the animation)
    Array.from(stripEl.children).forEach(function (item) {
      var clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      stripEl.appendChild(clone);
    });
  }

  // Modal is always set up so other pages (e.g. Live) can call openSponsorByName()

  /* ----- Inject the shared pop-up (once) ----- */
  var modal = document.getElementById('sponsorModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal sponsor-modal';
    modal.id = 'sponsorModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'sponsorModalName');
    modal.innerHTML =
      '<div class="modal__backdrop" data-sponsor-close></div>' +
      '<div class="modal__dialog">' +
        '<button class="modal__close" id="sponsorModalClose" aria-label="Close" data-sponsor-close>&times;</button>' +
        '<div class="sponsor-modal__logo"><img id="sponsorModalLogo" src="" alt=""></div>' +
        '<div class="sponsor-modal__meta">' +
          '<span class="sponsor-modal__tier" id="sponsorModalTier"></span>' +
          '<span class="sponsor-attending-badge" id="sponsorModalAttending" style="display:none" aria-label="In attendance at conference">' + ATTENDING_BADGE_TEXT + '</span>' +
          '<span class="sponsor-past-badge" id="sponsorModalPast" style="display:none" aria-label="Sponsored a past conference">' + PAST_BADGE_TEXT + '</span>' +
          '<span class="sponsor-pending-badge" id="sponsorModalPending" style="display:none" aria-label="Sponsorship pending">' + PENDING_BADGE_TEXT + '</span>' +
        '</div>' +
        '<h2 class="modal__title" id="sponsorModalName"></h2>' +
        '<div id="sponsorModalBlurb"></div>' +
        '<div class="link-row" id="sponsorModalLinkRow">' +
          '<a class="btn btn-primary" id="sponsorModalLink" href="#" target="_blank" rel="noopener">Visit website &rarr;</a>' +
        '</div>' +
        '<div class="sponsor-modal__video" id="sponsorModalVideo" style="display:none"></div>' +
      '</div>';
    document.body.appendChild(modal);
  }

  var logoEl = modal.querySelector('#sponsorModalLogo');
  var logoWrap = modal.querySelector('.sponsor-modal__logo');
  var tierEl = modal.querySelector('#sponsorModalTier');
  var nameEl = modal.querySelector('#sponsorModalName');
  var blurbEl = modal.querySelector('#sponsorModalBlurb');
  var linkRow = modal.querySelector('#sponsorModalLinkRow');
  var linkEl = modal.querySelector('#sponsorModalLink');
  var attendingEl = modal.querySelector('#sponsorModalAttending');
  var pastEl = modal.querySelector('#sponsorModalPast');
  var pendingEl = modal.querySelector('#sponsorModalPending');
  var videoEl = modal.querySelector('#sponsorModalVideo');
  var lastFocused = null;

  function getFocusable() {
    return Array.prototype.slice.call(modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (el) { return el.offsetParent !== null; });
  }

  function openModal(sponsor) {
    lastFocused = document.activeElement;

    if (attendingEl) {
      attendingEl.style.display = sponsor.attending ? '' : 'none';
    }
    if (pastEl) {
      pastEl.style.display = sponsor.pastSponsor ? '' : 'none';
    }
    if (pendingEl) {
      pendingEl.style.display = sponsor.pending ? '' : 'none';
    }

    if (sponsor.logoUrl) {
      logoEl.src = sponsor.logoUrl;
      logoEl.alt = sponsor.name + ' logo';
      logoWrap.style.display = '';
    } else {
      logoWrap.style.display = 'none';
    }
    if (tierEl) {
      var tierLabels = { platinum: 'Platinum Sponsor', gold: 'Gold Sponsor', silver: 'Silver Sponsor', bronze: 'Bronze Sponsor' };
      tierEl.textContent = tierLabels[sponsor.tier] || '';
      tierEl.className = 'sponsor-modal__tier sponsor-modal__tier--' + (sponsor.tier || '');
      tierEl.style.display = sponsor.tier ? '' : 'none';
    }
    nameEl.textContent = sponsor.name;
    if (sponsor.blurbHtml) {
      blurbEl.innerHTML = sponsor.blurbHtml;
      blurbEl.style.display = '';
    } else {
      blurbEl.textContent = sponsor.blurb || '';
      blurbEl.style.display = sponsor.blurb ? '' : 'none';
    }

    if (sponsor.link) {
      linkEl.href = sponsor.link;
      linkRow.style.display = '';
    } else {
      linkRow.style.display = 'none';
    }

    if (videoEl) {
      if (sponsor.videoUrl) {
        var isWistia = sponsor.videoUrl.indexOf('wistia') !== -1;
        if (isWistia) {
          // Inject Wistia player script once
          if (!document.getElementById('wistia-player-js')) {
            var ws = document.createElement('script');
            ws.id = 'wistia-player-js';
            ws.src = 'https://fast.wistia.net/player.js';
            ws.async = true;
            document.head.appendChild(ws);
          }
          // Responsive 16:9 wrapper matching Wistia's recommended embed pattern
          videoEl.innerHTML =
            '<div style="padding:56.25% 0 0 0;position:relative;">' +
              '<div style="height:100%;left:0;position:absolute;top:0;width:100%;">' +
                '<iframe src="' + escapeAttr(sponsor.videoUrl) + '" title="' + escapeAttr(sponsor.name) + ' video"' +
                ' allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no"' +
                ' width="100%" height="100%" style="border-radius:6px"></iframe>' +
              '</div>' +
            '</div>';
        } else {
          // YouTube / other: append rel=0 to suppress related videos
          var videoSrc = sponsor.videoUrl +
            (sponsor.videoUrl.indexOf('?') !== -1 ? '&' : '?') + 'rel=0';
          videoEl.innerHTML = '<iframe src="' + escapeAttr(videoSrc) + '" title="' + escapeAttr(sponsor.name) + ' video"' +
            ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"' +
            ' allowfullscreen style="width:100%;aspect-ratio:16/9;border-radius:6px;display:block"></iframe>';
        }
        videoEl.style.display = '';
      } else {
        videoEl.innerHTML = '';
        videoEl.style.display = 'none';
      }
    }

    modal.classList.add('is-open');
    document.body.classList.add('menu-open'); // reuse site scroll-lock
    document.addEventListener('keydown', handleKeydown);
    var closeBtn = modal.querySelector('#sponsorModalClose');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    document.removeEventListener('keydown', handleKeydown);
    if (videoEl) { videoEl.innerHTML = ''; videoEl.style.display = 'none'; }
    if (lastFocused) lastFocused.focus();
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if (e.key === 'Tab') {
      var f = getFocusable();
      if (!f.length) return;
      var first = f[0];
      var last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  /* ----- Wire up every card + close controls ----- */
  document.querySelectorAll('.sponsor-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var idx = parseInt(card.getAttribute('data-sponsor-index'), 10);
      if (sponsors[idx]) openModal(sponsors[idx]);
    });
  });

  modal.querySelectorAll('[data-sponsor-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  // Global hook so other pages (e.g. Live) can open a sponsor modal by name
  window.openSponsorByName = function (name) {
    var match = sponsors.find(function (s) { return s.name === name; });
    if (match) openModal(match);
  };

  /* ----- Helpers ----- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  function escapeAttr(str) { return escapeHtml(str); }
});
