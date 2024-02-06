/*
https://eslint.org/docs/latest/rules/func-style

Function expressions SHOULD be preferred over function declarations.

This is mostly a matter of style. While hoisted variables can sometimes be
the source of bugs (because the variable _declaration_ can be hoisted but
initial value not initialized until later), there risks are much lower for
hoisted functions. The rule `no-use-before-define` is configured to raise an
error when variables or functions are used before they are declares, and with
this check in place function declarations are safe. However, function
expressions are still preferred for consistency.

See also `no-use-before-define`.
*/

/* ⚡WARNING: "Expected a function expression." */
function doThis () {
  // …
}

doThis()

/* ✅ */
const doThat = function () {
  // …
}

doThat()
