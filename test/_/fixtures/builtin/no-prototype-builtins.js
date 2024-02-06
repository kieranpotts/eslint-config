/*
https://eslint.org/docs/latest/rules/no-prototype-builtins

When using builtin prototypes, it is RECOMMENDED to use this syntax:

  Object.prototype.hasOwnProperty.call(target_object, 'target_property')

Rather than:

  target_object.hasOwnProperty('target_property')

The second style, though entirely valid, can be the source of bugs in the
following edge cases:

- Where objects have "own" properties that override the built-in properties
  inherited from `Object.prototype`.

- `Object.create(null)` is a common pattern to create objects that will be
  used as maps. But this can lead to unexpected errors when it is assumed
  those objects will have the properties inherited from `Object.prototype`
  (they will not).

These are subtle, rare bugs. But when they do happen, the source of the bug
can be very difficult to diagnose. For this reason, we have configured this
rule to raise an ERROR when properties inherited from `Object.prototype` are
accessed directly. Authors MUST therefore use `Function.prototype.call()` to
indirectly call `Object.prototype` methods.
*/

const test_object = Object.create()

/* ❗ERROR: "Do not access Object.prototype method 'hasOwnProperty' from target object." */
let _has_own_property = test_object.hasOwnProperty('prop')

/* ✅ */
// eslint-disable-next-line prefer-object-has-own
_has_own_property = Object.prototype.hasOwnProperty.call(test_object, 'prop')

/* ✅ */
_has_own_property = Object.hasOwn(test_object, 'prop')
