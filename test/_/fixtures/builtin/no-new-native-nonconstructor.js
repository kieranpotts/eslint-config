/*
https://eslint.org/docs/latest/rules/no-new-native-nonconstructor

There are some native ECMAScript functions that MUST NOT be used with the
`new` operator when called. Doing so will throw a TypeError at runtime. Currently,
those functions are:

- Symbol
- BigInt

This rule seems to do the same as `no-new-symbol`. See also `no-obj-calls`,
which serves a similar purpose.
*/

/* ❗ERROR: "`Symbol` cannot be called as a constructor." */
const _value1 = new Symbol('value1')

/* ✅ */
const _value2 = Symbol('value2')

/* ❗ERROR: "`BigInt` cannot be called as a constructor." */
const _value3 = new BigInt(9007199254740991)

/* ✅ */
const _value4 = BigInt(9007199254740991)
