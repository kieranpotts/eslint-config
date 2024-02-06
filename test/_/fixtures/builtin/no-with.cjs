/*
https://eslint.org/docs/latest/rules/no-with

The dangerous `with` keyword was deprecated in ES5 and is not available in
strict mode.
*/

/* eslint-disable strict */

const point = null

/* ❗ERROR: "Unexpected use of 'with' statement." */
with (point) {
  // …
}
