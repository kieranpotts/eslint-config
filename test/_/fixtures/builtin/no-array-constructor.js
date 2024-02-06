/*
https://eslint.org/docs/latest/rules/no-array-constructor

The Array constructor SHOULD NOT be used to construct new Array instances.
Instead, array literal notation SHOULD be used.

Array literal notation is more concise and using it also protects against the
`Array` global being redefined elsewhere in the code.

The Array constructor MAY be used to create "sparse arrays", ie arrays with an
initial length but empty slots with no values added to them yet.
*/

/* ⚡WARNING: "The array literal notation [] is preferable." */
const _arr1 = new Array(0, 1, 2)

/* ✅ */
const _arr2 = [
  0,
  1,
  2,
]

/* ✅ Sparse arrays are okay. */
const _arr3 = new Array(42)
