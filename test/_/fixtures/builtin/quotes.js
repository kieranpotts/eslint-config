/*
https://eslint.org/docs/latest/rules/quotes

ECMAScript provides two syntax to define string literals:

- Double quotes
- Single quotes

ES6 added template literals, which are strings with automatic variable
interpolation and that are delimited using backtick characters.

In most use cases, the choice of which string syntax to use is a matter of
preference. Single quotes seems to be the most common format in the open
source community, and we think this format to be the most readable too.

However, single quotes may be swapped for double quotes where doing so will
mean that inner literal single-quote characters do not need to be escaped.

Template literals SHOULD NOT be used except for variable expansion or in
the context of tags. See also `prefer-template`.
*/

/* eslint-disable no-unused-vars */

/* ✅ */
const single = 'single'

/* ⚡WARNING: "Strings must use singlequote." */
const double = "double"

/* ⚡WARNING: "Strings must use singlequote." */
const template = ``

/* ✅ */
const world = 'world'
const hello_world = `hello ${world}`

/* ✅ */
const tag = () => {}
tag``

/* ✅ */
const multi_line = `
hello
world
`
