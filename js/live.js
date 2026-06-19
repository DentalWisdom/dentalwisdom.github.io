/* =========================================================
   Dental Wisdom Live — Upcoming / Past session rows
   Reads from window.LIVE_DATA (js/live-data.js) and renders
   horizontal event rows into the Upcoming and Past sections.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var upcomingEl = document.getElementById('upcomingSessions');
  var pastEl     = document.getElementById('pastSessions');

  if (!upcomingEl || !pastEl) return;

  var sessions = window.LIVE_DATA || [];

  var upcoming = sessions.filter(function (s) { return s.status === 'upcoming'; });
  var past     = sessions.filter(function (s) { return s.status === 'past'; });

  render(upcoming, upcomingEl, { buttonLabel: 'Register', isPast: false });
  render(past,     pastEl,     { isPast: true });

  var SESSIONS_LIMIT = 3;

  function render(rows, container, opts) {
    if (!rows.length) {
      container.innerHTML = opts.isPast
        ? '<p class="placeholder">No past sessions yet — check back after our first Dental Wisdom Live session.</p>'
        : '<p class="placeholder">New sessions are being scheduled — check back soon!</p>';
      return;
    }

    var overflow = rows.length > SESSIONS_LIMIT;

    container.innerHTML = rows.map(function (s, i) {
      var hidden = overflow && i >= SESSIONS_LIMIT ? ' session-item--hidden' : '';
      // Parse sortDate for the date badge: "2026-06-18" → month abbr + day
      var parts = (s.sortDate || '').split('-');
      var monthAbbr = '';
      var dayNum    = '';
      if (parts.length === 3) {
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        monthAbbr = months[parseInt(parts[1], 10) - 1] || '';
        dayNum    = String(parseInt(parts[2], 10));
      }

      // Time: "8:00 PM – 9:30 PM ET" → split on em-dash for two lines
      var timeDisplay = (s.time || '').replace(' – ', '\n');

      var modClass = opts.isPast ? ' session-item--past' : '';

      var html = '<article class="session-item' + modClass + hidden + '">';

      // Date badge
      html += '<div class="session-item__date" aria-label="' + escAttr(s.date) + '">';
      if (monthAbbr) html += '<span class="session-item__month">' + escHtml(monthAbbr) + '</span>';
      if (dayNum)    html += '<span class="session-item__day">'   + escHtml(dayNum)    + '</span>';
      if (timeDisplay) {
        html += '<span class="session-item__time">'
          + timeDisplay.split('\n').map(function(t){ return escHtml(t.trim()); }).join('<br>')
          + '</span>';
      }
      html += '</div>'; // .session-item__date

      // Body
      html += '<div class="session-item__body">';
      html += '<h3 class="session-item__title">' + escHtml(s.title) + '</h3>';

      if (s.presenter) {
        html += '<p class="session-item__presenter">' + escHtml(s.presenter) + '</p>';
      }

      if (s.description) {
        // Use only the first paragraph for the clamped preview
        var firstPara = s.description.split(/\n\n+/)[0].trim();
        html += '<p class="session-item__desc">' + escHtml(firstPara) + '</p>';
      }

      // Footer: sponsor + CTA
      html += '<div class="session-item__footer">';

      if (s.sponsor) {
        html += '<span class="session-item__sponsor">Sponsored by ';
        if (s.sponsorLink) {
          html += '<a href="' + escAttr(s.sponsorLink) + '" target="_blank" rel="noopener">' + escHtml(s.sponsor) + '</a>';
        } else {
          html += escHtml(s.sponsor);
        }
        html += '</span>';
      } else {
        html += '<span></span>'; // spacer so button stays right-aligned
      }

      if (!opts.isPast && s.registerLink) {
        html += '<a class="btn btn-primary" href="' + escAttr(s.registerLink) + '" target="_blank" rel="noopener">Register</a>';
      }

      html += '</div>'; // .session-item__footer
      html += '</div>'; // .session-item__body
      html += '</article>'; // .session-item

      return html;
    }).join('');

    // "Show more" button — only appears when there are more than 3
    if (overflow) {
      var extra = rows.length - SESSIONS_LIMIT;
      var btn = document.createElement('button');
      btn.className = 'btn btn-secondary sessions-show-more';
      btn.textContent = 'Show ' + extra + ' more';
      btn.addEventListener('click', function () {
        container.querySelectorAll('.session-item--hidden').forEach(function (el) {
          el.classList.remove('session-item--hidden');
        });
        btn.remove();
      });
      container.appendChild(btn);
    }
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#039;');
  }

  function escAttr(str) { return escHtml(str); }
});
