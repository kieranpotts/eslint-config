/*
https://eslint.org/docs/latest/rules/no-throw-literal

Authors SHOULD throw only `Error` objects. The main benefit is these automatically
generate stack traces which are useful for debugging.
*/

/* ⚡WARNING: "Expected an error object to be thrown." */
throw 'error'

/* ✅ */
// eslint-disable-next-line no-unreachable
throw new Error()
