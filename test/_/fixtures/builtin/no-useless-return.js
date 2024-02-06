/*
https://eslint.org/docs/latest/rules/no-useless-return

`return` statements with nothing after them in their function's scope are
redundant and therefore SHOULD be removed.
*/

const doThis = () => {
  // …

  /* ⚡WARNING: "Unnecessary return statement." */
  return
}

const is_true = true

/* ✅ */
const doThat = () => {
  if (is_true) {
    return
  }

  console.log('...')
}

console.log(doThis(), doThat())
