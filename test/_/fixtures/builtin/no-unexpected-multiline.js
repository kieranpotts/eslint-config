/*
https://eslint.org/docs/latest/rules/no-unexpected-multiline

In ECMAScript, in most cases newline characters terminate the current statement.
But there are a few exceptions when this is not the case (see the ESLint docs).
In these cases, a semicolon is required to terminate the statement if the author
does not intend consecutive lines to be interpreted as one expression.

Excluding semicolons where they are required is a programming error that is
very likely to mean the code is buggy.

See also the `semi` rule, which allows or disallows semicolons, and the
`semi-style` rule, which determines where semicolons should be placed.
*/

/* eslint-disable no-unused-vars */

/* ⚡WARNING: "Expected indentation of 2 spaces but found 0." */
/* ❗ERROR: "Unexpected newline between object and [ of property access." */
const hello_world = 'hello, world'
[1, 2, 3].forEach(() => {})

/* ✅ */
const hello_universe = 'hello, universe'

;[
  1,
  2,
  3,
].forEach(() => {})

const greet = 'hello'

/* ⚡WARNING: "Unexpected space between template tag and template literal." (template-tag-spacing) */
/* ❗ERROR: "Unexpected newline between template tag and template literal." */
const doThis = function doThis () {}
`${greet}!`

/* ✅ */
const doThat = function doThat () {}

;`${greet}!`
