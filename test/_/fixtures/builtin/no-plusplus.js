/*
https://eslint.org/docs/latest/rules/no-plusplus

The `++` and `--` operators SHOULD NOT be used, except in the final expression
(the "after thought") of `for` loop conditions.

The reason is that these unary operators are subject to automatic semicolon
insertion, which means that subtle differences in whitespace can significantly
change the semantics of code.
*/

let counter = 0

/* ⚡WARNING: "Unary operator '++' used." */
counter++

/* ✅ */
counter += 1

/* ⚡WARNING: "Unary operator '--' used." */
counter--

/* ✅ */
counter -= 1

console.log(counter)

/* ✅ This is a common pattern, so we allow this use case. */
for (let i = 0; i < 10; i++) {
  // …
}
