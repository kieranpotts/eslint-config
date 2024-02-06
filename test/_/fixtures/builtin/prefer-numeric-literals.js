/*
https://eslint.org/docs/latest/rules/prefer-numeric-literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#integer_literals

Modern JavaScript engines support a wide range of number literals, including
hexadecimals (leading `0x` or `0X`), octals (leading `0`, `0o` or `0O`), and
binary literals (leading `0b` or `0B`).

Rather than encode these number encodings in strings, and decode them with
`parseInt()` and `Number.parseInt()`, you might as well just use the raw
literal integers. This rule checks for unnecessary use of the `parseInt()`
functions for this reason.

See also the `radix` rule.
*/

/* ⚡WARNING: "Use binary literals instead of parseInt()." */
/* ⚡WARNING: "Use binary literals instead of Number.parseInt()." */
parseInt('111110111', 2) === 503
Number.parseInt('111110111', 2) === 503

/* ⚡WARNING: "Use octal literals instead of parseInt()." */
/* ⚡WARNING: "Use octal literals instead of Number.parseInt()." */
parseInt('767', 8) === 503
Number.parseInt('767', 8) === 503

/* ⚡WARNING: "Use hexadecimal literals instead of parseInt()." */
/* ⚡WARNING: "Use hexadecimal literals instead of Number.parseInt()." */
parseInt('1F7', 16) === 503
Number.parseInt('1F7', 16) === 503

/* ✅ */
0b111110111 === 503
0o767 === 503
0x1F7 === 503

/* Some usages of `parseInt()` are allowed. This rule only checks for use
of parseInt() to parse strings that encode binary, octal and hexadecimal
numbers. */

/* ✅ */
parseInt(1, 3)
Number.parseInt(1, 3)
