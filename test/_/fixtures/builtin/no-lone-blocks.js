/*
https://eslint.org/docs/latest/rules/no-lone-blocks

Code blocks delimited by curly braces that do not create a new scope SHOULD
be refactored.
*/

/* eslint-disable no-var, vars-on-top */

const is_true = true
const doThis = () => {}

/* ⚡WARNING: "Nested block is redundant." */
if (is_true) {
  {
    var one = 1

    doThis(one)
  }
}

/* ✅ */
if (is_true) {
  let two = 2

  two = 3
  doThis(two)
}
