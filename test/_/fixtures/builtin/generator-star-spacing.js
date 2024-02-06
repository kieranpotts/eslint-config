/*
https://eslint.org/docs/latest/rules/generator-star-spacing

There are two prominent conventions for declaring generator functions:

- function* fnName () {}
- function *fnName () {}

The most widely used convention is to append the star symbol to the `function`
keyword, rather than prepend it to the function name. This makes more sense.
`function*` is a special keyword in its own right, and the `*` is not part
of the name of the function.

For these reasons, the `function*` syntax is our preferred style. It is also
consistent with how we write `yield*` – see `yield-star-spacing`.
*/

/* eslint-disable no-unused-vars */

const other = () => {}

/* ✅ */
function* generator_one () {
  yield* other()
}

/* ⚡WARNING: "Unexpected space before *." */
/* ⚡WARNING: "Missing space after *." */
function *generator_two () {
  yield* other()
}

/* ⚡WARNING: "Unexpected space before *." */
function * generator_three () {
  yield* other()
}

/* ⚡WARNING: "Missing space after *." */
function*generator_four () {
  yield* other()
}

/* The same style is RECOMMENDED for named functions and anonymous functions,
but object property generators and methods SHOULD swap the space around, so
the star symbol touches the function/method name instead. */

/* ✅ */
function* generator () {}
const anonymous = function* () {}

/* ✅ */
const some_object = {
  *generator () {
    yield 'a'
    yield 'b'
  },
}

/* ✅ */
class MyClass {
  static *method () {}
}
