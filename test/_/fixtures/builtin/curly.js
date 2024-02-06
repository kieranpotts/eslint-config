/*
https://eslint.org/docs/latest/rules/curly

ECMAScript allows the omission of curly braces when a block contains exactly one
statement. However, it is RECOMMENDED to always include curly braces around
blocks, even when they are optional. This improves readability and, in turn,
reduces the chances of bugs being mistakenly introduced to logic.

For simplicity, our house style recommends use of curly braces around all
kinds of blocks: `if`/`else if`/`else`, `for`, `while`, and `do`.

The inclusion of braces around blocks also helps some code editors maintain
correct indentation automatically.
*/

let is_true = true
let i = 0

/* ⚡WARNING: "Expected { after 'if' condition." */
if (is_true) i++

/* ✅ */
if (is_true) {
  i++
}

/* ⚡WARNING: "Expected { after 'while' condition." */
while (is_true)
  is_true = false

/* ✅ */
while (is_true) {
  is_true = false
}

/* ⚡WARNING: "Expected { after 'else'." */
if (is_true) {
  i++
} else i = 0

/* ✅ */
if (is_true) {
  i++
} else {
  i = 0
}

console.log(i)
