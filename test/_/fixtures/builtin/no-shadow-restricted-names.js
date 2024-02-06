/*
https://eslint.org/docs/latest/rules/no-shadow-restricted-names

Even in modern ES it is possible to "shadow" properties of the global object
such as `undefined`, `NaN`, and `infinity`, as well as other restricted
identifiers such as `arguments` and `eval`.

Doing so can have unintended consequences elsewhere in the program. For this
reason, this rule raises an error.

See also `no-shadow`, `no-undefined`, and `no-global-assign`.
*/

/* eslint-disable no-undefined */

/* ❗ERROR: "Shadowing of global property 'NaN'." */
const NaN = () => {
  // …
}

console.log(NaN)

/* ❗ERROR: "Shadowing of global property 'undefined'." */
const undefined = true

console.log(undefined)
