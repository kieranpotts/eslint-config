/*
https://eslint.org/docs/latest/rules/rest-spread-spacing

As with operators, ECMAScript allows empty space between rest and spread
operators, and the expressions they operate on. Authors should be consistent
in their use of this optional spacing. In this case, it is RECOMMENDED to
exclude the empty space between the rest and spread operators and their
expressions. This improves readability. It is clearer what values the operator
is operating on.
*/

/* eslint-disable no-unused-vars */

const doThis = () => {}
const one_two_three = [
  1,
  2,
  3,
]

/* ⚡WARNING: "Unexpected whitespace after spread operator." */
doThis(... one_two_three)

/* ✅ */
doThis(...one_two_three)

const new_list = [
  /* ⚡WARNING: "Unexpected whitespace after spread operator." */
  ... one_two_three,
  4,
  5,
  6,
]
