/*
https://eslint.org/docs/latest/rules/wrap-regex

Regex literals SHOULD be wrapped in parentheses to improve readability.
*/

/* eslint-disable no-unused-vars */

/* ⚡WARNING: "Wrap the regexp literal in parens to disambiguate the slash." */
/foo/.test('bar');

/* ✅ */
(/foo/).test('bar')
