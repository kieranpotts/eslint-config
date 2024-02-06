/*
https://eslint.org/docs/latest/rules/no-async-promise-executor

This rule disallows passing an `async` function to the `new Promise`
constructor.

While it is technically valid to pass an asynchronous function to the
`Promise` constructor, doing so is usually a programming mistake. It is
usually superfluous to wrap one promise in another. Worse, if the async
function throws, the error will be lost and won't therefore be rejected by
the newly-constructed promise.
*/

const log = (msg) => {
  return msg
}

const asyncOperation = async () => {
  return await null
}

/* ❗ERROR: "Promise executor functions should not be async." */
const promise1 = new Promise(async (resolve, _reject) => {
  await asyncOperation()
  resolve(null)
})
log(await promise1)

/* ✅ */
const promise2 = new Promise((resolve, _reject) => {
  resolve(null)
})
log(await promise2)
