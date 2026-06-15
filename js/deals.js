/* =========================================================
   Dental Wisdom Deals — searchable, filterable partner offers
   Reads from window.DEALS_DATA (js/deals-data.js — see
   SITE_SPEC.md §6) and renders cards into the deals grid.
   Builds category filter buttons and a live search box from
   the data. Deals data is maintained directly in
   js/deals-data.js (no Google Sheet).

   Fields per deal: title, category, shortDescription,
   description, link, promo, imageUrl.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var gridEl = document.getElementById('dealsGrid');
  var categoriesEl = document.getElementById('dealsCategories');
  var searchEl = document.getElementById('dealsSearch');
  var noResultsEl = document.getElementById('dealsNoResults');

  if (!gridEl) return;

  var activeCategory = 'All';

  var allDeals = (window.DEALS_DATA || [])
    .map(function (row) {
      return {
        title: (row.title || '').trim(),
        category: (row.category || '').trim(),
        shortDescription: (row.shortDescription || '').trim(),
        description: (row.description || '').trim(),
        link: (row.link || '').trim(),
        promo: (row.promo || '').trim(),
        imageUrl: (row.imageUrl || '').trim()
      };
    })
    .filter(function (deal) {
      return deal.title;
    });

  if (!allDeals.length) {
    gridEl.innerHTML = '<p class="placeholder" role="status">New deals are being added — check back soon!</p>';
    if (categoriesEl) categoriesEl.innerHTML = '';
  } else {
    buildCategoryButtons(allDeals);
    renderDeals(allDeals);
  }

  if (searchEl) {
    searchEl.addEventListener('input', function () {
      applyFilters();
    });
  }

  function buildCategoryButtons(deals) {
    if (!categoriesEl) return;

    var categories = [];
    deals.forEach(function (deal) {
      if (deal.category && categories.indexOf(deal.category) === -1) {
        categories.push(deal.category);
      }
    });
    categories.sort(function (a, b) {
      return a.localeCompare(b);
    });
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

  function applyFilters() {
    var query = searchEl ? searchEl.value.trim().toLowerCase() : '';

    var filtered = allDeals.filter(function (deal) {
      var matchesCategory = activeCategory === 'All' || deal.category === activeCategory;
      var matchesQuery = !query ||
        deal.title.toLowerCase().indexOf(query) !== -1 ||
        deal.description.toLowerCase().indexOf(query) !== -1 ||
        deal.category.toLowerCase().indexOf(query) !== -1;
      return matchesCategory && matchesQuery;
    });

    renderDeals(filtered);
  }

  function renderDeals(deals) {
    if (!deals.length) {
      gridEl.innerHTML = '';
      gridEl.hidden = true;
      if (noResultsEl) noResultsEl.hidden = false;
      return;
    }

    if (noResultsEl) noResultsEl.hidden = true;
    gridEl.hidden = false;

    gridEl.innerHTML = deals.map(function (deal) {
      var html = '<div class="card deal-card">';

      var imageInner = '';
      if (deal.imageUrl) {
        imageInner = '<img src="' + escapeAttr(deal.imageUrl) + '" alt="' +
          escapeAttr(deal.title + ' logo') + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
          '<div class="placeholder" style="display:none;">Image coming soon</div>';
      } else {
        imageInner = '<div class="placeholder">Image coming soon</div>';
      }

      html += '<div class="deal-card__image-wrap">';
      if (deal.link) {
        html += '<a href="' + escapeAttr(deal.link) + '" target="_blank" rel="noopener" aria-label="' +
          escapeAttr('Visit ' + deal.title + ' website') + '">' + imageInner + '</a>';
      } else {
        html += imageInner;
      }
      html += '</div>';

      var tags = '';
      if (deal.category) {
        tags += '<span class="deal-card__category">' + escapeHtml(deal.category) + '</span>';
      }
      if (deal.promo) {
        tags += '<span class="badge--promo">' + escapeHtml(deal.promo) + '</span>';
      }
      if (tags) {
        html += '<div class="deal-card__tags">' + tags + '</div>';
      }

      html += '<h3>' + escapeHtml(deal.title) + '</h3>';

      if (deal.shortDescription) {
        html += '<p class="deal-card__tagline">' + escapeHtml(deal.shortDescription) + '</p>';
      }

      if (deal.description) {
        html += '<p>' + escapeHtml(deal.description) + '</p>';
      }

      if (deal.link) {
        html += '<a class="btn btn-secondary" href="' + escapeAttr(deal.link) +
          '" target="_blank" rel="noopener">View Deal</a>';
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
