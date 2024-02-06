/*
https://eslint.org/docs/latest/rules/template-curly-spacing

Authors SHOULD NOT add unnecessary spacing within the curly braces of
embedded expressions in template literal strings, unless the expression
is line-wrapped.
*/

/* eslint-disable no-unused-vars */

const person = {
  name: 'Bob',
}

/* ✅ */
let test_one = `hello, ${person.name}!`

/* ⚡WARNING: "Unexpected space(s) after '${'." */
/* ⚡WARNING: "Unexpected space(s) before '}'." */
let test_two = `hello, ${ person.name }!`

/* ✅ */
let test_three = `hello, ${
  person.name
}!`
