/*
https://eslint.org/docs/latest/rules/no-undef-init

In JavaScript, a variable that is declared but not initialized to a specific
value automatically gets the value of `undefined`. Therefore, authors SHOULD
NOT explicitly initialize values to `undefined` as it is unnecessary.
*/

/* ⚡WARNING: "It's not necessary to initialize '_var_1' to undefined." */
// eslint-disable-next-line no-undefined
let _var_1 = undefined

/* ✅ */
let _var_2
