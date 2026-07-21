'use strict';

/**
 * Minimal DOM fixture mirroring the data-* hooks that assets/js/script.js
 * queries in index.html. Kept intentionally small: only the attributes the
 * script relies on are present.
 */
const FIXTURE_HTML = `
  <header class="header" data-header>
    <button class="nav-open-btn" data-nav-open-btn aria-label="open menu"></button>
  </header>

  <nav class="navbar" data-navbar>
    <button class="nav-close-btn" data-nav-close-btn aria-label="close menu"></button>
    <ul class="navbar-list">
      <li><a href="#home" class="navbar-link" data-nav-link>Home</a></li>
      <li><a href="#service" class="navbar-link" data-nav-link>Service</a></li>
      <li><a href="#about" class="navbar-link" data-nav-link>About</a></li>
    </ul>
  </nav>

  <div class="overlay" data-overlay></div>
`;

function installFixture() {
  document.body.innerHTML = FIXTURE_HTML;
}

module.exports = { installFixture, FIXTURE_HTML };
