/*
https://eslint.org/docs/latest/rules/no-unmodified-loop-condition

Variables in a loop condition MUST be modified in the loop. If they are not,
this is almost certainly a logic error.
*/

const doSomething = () => {}

let is_true = true

/* ✅ */
/* ❗ERROR: "'is_true' is not modified in this loop." */
while (is_true) {
  doSomething(is_true)
}

/* ❗ERROR: "'is_true' is not modified in this loop." */
while (is_true) {
  doSomething()
}

/* ✅ */
while (is_true) {
  is_true = false
}
