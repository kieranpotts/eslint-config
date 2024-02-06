/*
https://eslint.org/docs/latest/rules/require-await

Asynchronous functions MUST have an `await` operator inside them.

Asynchronous functions without an `await`, which behave as expected, can be
simply refactored to synchronous functions. However, if it is intended that
the function not return until another asynchronous operation has fulfilled,
then the missing `await` may produce unexpected results (bugs). For this
reason, this mistake is flagged as an error.

There may be a few edge cases where it is intended to define an `async`
function that does not `await` on anything else. This rule MAY be disabled for
individual functions, as long as comments are left explaining why the design
pattern is necessary.

NOTE: This rule ignores async generator functions, where it is valid to
not have any inner `await` keywords.
*/

/* eslint-disable no-unused-vars */

async function doThatAsync () {}

/* ❗ERROR: "Async function 'doThisAsync' has no 'await' expression." */
async function doThisAsync () {
  doThatAsync()
}

/* ✅ */
function doThisSync () {
  doThatAsync()
}

/* ✅ */
async function doThisAsyncCorrect () {
  await doThatAsync()
}
