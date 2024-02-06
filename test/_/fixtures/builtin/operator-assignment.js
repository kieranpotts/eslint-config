/*
https://eslint.org/docs/latest/rules/operator-assignment

ECMAScript provides shorthand operators that combine variable assignment with
simple math operations. For example, `x = x + 4` can be written in the shorthand
`x += 4`.

Shorthand operators SHOULD be used wherever possible.
*/

/* eslint-disable no-unused-vars */

let x = 1
const y = 1
const z = 1

/* ⚡WARNING */
x = x + y

/* ⚡WARNING */
x = y * x

/* ✅ */
x += y

/* ✅ */
x *= y
