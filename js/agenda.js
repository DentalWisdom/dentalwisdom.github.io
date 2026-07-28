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
   showInCEView (boolean — include in CE-only view even if not CE),
   sponsor/sponsorUrl/sponsorLabel (or sponsors array for
   multiple sponsors on one card), and parts (array, for a
   multi-part session sharing one concurrent-block card).
   See js/agenda-data.js for full field docs.
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
    var itemsHtml = renderDayItems(groups[day]);
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
  // Three buttons on one row: the two mutually-exclusive view modes
  // (Full Schedule / CE Only) plus the independent "Include Davening Times"
  // toggle. The davening button is styled the same but behaves separately.
  toggleEl.innerHTML =
    '<button type="button" class="agenda-view-toggle__btn is-active" data-view="all">Full Schedule</button>' +
    '<button type="button" class="agenda-view-toggle__btn" data-view="ce">CE Only</button>' +
    '<button type="button" class="agenda-view-toggle__btn" data-daven-toggle aria-pressed="false">Include Davening Times</button>';
  filterEl.parentNode.insertBefore(toggleEl, filterEl);

  // Only the two view-mode buttons participate in the Full/CE toggle group.
  var viewBtns = Array.prototype.slice.call(toggleEl.querySelectorAll('[data-view]'));
  var ceMode = false;

  // ── "Include Davening Times" toggle (same row as the view toggle) ──
  // By default the schedule shows meals, classes and parties only.
  // This button reveals the davening/tefillah times (Daf Yomi, Shacharis,
  // Mincha, Maariv, Candle Lighting, etc.). Any CE-credit session always
  // stays visible and is never hidden by this toggle.
  var davenBtn = toggleEl.querySelector('[data-daven-toggle]');
  var daveningShown = false;

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

    // 2. CE / Davening: show/hide individual items within visible sections
    var allItems = Array.prototype.slice.call(panelsEl.querySelectorAll('.agenda-item'));
    allItems.forEach(function (item) {
      var isDaven = item.dataset.daven === '1';
      if (ceMode) {
        // CE Only: show CE-view items, plus davening times when the
        // "Include Davening Times" toggle is on.
        var isCEView = !!item.dataset.ceView;
        item.hidden = !(isCEView || (isDaven && daveningShown));
      } else {
        // Full schedule: davening items stay hidden unless the toggle is on.
        item.hidden = (isDaven && !daveningShown);
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
      // The "Include Davening Times" toggle works in both views now, so it
      // stays enabled in CE-only mode (adds davening times to the CE list).
      applyFilters();
    });
  });

  // Wire Davening Info toggle
  davenBtn.addEventListener('click', function () {
    daveningShown = !daveningShown;
    davenBtn.classList.toggle('is-active', daveningShown);
    davenBtn.setAttribute('aria-pressed', daveningShown ? 'true' : 'false');
    applyFilters();
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

  // Groups consecutive items sharing the same `concurrent` id into a block.
  function renderDayItems(items) {
    var html = '';
    var i = 0;
    while (i < items.length) {
      var item = items[i];
      if (item.concurrent) {
        var groupId = item.concurrent;
        var group = [];
        while (i < items.length && items[i].concurrent === groupId) {
          group.push(items[i]);
          i++;
        }
        html += renderConcurrentBlock(group);
      } else {
        html += renderAgendaItem(item);
        i++;
      }
    }
    return html;
  }

  function renderConcurrentBlock(items) {
    var first      = items[0];
    var time       = (first.time || '').trim();
    var isCE       = items.some(function (it) { return !!it.ce; });
    var ceCredits  = first.ceCredits || null;
    var isCEView   = isCE || items.some(function (it) { return !!it.showInCEView; });
    var ceViewAttr = isCEView ? ' data-ce-view="1"' : '';

    var blockClasses = 'agenda-concurrent-block' + (isCE ? ' agenda-concurrent-block--ce' : '');
    var html = '<div class="' + blockClasses + '"' + ceViewAttr + '>';

    html += '<div class="agenda-item__time-col">';
    if (time) {
      html += '<div class="agenda-item__time">' + escapeHtml(time) + '</div>';
    }
    if (isCE) {
      var credLabel = ceCredits ? ceCredits + ' CE Credit' + (ceCredits !== 1 ? 's' : '') : 'CE Credit';
      html += '<span class="agenda-item__ce-badge">' + credLabel + '</span>';
    }
    html += '</div>';

    html += '<div class="agenda-item__details">';
    html += '<p class="agenda-concurrent-block__label">Concurrent sessions</p>';
    html += '<div class="agenda-concurrent-block__list">';

    items.forEach(function (item) {
      var title        = (item.title        || '').trim();
      var speaker      = (item.speaker      || '').trim();
      var speakerUrl   = (item.speakerUrl   || '').trim();
      var location     = (item.location     || '').trim();
      var parts        = Array.isArray(item.parts) ? item.parts : null;

      html += '<div class="agenda-concurrent-card">';

      // Build the shared meta line the same way every other agenda card does:
      // Speaker · Location — all on one line. Sponsor gets its own line below.
      var metaParts = [];

      if (parts) {
        // Multi-part session sharing one room/time block — one title line per
        // lecture (prefixed "Part 1:", "Part 2:", etc.), with all speakers
        // rolled into the shared meta line below.
        parts.forEach(function (part, idx) {
          var partTitle = (part.title || '').trim();
          html += '<p class="agenda-concurrent-card__part-line">Part ' + (idx + 1) + ': ' + escapeHtml(partTitle || 'Session TBD') + '</p>';

          var partSpeaker    = (part.speaker    || '').trim();
          var partSpeakerUrl = (part.speakerUrl || '').trim();
          if (partSpeaker) {
            metaParts.push(partSpeakerUrl
              ? '<a href="' + escapeHtml(partSpeakerUrl) + '" class="agenda-item__speaker-link">' + escapeHtml(partSpeaker) + '</a>'
              : escapeHtml(partSpeaker));
          }
        });
      } else {
        html += '<h3>' + escapeHtml(title || 'Session TBD') + '</h3>';
        if (speaker) {
          metaParts.push(speakerUrl
            ? '<a href="' + escapeHtml(speakerUrl) + '" class="agenda-item__speaker-link">' + escapeHtml(speaker) + '</a>'
            : escapeHtml(speaker));
        }
      }

      if (location) {
        metaParts.push(escapeHtml(location));
      }

      if (metaParts.length) {
        html += '<p class="agenda-item__meta">' + metaParts.join(' &middot; ') + '</p>';
      }

      var sponsorMeta = sponsorMetaHtml(item);
      if (sponsorMeta) {
        html += sponsorMeta;
      }

      html += '</div>';
    });

    html += '</div></div></div>';
    return html;
  }

  // A "davening" item is a tefillah/prayer time hidden by default and
  // revealed by the "Davening Info" toggle. Any CE-credit session (e.g. the
  // Pre-Davening Shiur or the Shabbos Dental Halacha Shiur) is treated as a
  // class and always stays visible, so CE sessions are never marked here.
  function isDavenItem(item) {
    if (item.ce) return false;    // CE sessions always shown
    if (item.event) return false; // parties / receptions / welcomes always shown
    var t = (item.title || '').toLowerCase();
    var keywords = ['daf yomi', 'shacharis', 'davening', 'mincha', 'maariv',
                    'candle lighting', 'kabbalas shabbos', 'havdalah'];
    return keywords.some(function (k) { return t.indexOf(k) !== -1; });
  }

  function renderAgendaItem(item) {
    var title      = (item.title      || '').trim();
    var time       = (item.time || '').trim();
    var speaker    = (item.speaker    || '').trim();
    var speakerUrl = (item.speakerUrl || '').trim();
    var location   = (item.location   || '').trim();
    var isCE        = !!item.ce;
    var isEvent     = !!item.event;
    var ceCredits   = item.ceCredits || null;
    var isCEView    = isCE || !!item.showInCEView;

    // Speaker — hyperlink if speakerUrl provided
    var speakerHtml = '';
    if (speaker) {
      speakerHtml = speakerUrl
        ? '<a href="' + escapeHtml(speakerUrl) + '" class="agenda-item__speaker-link">' + escapeHtml(speaker) + '</a>'
        : escapeHtml(speaker);
    }

    var metaParts = [speakerHtml, location ? escapeHtml(location) : ''].filter(Boolean);

    var classes = 'agenda-item' + (isCE ? ' agenda-item--ce' : '') + (isEvent ? ' agenda-item--event' : '');
    var ceViewAttr = isCEView ? ' data-ce-view="1"' : '';
    var davenAttr = isDavenItem(item) ? ' data-daven="1"' : '';
    var html = '<div class="' + classes + '"' + ceViewAttr + davenAttr + '>';

    html += '<div class="agenda-item__time-col">';
    if (time) {
      html += '<div class="agenda-item__time">' + escapeHtml(time) + '</div>';
    }
    if (isCE) {
      html += '<span class="agenda-item__ce-badge">' + (ceCredits ? ceCredits + ' CE Credit' + (ceCredits !== 1 ? 's' : '') : 'CE Credit') + '</span>';
    }
    html += '</div>';

    html += '<div class="agenda-item__details">';
    html += '<h3>' + escapeHtml(title || 'Untitled session') + '</h3>';
    var desc = (item.desc || '').trim();
    var descStrong = (item.descStrong || '').trim();
    if (desc || descStrong) {
      html += '<p class="agenda-item__desc">';
      if (desc) { html += escapeHtml(desc); }
      if (descStrong) { html += (desc ? ' ' : '') + '<strong>' + escapeHtml(descStrong) + '</strong>'; }
      html += '</p>';
    }
    if (metaParts.length) {
      html += '<p class="agenda-item__meta">' + metaParts.join(' &middot; ') + '</p>';
    }
    var sponsorMeta = sponsorMetaHtml(item);
    if (sponsorMeta) {
      html += sponsorMeta;
    }
    html += '</div></div>';
    return html;
  }

  // Builds the "Sponsored by X" / "Compliments of X & Y" meta line for
  // an agenda item, as its own paragraph below the meta/CE line. Supports
  // a `sponsors` array (multiple sponsors, each its own hyperlink, joined
  // by a plain-text "&") or the legacy single sponsor/sponsorUrl fields.
  // Returns '' if there's no sponsor at all.
  function sponsorMetaHtml(item) {
    var sponsorLabel = (item.sponsorLabel || 'Sponsored by').trim();
    var sponsorsList = Array.isArray(item.sponsors) ? item.sponsors : null;

    // `sponsorLines`: multiple SEPARATE credit lines, each its own italic-gold
    // paragraph with its own wording + linked sponsor name. Use when one card
    // has two distinct sponsored things (e.g. the prize vs. the cigars).
    var sponsorLines = Array.isArray(item.sponsorLines) ? item.sponsorLines : null;
    if (sponsorLines && sponsorLines.length) {
      return sponsorLines.map(function (ln) {
        var label = (ln.label || 'Sponsored by').trim();
        var name  = (ln.name  || '').trim();
        var url   = (ln.url   || '').trim();
        if (!name) { return ''; }
        var link = url
          ? '<a href="' + escapeHtml(url) + '" class="agenda-item__sponsor-link">' + escapeHtml(name) + '</a>'
          : escapeHtml(name);
        return '<p class="agenda-item__sponsor-label">' + escapeHtml(label) + ' ' + link + '</p>';
      }).filter(Boolean).join('');
    }

    if (sponsorsList && sponsorsList.length) {
      var links = sponsorsList.map(function (s) {
        var name = (s.name || '').trim();
        var url  = (s.url  || '').trim();
        if (!name) { return ''; }
        return url
          ? '<a href="' + escapeHtml(url) + '" class="agenda-item__sponsor-link">' + escapeHtml(name) + '</a>'
          : escapeHtml(name);
      }).filter(Boolean);
      if (!links.length) { return ''; }
      return '<p class="agenda-item__sponsor-label">' + escapeHtml(sponsorLabel) + ' ' + links.join(' &amp; ') + '</p>';
    }

    var sponsor    = (item.sponsor    || '').trim();
    var sponsorUrl = (item.sponsorUrl || '').trim();
    if (!sponsor) { return ''; }
    var sponsorInline = sponsorUrl
      ? '<a href="' + escapeHtml(sponsorUrl) + '" class="agenda-item__sponsor-link">' + escapeHtml(sponsor) + '</a>'
      : escapeHtml(sponsor);
    return '<p class="agenda-item__sponsor-label">' + escapeHtml(sponsorLabel) + ' ' + sponsorInline + '</p>';
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
