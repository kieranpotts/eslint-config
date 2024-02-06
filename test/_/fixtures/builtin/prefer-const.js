/*
https://eslint.org/docs/latest/rules/prefer-const

If a variable is never reassigned after it is declared, it is RECOMMENDED
to use `const` over `let`.
*/

/* eslint-disable no-unused-vars */

/* ✅ */
let is_reassigned = 1
is_reassigned = 2

/* ⚡WARNING: "'is_not_reassigned' is never reassigned. Use 'const' instead." */
let is_not_reassigned = 1

/* ✅ */
const is_also_not_reassigned = 1

/* Warn if some destructured variables could be constant. */

const test_object = {
  'one': 1,
  'two': 2,
}

/* ⚡WARNING: "'one' is never reassigned. Use 'const' instead." */
let { one } = test_object.one

/* ✅ */
const { two } = test_object.two

/* Our linting rules do not allow variable hoisting, so we've disabled the
check to ignore this rule when variables are accessed before they are
assigned (`ignoreReadBeforeAssign`). */

/* ⚡WARNING: "'timer' is never reassigned. Use 'const' instead." */
let timer
function initialize () {
  clearInterval(timer)
}
timer = setInterval(initialize, 100)

/* ✅ */
const wait = setInterval(init, 100)
function init () {
  clearInterval(wait)
}
