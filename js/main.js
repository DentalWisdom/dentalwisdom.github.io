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
      // Focus the menu container (tabindex="-1") rather than the first nav link,
      // so no gold focus ring appears on "Conference" when visiting other pages.
      mobileMenu.focus();
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

    // Performance: the Jotform iframe ships with data-src instead of src,
    // so the form (and Jotform's scripts) only download the first time
    // the modal is actually opened.
    var joinFormLoaded = false;
    var loadJoinForm = function () {
      if (joinFormLoaded) return;
      joinFormLoaded = true;
      var iframe = joinModal.querySelector('iframe[data-src]');
      if (!iframe) return;
      iframe.src = iframe.getAttribute('data-src');
      iframe.removeAttribute('data-src');
      var s = document.createElement('script');
      s.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
      s.onload = function () {
        if (window.jotformEmbedHandler) {
          window.jotformEmbedHandler("iframe[id='" + iframe.id + "']", 'https://form.jotform.com/');
        }
      };
      document.body.appendChild(s);
    };

    var getFocusableElements = function () {
      return joinModal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])'
      );
    };

    var openModal = function () {
      loadJoinForm();
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

    // Performance: start loading the Jotform iframe a beat early —
    // the instant a visitor's mouse arrives on the button (desktop) or
    // their finger touches it (mobile), not just after the full click.
    // loadJoinForm() is guarded by joinFormLoaded, so calling it here
    // and again in openModal() is safe — it only ever runs once.
    var warmupTriggers = [joinButton].concat(Array.prototype.slice.call(joinTriggers));
    warmupTriggers.forEach(function (trigger) {
      trigger.addEventListener('mouseenter', loadJoinForm);
      trigger.addEventListener('touchstart', loadJoinForm, { passive: true });
      trigger.addEventListener('focus', loadJoinForm);
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
     Sub-nav Overview link: scroll to top
     ----------------------------- */
  var subnavOverview = document.getElementById('subnavOverview');
  if (subnavOverview) {
    subnavOverview.addEventListener('click', function(e) {
      e.preventDefault();
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  /* -----------------------------
     Logo scroll strips — touch pause/resume + keyboard pause button
     Hover-pause is handled via CSS @media(hover:hover).
     On touch: pause animation, resume after 5 s.
     Keyboard/click: toggle via is-paused class.
     ----------------------------- */
  var logoScrollWraps = document.querySelectorAll('.logo-scroll-wrap');
  logoScrollWraps.forEach(function (wrap) {
    // Touch pause
    var resumeTimer = null;
    wrap.addEventListener('touchstart', function () {
      clearTimeout(resumeTimer);
      wrap.classList.add('is-touch-paused');
    }, { passive: true });
    wrap.addEventListener('touchend', function () {
      resumeTimer = setTimeout(function () {
        wrap.classList.remove('is-touch-paused');
      }, 5000);
    }, { passive: true });
    wrap.addEventListener('touchcancel', function () {
      resumeTimer = setTimeout(function () {
        wrap.classList.remove('is-touch-paused');
      }, 5000);
    }, { passive: true });

  });

  /* -----------------------------
     Logo scroll strips — reliable image loading
     These strips (sponsor logos, homepage gallery) move continuously via
     a CSS transform animation. Native loading="lazy" on the individual
     <img> tags is unreliable inside a transform-animated, overflow:hidden
     track — the browser's lazy-load distance check is based on layout
     position, not the animated visual position, so images far along the
     track can fail to ever load (reported as photos "not loading at all"
     on mobile). Instead: images ship with data-src, and this observer
     loads every image in a strip in one go as soon as the strip nears
     the viewport, well before the animation would visually reach them.
     ----------------------------- */
  if ('IntersectionObserver' in window) {
    var stripObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('img[data-src]').forEach(function (img) {
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
        });
        stripObserver.unobserve(entry.target);
      });
    }, { rootMargin: '600px 0px' });

    logoScrollWraps.forEach(function (wrap) {
      stripObserver.observe(wrap);
    });
  } else {
    // No IntersectionObserver support: load everything immediately
    logoScrollWraps.forEach(function (wrap) {
      wrap.querySelectorAll('img[data-src]').forEach(function (img) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
      });
    });
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

  /* -----------------------------
     Click-to-load video facades
     Swaps a thumbnail + play button for the real YouTube iframe only
     once tapped, so the video player's JS/CSS never downloads unless
     a visitor actually wants to watch.
     ----------------------------- */
  document.querySelectorAll('.video-facade').forEach(function (facade) {
    facade.addEventListener('click', function () {
      var src = facade.getAttribute('data-video-src');
      if (!src) return;
      var title = facade.getAttribute('data-video-title') || 'Video';
      var iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.title = title;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      iframe.setAttribute('allowfullscreen', '');
      facade.parentNode.replaceChild(iframe, facade);
    });
  });

});
