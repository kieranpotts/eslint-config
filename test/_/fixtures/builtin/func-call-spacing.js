/*
https://eslint.org/docs/latest/rules/func-call-spacing

There SHOULD NOT be any space after a function identifier and the opening
parenthesis that invokes the function.

This is the most common style and it is the more expressive style; the
parentheses can be thought of as "operating on" on the function to which
they are attached. It can also help to protect against some programming
areas, especially when newlines are inserted between the function identifier
and the opening parenthesis.
*/

const doThis = () => {}

/* ⚡WARNING: "Unexpected whitespace between function name and paren." */
doThis ()

/* ⚡WARNING: "Unexpected whitespace between function name and paren." */
doThis
()

/* ✅ */
doThis()
