/*
https://eslint.org/docs/latest/rules/yield-star-spacing

It is RECOMMENDED to write `yield*` without any spaces, as this is a single
distinct operator. There SHOULD be a space after the operator.

See also `generator-star-spacing`.
*/

/* eslint-disable no-unused-vars */

const other = () => {}

function* generator_one () {
  /* ✅ */
  yield* other()
}

function* generator_two () {
  /* ⚡WARNING: "Unexpected space before *." */
  /* ⚡WARNING: "Missing space after *." */
  yield *other()
}

function* generator_three () {
  /* ⚡WARNING: "Unexpected space before *." */
  yield * other()
}

function* generator_four () {
  /* ⚡WARNING: "Missing space after *." */
  yield*other()
}
