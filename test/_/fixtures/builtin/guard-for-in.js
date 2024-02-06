/*
https://eslint.org/docs/latest/rules/guard-for-in

When using `for...in` to loop over the properties of an object, authors
SHOULD include a guard to restrict the loop to the object's own properties
and not properties inherited via the prototype chain.

This rule is configured to raise an error, as this can be a source of
unexpected behaviors.
*/

const test_structure = {
  'one': 1,
  'three': 3,
  'two': 2,
}

const doSomething = (key) => {
  return key
}

/* ❗ERROR: "The body of a for-in should be wrapped in an if statement to
"filter unwanted properties from the prototype." */
for (const key in test_structure) {
  doSomething(key)
}

/* ✅ */
for (const key in test_structure) {
  if (Object.hasOwn(test_structure, key)) {
    doSomething(key)
  }
}

/* ✅ */
for (const key in test_structure) {
  // eslint-disable-next-line prefer-object-has-own
  if (Object.prototype.hasOwnProperty.call(test_structure, key)) {
    doSomething(key)
  }
}

/* ✅ */
for (const key in test_structure) {
  // eslint-disable-next-line prefer-object-has-own
  if ({}.hasOwnProperty.call(test_structure, key)) {
    doSomething(key)
  }
}
