/*
https://eslint.org/docs/latest/rules/no-undef

Authors MUST NOT use variables that are not previously declared.

This rule can be bypassed by leaving a \/* global *\/ comment or specifying
the variable in ESLint's global configuration.

The only exception to this is references undeclared variables in `typeof`
statements.
*/

/* ❗ERROR: "'doThis' is not defined." */
/* ❗ERROR: "'one' is not defined." */
const result = doThis() + one

console.log(result)

/* ✅ */
if (typeof undefined_identifier === 'undefined') {
  // …
}
