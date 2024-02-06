/*
https://eslint.org/docs/latest/rules/default-case

It is RECOMMENDED to always include `default` cases in `switch` statements,
even if the default case is empty. Alternatively, a comment with the exact
text "No default." MAY be written in the place of the default case.

It is better to explicitly state what the default behavior should be, to make
it clear the design is intentional.
*/

const test_value = 1
const doSomething = () => {}
const doSomethingElse = () => {}

/* ⚡WARNING: "Expected a default case." */
switch (test_value) {
  case 1:
    doSomething()
    break

  case 2:
    doSomethingElse()
    break
}

/* ✅ */
switch (test_value) {
  case 1:
    doSomething()
    break

  case 2:
    doSomethingElse()
    break

  default:
    /* Do nothing. */
}

/* ✅ */
switch (test_value) {
  case 1:
    doSomething()
    break

  case 2:
    doSomethingElse()
    break

  /* No default. */
}
