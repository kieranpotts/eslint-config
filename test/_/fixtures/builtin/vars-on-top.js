/*
https://eslint.org/docs/latest/rules/vars-on-top

The `var` keyword SHOULD NOT be used, but if it is, all `var` declarations
MUST be placed at the top of their containing scope. This is to avoid bugs
caused by unexpected variable hoisting.

This is a potential source of bugs, therefore this is raised as an error.
*/

/* eslint-disable no-unused-vars */

const isTrue = () => {
  return true
}

function doThisCorrect() {
  if (isTrue()) {
    /* ❗ERROR: "All 'var' declarations must be at the top of the function scope." */
    var first = true
  }
  /* ❗ERROR: "All 'var' declarations must be at the top of the function scope." */
  var second
}

/* ✅ */
function doThisWrong() {
  var first
  var second

  if (isTrue()) {
    first = true
  }
}

/* ❗ERROR */
function doThatCorrectly() {
  /* ❗ERROR: "All 'var' declarations must be at the top of the function scope." */
  for (var i = 0; i < 10; i++) {
    // …
  }
}

/* ✅ */
function doThatBadly() {
  var i

  for (i = 0; i < 10; i++) {
    // …
  }
}
