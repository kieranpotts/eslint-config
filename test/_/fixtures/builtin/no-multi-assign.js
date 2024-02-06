/*
https://eslint.org/docs/latest/rules/no-multi-assign

Assignment expressions SHOULD NOT be chained.

Chaining the assignment of variables and class properties can be difficult to
read, and lead to unexpected behaviors.
*/

let _two
let _three

/* ⚡WARNING: "Unexpected chained assignment." */
/* ⚡WARNING: "Unexpected chained assignment." */
const _one = _two = _three = 42

/* ✅ */
const _four = 42
const _five = 42
const _six = 42
