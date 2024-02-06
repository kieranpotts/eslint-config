/*
https://eslint.org/docs/latest/rules/space-before-blocks

For readability, it is RECOMMENDED to include a space before the opening curly
brace in a block. Apply this rule for functions and classes, and blocks
initialized by a keyword such as `if`.
*/

/* eslint-disable no-constant-condition, no-unused-vars */

/* ⚡WARNING: "Missing space before opening brace." */
if (true){
  // …
}

/* ✅ */
if (true) {
  // …
}

/* ⚡WARNING: "Missing space before opening brace." */
function doThis (){
  // …
}

/* ✅ */
function doThat () {
  // …
}

/* ⚡WARNING: "Missing space before opening brace." */
try {
  doThis()
} catch(error){
  // …
}

/* ✅ */
try {
  doThat()
} catch(error) {
  // …
}
