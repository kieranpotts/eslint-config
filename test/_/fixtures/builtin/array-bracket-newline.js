/*
https://eslint.org/docs/latest/rules/array-bracket-newline

Consistent with object literal syntax, an empty array may have its opening and
closing brackets on the same line, but the brackets SHOULD be on different lines
if there is one element or more.

If there are line breaks between items in an array, or if the length of
the array is greater than 3, then it is required for the opening and
closing brackets of the array to be on their own lines.

See also `array-element-newline`, which defines the rules for adding line
breaks between elements within arrays, and `object-curly-newline`, which
implements the same rules for object braces.
*/

const log = (...args) => {
  return args
}

/* ⚡WARNING: "There should be no linebreak after '['." */
/* ⚡WARNING: "There should be no linebreak before ']'." */
const arr1 = [
]

/* ⚡WARNING: "A linebreak is required after '['." */
/* ⚡WARNING: "A linebreak is required before ']'." */
const arr2 = [1]

/* ⚡WARNING: "A linebreak is required after '['." */
/* ⚡WARNING: "A linebreak is required before ']'." */
const arr3 = [1,
  2]

/* ⚡WARNING: "A linebreak is required after '['." */
/* ⚡WARNING: "A linebreak is required before ']'." */
// eslint-disable-next-line array-element-newline
const arr4 = [1, 2]

/* ✅ */
const arr5 = []

/* ✅ */
const arr6 = [
  1,
]

/* ✅ */
const arr7 = [
  1,
  2,
]

log(arr1, arr2, arr3, arr4, arr5, arr6, arr7)
