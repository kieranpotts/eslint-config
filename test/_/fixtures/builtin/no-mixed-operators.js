/*
https://eslint.org/docs/latest/rules/no-mixed-operators

For readability, where a mixture of binary operators are used, distinct
operators SHOULD be enclosed in parentheses, unless the operators have the
same level of precedence.

See also the `no-extra-parens` rule, which is configured to allow parentheses
around nested binary expressions, for compatibility with the `no-mixed-operators`
rule.
*/

const one = 1
const two = 2
const three = 3
const four = 4

/* ⚡WARNING */
const _test1 = one && two || three || four

/* ✅ */
const _test2 = (one && two) || three || four

/* ✅ */
const _test3 = one && (two || three || four)

/* The operators `+` and `-` have the same precedence. */
/* ✅ */
const _test4 = one + two - three
