/*
https://eslint.org/docs/latest/rules/prefer-object-has-own

Introduced in ES2022, `Object.hasOwn()` is a shorter alternative to
`Object.prototype.hasOwnProperty.call()`. It SHOULD be used unless the
target environment does not support it and the source code is not
transpiled before distribution.
*/

const test_object = {
  'one': 1,
  'two': 1,
}

/* ✅ */
Object.hasOwn(test_object, 'one')

/* ⚡WARNING: "Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'." */
Object.prototype.hasOwnProperty.call(test_object, 'one')

/* ⚡WARNING: "Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'." */
Object.hasOwnProperty.call(test_object, 'one')

/* ⚡WARNING: "Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'." */
;({}).hasOwnProperty.call(test_object, 'one')
