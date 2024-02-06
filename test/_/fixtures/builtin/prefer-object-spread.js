/*
https://eslint.org/docs/latest/rules/prefer-object-spread

For readability, rather than passing an object literal to `Object.assign()`,
prefer just to use the spread operator.

This is consistent with other house styles, such as preferring regex literals
to `new RegExp()`. In general in JavaScript, declarative styles are preferred
to more imperative ones.
*/

const test_object = {
  'one': 1,
  'two': 2,
}

/* ⚡WARNING: "Use an object spread instead of `Object.assign` eg: `{ ...foo }`" */
Object.assign({}, test_object)

/* ✅ */
;({
  ...test_object,
})
