/*
https://eslint.org/docs/latest/rules/space-unary-ops

To improve readability, it is RECOMMENDED to add spaces before and after unary
operators that are words, such as `new`, `delete` and `typeof`.

This is NOT RECOMMENDED for unary operators that are symbols, such as `++`,
`!` and `!!`.
*/

/* eslint-disable no-unused-vars */

let i = 0
let test_structure = {
  one: 1,
}

/* ⚡WARNING: "Unary word operator 'typeof' must be followed by whitespace." */
typeof!i

/* ✅ */
typeof !i

/* ⚡WARNING: "Unary word operator 'void' must be followed by whitespace." */
// eslint-disable-next-line no-void
void(i)

/* ✅ */
// eslint-disable-next-line no-void
void i

/* ⚡WARNING: "Unary word operator 'new' must be followed by whitespace." */
new(Boolean)

/* ✅ */
new Boolean

/* ⚡WARNING: "Unary word operator 'delete' must be followed by whitespace." */
delete(test_structure.one)

/* ✅ */
delete (test_structure.one)

/* ⚡WARNING: "Unexpected space after unary operator '++'." */
++ i

/* ✅ */
++i

/* ⚡WARNING: "Unexpected space before unary operator '--'." */
i --

/* ✅ */
i--

function* generateThis() {

  /* ⚡WARNING: "Unary word operator 'yield' must be followed by whitespace." */
  yield(0)

  /* ✅ */
  yield 1

}

async function doThis() {

  /* ⚡WARNING: "Unary word operator 'await' must be followed by whitespace." */
  await(0)

  /* ✅ */
  await 1

}
