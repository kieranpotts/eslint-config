/*
https://eslint.org/docs/latest/rules/no-extra-semi

When the `semi` rule is disabled, there SHOULD NOT be more semicolons than
necessary. While this is not likely to be a source of bugs, it can cause
confusion for humans reading code.
*/

/* eslint-disable semi */

/* ⚡WARNING: "Unnecessary semicolon." */
const one = 1; ;

/* ⚡WARNING: "Unnecessary semicolon." */
function doThis (value) {
  return value
};
doThis(one)

/* ✅ */
const two = 2;

/* ✅ */
function doThat (value) {
  return value
}
doThat(two)

/* ✅ The semi-colon will be allowed at the end of arrow function assignments. */
const doThisToo = (value) => {
  return value
};
doThisToo(two)
