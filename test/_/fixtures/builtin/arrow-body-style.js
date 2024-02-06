/*
https://eslint.org/docs/latest/rules/arrow-body-style

Recommend to use braces around arrow function bodies in all cases.

Arrow functions have two syntactic forms for their function bodies. They may be
defined with a block body – denoted by curly braces `() => {}` – or with a
single expression whose value is implicitly returned.

The implicit return is terser but less explicit, and often less readable.
*/

const zero = 0

/* ⚡WARNING: "Expected block statement surrounding arrow body." */
const fn1 = () => zero
fn1()

/* ✅ */
const fn2 = () => {
  return zero
}
fn2()

/* The implicit return syntax is particularly confusing when returning object
literals, which must be encapsulated in additional parentheses. */

/* ⚡WARNING: "Expected block statement surrounding arrow body." */
const fn3 = () => ({
  prop1: {
    prop2: 1,
    prop3: 2,
  },
})
fn3()

/* ✅ */
const fn4 = () => {
  return {
    prop1: {
      prop2: 1,
      prop3: 2,
    },
  }
}
fn4()
