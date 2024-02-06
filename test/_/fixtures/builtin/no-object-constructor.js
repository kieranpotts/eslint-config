/*
https://eslint.org/docs/latest/rules/no-object-constructor
https://eslint.org/docs/latest/rules/no-new-object

The Object constructor MAY be used to create new generic objects

  const obj = new Object()

But this is no different from using object literal syntax, which SHOULD be
preferred:

  const obj = {}

This rule replaces `no-new-object` from ESLint 8.50.0 onwards.

See also `no-array-constructor` and `no-new-wrappers`.
*/

/* ⚡WARNING (no-new-object): "The object literal notation {} is preferable." */
/* ⚡WARNING (no-object-constructor): "The object literal notation {} is preferable." */
const _obj1 = new Object()

/* ✅ */
const _obj2 = {}
