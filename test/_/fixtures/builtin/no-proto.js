/*
https://eslint.org/docs/latest/rules/no-proto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

The `__proto__` property MUST NOT be used in code. Although this has been
standardized, it has been done so only to encourage consistent implementation
in web browsers, but this feature is now marked as deprecated as of ES 3.1
and it may not work in modern JavaScript runtime environments.

Use `Object.getPrototypeOf()` and `Object.setPrototypeOf()` instead.
*/

const test_object = {}

/* ❗ERROR: "The '__proto__' property is deprecated." */
const _proto1 = test_object.__proto__

/* ❗ERROR: "The '__proto__' property is deprecated." */
// eslint-disable-next-line dot-notation
const _proto2 = test_object['__proto__']

/* ❗ERROR: "The '__proto__' property is deprecated." */
// eslint-disable-next-line id-match
test_object.__proto__ = {}

/* ❗ERROR: "The '__proto__' property is deprecated." */
// eslint-disable-next-line dot-notation
test_object['__proto__'] = {}

/* ✅ */
const _proto3 = Object.getPrototypeOf(test_object)

/* ✅ */
Object.setPrototypeOf(test_object, {})
