/*
https://eslint.org/docs/latest/rules/no-octal

Octal literals were deprecated in ECMAScript 5 and therefore MUST NOT be used
in JavaScript code any more.
*/

/* ❗ERROR: "Octal literals are not allowed. Use the syntax '0o71'" */
const _test1 = 071

/* ✅ */
const _test2 = 0o71

/* ✅ */
const _test3 = "071"
