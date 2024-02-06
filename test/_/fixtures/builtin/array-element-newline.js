/*
https://eslint.org/docs/latest/rules/array-element-newline

Recommend placing each element of an array on a separate line.

See also `array-bracket-newline`, which defines the rules for adding line
breaks after the opening bracket of an array, and before the closing bracket.
And see also `object-property-newline`, which implements the same rules for
properties within object literal syntax.
*/

const log = (...args) => {
  return args
}

/* ✅ */
const arr0 = []

/* ✅ */
const arr1 = [
  1,
]

/* ⚡WARNING: "There should be a linebreak after this element." */
/* ⚡WARNING: "There should be a linebreak after this element." */
const arr2 = [
  1, 2, 3
]

/* ✅ */
const arr3 = [
  1,
  2,
  3,
]

log(arr0, arr1, arr2, arr3)

/* Array patterns (in destructuring assignment) must basically follow the same
rules. ESLint does not give us as much flexibility over rules for
`array-bracket-newline` in the context of array destructuring. We can set
different rules for the curly braces around object literals and object
destructuring assignments, but the rules must be the same for array literals
and array destructuring. */

/* ⚡WARNING: "A linebreak is required after '['." */
/* ⚡WARNING: "A linebreak is required before ']'." */
const [first] = arr3

/* ✅ */
const [
  item1
] = arr3

/* ⚡WARNING: "There should be a linebreak after this element." */
const [
  item_a, item_b
] = arr3

/* ✅ */
const [
  val_a,
  val_b,
  val_c,
] = arr3

log(first, item1, item_a, item_b, val_a, val_b, val_c)
