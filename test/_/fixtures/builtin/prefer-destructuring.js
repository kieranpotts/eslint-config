/*
https://eslint.org/docs/latest/rules/prefer-destructuring

For conciseness, it is RECOMMENDED to destructure objects and arrays, rather
than accessing properties and elements through key names or indexes.
*/

/* eslint-disable no-unused-vars */

const test_array = [
  1,
  2,
  3,
]

const test_object = {
  'one': 1,
  'two': 2,
}

/* Variable declaration: */
/* ⚡WARNING: "Use array destructuring." */
let one = test_array[0]

/* Assignment expression: */
/* ⚡WARNING: "Use array destructuring." */
one = test_array[0]

/* ✅ */
;[
  one,
] = test_array

/* Assignment expression: */
/* ⚡WARNING: "Use array destructuring." */
test_object.three = test_array[2]

/* ✅ */
;[
  test_object.three,
] = test_array

/* Variable declaration: */
/* ⚡WARNING: "Use object destructuring." */
let two = test_object.two

/* Assignment expression: */
/* ⚡WARNING: "Use object destructuring." */
two = test_object.two

/* Variable declaration: */
/* ⚡WARNING: "Use object destructuring." */
// eslint-disable-next-line dot-notation
let three = test_object['three']

/* ✅ */
;({
  two,
  three,
} = test_object)

/* We've disabled the option to `enforceForRenamedProperties`, which would
have flagged the first of the following two syntaxes – but this is more
readable than the second syntax, which used destructuring with mapping of
the property to a new variable name. */

/* ✅ */
const four = test_object.one

/* ✅ */
const { 'one': five } = test_object
