/*
https://eslint.org/docs/latest/rules/sort-keys

It is RECOMMENDED to sort object keys alphabetically. This improves
readability and maintainability.
*/

/* eslint-disable no-unused-vars */

/* ✅ */
const test_one = {
  alpha: 'a',
  bravo: 'b',
}

const test_two = {
  Bravo: 'b',
  /* ⚡WARNING: "Expected object keys to be in natural insensitive ascending order. 'brava' should be before 'Bravo'." */
  brava: 'b',
  /* ⚡WARNING: "Expected object keys to be in natural insensitive ascending order. 'alpha' should be before 'brava'." */
  alpha: 'a',
}

/* Natural sorting is enabled, so the number 10 is expected to come after 3. */
const test_three = {
  '3': 3,
  '10': 10,
  /* ⚡WARNING: "Expected object keys to be in natural insensitive ascending order. '7' should be before '10'." */
  '7': 7,
}

/* Sort order can be reset simply by adding empty lines within an object
structure, so visually organizing the properties into groups. */
const test_four = {
  '3': 3,
  '10': 10,

  '5': 5,
  '7': 7,

  '6': 6,
}
