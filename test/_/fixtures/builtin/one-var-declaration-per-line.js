/*
https://eslint.org/docs/latest/rules/one-var-declaration-per-line

To improve code readability and maintainability, it is RECOMMENDED to
declare one variable per line.

This rule is relevant only when the `one-var` rule is set to "always",
but we've set it to "never".
*/

/* eslint-disable no-unused-vars, one-var */

function doThis () {

  /* ⚡WARNING: "Expected variable declaration to be on a new line." */
  var one, two = 2

  /* ⚡WARNING: "Expected variable declaration to be on a new line." */
  let four, three

  /* ⚡WARNING: "Expected variable declaration to be on a new line." */
  const five = true, six = false

}

function doThat () {

  /* ✅ */
  var one,
      two = 2

  /* ✅ */
  let four,
      three

  /* ✅ */
  const five = true,
        six = false

}
