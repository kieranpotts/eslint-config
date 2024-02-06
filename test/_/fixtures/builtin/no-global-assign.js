/*
https://eslint.org/docs/latest/rules/no-global-assign

JavaScript runtime environments expose large numbers of built-in global
variables and functions, historically known as host objects, such as `window`
in web browsers and `process` in Node.

These environment-specific globals, although they are intended to be read-only,
it is possible to overwrite them with alternative values. But doing so will very
likely cause errors elsewhere in your program.

This rule raises errors wherever environment globals are reassigned. The
behavior of this rule depends on target environments being configured correctly
in `eslint.config.js`.

See also `no-undefined`.
*/

/* eslint-disable no-undefined */

/* ❗ERROR: "Read-only global 'Object' should not be modified." */
Object = null

/* ❗ERROR: "Read-only global 'undefined' should not be modified." */
undefined = 1

/* ❗ERROR: "Read-only global 'window' should not be modified." */
window = {}
