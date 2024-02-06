/*
https://eslint.org/docs/latest/rules/brace-style

When encapsulating a multi-line block, braces SHOULD be consistent. Our
RECOMMENDED style is the "one true brace style" which is the most common
style in JavaScript codebases. Opening curly braces SHOULD be on the same
line as the controlling statement that precedes them, and `else` and `catch`
and `finally` should be on the same line as the closing brace for the previous
block.

It is NOT RECOMMENDED to write blocks on a single line. However, this rule
does not apply when there are no braces.
*/

/* ⚡WARNING: "Opening curly brace does not appear on the same line as controlling statement." */
const doThis = () =>
{
  return true
}

/* ✅ */
const doThat = () => {
  return true
}

/* ⚡WARNING: "Opening curly brace does not appear on the same line as controlling statement." */
if (doThis())
{
  doThat()
}

/* ⚡WARNING: "Statement inside of curly braces should be on next line." */
/* ⚡WARNING: "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block." */
if (doThis()) { doThat() }

/* ✅ */
if (doThis()) doThat()

/* ✅ */
try {
  doThis()
} catch(e) {
  doThat()
}

