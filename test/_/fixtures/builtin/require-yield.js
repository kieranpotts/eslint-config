/*
https://eslint.org/docs/latest/rules/require-yield

Although it is perfectly valid to have a generator function with no `yield`
statement, you might as well change it to a regular function.

We're flagging this as a possible error, rather than a mere warning, as a
yield-less generator function is almost certainly a programming mistake
– ie the function will likely not behave as the author expects it to.
*/

/* eslint-disable no-unused-vars */

/* ❗ERROR: "This generator function does not have 'yield'." */
function* doThis () {
  return 10
}

/* ✅ */
function* doThat () {
  yield 10
  return 20
}

/* ✅ */
function doThisToo () {
  return 10
}

/* ✅ This rule does not warn on empty generator functions. */
function* thisIsOkay () {}
