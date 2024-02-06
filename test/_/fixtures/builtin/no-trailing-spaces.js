/*
https://eslint.org/docs/latest/rules/no-trailing-spaces

Including empty space characters on the end of lines causes no functional
issues in JavaScript programs, but they can create unnecessarily large diffs
in revision control systems like Git. For this reason, it is RECOMMENDED to
remove all empty spaces from the end of lines – code, comments, and even blank
lines – and most code editors can be configured to do this automatically.
*/

/* ⚡WARNING: "Trailing spaces not allowed." */
const trailing = '---> '

console.log(trailing)

/* ✅ */
const non_trailing = '--->|'

console.log(non_trailing)
