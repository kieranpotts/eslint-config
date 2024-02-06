/*
https://eslint.org/docs/latest/rules/nonblock-statement-body-position

When writing single statements in `if`, `else`, `while`, `do-while` a `for`
bodies, the statement SHOULD be encapsulated in curly braces and written,
indented, on a separate line.

However, if the `curly` rule is disabled, the next best thing is to write
the statement on the same line as the conditional, rather than on the next
line. This helps to protect against developer mistakes.

  if (test)
    doThis() // In the `if` statement.
    doThat() // NOT in the `if` statement.

Note, this rule does not disallow use of curly braces, so both curly and
non-curly styles are allowed if the `curly` rule is turned off.
*/

/* eslint-disable curly */

const isTrue = () => {
  return true
}

const doThis = () => {}
const doThat = () => {}

/* ✅ */
if (isTrue) doThis()
else doThat()

/* ✅ */
if (isTrue) {
  doThis()
} else {
  doThat()
}

/* ✅ */
while (isTrue()) doThis()

/* ✅ */
while (isTrue()) {
  doThis()
}

/* ✅ */
for (let i = 1, max = 3; i < max; i++) doThis()

/* ✅ */
for (let i = 1, max = 3; i < max; i++) {
  doThis()
}

/* ✅ */
do doThis()
while (isTrue())

/* ✅ */
do doThis(); while (isTrue())

/* ✅ */
do {
  doThis()
} while (isTrue())
