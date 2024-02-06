/*
https://eslint.org/docs/latest/rules/for-direction

A `for` loop with a stop condition that can never be reached will run
indefinitely. This can be easily done when counters are running in the
wrong direction – an easy programming mistake to make and a common source
of bugs..

When an infinite loop is intended, it is more conventional to use a `while`
loop with a conditional that always evaluates true.
*/

/* ❗ERROR: "The update clause in this loop moves the variable in the wrong direction." */
for (let i = 0; i < 10; i--) {
  // …
}

/* ❗ERROR: "The update clause in this loop moves the variable in the wrong direction." */
for (let i = 10; i >= 0; i++) {
  // …
}

/* ❗ERROR: "The update clause in this loop moves the variable in the wrong direction." */
for (let i = 0; i > 10; i++) {
  // …
}

const increment = -2

/* ❗ERROR: "The update clause in this loop moves the variable in the wrong direction." */
for (let i = 0; i < 10; i += increment) {
  // …
}

/* ✅ */
for (let i = 0; i < 10; i++) {
  // …
}
