/*
https://eslint.org/docs/latest/rules/space-in-parens

For consistency, it is RECOMMENDED to not pad the contents of parentheses with
additional empty space.
*/

/* eslint-disable no-unused-vars */

/* ⚡WARNING: "There should be no space after this paren." */
/* ⚡WARNING: "There should be no space before this paren." */
const testFn = ( ...args ) => {
  // …
}

/* ✅ */
const testFnTwo = (...args) => {
  // …
}

/* ⚡WARNING: "There should be no space after this paren." */
/* ⚡WARNING: "There should be no space before this paren." */
testFn( 1, 2, 3 )

/* ✅ */
testFn(1, 2, 3);

/* ⚡WARNING: "There should be no space after this paren." */
/* ⚡WARNING: "There should be no space before this paren." */
( 1 + 2 ) * 3;

/* ✅ */
(1 + 2) * 3;

/* ⚡WARNING: "There should be no space after this paren." */
/* ⚡WARNING: "There should be no space before this paren." */
( function () {
  return true
} )();

/* ✅ */
(function () {
  return true
})()

/* Empty parentheses SHOULD NOT be padded. */

/* ⚡WARNING: "There should be no space after this paren." */
/* ⚡WARNING: "There should be no space before this paren." */
const testFnThree = ( ) => {
  return true
}

/* For simplicity, parentheses SHOULD NOT be padded, even if they "touch"
other types of brackets, eg `[]` or `{}`. */

/* ⚡WARNING: "There should be no space after this paren." */
/* ⚡WARNING: "There should be no space before this paren." */
const testFnFour = ( {
  one,
  two,
} ) => {
  return one + two
}

/* ✅ */
const testFnFive = ({
  one,
  two,
}) => {
  return one + two
}
