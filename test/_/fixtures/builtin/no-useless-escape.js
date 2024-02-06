/*
https://eslint.org/docs/latest/rules/no-useless-escape

Escaping non-special characters in strings, template literals, and regular
expressions is redundant and SHOULD be avoided.

Where the escape character is actually part of the value, this rule MAY be
disabled on a line-by-line basis.
*/

/* ⚡WARNING: "Unnecessary escape character: \'." */
const string = "\'"

/* ⚡WARNING: "Unnecessary escape character: \-." */
const regexp = /[a-z\-]/u

console.log(string, regexp)
