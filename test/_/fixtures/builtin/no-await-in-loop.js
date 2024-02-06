/*
https://eslint.org/docs/latest/rules/no-await-in-loop

This rule recommends not using `await` inside loops.

When doing an operation on each element of an iterable and awaiting an
asynchronous task, it's often an indication that the program is not
taking full advantage of JavaScript's event-driven architecture. By
executing the tasks in parallel instead, you could greatly improve
the efficiency of your code.
*/

const log = (msg) => {
  return msg
}

const urls = []
const fetch = async (resource, options) => {
  return await null
}

/ ⚡WARNING: "Unexpected `await` inside a loop." */
for (const url of urls) {
  const response = await fetch(url)
  log(response)
}

/* Better to use `Promise.all()` with a for-of loop. */

/* ✅ */
const promises = []
for (const url of urls) {
  const response = fetch(url)
  promises.push(response)
}
let responses = await Promise.all(promises)

/* Or, better still, use `Promise.all()` with `Array.prototype.map()`. */

/* ✅ */
responses = await Promise.all(urls.map(async (url) => {
  const response = await fetch(url)
  return response
}))
log(responses)

/* A more advanced approach is to create an async iterable, which can then
be iterated through with a `for-await-of`. See:
https://exploringjs.com/es2018-es2019/ch_asynchronous-iteration.html#for-await-of */
