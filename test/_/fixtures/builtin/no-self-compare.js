/*
https://eslint.org/docs/latest/rules/no-self-compare

Comparisons MUST NOT have the same value or variable on each side of the
comparison operator. There is no valid reason to do this, and in some cases
it has the potential to cause a runtime error. For this reason, this rule is
configured to raise an ERROR, rather than a mere WARNING.
*/

const value = 1

/* ❗ERROR: "Comparing to itself is potentially pointless." */
if (value === value) {
  // …
}

/* ❗ERROR: "Comparing to itself is potentially pointless." */
// eslint-disable-next-line no-constant-condition
if (1 === 1) {
  // …
}
