/*
https://eslint.org/docs/latest/rules/function-paren-newline

Recommend consistent use of newlines inside function parentheses. This rule
applies to both function declarations and function calls. If any of the
parameters/arguments has a line break between them, line breaks are required
after the first parenthesis and before the second one.

See also `function-call-argument-newline`.
*/

/* ⚡WARNING: "Expected newline after '('." */
const fn1 = (one,
  two,
) => {
  return one + two
}

/* ⚡WARNING: "Expected newline before ')'." */
const fn2 = (
  one,
  two) => {
  return one + two
}

/* ⚡WARNING: "Expected newline after '('." */
/* ⚡WARNING: "Expected newline before ')'." */
const fn3 = (one,
  two) => {
  return one + two
}

const one = 1
const two = 2

/* ⚡WARNING: "Expected newline after '('." */
fn1(one,
  two,
)

/* ⚡WARNING: "Expected newline before ')'." */
fn2(
  one,
  two)

/* ⚡WARNING: "Expected newline after '('." */
/* ⚡WARNING: "Expected newline before ')'." */
fn3(one,
  two)

/* ✅ */
const fn4 = (three, four) => {
  return three + four
}

/* ✅ */
const fn5 = (
  three,
  four,
) => {
  return three + four
}

const three = 3
const four = 4

/* ✅ */
fn4(three, four)

/* ✅ */
fn5(
  three,
  four,
)
