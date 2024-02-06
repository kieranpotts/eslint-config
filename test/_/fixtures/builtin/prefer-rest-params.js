/*
https://eslint.org/docs/latest/rules/prefer-rest-params

It is RECOMMENDED to use rest parameters instead of `arguments` in
variadic functions. The `arguments` object is less convenient because it
does not provide immediate access to methods of `Array.prototype`.
*/

/* eslint-disable no-unused-vars, prefer-spread */

/* ⚡WARNING: "Use the rest parameters instead of 'arguments'." */
function doThis (action) {
  const args = Array.prototype.slice.call(arguments, 1)
  action.apply(null, args)
}

/* ✅ */
function doThat (action, ...args) {
  action.apply(null, args)
}
