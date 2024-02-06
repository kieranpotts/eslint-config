/*
https://eslint.org/docs/latest/rules/no-new-wrappers

Primitive values MAY be created using `String()`, `Number()` and `Boolean()`,
but these wrappers SHOULD NOT be used with `new`. This creates object wrappers
around the primitive values, which can produce some unexpected behaviors in
logic.

The object wrappers for string, number and boolean primitive values exist in
JavaScript only to make available methods such as `substring()`, which is
provided via `String.prototype`. JavaScript engines temporarily wrap string,
number and boolean primitive types in wrapping objects to make these methods
available when the methods are accessed via dot notation. The wrapping objects
are then automatically discarded.

This primitive wrappers exist for internal plumbing in JavaScript engines and
are not meant to be used in application code.

However, there are sometimes valid use cases for creating wrapper objects
around these primitive values, so we only WARN for this.

See also `no-new-symbol`, `no-array-constructor` and `no-object-constructor`.
*/

/* ⚡WARNING: "Do not use String as a constructor." */
const _str1 = new String('Hello world')

/* ✅ */
const _str2 = String('Hello world')

/* ⚡WARNING: "Do not use Number as a constructor." */
const _num1 = new Number(42)

/* ✅ */
const _num2 = Number(42)

/* ⚡WARNING: "Do not use Boolean as a constructor." */
const _bool1 = new Boolean(false)

/* ✅ */
const _bool2 = Boolean(false)
