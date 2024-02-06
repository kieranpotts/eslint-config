/*
https://eslint.org/docs/latest/rules/yoda

Don't allow Yoda-style comparisons, where the literal value is on the left and
the variable is on the right of the operator.

"The color is red" reads better than "red is the color".
*/

let color = 'yellow'

/* ⚡WARNING: "Expected literal to be on the right side of ===." */
if ('red' === color) {
  // …
}

/* ✅ */
if (color === 'red') {
  // …
}

/* The following logical error, which Yoda-style comparisons protect against,
is caught by the `no-cond-assign` rule. Other rules such as `no-const-assign`
and `no-const-condition` will also often be applicable in these circumstances. */

/* ❗ERROR: "Expected a conditional expression and instead saw an assignment." */
/* ❗ERROR: "Unexpected constant condition." */
if (color = 'red') {
  // …
}

/* The yoda check is not limited only to equality (`==`, `===`)comparisons. It
is also enabled for range comparisons, where Yoda syntax can sometimes be
useful. */

/* ⚡WARNING: "Expected literal to be on the right side of <." */
const isReddish = (col) => {
  // eslint-disable-next-line no-magic-numbers
  return (col.hue < 60 || 300 < col.hue)
}
isReddish({
  hue: 30,
})
