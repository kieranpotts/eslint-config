/*
https://eslint.org/docs/latest/rules/prefer-arrow-callback

Arrow functions SHOULD be used as callbacks, replacing anonymous or named
functions. This use case is really what arrow functions were designed for.
They are compact, lightweight, and automatically bound to the context in
which they are defined and cannot be rebound to the context in which they
are invoked.
*/

function doThis (actionFn) {
  actionFn.call()
}

function myNamedCallback () {}
const myArrowCallback = () => {}

/* ⚡WARNING: "Unexpected function expression." */
doThis(function () {})

/* ⚡WARNING: "Unexpected function expression." */
doThis(function fnName () {})

/* This next example would be ✅ if the `allowUnboundThis` option were `true`.
That's because the callback references `this`, which is not explicitly
bound. This was a common design pattern where callbacks needed to reference
data in memory in their surrounding scope.… */

/* ⚡WARNING: "Unexpected function expression." */
doThis(function () {
  () => {
    this
  }
})

/* … But there are better design patterns, such as use of closures, to
control the lexical scope of callbacks, and so the external state available
to them. */

/* ✅ */
;(() => {
  const that = 1
  doThis(() => {
    that
  })
})()

/* This next example would still be ⚡ if the `allowUnboundThis` option
were `true`. Although the callback references `this`, the context is
explicitly bound. */

/* ⚡WARNING: "Unexpected function expression." */
doThis(function () {
  () => {
    this
  }
}.bind(this))

/* ✅ Referencing a named function seems to be okay. */
doThis(myNamedCallback)

/* ✅ */
doThis(() => {})

/* ✅ */
doThis(myArrowCallback)
