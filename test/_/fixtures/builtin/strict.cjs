/*
https://eslint.org/docs/latest/rules/strict

In CommonJS scripts, there SHOULD be one strict mode directive in the
global scope. There SHOULD NOT be any other strict mode directives, eg
in function scopes.
*/

/* eslint-disable no-unused-vars */

/* ✅ */
'use strict'

function doSomething () {
  /* ⚡WARNING: "Use the global form of 'use strict'." */
  'use strict'
}
