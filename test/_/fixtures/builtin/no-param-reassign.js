/*
https://eslint.org/docs/latest/rules/no-param-reassign

Function parameters SHOULD NOT be reassigned in the function body.

It is RECOMMENDED to treat function parameters as read-only, immutable
variables. This is cleaner and, in some cases, side effects on parameters can
cause unexpected execution flow, which can be difficult to debug.

Object properties, too, SHOULD NOT be modified. Better to deep-clone object
parameters before mutating them.
*/

/* ⚡WARNING: "Assignment to function parameter '_value'." */
((_value) => {
  _value += 1
})()

/* ✅ */
;((_value) => {
  let _dupe = _value

  _dupe += 1
})()

/* ⚡WARNING: "Assignment to property of function parameter '_value'." */
;((_value) => {
  _value.prop = true
})()
