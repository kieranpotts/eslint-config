/*
https://eslint.org/docs/rules/no-multi-spaces

Multiple consecutive spaces SHOULD NOT appear around logical expressions,
conditional expressions, declarations, array elements, object properties,
sequences and function parameters. Additional blank space in these contexts
can make the code look messy and reduce readability.

However, additional spaces MAY be added in the following scenarios:

- Before and after the `=` sign in variable declarations and assignments.
- Before end-of-line comments (though the `line-comment-position` disallows
  these anyway).

Adding spaces in these contexts can make code look neater, improving
readability.

See also the `key-spacing` rule.
*/

/* eslint-disable id-length, line-comment-position, no-unused-vars */

/* ✅ Spaces may be added before and after `=` in variable declaration
and assignments. */
const a  =  1
let b    =  10
b        =  100

/* Additional blank space is ignored in the context of properties in object
literals. However, the `key-spacing` rule defines more fine-grained rules
for where spacing is allowed in this context. */

/* ✅ */
const obj_one = {
  one: 1,
  two: 2,
  three: 3,
}

/* ✅ */
const obj_two = {
  one:   1,
  two:   2,
  three: 3,
}

/* Space before end-of-line comments is ignored, which means authors can
add extra space to line-up the comments. But mis-aligned comments are not
caught, either. */

/* ✅ */
const x = 1   // Comment…
const y = 10  // Comment…
const z = 100    // Comment…
