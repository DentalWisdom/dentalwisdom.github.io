/* =========================================================
   Dental Wisdom — Google Sheets CSV loader
   Fetches a published Google Sheet (CSV) via Papa Parse and
   hands the parsed rows to a render callback. On any failure,
   shows a calm "couldn't load right now" message instead of
   breaking the page.

   Used by: live.html (Live CE sessions), deals.html (Deals),
   agenda.html (Agenda). Each page calls loadSheet() with its
   own CSV URL, container, and render function.

   Requires Papa Parse (loaded via cdnjs on pages that use this).
   ========================================================= */

/**
 * Fetch and parse a published Google Sheet CSV.
 *
 * @param {Object} options
 * @param {string} options.url - Published CSV URL (see SITE_SPEC.md §6).
 * @param {HTMLElement} options.container - Element to render into / show fallback in.
 * @param {(rows: Object[], container: HTMLElement) => void} options.onSuccess
 *        Called with parsed rows (array of objects keyed by header row).
 * @param {string} [options.fallbackMessage] - Custom fallback copy.
 */
function loadSheet(options) {
  var url = options.url;
  var container = options.container;
  var onSuccess = options.onSuccess;
  var fallbackMessage = options.fallbackMessage ||
    "We couldn't load this right now — please refresh the page.";

  if (!url || url.indexOf('TBD') !== -1) {
    // CSV URL not yet published — show calm placeholder, not an error.
    renderFallback(container, "This content is coming soon — please check back shortly.");
    return;
  }

  if (typeof Papa === 'undefined') {
    renderFallback(container, fallbackMessage);
    return;
  }

  Papa.parse(url, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      try {
        var rows = (results && results.data) ? results.data : [];
        if (!rows.length) {
          renderFallback(container, fallbackMessage);
          return;
        }
        onSuccess(rows, container);
      } catch (err) {
        renderFallback(container, fallbackMessage);
      }
    },
    error: function () {
      renderFallback(container, fallbackMessage);
    }
  });
}

function renderFallback(container, message) {
  if (!container) return;
  container.innerHTML =
    '<p class="placeholder" role="status">' + message + '</p>';
}
