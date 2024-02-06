/*
https://eslint.org/docs/latest/rules/no-return-assign

Including assignment operators in `return` statement, though valid syntax,
creates ambiguity. For this reason, assignment SHOULD NOT happen in `return`
statements, not even if the assignment expression is encapsulated in
parentheses.
*/

const fn1 = () => {
  let _one = 1
  const _two = 2

  /* ⚡WARNING: "Return statement should not contain assignment." */
  return _one = _two + 3
}

fn1()

const fn2 = () => {
  let _one = 1

  /* ⚡WARNING: "Return statement should not contain assignment." */
  return _one += 1
}

fn2()

const fn3 = () => {
  let _one = 1

  /* ⚡WARNING: "Return statement should not contain assignment." */
  return (_one += 1)
}

fn3()

const fn4 = (value) => {
  const _one = 1

  /* ✅ This is okay. It's not assignment. */
  return value === _one + 2
}

fn4()
