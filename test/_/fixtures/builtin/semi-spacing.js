/*
https://eslint.org/docs/latest/rules/semi-spacing

It is RECOMMENDED to include space after semicolons, but not before.
*/

/* eslint-disable semi */

/* ⚡WARNING: "Unexpected whitespace before semicolon." */
const nil = null ;
console.log(nil)

/* ✅ */
const one = 1; const two = 2;
console.log(one, two)
