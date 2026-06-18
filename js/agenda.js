/* =========================================================
   Dental Wisdom Conference — Agenda
   Reads from window.AGENDA_DATA (js/agenda-data.js).

   Default view: all days stacked, fully scrollable.
   View toggle: "Full Schedule" | "CE Only" pill above filter bar.
   Filter bar: "All Days" + one button per day.
   Clicking a day shows only that day; prev/next arrows
   let you step through days in single-day mode.

   Fields per agenda item: day, time, title, speaker,
   speakerUrl, location, ce (boolean — CE credit lecture),
   showInCEView (boolean — include in CE-only view even if not CE).
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var filterEl  = document.getElementById('agendaTabs');    // filter bar
  var panelsEl  = document.getElementById('agendaPanels');  // day sections

  if (!filterEl || !panelsEl) return;

  var items = window.AGENDA_DATA || [];

  if (!items.length) {
    panelsEl.innerHTML = '<p class="placeholder" role="status">The agenda is being finalized — check back soon!</p>';
    return;
  }

  // Group items by day, preserving insertion order.
  var dayOrder = [];
  var groups   = {};
  items.forEach(function (item) {
    var day = (item.day || '').trim() || 'Schedule';
    if (!groups[day]) { groups[day] = []; dayOrder.push(day); }
    groups[day].push(item);
  });

  // ── Build day sections ──────────────────────────────────
  panelsEl.innerHTML = dayOrder.map(function (day) {
    var itemsHtml = groups[day].map(renderAgendaItem).join('');
    return '<div class="agenda-day-section" data-day="' + escapeHtml(day) + '">' +
      '<h2 class="agenda-day-heading">' + escapeHtml(day) + '</h2>' +
      '<div class="agenda-list">' + itemsHtml + '</div>' +
      '</div>';
  }).join('');

  var sections = Array.prototype.slice.call(panelsEl.querySelectorAll('.agenda-day-section'));

  // ── Build CE view toggle ────────────────────────────────
  var toggleEl = document.createElement('div');
  toggleEl.className = 'agenda-view-toggle';
  toggleEl.setAttribute('aria-label', 'Schedule view');
  toggleEl.innerHTML =
    '<button type="button" class="agenda-view-toggle__btn is-active" data-view="all">Full Schedule</button>' +
    '<button type="button" class="agenda-view-toggle__btn" data-view="ce">CE Only</button>';
  filterEl.parentNode.insertBefore(toggleEl, filterEl);

  var viewBtns = Array.prototype.slice.call(toggleEl.querySelectorAll('.agenda-view-toggle__btn'));
  var ceMode = false;

  // ── Build filter bar ────────────────────────────────────
  var allBtn = '<button type="button" class="agenda-tabs__btn is-active" data-filter="all">All Days</button>';
  var dayBtns = dayOrder.map(function (day) {
    return '<button type="button" class="agenda-tabs__btn" data-filter="' + escapeHtml(day) + '">' + escapeHtml(day) + '</button>';
  }).join('');
  filterEl.innerHTML = allBtn + dayBtns;

  var filterBtns = Array.prototype.slice.call(filterEl.querySelectorAll('.agenda-tabs__btn'));

  // ── Build prev/next nav (single-day mode only) ──────────
  var navEl = document.createElement('div');
  navEl.className = 'agenda-day-nav';
  navEl.setAttribute('aria-label', 'Navigate between days');
  navEl.setAttribute('hidden', '');
  navEl.innerHTML =
    '<button type="button" class="agenda-day-nav__btn agenda-day-nav__prev" id="agendaPrev" aria-label="Previous day">' +
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="13 16 7 10 13 4"/></svg>' +
      '<span>Previous day</span>' +
    '</button>' +
    '<span class="agenda-day-nav__label" id="agendaDayLabel" aria-live="polite"></span>' +
    '<button type="button" class="agenda-day-nav__btn agenda-day-nav__next" id="agendaNext" aria-label="Next day">' +
      '<span>Next day</span>' +
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 4 13 10 7 16"/></svg>' +
    '</button>';
  panelsEl.parentNode.insertBefore(navEl, panelsEl.nextSibling);

  var prevBtn  = document.getElementById('agendaPrev');
  var nextBtn  = document.getElementById('agendaNext');
  var dayLabel = document.getElementById('agendaDayLabel');

  var currentFilter = 'all'; // 'all' or a day name

  // ── Combined filter logic ───────────────────────────────
  function applyFilters() {
    // 1. Day: show/hide whole sections
    sections.forEach(function (s) {
      s.hidden = currentFilter !== 'all' && s.dataset.day !== currentFilter;
    });

    // 2. CE: show/hide individual items within visible sections
    var allItems = Array.prototype.slice.call(panelsEl.querySelectorAll('.agenda-item'));
    allItems.forEach(function (item) {
      if (ceMode) {
        item.hidden = !item.dataset.ceView;
      } else {
        item.hidden = false;
      }
    });

    // 3. In CE mode, also hide sections that end up with no visible items
    if (ceMode) {
      sections.forEach(function (s) {
        if (s.hidden) return; // already hidden by day filter
        var visible = s.querySelectorAll('.agenda-item:not([hidden])');
        s.hidden = visible.length === 0;
      });
    }

    // 4. Day filter button states
    filterBtns.forEach(function (btn) {
      var active = btn.dataset.filter === currentFilter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    // 5. Prev/next nav
    if (currentFilter === 'all') {
      navEl.setAttribute('hidden', '');
    } else {
      var idx = dayOrder.indexOf(currentFilter);
      prevBtn.disabled = idx <= 0;
      nextBtn.disabled = idx >= dayOrder.length - 1;
      dayLabel.textContent = currentFilter;
      navEl.removeAttribute('hidden');
    }
  }

  // Wire CE toggle
  viewBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      ceMode = btn.dataset.view === 'ce';
      viewBtns.forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      applyFilters();
    });
  });

  // Wire day filter buttons
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // Wire prev/next
  prevBtn.addEventListener('click', function () {
    var idx = dayOrder.indexOf(currentFilter);
    if (idx > 0) { currentFilter = dayOrder[idx - 1]; applyFilters(); scrollToFilter(); }
  });

  nextBtn.addEventListener('click', function () {
    var idx = dayOrder.indexOf(currentFilter);
    if (idx < dayOrder.length - 1) { currentFilter = dayOrder[idx + 1]; applyFilters(); scrollToFilter(); }
  });

  function scrollToFilter() {
    var offset = filterEl.getBoundingClientRect().top + window.pageYOffset - 16;
    var header = document.querySelector('.site-header');
    var subnav = document.querySelector('.sub-nav');
    if (header) offset -= header.offsetHeight;
    if (subnav) offset -= subnav.offsetHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }

  // Start in all-days / full-schedule mode
  applyFilters();

  // ── Render helpers ──────────────────────────────────────
  function renderAgendaItem(item) {
    var title      = (item.title      || '').trim();
    var time       = (item.time       || '').trim();
    var speaker    = (item.speaker    || '').trim();
    var speakerUrl = (item.speakerUrl || '').trim();
    var location   = (item.location   || '').trim();
    var isCE        = !!item.ce;
    var ceCredits   = item.ceCredits || null;
    var sponsor     = (item.sponsor    || '').trim();
    var sponsorUrl  = (item.sponsorUrl || '').trim();
    var isCEView    = isCE || !!item.showInCEView;

    // Speaker — hyperlink if speakerUrl provided
    var speakerHtml = '';
    if (speaker) {
      speakerHtml = speakerUrl
        ? '<a href="' + escapeHtml(speakerUrl) + '" class="agenda-item__speaker-link">' + escapeHtml(speaker) + '</a>'
        : escapeHtml(speaker);
    }

    var metaParts = [speakerHtml, location ? escapeHtml(location) : ''].filter(Boolean);

    var classes = 'agenda-item' + (isCE ? ' agenda-item--ce' : '');
    var ceViewAttr = isCEView ? ' data-ce-view="1"' : '';
    var html = '<div class="' + classes + '"' + ceViewAttr + '>';
    if (time) {
      html += '<div class="agenda-item__time">' + escapeHtml(time) +
        (isCE ? '<span class="agenda-item__ce-badge">' + (ceCredits ? ceCredits + ' CE Credit' + (ceCredits !== 1 ? 's' : '') : 'CE Credit') + '</span>' : '') +
        '</div>';
    }
    html += '<div class="agenda-item__details">';
    var titleHtml = escapeHtml(title || 'Untitled session');
    if (sponsor) {
      var sponsorInline = sponsorUrl
        ? '<a href="' + escapeHtml(sponsorUrl) + '" class="agenda-item__sponsor-link">' + escapeHtml(sponsor) + '</a>'
        : escapeHtml(sponsor);
      titleHtml += ' <span class="agenda-item__sponsor">Sponsored by ' + sponsorInline + '</span>';
    }
    html += '<h3>' + titleHtml + '</h3>';
    if (metaParts.length) {
      html += '<p class="agenda-item__meta">' + metaParts.join(' • ') + '</p>';
    }
    html += '</div></div>';
    return html;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
