/* =========================================================
   Dental Wisdom — Shared site behavior
   Mobile nav overlay, Join modal (focus-trap, Esc, scroll-lock),
   and scroll-reveal animations.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------
     Mobile overlay menu
     ----------------------------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    var closeMenu = function () {
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    var openMenu = function () {
      mobileMenu.classList.add('is-open');
      document.body.classList.add('menu-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      var firstLink = mobileMenu.querySelector('a');
      if (firstLink) firstLink.focus();
    };

    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close mobile menu when a link is chosen
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  /* -----------------------------
     Join the Network modal
     Focus-trapped, Esc closes, scroll-locked behind.
     ----------------------------- */
  var joinButton = document.getElementById('joinButton');
  var joinModal = document.getElementById('joinModal');
  var joinModalClose = document.getElementById('joinModalClose');
  // Additional triggers (e.g. "Join the WhatsApp Network" buttons in
  // page content) can open the same modal via [data-open-join-modal].
  var joinTriggers = document.querySelectorAll('[data-open-join-modal]');

  if (joinButton && joinModal) {
    var lastFocusedElement = null;

    var getFocusableElements = function () {
      return joinModal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])'
      );
    };

    var openModal = function () {
      lastFocusedElement = document.activeElement;
      joinModal.classList.add('is-open');
      document.body.classList.add('menu-open'); // reuses scroll-lock styles
      var focusable = getFocusableElements();
      if (focusable.length) focusable[0].focus();
      document.addEventListener('keydown', handleModalKeydown);
    };

    var closeModal = function () {
      joinModal.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleModalKeydown);
      if (lastFocusedElement) lastFocusedElement.focus();
    };

    var handleModalKeydown = function (e) {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key === 'Tab') {
        var focusable = Array.prototype.slice.call(getFocusableElements());
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    joinButton.addEventListener('click', openModal);

    joinTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', openModal);
    });

    if (joinModalClose) {
      joinModalClose.addEventListener('click', closeModal);
    }

    joinModal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
  }

  /* -----------------------------
     Scroll reveal (fade-up on intersection)
     ----------------------------- */
  var revealEls = document.querySelectorAll('[data-reveal]');

  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0 });

      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // No IntersectionObserver support: show everything immediately
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  /* -----------------------------
     FAQ Accordion
     ----------------------------- */
  document.querySelectorAll('.faq-item__trigger').forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;

    trigger.addEventListener('click', function () {
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      // Collapse all in same list
      var list = trigger.closest('.faq-list');
      if (list) {
        list.querySelectorAll('.faq-item__trigger').forEach(function (t) {
          t.setAttribute('aria-expanded', 'false');
          var p = document.getElementById(t.getAttribute('aria-controls'));
          if (p) p.setAttribute('aria-hidden', 'true');
        });
      }
      if (!expanded) {
        trigger.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
      }
    });
  });

  /* -----------------------------
     Footer logo: smooth scroll to top
     ----------------------------- */
  var footerLogo = document.querySelector('.footer-logo');
  if (footerLogo) {
    footerLogo.addEventListener('click', function(e) {
      e.preventDefault();
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  /* -----------------------------
     Gallery auto-scroll
     ----------------------------- */
  var gallery = document.querySelector('.gallery');
  if (gallery) {
    var paused = false;
    var speed = 0.6; // px per frame

    gallery.addEventListener('mouseenter', function () { paused = true; });
    gallery.addEventListener('mouseleave', function () { paused = false; });
    gallery.addEventListener('touchstart', function () { paused = true; }, { passive: true });
    gallery.addEventListener('touchend', function () {
      setTimeout(function () { paused = false; }, 2000);
    }, { passive: true });

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      // Duplicate items first so the loop is seamless
      var items = Array.from(gallery.children);
      items.forEach(function (item) {
        var clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        gallery.appendChild(clone);
      });

      (function tick() {
        if (!paused) {
          gallery.scrollLeft += speed;
          // When we've scrolled past the halfway point, jump back to start seamlessly
          if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
            gallery.scrollLeft = 0;
          }
        }
        requestAnimationFrame(tick);
      })();
    }
  }

  /* -----------------------------
     Logo scroll strip auto-scroll (agenda + homepage)
     ----------------------------- */
  var logoScrollWrap = document.querySelector('.logo-scroll-wrap');
  if (logoScrollWrap) {
    var stripPaused = false;
    var stripSpeed = 0.5; // px per frame — gentle pace

    logoScrollWrap.addEventListener('mouseenter', function () { stripPaused = true; });
    logoScrollWrap.addEventListener('mouseleave', function () { stripPaused = false; });
    logoScrollWrap.addEventListener('touchstart', function () { stripPaused = true; }, { passive: true });
    logoScrollWrap.addEventListener('touchend', function () {
      setTimeout(function () { stripPaused = false; }, 2000);
    }, { passive: true });

    var prefersReducedStrip = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedStrip) {
      (function tickStrip() {
        if (!stripPaused) {
          logoScrollWrap.scrollLeft += stripSpeed;
          // Seamless loop: jump back when we've passed the halfway point
          var track = logoScrollWrap.querySelector('.logo-scroll-track');
          if (track && logoScrollWrap.scrollLeft >= track.scrollWidth / 2) {
            logoScrollWrap.scrollLeft = 0;
          }
        }
        requestAnimationFrame(tickStrip);
      })();
    }
  }

  /* -----------------------------
     Join button: fade when footer scrolls into view
     ----------------------------- */
  var fab = document.querySelector('.join-fab');
  var siteFooter = document.querySelector('.site-footer');
  if (fab && siteFooter && 'IntersectionObserver' in window) {
    var footerObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        fab.classList.toggle('join-fab--hidden', entry.isIntersecting);
      });
    }, { threshold: 0 });
    footerObserver.observe(siteFooter);
  }

});
