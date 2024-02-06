/*
https://eslint.org/docs/latest/rules/prefer-spread

For improved readability and conciseness, it is RECOMMENDED to use the
spread operator in place of `apply()`.

Transpilers will transform this code for target environments that do not
implement ES2015 (ES6).
*/

const args = [
  1,
  2,
  3,
  4,
]

/* ⚡WARNING: "Use the spread operator instead of '.apply()'." */
Math.max.apply(Math, args)

/* ✅ */
Math.max(...args)
