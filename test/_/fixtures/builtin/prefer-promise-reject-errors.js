/*
https://eslint.org/docs/latest/rules/prefer-promise-reject-errors

This rule recommends that promises are always rejected with `Error` objects.

It is considered good practice to only pass instances of the built-in `Error`
object to the `reject()` function for user-defined errors in promises. Error
objects automatically store a stack trace, which can be used to debug an error
by determining where it came from.

Due to the limits of static analysis, it is not possible to guarantee that all
invalid usages of `reject()` will be detected.

See also the `no-throw-literal` rule.
*/

const log = (...args) => {
  return args
}

/* ⚡WARNING: "Expected the Promise rejection reason to be an Error." */
Promise.reject()

/* ⚡WARNING: "Expected the Promise rejection reason to be an Error." */
const promise1 = new Promise((resolve, reject) => {
  reject()
})
log(promise1)

/* ✅ */
Promise.reject(new Error())

/* ✅ */
Promise.reject(new TypeError())

/* ✅ */
const promise2 = new Promise((resolve, reject) => {
  reject(new Error())
})
log(promise2)
