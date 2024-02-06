/*
https://eslint.org/docs/latest/rules/no-return-await

We've turned off the `no-return-await` rule, which is deprecated in ESLint
v8.46.0 and will (presumably) be removed entirely in a future release.

The original idea of banning use of `return await` was to optimize the
execution of async functions. Early in the implementation of async APIs,
JavaScript engines, when awaiting resolution of Promises within `async`
functions, kept the outer `async` function in the call stack, slowing down
execution.

But JavaScript engines have since improved how they handle Promises, and the
use of `return await` is no longer a performance issue. This V8 blog entry has
more technical details on this: https://v8.dev/blog/fast-async
*/

const callback = async () => {
  return await null
}

/* In earlier versions of ESLint, this returned a `no-return-await`
error by default, with the message "Redundant use of `await` on a
return value".This was considered redundant because the return value of
the inner Promise would be automatically wrapped in another Promise by
the outer `async` function. Therefore, authors could just return the
inner Promise directly. */

/* ✅ */
const fn1 = async () => {
  return await callback()
}

/* But it was okay to use `return await` inside a `try-catch` block,
which was a valid design pattern for handling possible exceptions thrown from
within the asynchronous callback. */

/* ✅ */
const fn2 = async () => {
  try {
    return await callback()
  } catch (error) {
    return null
  }
}

/* Previously, the above function `fn1` would have needed to be refactored. The
following refactoring is equivalent to using `return await`, and thus had the
same performance issues in earlier JavaScript engines, but ESLint's
`no-return-await` rule did not pick this up, so it was a handy workaround. */

/* ✅ */
const fn3 = async () => {
  const result = await callback()
  return result
}

/* Alternatively, if the return value of the outer `async` function did not
depend on the return value of the inner Promise, the code could be refactored
like this: */

/* ✅ */
const fn4 = async () => {
  await callback()
  return null
}

/* Alternatively, the outer function could simply be refactored to
a synchronous function that returns the same Promise returned from the
inner function. */

/* ✅ */
const fn5 = () => {
  return callback()
}

await fn1()
await fn2()
await fn3()
await fn4()
await fn5()
