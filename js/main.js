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
      }, { threshold: 0.15 });

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

});
