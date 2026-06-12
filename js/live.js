/* =========================================================
   Dental Wisdom Live — Upcoming / Past session cards
   Fetches the Live CE Google Sheet (see SITE_SPEC.md §6) via
   loadSheet() (js/sheets.js) and renders cards into the
   Upcoming and Past Sessions sections. Falls back to a calm
   "couldn't load" / "coming soon" message on any failure,
   per CLAUDE.md.

   Expected columns (SITE_SPEC §6): Title, Date, Time,
   Description, RegisterLink, Status, ImageURL.
   An optional Presenter column is used if present.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var LIVE_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhtn0vhHV0cNsy8-DYzRvZRbmBD2vJr6FN8Zrk0AmpxWrtAs8fEk6SVyQt4-2vj9_YCkOffmRgMNkX/pub?gid=0&single=true&output=csv';

  var upcomingEl = document.getElementById('upcomingSessions');
  var pastEl = document.getElementById('pastSessions');

  if (!upcomingEl || !pastEl || typeof loadSheet !== 'function') return;

  var succeeded = false;

  loadSheet({
    url: LIVE_CSV_URL,
    container: upcomingEl,
    fallbackMessage: "We couldn't load session info right now — please refresh the page.",
    onSuccess: function (rows) {
      succeeded = true;

      var upcoming = rows.filter(function (row) {
        return statusIs(row, 'upcoming');
      });
      var past = rows.filter(function (row) {
        return statusIs(row, 'past');
      });

      renderSessionCards(upcoming, upcomingEl, {
        emptyMessage: 'New sessions are being scheduled — check back soon!',
        buttonLabel: 'Register'
      });

      renderSessionCards(past, pastEl, {
        emptyMessage: 'No past sessions yet — check back after our first Dental Wisdom Live session.',
        buttonLabel: 'Watch Recording'
      });
    }
  });

  // If the overall fetch fails, loadSheet() shows a fallback message in
  // upcomingEl but pastEl is never touched. Mirror the same calm message
  // into pastEl so both sections stay consistent rather than stuck on
  // "Loading…".
  setTimeout(function () {
    if (!succeeded) {
      pastEl.innerHTML = upcomingEl.innerHTML;
    }
  }, 4000);

  function statusIs(row, value) {
    var status = (row && row.Status) ? String(row.Status).trim().toLowerCase() : '';
    return status === value;
  }

  function renderSessionCards(rows, container, options) {
    if (!rows.length) {
      renderFallback(container, options.emptyMessage);
      return;
    }

    container.innerHTML = rows.map(function (row) {
      var title = (row.Title || 'Untitled Session').trim();
      var date = (row.Date || '').trim();
      var time = (row.Time || '').trim();
      var description = (row.Description || '').trim();
      var presenter = (row.Presenter || row['Presenter Name'] || '').trim();
      var registerLink = (row.RegisterLink || '').trim();
      var imageUrl = (row.ImageURL || '').trim();

      var meta = [date, time].filter(Boolean).join(' • ');

      var html = '<div class="card">';

      if (imageUrl) {
        html += '<img src="' + escapeAttr(imageUrl) + '" alt="" loading="lazy" ' +
          'style="width:100%;border-radius:var(--radius-sm);margin-bottom:var(--space-sm);">';
      }

      html += '<h3>' + escapeHtml(title) + '</h3>';

      if (meta) {
        html += '<p class="session-card__meta">' + escapeHtml(meta) + '</p>';
      }

      if (description) {
        html += '<p>' + escapeHtml(description) + '</p>';
      }

      if (presenter) {
        html += '<p class="session-card__presenter">' + escapeHtml(presenter) + '</p>';
      }

      if (registerLink) {
        html += '<a class="btn btn-primary" href="' + escapeAttr(registerLink) + '">' +
          escapeHtml(options.buttonLabel) + '</a>';
      } else if (options.buttonLabel === 'Watch Recording') {
        html += '<p class="lede" style="margin:0;">Recording available upon request for network members.</p>';
      }

      html += '</div>';
      return html;
    }).join('');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttr(str) {
    return escapeHtml(str);
  }
});
