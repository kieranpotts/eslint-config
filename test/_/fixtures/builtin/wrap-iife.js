/*
https://eslint.org/docs/latest/rules/wrap-iife

You can immediately invoke function expressions but not function declarations:

OKAY:

  const is_true = function () { return true }()

SyntaxError:

  function () { return true }()

To create an immediately-invoked function expression, a common pattern is to
wrap a function declaration in parentheses. The opening parentheses cause the
contained function to be parsed as an expression.

  (function () { return true })()
  (function () { return true }())

The wrapping parentheses may wrap the function expression only, or the
whole function _call_ expression. The result is the same. Our linting rules
allow either style.

For consistency, function expressions immediately invoked using `.call()` or
`.apply()` SHOULD also be wrapped, though this is not required by JavaScript
engines.
*/

/* eslint-disable no-unused-vars */

/* ❗SyntaxError: The following code cannot be parsed. We have to comment it out
else the tests will not even run! */
/*
function fn_one () {
  return true
}()
*/

/* ✅ */
(function () {
  return true
})();

/* ✅ */
(function () {
  return true
}());

/* ✅ */
(function () {
  return true
}).call();

/* ✅ */
(function () {
  return true
}.apply())

/* We only warn against the following style, as it is perfectly valid.
However, for consistency it is RECOMMENDED to always wrap immediately invoked
functions, even when they are already parsed as part of an expression. */

/* ⚡WARNING: "Wrap an immediate function invocation in parentheses." */
const fn_one = function () {
  return true
}();

/* ✅ */
const fn_two = (function () {
  return true
})()
