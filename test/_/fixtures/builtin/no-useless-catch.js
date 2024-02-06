/*
https://eslint.org/docs/latest/rules/no-useless-catch

Redundant `catch` blocks, which only rethrow the original error value,
SHOULD be removed.
*/

const doThis = () => {}

/* ⚡WARNING: "Unnecessary try/catch wrapper." */
try {
  doThis()
} catch (error) {
  throw error
}
