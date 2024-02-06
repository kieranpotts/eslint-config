/*
https://eslint.org/docs/latest/rules/use-isnan

In JavaScript, `NaN` is a special value of the `Number` type. Uniquely in
JavaScript, this value is not equal to anything, not even itself, therefore
it cannot be used for comparisons.

Instead, the `Number.isNaN()` static method MUST be used to test for `NaN`
values. ESLint also allows use of the older global `isNaN()` function, but this
is also buggy in a few edge cases and SHOULD NOT be used.
*/

const test_var = 1

/* ❗ERROR: "Use the isNaN function to compare with NaN." */
if (test_var === NaN) {
  // …
}

/* ✅ This is okay… */
if (isNaN(test_var)) {
  // …
}

/* ✅ … but this is better. */
if (Number.isNaN(test_var)) {
  // …
}
