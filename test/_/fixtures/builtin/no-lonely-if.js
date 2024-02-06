/*
https://eslint.org/docs/latest/rules/no-lonely-if

If an `if` statement is the only statement within an `else` block, the code
SHOULD be refactored to `else if`.
*/

const isThis = () => {}
const isThat = () => {}

/* ⚡WARNING: "Unexpected if as the only statement in an else block." */
if (isThis()) {
  // …
} else {

  if (isThat()) {
    // …
  }
}

/* ✅ */
if (isThis()) {
  // …
} else if (isThat()) {
  // …
}
