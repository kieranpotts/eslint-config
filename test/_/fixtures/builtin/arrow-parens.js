/*
https://eslint.org/docs/latest/rules/arrow-parens

Arrow functions can omit parentheses when they have exactly one parameter. In
all other cases the parameter(s) must be wrapped in parentheses. Our style
guide recommends parentheses in all cases, regardless of arity, for better
readability.
*/

/* ⚡WARNING: "Expected parentheses around arrow function argument." */
const arrow = arg => {
  return arg
}
arrow('one')

/* ✅ */
const arrow2 = (arg) => {
  return arg
}
arrow2('one')
