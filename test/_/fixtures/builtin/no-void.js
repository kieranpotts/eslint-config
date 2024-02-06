/*
https://eslint.org/docs/latest/rules/no-void

The `void` operator is not needed in modern JavaScript. It was useful in earlier
JavaScript engines, where the `undefined` value was mutable, but this behavior
is disabled in strict mode (introduced in ES5 and the default mode in ES
modules). Today, you can safely use the `undefined` value in all use cases.
*/

const zero = 0
const doThis = () => {}

/* ⚡WARNING: "Expected 'undefined' and instead saw 'void'." */
const undefined_one = void 0
console.log(undefined_one)

/* ✅ */
const undefined_two = undefined
console.log(undefined_two)

/* ESLint has an option, `allowAsStatement`, which when true will allow
the following statements will be allowed. That's because the `void`
operator is not being used in an expression position, eg a variable
assignment or function return. Using `void` here can be used to say
"we don't care about the value of this", but since the `void` operator
is rarely used, and therefore rarely understood, it's better just to
leave a comment instead. */

/* ⚡WARNING: "Expected 'undefined' and instead saw 'void'." */
void zero

/* ⚡WARNING: "Expected 'undefined' and instead saw 'void'." */
void doThis()

/* ✅ */
// eslint-disable-next-line no-unused-expressions
zero

/* ✅ */
doThis()
