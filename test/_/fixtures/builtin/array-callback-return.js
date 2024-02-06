/*
https://eslint.org/docs/latest/rules/array-callback-return

For `Array.prototype` methods like `find()` and `map()`, it is required
for the callback functions passed to those methods to return some kind of
value. Not including an explicit `return` statement is probably, therefore,
a programming mistake.
*/

const log = (...args) => {
  return args
}

const arr = [
  1,
  2,
  3,
]

/* ❗ERROR: "Array.prototype.reduce() expects a return value from arrow function." */
const index_map = arr.reduce((previous_value, current_value, index) => {
  previous_value[current_value] = index
}, {})

/* ✅ */
const index_map_fixed = arr.reduce((previous_value, current_value, index) => {
  previous_value[current_value] = index
  return previous_value
}, {})

/* Implicit returns are not good enough - we should explicitly define the
return value, even if it is indeed `undefined`. */
const filtered = arr.filter((item) => {
  if (item) {
    return true
  } else {
    /* ❗ERROR:  "Array.prototype.filter() expects a return value from arrow function." */
    return
  }
})

const filtered_fixed = arr.filter((item) => {
  if (item) {
    return true
  } else {
    return undefined
  }
})

/* This rule is configured to throw errors when `return` statements *are*
included in `forEach()` callbacks. Return statements should be removed
from `forEach()` callbacks. Another design pattern is to use `void` as a
way of explicitly saying "the return value is not relevant", but this is
superfluous. */

arr.forEach((item) => {
  /* ❗ERROR: "Array.prototype.forEach() expects no useless return value from arrow function." */
  return log(item)
})

/* ❗ERROR: "Array.prototype.forEach() expects no useless return value from arrow function." */
arr.forEach((item) => {
  return void log(item)
})

/* ✅ */
arr.forEach((item) => {
  log(item)
})

log(index_map, index_map_fixed, filtered, filtered_fixed)
