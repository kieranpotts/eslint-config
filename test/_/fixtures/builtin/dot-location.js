/*
https://eslint.org/docs/latest/rules/dot-location

ECMAScript allows newlines to be placed before or after dots in object notation.
This SHOULD be consistent across a codebase. Our house style RECOMMENDS placing
newlines before dot operators, and therefore the dot operator always precedes
the property it is being used to access.
*/

const test_object = {
  some_property: true,
}

/* ⚡WARNING: "Expected dot to be on same line as property." */
console.log(test_object.
  some_property)

/* ✅ */
console.log(test_object
  .some_property)

/* ✅ */
console.log(test_object.some_property)
