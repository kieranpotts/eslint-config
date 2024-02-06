/*
https://eslint.org/docs/latest/rules/default-param-last

It is RECOMMENDED to design function signatures with optional parameters
(those with default values) last. This allows function calls to omit optional
arguments.
*/

/* ⚡WARNING: "Default parameters should be last." */
const doThis = (one = true, two) => {
  // …
}

/* ✅ */
const doThat = (one, two = true) => {
  // …
}

doThis(true, 2)
doThat(1)
