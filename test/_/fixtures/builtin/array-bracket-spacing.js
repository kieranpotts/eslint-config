/*
https://eslint.org/docs/latest/rules/array-bracket-spacing

It is not recommended to include a space after the opening bracket of an
array (an expression or destructuring pattern) and the first value, and a
space before the closing bracket. However, since the `array-bracket-newline`
rule recommends line breaks in these places, this rule is not really relevant.
*/

const log = (...args) => {
  return args
}

/* ✅ */
const arr1 = []

/* ⚡WARNING: "A linebreak is required after '['." */
/* ⚡WARNING: "A linebreak is required before ']'." */
const arr2 = [ 1 ]

/* ⚡WARNING: "There should be no space after '['." */
/* ⚡WARNING: "There should be no space before ']'." */
// eslint-disable-next-line array-bracket-newline
const arr3 = [ 1 ]

/* ✅ */
// eslint-disable-next-line array-bracket-newline, array-element-newline
const arr4 = [1, 2, 3]

/* If the `array-bracket-newline` rule is disabled, the only times spaces
will be recommended is when there is a single inner value that is either
an object literal or another array literal. */

/* ✅ */
/* eslint-disable array-bracket-newline */
const arr5 = [ {} ]
const arr6 = [ [] ]
/* eslint-enable array-bracket-newline */

log(arr1, arr2, arr3, arr4, arr5, arr6)
