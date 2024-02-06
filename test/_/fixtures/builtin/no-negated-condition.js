/*
https://eslint.org/docs/latest/rules/no-negated-condition

Negated conditions SHOULD BE avoided in the opening condition for `if`
conditionals and ternaries. Often such code can be made more readable by
inverting the condition instead.
*/

const one = 1
const two = 2
const three = 3

const doSomething = () => {}
const doSomethingElse = () => {}

/* ⚡WARNING: "Unexpected negated condition." */
if (!one) {
  doSomething()
} else {
  doSomethingElse()
}

/* ✅ */
if (one) {
  doSomethingElse()
} else {
  doSomething()
}

/* ⚡WARNING: "Unexpected negated condition." */
if (one !== two) {
  doSomething()
} else {
  doSomethingElse()
}

/* ✅ */
if (one === two) {
  doSomethingElse()
} else {
  doSomething()
}

/* ⚡WARNING: "Unexpected negated condition." */
const _result1 = !one ? two : three

const _result2 = one ? three : two
