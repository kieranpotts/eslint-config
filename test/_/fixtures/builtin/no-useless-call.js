/*
https://eslint.org/docs/latest/rules/no-useless-call

Redundant uses of `Function.prototype.call()` and `Function.prototype.apply()`
SHOULD be refactored to invoke the functions directly. Using these `Function`
methods is slower than normal function invocation.

The `Function` methods SHOULD be used for function invocation only where you
want to change the `thisArg` in the context of the function body. Static
analysis cannot always judge this correctly.
*/

const doThis = function doThis () {
  // …
}

/* `thisArg` is not changed: */

/* ⚡WARNING: "Unnecessary '.call()'." */
doThis.call(undefined, 1, 2, 3)

/* ⚡WARNING: "Unnecessary '.apply()'." */
doThis.apply(null, [1, 2, 3])

const test_object = {
  doThis,
}

/* Can be refactored `test_object.doThis(1, 2, 3)` */
/* ⚡WARNING: "Unnecessary '.call()'." */
test_object.doThis.call(test_object, 1, 2, 3)
