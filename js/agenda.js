/* =========================================================
   Dental Wisdom Conference — Agenda tabs
   Reads from window.AGENDA_DATA (js/agenda-data.js — see
   SITE_SPEC.md §6) and builds a day-by-day tabbed schedule
   using the standard ARIA tabs pattern (role="tablist" /
   "tab" / "tabpanel").

   Fields per agenda item: day, time, title, speaker, location.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var tabsEl = document.getElementById('agendaTabs');
  var panelsEl = document.getElementById('agendaPanels');

  if (!tabsEl || !panelsEl) return;

  var items = window.AGENDA_DATA || [];

  if (!items.length) {
    panelsEl.innerHTML = '<p class="placeholder" role="status">The agenda is being finalized — check back soon!</p>';
    return;
  }

  // Group items by day, preserving the order days first appear.
  var dayOrder = [];
  var groups = {};
  items.forEach(function (item) {
    var day = (item.day || '').trim() || 'Schedule';
    if (!groups[day]) {
      groups[day] = [];
      dayOrder.push(day);
    }
    groups[day].push(item);
  });

  // Build tab buttons.
  var tabIds = dayOrder.map(function (day, index) {
    return 'agenda-tab-' + slugify(day) + '-' + index;
  });
  var panelIds = dayOrder.map(function (day, index) {
    return 'agenda-panel-' + slugify(day) + '-' + index;
  });

  tabsEl.innerHTML = dayOrder.map(function (day, index) {
    var selected = index === 0 ? 'true' : 'false';
    var tabindex = index === 0 ? '0' : '-1';
    return '<button type="button" class="agenda-tabs__btn" role="tab" id="' + tabIds[index] +
      '" aria-selected="' + selected + '" aria-controls="' + panelIds[index] +
      '" tabindex="' + tabindex + '">' + escapeHtml(day) + '</button>';
  }).join('');

  // Build tab panels.
  panelsEl.innerHTML = dayOrder.map(function (day, index) {
    var itemsHtml = groups[day].map(renderAgendaItem).join('');
    var hidden = index === 0 ? '' : ' hidden';
    return '<div class="agenda-list" role="tabpanel" id="' + panelIds[index] +
      '" aria-labelledby="' + tabIds[index] + '" tabindex="0"' + hidden + '>' +
      itemsHtml + '</div>';
  }).join('');

  var tabButtons = Array.prototype.slice.call(tabsEl.querySelectorAll('[role="tab"]'));
  var panels = Array.prototype.slice.call(panelsEl.querySelectorAll('[role="tabpanel"]'));

  // Build prev/next arrow nav below the panels
  var navEl = document.createElement('div');
  navEl.className = 'agenda-day-nav';
  navEl.setAttribute('aria-label', 'Navigate between days');
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

  var prevBtn = document.getElementById('agendaPrev');
  var nextBtn = document.getElementById('agendaNext');
  var dayLabel = document.getElementById('agendaDayLabel');
  var currentIndex = 0;

  tabButtons.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      selectTab(index);
    });

    tab.addEventListener('keydown', function (event) {
      var newIndex = null;

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        newIndex = (index + 1) % tabButtons.length;
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      } else if (event.key === 'Home') {
        newIndex = 0;
      } else if (event.key === 'End') {
        newIndex = tabButtons.length - 1;
      }

      if (newIndex !== null) {
        event.preventDefault();
        selectTab(newIndex);
        tabButtons[newIndex].focus();
      }
    });
  });

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) { selectTab(currentIndex - 1); }
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < tabButtons.length - 1) { selectTab(currentIndex + 1); }
  });

  function selectTab(index) {
    currentIndex = index;
    tabButtons.forEach(function (tab, i) {
      var isSelected = i === index;
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');
      panels[i].hidden = !isSelected;
    });
    dayLabel.textContent = dayOrder[index];
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === tabButtons.length - 1;
  }

  // Initialise arrow nav
  selectTab(0);

  function renderAgendaItem(item) {
    var title = (item.title || '').trim();
    var time = (item.time || '').trim();
    var speaker = (item.speaker || '').trim();
    var location = (item.location || '').trim();
    var meta = [speaker, location].filter(Boolean).join(' • ');

    var html = '<div class="agenda-item">';
    if (time) {
      html += '<div class="agenda-item__time">' + escapeHtml(time) + '</div>';
    }
    html += '<div class="agenda-item__details">';
    html += '<h3>' + escapeHtml(title || 'Untitled session') + '</h3>';
    if (meta) {
      html += '<p class="agenda-item__meta">' + escapeHtml(meta) + '</p>';
    }
    html += '</div></div>';
    return html;
  }

  function slugify(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
