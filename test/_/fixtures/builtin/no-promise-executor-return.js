/*
https://eslint.org/docs/latest/rules/no-promise-executor-return

This rule disallows returning a value inside a Promise constructor.

Values returned inside a `Promise` constructor cannot be used and don't affect
the promise in any way. The value should be passed to `resolve()` instead, or
if an error occurred, call `reject()` with the error.

This rule is not perfect. It will not catch instances of a value being
returned from a callback nested within the `Promise` constructor. Authors MUST
ensure that `resolve()` or `reject()` is always used to conclude execution of
a promise defined using the `Promise` constructor syntax.
*/

const log = (msg) => {
  return msg
}

/* ❗ERROR: "Return values from promise executor functions cannot be read." */
const promise1 = new Promise((resolve, reject) => {
  const result = 'some-generated-value'
  return result
})
log(await promise1)

/* It is not even allowed to return undefined (either explicitly or implicitly,
with an empty `return` statement), even if `resolve()` or `reject()` have
been called previously. In the following example, the `void` operator is
used to transform the value returned from the expression on the right to
`undefined`. */

/* ❗ERROR: "Return values from promise executor functions cannot be read." */
const promise2 = new Promise((resolve, reject) => {
  const result = 'some-generated-value'
  // eslint-disable-next-line no-void
  return void resolve(result)
})
log(await promise2)

/* ✅ */
const promise3 = new Promise((resolve, reject) => {
  const result = 'some-generated-value'
  resolve(result)
})
log(promise3)
