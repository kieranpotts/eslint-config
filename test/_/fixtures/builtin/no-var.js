/*
https://eslint.org/docs/latest/rules/no-var

The `var` keyword MUST NOT be used to declare variables. Although this is
allowed in JavaScript, it is widely considered to be bad practice and is a
common source of bugs. Authors MUST use `let` and `const` instead, which are
block-scoped rather than function-scoped, and are not subject to hoisting.
*/

/* ❗ERROR: "Unexpected var, use let or const instead." */
var one = 1

/* ✅ */
let two = 2

two = 3

/* ✅ */
const three = 3

console.log(one, two, three)
