/*
https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape

For backwards compatibility with legacy JavaScript code, ECMAScript specifies
that web browsers running code in non-strict mode must treat `\8` and `\9` as
literal `8` and `9` in string literals.

  // true
  '\8' === '8'

  // true
  '\9' === '9'

These are now specified as non-octal decimal escape sequences, but they are
useless and MUST NOT be included in new code. Old code that use this syntax
can be safely refactored.
*/

/* eslint-disable strict */

/* Parsing error in strict mode. */
/* ❗ERROR: "Don't use '\8' escape sequence." */
const _eight = '\8'

/* Parsing error in strict mode. */
/* ❗ERROR: "Don't use '\9' escape sequence." */
const _nine = '\9'
