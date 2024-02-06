/*
https://eslint.org/docs/latest/rules/no-unsafe-negation

The following code is almost certainly a logical error:

  !key in object

The author probably means:

  !(key in object)

`instanceof` is another relational operator which can be misused in the same
way. Authors MUST NOT negate the left operand on the `in` and `instanceof`
operators.
*/

class TestClass {}

const test_object = {}
const key = 'one'

/* ❗ERROR: "Unexpected negating the left operand of 'in' operator." */
if (!key in test_object) {
  // …
}

/* ✅ */
if (!(key in test_object)) {
  // …
}

/* ❗ERROR: "Unexpected negating the left operand of 'instanceof' operator." */
if (!key instanceof TestClass) {
  // …
}

/* ✅ */
if (!(key instanceof TestClass)) {
  // …
}

/* For rare situations when negating the left operand is intended, this rule
allows an exception. If the whole negation is explicitly wrapped in
parentheses, the rule will not report a problem. */

/* ✅ */
if ((!key) in test_object) {
  // …
}

/* This rule is also enforced for ordering operators: `<`, `>`, `<=` and `>=`. */

const one = 1
const two = 2

/* ❗ERROR: "Unexpected negating the left operand of '<' operator." */
if (!one < two) {
  // …
}

if (!(one < two)) {
  // …
}
