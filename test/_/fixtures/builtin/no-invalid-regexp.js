/*
https://eslint.org/docs/latest/rules/no-invalid-regexp

Invalid string expressions in `RegExp` constructors that will cause a
`SyntaxError` when parsed at runtime MUST be fixed.
*/

/* eslint-disable prefer-regex-literals, require-unicode-regexp */

/* ❗ERROR: "Invalid regular expression: /[/: Unterminated character class." */
RegExp('[')

/* ❗ERROR: "Invalid flags supplied to RegExp constructor 'z'" */
RegExp('.', 'z')

/* ❗ERROR: "Invalid regular expression: /\/: \ at end of pattern" */
const rgx = new RegExp('\\')

console.log(rgx)
