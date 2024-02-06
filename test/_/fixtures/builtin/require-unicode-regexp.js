/*
https://eslint.org/docs/latest/rules/require-unicode-regexp

All regular expressions MUST be Unicode-safe. This means using the `u` flag
or, better still, the `v` flag (introduced in ES2024). Both of these offer
the following advantages:

- UTF-16 surrogate pairs will be handled correctly.
- Some RegExp syntax errors will be caught early.

The newer `v` flag is stricter still – see the ESLint docs for more information.

See also `no-misleading-character-class` which offers related checks.
*/

/* eslint-disable line-comment-position */

/* ❗ERROR: "Unexpected surrogate pair in character class. Use 'u' flag." */
/* ❗ERROR: "Use the 'u' flag." */
(/^[👍]$/).test("👍"); // → false

/* ✅ */
(/^[👍]$/u).test("👍") // → true

/* ✅ */
new RegExp('^[👍]$', 'v').test('👍') // → true
