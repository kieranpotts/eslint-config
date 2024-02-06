/*
https://eslint.org/docs/latest/rules/keyword-spacing

In object literals, there SHOULD NOT be any spaces before the colon, but
there SHOULD be at least one space after the colon and before the value.
Additional spaces MAY be added after the colon to line-up values on the same
colon, for improved readability, but this is OPTIONAL.

See also `no-multi-spaces`, which configures similar rules for additional
blank space in other contexts, such as in variable declarations and
assignments.
*/

/* eslint-disable no-unused-vars */

/* ⚡WARNING: "Extra space after key 'life'." */
const test_one = {
  life : 42,
}

/* ⚡WARNING: "Missing space before value for key 'life'." */
const test_two = {
  life:42,
}

/* ✅ */
const test_three = {
  one: 1,
  two: 2,
  three: 3,
}

/* ✅ */
const test_four = {
  one:   1,
  two:   2,
  three: 3,
}

/* Our style guides does NOT RECOMMEND writing multi-property object literals
on a single line, but in case that rule is ignored, we've got refined rules
for spacing in single-line object literals. In this case, there SHOULD NOT
be any additional spacing, but there SHOULD be exactly one space after the
colon and EXACTLY zero spaces before it. */

/* ⚡WARNING: "Missing space before value for key 'one'." */
/* ⚡WARNING: "Extra space before value for key 'two'." */
/* ⚡WARNING: "Extra space after key 'three'." */
// eslint-disable-next-line object-curly-newline, object-property-newline
const test_five = { one:1, two:  2, three : 3 }

/* ✅ */
// eslint-disable-next-line object-curly-newline, object-property-newline
const test_six = { one: 1, two: 2, three: 3 }
