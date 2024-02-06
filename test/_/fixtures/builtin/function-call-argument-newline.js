/*
https://eslint.org/docs/latest/rules/function-call-argument-newline

Recommend consistent application of line breaks between arguments of a
function call. Either all arguments MUST be separated by a new line, or all
the arguments MUST be on the same line.

See also the rule for `function-paren-newline`.
*/

const one = 1
const two = 2
const three = 3

const fn1 = () => {
  return null
}
const fn2 = () => {
  return null
}
const fn3 = () => {
  return null
}

/* ⚡WARNING: "There should be no line break here." */
fn1(
  one, two,
  three,
)

/* ⚡WARNING: "There should be no line break here." */
fn2(
  one, two,
  {
    three,
  },
)

/* ⚡WARNING: "There should be no line break here." */
fn3(
  one, two,
  () => {
    return null
  },
)

/* ✅ */
fn1(one, two, three)

/* ✅ */
fn1(
  one,
  two,
  three,
)

/* ✅ */
fn2(one, two, {
  three,
})

/* ✅ */
fn2(
  one,
  two,
  {
    three,
  },
)

/* ✅ */
fn3(one, two, () => {
  return null
})

/* ✅ */
fn3(
  one,
  two,
  () => {
    return null
  },
)
