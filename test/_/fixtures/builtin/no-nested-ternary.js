/*
https://eslint.org/docs/latest/rules/no-nested-ternary

Ternary expressions MAY be nested, but it is RECOMMENDED to not nest more
than one ternary expression.

This rule is disabled.
*/

const ifThis = () => {}
const elseThat = () => {}

const value1 = 1
const value2 = 2
const value3 = 3

/* ✅ */
const _result1 = ifThis() ? value1 : elseThat() ? value2 : value3

/* ✅ The if/else alternative is more verbose, but arguably more readable: */
let _result2

if (ifThis()) {
  _result2 = value1
} else if (elseThat()) {
  _result2 = value2
} else {
  _result2 = value3
}
