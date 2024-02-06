/*
https://eslint.org/docs/latest/rules/no-unneeded-ternary

A common pattern is to use a ternary expression to select between two boolean
values:

  const is_yes = (answer === 1 ? true : false)

This SHOULD be refactored to use only the test expression to return the
boolean value, like this:

  const is_yes = (answer === 1)`

Another common pattern is to use the same variable as both the conditional test
and one of the consequent values:

  const result = (value ? value : 1)

This SHOULD be refactored to use logical OR to achieve the same functionality:

  const result = value || 1
*/

const x = 0

/* ⚡WARNING: "Unnecessary use of boolean literals in conditional expression." */
const test_one = (x === 2 ? true : false)

console.log(test_one)

/* ⚡WARNING: "Unnecessary use of conditional expression for default assignment." */
const test_two = x ? x : 1

console.log(test_two)
