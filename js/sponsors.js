/* =========================================================
   Dental Wisdom Conference — Sponsor logo strip
   Reads from window.SPONSORS_DATA (js/sponsors-data.js) and
   builds an auto-scrolling strip of sponsor logos for
   agenda.html. The list is duplicated so the CSS marquee
   animation can loop seamlessly; the duplicate copy is
   hidden from assistive tech.

   Fields per sponsor: name, logoUrl, link.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var trackEl = document.getElementById('sponsorTrack');
  if (!trackEl) return;

  var sponsors = (window.SPONSORS_DATA || [])
    .map(function (row) {
      return {
        name: (row.name || '').trim(),
        logoUrl: (row.logoUrl || '').trim(),
        link: (row.link || '').trim()
      };
    })
    .filter(function (sponsor) {
      return sponsor.name;
    });

  if (!sponsors.length) {
    trackEl.parentNode.outerHTML = '<p class="placeholder" role="status">Our 2027 sponsors will be announced here soon!</p>';
    return;
  }

  // Render the list twice for a seamless looping marquee. The
  // second copy is hidden from assistive tech / tab order.
  var firstHtml = sponsors.map(function (sponsor) {
    return renderSponsor(sponsor, false);
  }).join('');
  var secondHtml = sponsors.map(function (sponsor) {
    return renderSponsor(sponsor, true);
  }).join('');

  trackEl.innerHTML = firstHtml + secondHtml;

  function renderSponsor(sponsor, hidden) {
    var inner;
    if (sponsor.logoUrl) {
      inner = '<img src="' + escapeAttr(sponsor.logoUrl) + '" alt="' +
        escapeAttr(sponsor.name + ' logo') + '" loading="lazy">';
    } else {
      inner = '<span>' + escapeHtml(sponsor.name) + '</span>';
    }

    var hiddenAttr = hidden ? ' aria-hidden="true" tabindex="-1"' : '';

    if (sponsor.link) {
      return '<a class="sponsor-logo" href="' + escapeAttr(sponsor.link) +
        '" target="_blank" rel="noopener" aria-label="' +
        escapeAttr('Visit ' + sponsor.name + ' website') + '"' + hiddenAttr + '>' + inner + '</a>';
    }
    return '<div class="sponsor-logo"' + hiddenAttr + '>' + inner + '</div>';
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
