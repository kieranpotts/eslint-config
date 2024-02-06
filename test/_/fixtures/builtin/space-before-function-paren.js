/*
https://eslint.org/docs/latest/rules/space-before-function-paren

For consistency, it is RECOMMENDED to apply consistent spacing before
the opening parentheses of function definitions. Our house style RECOMMENDS
adding a space before the opening parentheses in all function definitions,
including:

- Named functions
- Anonymous functions
- Async arrow functions

This makes it easier to distinguish function calls from function definitions.
When a function is called, the opening parenthesis SHOULD "touch" the end of
function name it is invoking.
*/

/* eslint-disable no-unused-vars */

/* ⚡WARNING: "Missing space before function parentheses." */
function withoutSpace() {
  // …
}

/* ✅ */
function withSpace () {
  // …
}

/* ⚡WARNING: "Missing space before function parentheses." */
const anonWithoutSpace = function() {
  // …
}

/* ✅ */
const anonWithSpace = function () {
  // …
}

/* ⚡WARNING: "Missing space before function parentheses." */
const asyncArrowWithoutSpace = async() => {
  // …
}

/* ✅ */
const asyncArrowWithSpace = async () => {
  // …
}
