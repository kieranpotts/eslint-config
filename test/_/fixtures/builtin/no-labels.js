/*
https://eslint.org/docs/latest/rules/no-labels

Labels SHOULD NOT be used on `break` and `continue` statements. They are rarely
used in practice and are usually a sign of overly complex code that is prone
to regressions and should be refactored using abstraction.

See also `no-unused-labels` and `no-extra-labels`.
*/

/* ✅ */
for (let i = 0; i < 10; ++i) {
  if (i === 9) {
    break
  }

  // …
}

/* ⚡WARNING: "Unexpected labeled statement." */
this_loop:
for (let i = 0; i < 10; ++i) {
  if (i === 9) {
    /* ⚡WARNING: "Unexpected label in break statement." */
    break this_loop
  }

  // …
}
