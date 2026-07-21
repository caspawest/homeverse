'use strict';

const { loadScript } = require('./helpers/loadScript');
const { installFixture } = require('./helpers/fixture');

/** Set window.scrollY (a read-only accessor in jsdom) and fire a scroll event. */
function scrollTo(y) {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value: y,
  });
  window.dispatchEvent(new Event('scroll'));
}

describe('assets/js/script.js', () => {
  let navbar;
  let overlay;
  let navOpenBtn;
  let navCloseBtn;
  let navLinks;
  let header;

  beforeEach(() => {
    installFixture();
    loadScript();

    navbar = document.querySelector('[data-navbar]');
    overlay = document.querySelector('[data-overlay]');
    navOpenBtn = document.querySelector('[data-nav-open-btn]');
    navCloseBtn = document.querySelector('[data-nav-close-btn]');
    navLinks = document.querySelectorAll('[data-nav-link]');
    header = document.querySelector('[data-header]');
  });

  describe('navbar toggling', () => {
    test('starts with navbar and overlay inactive', () => {
      expect(navbar.classList.contains('active')).toBe(false);
      expect(overlay.classList.contains('active')).toBe(false);
    });

    test('clicking the open button activates navbar and overlay', () => {
      navOpenBtn.click();

      expect(navbar.classList.contains('active')).toBe(true);
      expect(overlay.classList.contains('active')).toBe(true);
    });

    test('clicking the close button after opening deactivates them', () => {
      navOpenBtn.click();
      navCloseBtn.click();

      expect(navbar.classList.contains('active')).toBe(false);
      expect(overlay.classList.contains('active')).toBe(false);
    });

    test('clicking the overlay toggles the navbar', () => {
      overlay.click();
      expect(navbar.classList.contains('active')).toBe(true);
      expect(overlay.classList.contains('active')).toBe(true);

      overlay.click();
      expect(navbar.classList.contains('active')).toBe(false);
      expect(overlay.classList.contains('active')).toBe(false);
    });

    test('clicking any navbar link closes an open navbar', () => {
      navOpenBtn.click();
      expect(navbar.classList.contains('active')).toBe(true);

      navLinks[1].click();

      expect(navbar.classList.contains('active')).toBe(false);
      expect(overlay.classList.contains('active')).toBe(false);
    });

    test('each navbar link is wired to toggle the navbar', () => {
      navLinks.forEach((link) => {
        const before = navbar.classList.contains('active');
        link.click();
        expect(navbar.classList.contains('active')).toBe(!before);
      });
    });

    test('navbar and overlay stay in sync through repeated toggles', () => {
      for (let i = 0; i < 5; i++) {
        navOpenBtn.click();
        expect(navbar.classList.contains('active')).toBe(overlay.classList.contains('active'));
      }
    });
  });

  describe('header active state on scroll', () => {
    test('is inactive by default', () => {
      expect(header.classList.contains('active')).toBe(false);
    });

    test('stays inactive when scrolled below the 400px threshold', () => {
      scrollTo(399);
      expect(header.classList.contains('active')).toBe(false);
    });

    test('becomes active exactly at the 400px threshold', () => {
      scrollTo(400);
      expect(header.classList.contains('active')).toBe(true);
    });

    test('becomes active when scrolled past the threshold', () => {
      scrollTo(800);
      expect(header.classList.contains('active')).toBe(true);
    });

    test('deactivates again after scrolling back up', () => {
      scrollTo(800);
      expect(header.classList.contains('active')).toBe(true);

      scrollTo(0);
      expect(header.classList.contains('active')).toBe(false);
    });
  });
});
