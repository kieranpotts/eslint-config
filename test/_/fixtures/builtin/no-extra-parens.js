/*
https://eslint.org/docs/latest/rules/no-extra-parens

Extra parentheses SHOULD be added wherever doing do improves the understanding
of the logic.

There are so many exceptions to this rule, that it is basically turned off in
most use cases, so giving authors a lot of flexibility over where extra
parentheses are used.

See also the `no-mixed-operators` rule, which recommends wrapped nested binary
operator expressions in parentheses in some cases.
*/

const one = 1
const two = 2
const three = 3
const four = 4

/* Binary operators */
/* ✅ */
const _result1 = (one && two) || three || four
const _result2 = (one * two) + three

/* ⚡WARNING: "Unnecessary parentheses around expression." */
const _result3 = (two * three)

/* Allow extra parentheses around binary expressions that are operands of
ternary operators. */
/* ✅ */
const _result4 = (one && two) ? three : four

/* Allow extra parentheses around ternary expressions which are the body of an
arrow function that is not wrapped in block notation. */
/* ✅ */
// eslint-disable-next-line arrow-body-style
const _result5 = (param) => (param ? 2 : 3)

/* Single parentheses around function expressions are allowed… */
/* ✅ */
// eslint-disable-next-line no-unused-expressions
;(function named () {
  // …
})

/* … but will warn about extra superfluous ones. */
/* ⚡WARNING: "Unnecessary parentheses around expression." */
;((function named () {
  // …
}))()

/* IIFEs are ignored by this rule. */
/* ✅ */
;(() => {
  // …
})()

const doThis = () => {}
let _value

/* Allow parentheses around assignments in conditionals. */
/* ✅ */
if ((_value = doThis())) {
  // …
}

/* Allow parentheses around assignments in `return` statements. */
/* ✅ */
const doThat = () => {
  // eslint-disable-next-line no-return-assign
  return (_value = doThis())
}

doThat()
