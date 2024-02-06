/*
https://eslint.org/docs/latest/rules/no-unsafe-finally

Control flow statements MUST NOT be written in `finally` blocks. Doing so
will cause unexpected behaviors.

This is a quirk of JavaScript. Control flow statements such as `return` in
`try` and `catch` blocks are not executed until after `finally` has been run.

Therefore, any control flow statements in `finally` will actually be executed
before any control flow statements in `try` and `catch`.
*/

/* Logically, we would expect this function to return 1.
It actually returns 3! */
(() => {
  try {
    return 1
  } catch(_error) {
    /* Unreachable code. */
  } finally {
    /* ❗ERROR: "Unsafe usage of ReturnStatement." */
    return 3
  }
})()
