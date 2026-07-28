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
  var SPONSORS_FILTER = 'Conference Sponsors'; // pseudo-category: only sponsor deals

  // Display order for category sections and filter buttons
  var CATEGORY_ORDER = [
    'Clinical & Chairside',
    'Grow Your Practice',
    'Run Your Practice',
    'Staffing & Recruiting',
    'Money & Insurance',
    'Israel, Kosher & Community',
    'Extras'
  ];

  function categoryRank(category) {
    var index = CATEGORY_ORDER.indexOf(category);
    return index === -1 ? CATEGORY_ORDER.length : index;
  }

  /* ── Sponsor tier lookup (single source of truth = js/sponsors-data.js) ──
     A deal shows a tier pill iff its company is a current conference sponsor.
     Match by normalized name (lowercased, parentheticals stripped). A few
     deal titles differ from the sponsor `name` — those are mapped in
     DEAL_SPONSOR_ALIAS. See CLAUDE.md "Deals page — categories, ordering &
     sponsor sync". */
  function normalizeName(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/\(.*?\)/g, '')   // drop "(Dental Refining)", "(Virtual...)" etc.
      .replace(/\s+/g, ' ')
      .trim();
  }
  var DEAL_SPONSOR_ALIAS = {
    'dental supplies': 'crazy dental',
    'credit card processing': 'dental processing solutions',
    'apex reimbursement specialists': 'apex'
  };
  var SPONSOR_TIER = {};
  (window.SPONSORS_DATA || []).forEach(function (s) {
    var key = normalizeName(s.name);
    if (key && s.tier) SPONSOR_TIER[key] = String(s.tier).trim().toLowerCase();
  });
  function tierForDeal(title) {
    var key = normalizeName(title);
    key = DEAL_SPONSOR_ALIAS[key] || key;
    return SPONSOR_TIER[key] || '';
  }
  var TIER_LABEL = { platinum: 'Platinum', gold: 'Gold', silver: 'Silver', bronze: 'Bronze' };

  // One-line subhead shown under each category heading.
  var CATEGORY_SUBHEAD = {
    'Clinical & Chairside': 'Everything you use to treat patients.',
    'Grow Your Practice': 'Attract new patients and lift revenue.',
    'Run Your Practice': 'Back-office, admin, and everything that keeps the doors open.',
    'Staffing & Recruiting': 'Find, hire, and support your team.',
    'Money & Insurance': 'Protect and grow your practice and personal finances.',
    'Israel, Kosher & Community': 'Judaica, kosher food, Israel, and the conference hotel.',
    'Extras': 'A few extra perks worth a look.'
  };

  /* ── Shareable filter links (deals#sponsors, deals#clinical-chairside …) ── */
  function slugify(str) {
    return String(str).toLowerCase()
      .replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function slugForFilter(cat) {
    if (cat === 'All') return 'all';
    if (cat === SPONSORS_FILTER) return 'sponsors';
    return slugify(cat);
  }
  function filterForSlug(slug) {
    if (!slug) return null;
    slug = slug.toLowerCase();
    if (slug === 'all') return 'All';
    if (slug === 'sponsors') return SPONSORS_FILTER;
    var found = null;
    CATEGORY_ORDER.forEach(function (c) { if (slugify(c) === slug) found = c; });
    return found;
  }

  /* ── Pull a promo code out of an offer line, if there is one ── */
  function extractCode(promo) {
    if (!promo) return '';
    var m = promo.match(/\bcode[:\s]+([A-Za-z0-9%!$-]{3,})/i); // "code WISDOM10", "Code dental10"
    if (m) return m[1].replace(/[.,;]$/, '');
    m = promo.match(/\(([A-Za-z0-9]{3,})\)/);                  // "(WISDOM10)"
    if (m && (/[0-9]/.test(m[1]) || m[1] === m[1].toUpperCase())) return m[1];
    return '';
  }
  function fallbackCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'absolute'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    } catch (e) { /* no-op */ }
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
        flyerUrl: (row.flyerUrl || '').trim(),
        keywords: (row.keywords || '').trim(),
        videoUrl: (row.videoUrl || '').trim(),
        tier: tierForDeal(row.title || '')
      };
    })
    .filter(function (deal) { return deal.title; });

  if (!allDeals.length) {
    gridEl.innerHTML = '<p class="placeholder" role="status">New deals are being added — check back soon!</p>';
    if (categoriesEl) categoriesEl.innerHTML = '';
    return;
  }

  buildCategoryButtons(allDeals);
  injectModal();

  // Apply a filter from the URL (e.g. deals#sponsors) on first load, else "All".
  var initialFilter = filterForSlug((location.hash || '').replace(/^#/, '')) || 'All';
  activateFilter(initialFilter, false);

  // Respond to the address bar changing (shared links, back/forward).
  window.addEventListener('hashchange', function () {
    var c = filterForSlug((location.hash || '').replace(/^#/, ''));
    if (c) activateFilter(c, false);
  });

  if (searchEl) {
    searchEl.addEventListener('input', function () { applyFilters(); });
  }

  /* ── Activate a filter (button state + URL + render) ── */
  function activateFilter(category, updateHash) {
    if (!category) return;
    activeCategory = category;
    if (categoriesEl) {
      categoriesEl.querySelectorAll('.deals-categories__btn').forEach(function (b) {
        b.setAttribute('aria-pressed',
          b.getAttribute('data-category') === category ? 'true' : 'false');
      });
    }
    if (updateHash && window.history && window.history.replaceState) {
      var slug = slugForFilter(category);
      var newUrl = slug === 'all'
        ? (location.pathname + location.search)
        : ('#' + slug);
      window.history.replaceState(null, '', newUrl);
    }
    applyFilters();
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
    // Add a "Conference Sponsors" filter (shows only sponsor deals) right after
    // "All", but only if at least one deal is a conference sponsor.
    var hasSponsors = deals.some(function (d) { return d.tier; });
    if (hasSponsors) categories.splice(1, 0, SPONSORS_FILTER);

    categoriesEl.innerHTML = categories.map(function (category) {
      var pressed = category === activeCategory ? 'true' : 'false';
      var extraClass = category === SPONSORS_FILTER
        ? ' deals-categories__btn--sponsors' : '';
      return '<button type="button" class="deals-categories__btn' + extraClass + '" data-category="' +
        escapeAttr(category) + '" aria-pressed="' + pressed + '">' +
        escapeHtml(category) + '</button>';
    }).join('');

    var buttons = categoriesEl.querySelectorAll('.deals-categories__btn');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        activateFilter(button.getAttribute('data-category'), true);
      });
    });
  }

  /* ── Filter + search ── */
  function applyFilters() {
    var query = searchEl ? searchEl.value.trim().toLowerCase() : '';

    var filtered = allDeals.filter(function (deal) {
      var matchesCategory =
        activeCategory === 'All' ||
        (activeCategory === SPONSORS_FILTER ? !!deal.tier : deal.category === activeCategory);
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
    var countEl = document.getElementById('dealsCount');

    if (!deals.length) {
      gridEl.innerHTML = '';
      gridEl.hidden = true;
      if (countEl) { countEl.textContent = ''; countEl.hidden = true; }
      var hasQuery = searchEl && searchEl.value.trim().length > 0;
      if (noResultsEl) noResultsEl.hidden = !hasQuery;
      return;
    }

    if (noResultsEl) noResultsEl.hidden = true;
    gridEl.hidden = false;

    if (countEl) {
      countEl.textContent = deals.length === allDeals.length
        ? 'Showing all ' + deals.length + ' deals'
        : 'Showing ' + deals.length + (deals.length === 1 ? ' deal' : ' deals');
      countEl.hidden = false;
    }

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
      var sub = CATEGORY_SUBHEAD[category];
      var headingHtml = category
        ? '<div class="deals-group__head"><h2 class="deals-group__heading">' +
          escapeHtml(category) + '</h2>' +
          (sub ? '<p class="deals-group__sub">' + escapeHtml(sub) + '</p>' : '') +
          '</div>'
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

    var tierPill = deal.tier && TIER_LABEL[deal.tier]
      ? '<span class="deal-tier deal-card__tier deal-tier--' + escapeAttr(deal.tier) +
        '" aria-label="' + escapeAttr(TIER_LABEL[deal.tier] + ' conference sponsor') + '">' +
        escapeHtml(TIER_LABEL[deal.tier]) + '</span>'
      : '';

    return '<button type="button" class="card deal-card" ' +
      'data-deal-index="' + index + '" aria-haspopup="dialog">' +
      tierPill +
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
        '<div class="deal-modal__meta" id="dealModalMeta" style="display:none"></div>' +
        '<p class="deal-modal__tagline" id="dealModalTagline"></p>' +
        '<p id="dealModalDescription"></p>' +
        '<p class="deal-card__promo" id="dealModalPromo"></p>' +
        '<button type="button" class="deal-modal__copy" id="dealModalCopy" hidden></button>' +
        '<div class="deal-modal__video" id="dealModalVideo" style="display:none;margin:1rem 0"></div>' +
        '<div class="link-row" id="dealModalLinkRow">' +
          '<a class="btn btn-primary" id="dealModalLink" href="#" target="_blank" rel="noopener">View Deal &rarr;</a>' +
        '</div>' +
        '<div class="deal-modal__photo" id="dealModalPhoto" style="display:none"></div>' +
      '</div>';
    document.body.appendChild(modal);

    modal.querySelectorAll('[data-deal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    // Copy-code button (shown only when the offer contains a code)
    var copyBtn = modal.querySelector('#dealModalCopy');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var code = copyBtn.getAttribute('data-code');
        if (!code) return;
        var original = 'Copy code: ' + code;
        var confirm = function () {
          copyBtn.textContent = 'Copied ✓';
          copyBtn.classList.add('is-copied');
          setTimeout(function () {
            copyBtn.textContent = original;
            copyBtn.classList.remove('is-copied');
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(confirm, function () {
            fallbackCopy(code); confirm();
          });
        } else {
          fallbackCopy(code); confirm();
        }
      });
    }
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

    var metaEl = modal.querySelector('#dealModalMeta');
    if (metaEl) {
      if (deal.tier && TIER_LABEL[deal.tier]) {
        metaEl.innerHTML = '<span class="deal-tier deal-tier--' + escapeAttr(deal.tier) +
          '">' + escapeHtml(TIER_LABEL[deal.tier]) + ' Sponsor</span>';
        metaEl.style.display = '';
      } else {
        metaEl.innerHTML = '';
        metaEl.style.display = 'none';
      }
    }

    taglineEl.textContent = deal.shortDescription || '';
    taglineEl.style.display = deal.shortDescription ? '' : 'none';

    descEl.textContent = deal.description || '';
    descEl.style.display = deal.description ? '' : 'none';

    promoEl.textContent = deal.promo || '';
    promoEl.style.display = deal.promo ? '' : 'none';

    var copyBtn = modal.querySelector('#dealModalCopy');
    if (copyBtn) {
      var code = extractCode(deal.promo);
      if (code) {
        copyBtn.textContent = 'Copy code: ' + code;
        copyBtn.setAttribute('data-code', code);
        copyBtn.classList.remove('is-copied');
        copyBtn.hidden = false;
      } else {
        copyBtn.removeAttribute('data-code');
        copyBtn.hidden = true;
      }
    }

    if (deal.link) {
      linkEl.href = deal.link;
      linkRow.style.display = '';
    } else {
      linkRow.style.display = 'none';
    }

    var videoEl = modal.querySelector('#dealModalVideo');
    if (videoEl) {
      if (deal.videoUrl) {
        var videoSrc = deal.videoUrl +
          (deal.videoUrl.indexOf('?') !== -1 ? '&' : '?') + 'rel=0';
        videoEl.innerHTML = '<iframe src="' + escapeAttr(videoSrc) + '" title="' +
          escapeAttr(deal.title) + ' video" frameborder="0"' +
          ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"' +
          ' allowfullscreen style="width:100%;aspect-ratio:16/9;border-radius:6px;display:block"></iframe>';
        videoEl.style.display = '';
      } else {
        videoEl.innerHTML = '';
        videoEl.style.display = 'none';
      }
    }

    var photoEl = modal.querySelector('#dealModalPhoto');
    if (photoEl) {
      if (deal.flyerUrl) {
        // onerror hides the block if the image file isn't there yet
        photoEl.innerHTML = '<img src="' + escapeAttr(deal.flyerUrl) + '"' +
          ' alt="' + escapeAttr(deal.shortDescription + ' promotional flyer') + '" loading="lazy"' +
          ' onerror="this.parentNode.style.display=\'none\'">';
        photoEl.style.display = '';
      } else {
        photoEl.innerHTML = '';
        photoEl.style.display = 'none';
      }
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
    // Clear the video iframe so playback/audio stops when the popup closes
    var videoEl = modal.querySelector('#dealModalVideo');
    if (videoEl) { videoEl.innerHTML = ''; videoEl.style.display = 'none'; }
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
