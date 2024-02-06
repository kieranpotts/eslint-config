/*
https://eslint.org/docs/latest/rules/no-unused-labels

Labels on loops that are not used SHOULD be removed for clarity and
conciseness.

See also `no-labels` and `no-extra-labels`.
*/

/* eslint-disable no-labels */

/* ✅ */
for (let i = 0; i < 10; ++i) {
  if (i === 9) {
    break
  }

  // …
}

/* ✅ */
this_loop:
for (let i = 0; i < 10; ++i) {
  if (i === 9) {
    break this_loop
  }

  // …
}

/* ⚡WARNING: "'that_loop:' is defined but never used." */
that_loop:
for (let i = 0; i < 10; ++i) {
  if (i === 9) {
    break
  }

  // …
}
