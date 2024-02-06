/*
https://eslint.org/docs/latest/rules/semi

Consistent with Standard Style (https://standardjs.com/), use of semicolons to
terminate statements is OPTIONAL since ECMAScript's automatic semicolon
insertion (ASI) feature is reliable in almost all use cases.

Other linting rules, such as `no-unexpected-multiline`, can protect against
bugs caused by missing semicolons in places where they are required.
*/

/* Our linting rules RECOMMEND including semicolons only in the following
use case: where statements start with `[`, `(`, `/`, `+` or `-`. */

/* ⚡WARNING: "Missing semicolon." */
import { cats } from '../../mocks/cats'
(function () {
  console.log(cats)
})()

/* ⚡WARNING: "Extra semicolon." */
const hello_there = 'hello';

/* ✅ */
console.log(hello_there)
