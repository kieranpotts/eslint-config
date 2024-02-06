/*
https://eslint.org/docs/latest/rules/default-case-last

It is RECOMMENDED that `default` cases are always the last case in
`switch` statements. This makes logical sense from a readability perspective,
though it makes no difference to the JavaScript engine – the behavior is the
same if the `default` case is written first or anywhere else in the
conditional block.

It is possible for the flow to "fall through" from the `default` case to cases
written after it, but this design pattern is rarely used.
*/

const test_value = 1
const doSomething = () => {}
const doSomethingElse = () => {}

switch (test_value) {

  /* ⚡WARNING: "Default clause should be the last clause." */
  default:
    break

  case 1:
    doSomething()
    break

  case 2:
    doSomethingElse()

    break

}


switch (test_value) {

  case 1:
    doSomething()

    break

  /* ⚡WARNING: "Default clause should be the last clause." */
  default:

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
    break

}
