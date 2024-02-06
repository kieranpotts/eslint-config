/*
https://eslint.org/docs/latest/rules/no-sparse-arrays

The following syntax is valid, but confusing. This example creates an array
of length 2 (the last comma is ignored) but with no values in its slots.

  const arr = [,,]

If you do mean to create an array of a predefined length but with empty
slots, you can still use this alternative syntax:

  const arr = new Array(2)
*/

/* ⚡WARNING: "Unexpected comma in middle of array." */
const _arr1 = [
  ,
  ,
]

/* ✅ */
const _arr2 = new Array(2)
