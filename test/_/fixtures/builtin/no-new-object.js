/*
https://eslint.org/docs/latest/rules/no-new-object

The Object constructor MAY be used to create new generic objects

  const obj = new Object()

But this is no different from using object literal syntax, which SHOULD be
preferred:

  const obj = {}

@deprecated This rule is deprecated in ESLint 8.50.0 and replaced by
`no-object-constructor`. We will remove this rule from our ESLint configuration
when ESLint ^8.50.0 becomes our minimum supported version.
*/

/* ⚡WARNING (no-new-object): "The object literal notation {} is preferable." */
/* ⚡WARNING (no-object-constructor): "The object literal notation {} is preferable." */
const _obj1 = new Object()

/* ✅ */
const _obj2 = {}
