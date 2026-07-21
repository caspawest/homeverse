'use strict';

const path = require('path');

const SCRIPT_PATH = path.resolve(__dirname, '..', '..', 'assets', 'js', 'script.js');

/**
 * Executes assets/js/script.js against the current jsdom globals.
 *
 * The source file is not an ES/CommonJS module: it declares top-level `const`
 * bindings and immediately wires up DOM event listeners against whatever DOM is
 * present at load time. We load it with `require` (rather than eval) so Jest's
 * coverage instrumentation sees the file, and reset the module registry first
 * so each test re-executes it fresh against a newly installed DOM fixture.
 */
function loadScript() {
  jest.resetModules();
  require(SCRIPT_PATH);
}

module.exports = { loadScript, SCRIPT_PATH };
