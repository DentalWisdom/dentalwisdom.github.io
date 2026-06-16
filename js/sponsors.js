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

  var sponsors = (window.SPONSORS_DATA || [])
    .map(function (row) {
      return {
        name: (row.name || '').trim(),
        logoUrl: (row.logoUrl || '').trim(),
        link: (row.link || '').trim(),
        blurb: (row.blurb || '').trim(),
        tier: (row.tier || '').trim().toLowerCase()
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
      '" aria-haspopup="dialog">' + inner +
      '<span class="sponsor-card__name">' + escapeHtml(s.name) + '</span>' +
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
  if (tiersEl) {
    var html = '';
    var used = {};

    TIER_ORDER.forEach(function (tier) {
      var inTier = sponsors
        .map(function (s, i) { return { s: s, i: i }; })
        .filter(function (o) { return o.s.tier === tier; });
      if (!inTier.length) return;
      inTier.forEach(function (o) { used[o.i] = true; });

      html += '<section class="sponsor-tier">' +
        '<p class="sponsor-tier__label">' + escapeHtml(TIER_LABELS[tier]) + '</p>' +
        '<div class="sponsor-tier__grid sponsor-tier__grid--' + tier + '">' +
        inTier.map(function (o) { return cardHtml(o.s, o.i); }).join('') +
        '</div></section>';
    });

    // Any sponsor with an unrecognized/blank tier goes in a final group
    var leftovers = sponsors
      .map(function (s, i) { return { s: s, i: i }; })
      .filter(function (o) { return !used[o.i]; });
    if (leftovers.length) {
      html += '<section class="sponsor-tier">' +
        '<p class="sponsor-tier__label">Our Sponsors</p>' +
        '<div class="sponsor-tier__grid sponsor-tier__grid--silver">' +
        leftovers.map(function (o) { return cardHtml(o.s, o.i); }).join('') +
        '</div></section>';
    }

    tiersEl.innerHTML = html;
  }

  /* ----- Non-clickable scrolling logo strip (agenda + homepage) ----- */
  if (stripEl) {
    stripEl.innerHTML = sponsors.map(function (s) {
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

  if (!tiersEl && !gridEl) return; // strip-only pages don't need the modal

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
        '<h2 class="modal__title" id="sponsorModalName"></h2>' +
        '<p id="sponsorModalBlurb"></p>' +
        '<div class="link-row" id="sponsorModalLinkRow">' +
          '<a class="btn btn-primary" id="sponsorModalLink" href="#" target="_blank" rel="noopener">Visit website &rarr;</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
  }

  var logoEl = modal.querySelector('#sponsorModalLogo');
  var logoWrap = modal.querySelector('.sponsor-modal__logo');
  var nameEl = modal.querySelector('#sponsorModalName');
  var blurbEl = modal.querySelector('#sponsorModalBlurb');
  var linkRow = modal.querySelector('#sponsorModalLinkRow');
  var linkEl = modal.querySelector('#sponsorModalLink');
  var lastFocused = null;

  function getFocusable() {
    return Array.prototype.slice.call(modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (el) { return el.offsetParent !== null; });
  }

  function openModal(sponsor) {
    lastFocused = document.activeElement;

    if (sponsor.logoUrl) {
      logoEl.src = sponsor.logoUrl;
      logoEl.alt = sponsor.name + ' logo';
      logoWrap.style.display = '';
    } else {
      logoWrap.style.display = 'none';
    }
    nameEl.textContent = sponsor.name;
    blurbEl.textContent = sponsor.blurb || '';
    blurbEl.style.display = sponsor.blurb ? '' : 'none';

    if (sponsor.link) {
      linkEl.href = sponsor.link;
      linkRow.style.display = '';
    } else {
      linkRow.style.display = 'none';
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
