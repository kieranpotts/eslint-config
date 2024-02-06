/*
https://eslint.org/docs/latest/rules/no-magic-numbers

"Magic numbers" are a programming anti-pattern. This term-of-art refers to
hardcoded numbers whose meaning is not explicitly defined in th code.

Magic numbers SHOULD NOT appear in code. However, the numbers 0-10 are allowed
as these are commonly used in code and their meaning can often be determined
from the context in which they are used.

This rule is also configured to ignore array indexes.
*/

const duty_free_price = 100

/* ⚡WARNING: "No magic number: 0.25." */
const _final_price1 = duty_free_price + (duty_free_price * 0.25)

const tax = 0.25
const config = {
  tax,
}

/* ✅ */
const _final_price2 = duty_free_price + (duty_free_price * config.tax)

const numbers = [
  1,
  2,
  3,
]

/* ✅ */
// eslint-disable-next-line prefer-destructuring
const _alt_one = numbers[0]

/* But array destructuring is preferred: */
const [
  _one,
  _two,
  _three,
] = numbers
