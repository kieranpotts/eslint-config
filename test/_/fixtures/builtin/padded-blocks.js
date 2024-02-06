/*
https://eslint.org/docs/rules/padded-blocks

The top and bottom of classes, functions and control structures like
switches SHOULD be padded with empty lines. This improves readability and
helps to delimit different block contexts.
*/

/* eslint-disable no-unused-vars */

const test_value = 1

const doThis = () => {}
const doSomething = () => {}
const doSomethingElse = () => {}

const isTrue = () => {

  return true

}

/* ⚡WARNING: "Block must be padded by blank lines." */
/* ⚡WARNING: "Block must be padded by blank lines." */
if (isTrue()) {
  doThis()
}

if (isTrue()) {

  doThis()

}

class TestClass {

  static {

    doThis()

  }

}

/* ⚡WARNING: "Block must be padded by blank lines." */
/* ⚡WARNING: "Block must be padded by blank lines." */
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
