/*
https://eslint.org/docs/latest/rules/no-useless-concat

String literal values SHOULD NOT be concatenated, but instead refactored
into a single string literal value.
*/

/* ⚡WARNING: "Unexpected string concatenation of literals." */
/* ⚡WARNING: "Unexpected string concatenation of literals." */
const abc = 'a' + 'b' + 'c'

console.log(abc)
