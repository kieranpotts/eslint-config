/*
https://eslint.org/docs/latest/rules/no-redeclare

Variables declared with `var` SHOULD NOT be re-declared in the same scope.
*/

/* eslint-disable no-var */

/* ✅ */

var one = 1

/* ❗ERROR: "'one' is already defined." */
var one = 2

/* This is expected to ERROR for re-declaration of global variables, but it
does not. The `no-shadow` rule WARNS, at least. */
/* ⚡WARNING (no-shadow): "'Object' is already a global variable." */
var Object = 0

console.log(one, Object)
