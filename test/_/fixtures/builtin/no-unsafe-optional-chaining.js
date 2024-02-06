/*
https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining

Optional chaining using the `?.` operator is a short-cut to returning a
value of `undefined` when the accessed properties do not exist.

Unfortunately, there are many cases where a `TypeError` is thrown in JavaScript
when operating on `undefined` values at runtime. These are logical errors which
this rule aims to flag early at build time.
*/

const undef = undefined

/* ❗ERROR: "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError." */
const found = 1 in undef?.prop

console.log(found)

const test_var = 1

/* ❗ERROR: "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError." */
if (test_var instanceof undef?.prop) {
  // …
}

/* ❗ERROR: "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError." */
const { value } = undef?.prop

console.log(value)

/* ❗ERROR: "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError." */
;(undef?.prop)()

/* ❗ERROR: "Unsafe arithmetic operation on optional chaining. It can result in NaN." */
/* ❗ERROR: "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError." */
undef?.prop + 1
