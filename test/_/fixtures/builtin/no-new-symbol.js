/*
https://eslint.org/docs/latest/rules/no-new-symbol

`Symbol` MUST NOT be used with the `new` operator. Doing so throws a TypeError.

  const _value = new Symbol('value')

This is actually a duplicate of the `no-new-native-nonconstructor` rule,
so we've turned this one off.

See also `no-new-wrappers`.
*/

/* eslint no-new-symbol: "error" */

/* ❗ERROR (no-new-native-nonconstructor): "`Symbol` cannot be called as a constructor." */
/* ❗ERROR (no-new-symbol): "`Symbol` cannot be called as a constructor." */
const _value1 = new Symbol('value1')

/* ✅ */
const _value2 = Symbol('value2')
