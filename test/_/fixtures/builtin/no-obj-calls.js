/*
https://eslint.org/docs/latest/rules/no-obj-calls

ECMAScript provides global objects like `Math`, `JSON`, `Reflect`, `Atomics` and
`Intl` which the language REQUIRES be used as object, not as functions or
constructors. JavaScript environments will throw runtime errors where code
tries to execute these objects as functions or constructors.

This rule catches these errors early at build time.
*/

/* ❗ERROR: "'Math' is not a function." */
Math()

/* ❗ERROR: "'Math' is not a function." */
new Math()

/* ❗ERROR: "'JSON' is not a function." */
JSON()

/* ❗ERROR: "'JSON' is not a function." */
new JSON()

/* ❗ERROR: "'Reflect' is not a function." */
Reflect()

/* ❗ERROR: "'Reflect' is not a function." */
new Reflect()

/* ❗ERROR: "'Atomics' is not a function." */
Atomics()

/* ❗ERROR: "'Atomics' is not a function." */
new Atomics()

/* ❗ERROR: "'Intl' is not a function." */
Intl()

/* ❗ERROR: "'Intl' is not a function." */
new Intl()
