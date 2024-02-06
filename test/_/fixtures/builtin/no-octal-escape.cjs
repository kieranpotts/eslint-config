/*
https://eslint.org/docs/latest/rules/no-octal-escape

ES5 deprecated octal escape sequences in string literals, and the parser errors
in strict mode. Unicode escape sequences should be used instead.

NOTE: This file is a CommonJS module that is NOT executed in strict mode.
Therefore this error will be caught by the ESLint rule. In strict mode or
an ES module, the ESLint parser (not the rule) will raise the error.
*/

/* eslint-disable strict */

/* Octal */
/* ❗ERROR: "Don't use octal: '\251'. Use '\u....' instead." */
const octal = 'Copyright \251'

/* ✅ Unicode */
const unicode = 'Copyright \u00A9'

/* ✅ Hexadecimal */
const hexadecimal = 'Copyright \xA9'

console.log(octal, unicode, hexadecimal)
