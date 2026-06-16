/* =========================================================
   Dental Wisdom Deals — searchable, filterable partner offers
   Reads from window.DEALS_DATA (js/deals-data.js — see
   SITE_SPEC.md §6) and renders cards into the deals grid.

   Card behaviour mirrors the Sponsors page:
   - Each card shows logo, title, tagline, and a short preview
     of the description (truncated to ~100 chars with "…").
   - "View details →" CTA at the bottom of each card.
   - Clicking a card (anywhere) opens a detail modal with the
     full description, promo code, and "View Deal →" button.

   Search matches against: title, description, category, promo,
   AND the hidden `keywords` field for richer results.

   Fields per deal: title, category, shortDescription,
   description, link, promo, imageUrl, keywords.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var gridEl = document.getElementById('dealsGrid');
  var categoriesEl = document.getElementById('dealsCategories');
  var searchEl = document.getElementById('dealsSearch');
  var noResultsEl = document.getElementById('dealsNoResults');

  if (!gridEl) return;

  var activeCategory = 'All';
  var PREVIEW_LENGTH = 100; // chars shown on card before "…"

  // Display order for category sections and filter buttons
  var CATEGORY_ORDER = [
    'Key Dental Solutions',
    'Practice Services & Support',
    'Staffing & Recruiting',
    'Financial Management & Insurance',
    'Israel & Kosher',
    'Personal & Miscellaneous'
  ];

  function categoryRank(category) {
    var index = CATEGORY_ORDER.indexOf(category);
    return index === -1 ? CATEGORY_ORDER.length : index;
  }

  var allDeals = (window.DEALS_DATA || [])
    .map(function (row) {
      return {
        title: (row.title || '').trim(),
        category: (row.category || '').trim(),
        shortDescription: (row.shortDescription || '').trim(),
        description: (row.description || '').trim(),
        link: (row.link || '').trim(),
        promo: (row.promo || '').trim(),
        imageUrl: (row.imageUrl || '').trim(),
        keywords: (row.keywords || '').trim()
      };
    })
    .filter(function (deal) { return deal.title; });

  if (!allDeals.length) {
    gridEl.innerHTML = '<p class="placeholder" role="status">New deals are being added — check back soon!</p>';
    if (categoriesEl) categoriesEl.innerHTML = '';
    return;
  }

  buildCategoryButtons(allDeals);
  renderDeals(allDeals);
  injectModal();

  if (searchEl) {
    searchEl.addEventListener('input', function () { applyFilters(); });
  }

  /* ── Category filter buttons ── */
  function buildCategoryButtons(deals) {
    if (!categoriesEl) return;

    var categories = [];
    deals.forEach(function (deal) {
      if (deal.category && categories.indexOf(deal.category) === -1) {
        categories.push(deal.category);
      }
    });
    categories.sort(function (a, b) { return categoryRank(a) - categoryRank(b); });
    categories.unshift('All');

    categoriesEl.innerHTML = categories.map(function (category) {
      var pressed = category === activeCategory ? 'true' : 'false';
      return '<button type="button" class="deals-categories__btn" data-category="' +
        escapeAttr(category) + '" aria-pressed="' + pressed + '">' +
        escapeHtml(category) + '</button>';
    }).join('');

    var buttons = categoriesEl.querySelectorAll('.deals-categories__btn');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        activeCategory = button.getAttribute('data-category');
        buttons.forEach(function (b) {
          b.setAttribute('aria-pressed', b === button ? 'true' : 'false');
        });
        applyFilters();
      });
    });
  }

  /* ── Filter + search ── */
  function applyFilters() {
    var query = searchEl ? searchEl.value.trim().toLowerCase() : '';

    var filtered = allDeals.filter(function (deal) {
      var matchesCategory = activeCategory === 'All' || deal.category === activeCategory;
      var matchesQuery = !query ||
        deal.title.toLowerCase().indexOf(query) !== -1 ||
        deal.description.toLowerCase().indexOf(query) !== -1 ||
        deal.shortDescription.toLowerCase().indexOf(query) !== -1 ||
        deal.category.toLowerCase().indexOf(query) !== -1 ||
        deal.promo.toLowerCase().indexOf(query) !== -1 ||
        deal.link.toLowerCase().indexOf(query) !== -1 ||
        deal.keywords.toLowerCase().indexOf(query) !== -1;
      return matchesCategory && matchesQuery;
    });

    renderDeals(filtered);
  }

  /* ── Render grouped grid ── */
  function renderDeals(deals) {
    if (!deals.length) {
      gridEl.innerHTML = '';
      gridEl.hidden = true;
      var hasQuery = searchEl && searchEl.value.trim().length > 0;
      if (noResultsEl) noResultsEl.hidden = !hasQuery;
      return;
    }

    if (noResultsEl) noResultsEl.hidden = true;
    gridEl.hidden = false;

    var groupOrder = [];
    var groups = {};
    deals.forEach(function (deal) {
      var key = deal.category || '';
      if (!groups[key]) { groups[key] = []; groupOrder.push(key); }
      groups[key].push(deal);
    });

    groupOrder.sort(function (a, b) {
      if (!a) return 1;
      if (!b) return -1;
      return categoryRank(a) - categoryRank(b);
    });

    gridEl.innerHTML = groupOrder.map(function (category) {
      var cardsHtml = groups[category].map(function (deal) {
        return renderDealCard(deal, allDeals.indexOf(deal));
      }).join('');
      var headingHtml = category
        ? '<h2 class="deals-group__heading">' + escapeHtml(category) + '</h2>'
        : '';
      return '<div class="deals-group">' + headingHtml +
        '<div class="card-grid card-grid--3">' + cardsHtml + '</div></div>';
    }).join('');

    // Wire up card clicks
    gridEl.querySelectorAll('.deal-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var idx = parseInt(card.getAttribute('data-deal-index'), 10);
        if (allDeals[idx]) openModal(allDeals[idx]);
      });
    });
  }

  /* ── Compact card (preview only) ── */
  function renderDealCard(deal, index) {
    var preview = deal.description.length > PREVIEW_LENGTH
      ? deal.description.slice(0, PREVIEW_LENGTH).replace(/\s\S*$/, '') + '…'
      : deal.description;

    var imageInner = deal.imageUrl
      ? '<img src="' + escapeAttr(deal.imageUrl) + '" alt="' +
        escapeAttr(deal.title + ' logo') + '" loading="lazy" ' +
        'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
        '<div class="placeholder" style="display:none;">Image coming soon</div>'
      : '<div class="placeholder">Image coming soon</div>';

    return '<button type="button" class="card deal-card" ' +
      'data-deal-index="' + index + '" aria-haspopup="dialog">' +
      '<div class="deal-card__image-wrap">' + imageInner + '</div>' +
      '<h3>' + escapeHtml(deal.title) + '</h3>' +
      (deal.shortDescription
        ? '<p class="deal-card__tagline">' + escapeHtml(deal.shortDescription) + '</p>'
        : '') +
      (preview
        ? '<p class="deal-card__preview">' + escapeHtml(preview) + '</p>'
        : '') +
      '<span class="deal-card__cta">View details &rarr;</span>' +
      '</button>';
  }

  /* ── Detail modal (injected once) ── */
  function injectModal() {
    if (document.getElementById('dealModal')) return;

    var modal = document.createElement('div');
    modal.className = 'modal deal-modal';
    modal.id = 'dealModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'dealModalTitle');
    modal.innerHTML =
      '<div class="modal__backdrop" data-deal-close></div>' +
      '<div class="modal__dialog">' +
        '<button class="modal__close" id="dealModalClose" aria-label="Close" data-deal-close>&times;</button>' +
        '<div class="deal-modal__logo"><img id="dealModalLogo" src="" alt=""></div>' +
        '<h2 class="modal__title" id="dealModalTitle"></h2>' +
        '<p class="deal-modal__tagline" id="dealModalTagline"></p>' +
        '<p id="dealModalDescription"></p>' +
        '<p class="deal-card__promo" id="dealModalPromo"></p>' +
        '<div class="link-row" id="dealModalLinkRow">' +
          '<a class="btn btn-primary" id="dealModalLink" href="#" target="_blank" rel="noopener">View Deal &rarr;</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    modal.querySelectorAll('[data-deal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  var lastFocused = null;

  function openModal(deal) {
    var modal = document.getElementById('dealModal');
    if (!modal) return;
    lastFocused = document.activeElement;

    var logoWrap = modal.querySelector('.deal-modal__logo');
    var logoEl = modal.querySelector('#dealModalLogo');
    var titleEl = modal.querySelector('#dealModalTitle');
    var taglineEl = modal.querySelector('#dealModalTagline');
    var descEl = modal.querySelector('#dealModalDescription');
    var promoEl = modal.querySelector('#dealModalPromo');
    var linkRow = modal.querySelector('#dealModalLinkRow');
    var linkEl = modal.querySelector('#dealModalLink');

    if (deal.imageUrl) {
      logoEl.src = deal.imageUrl;
      logoEl.alt = deal.title + ' logo';
      logoWrap.style.display = '';
    } else {
      logoWrap.style.display = 'none';
    }

    titleEl.textContent = deal.title;

    taglineEl.textContent = deal.shortDescription || '';
    taglineEl.style.display = deal.shortDescription ? '' : 'none';

    descEl.textContent = deal.description || '';
    descEl.style.display = deal.description ? '' : 'none';

    promoEl.textContent = deal.promo || '';
    promoEl.style.display = deal.promo ? '' : 'none';

    if (deal.link) {
      linkEl.href = deal.link;
      linkRow.style.display = '';
    } else {
      linkRow.style.display = 'none';
    }

    modal.classList.add('is-open');
    document.body.classList.add('menu-open');

    var closeBtn = modal.querySelector('#dealModalClose');
    if (closeBtn) closeBtn.focus();

    // Focus trap
    modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    var modal = document.getElementById('dealModal');
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    modal.removeEventListener('keydown', trapFocus);
    if (lastFocused) lastFocused.focus();
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    var modal = document.getElementById('dealModal');
    var focusable = Array.prototype.slice.call(modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (el) { return el.offsetParent !== null; });
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  /* ── Helpers ── */
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
