/*
https://eslint.org/docs/latest/rules/no-useless-backreference

Backreferences that will always return zero-length matches SHOULD be removed.
Doing so will not change the behavior of the regex and superfluous backreferences
will not cause any parsing or runtime errors. However, inclusion of zero-length
backreferences is a code smell and suggests the regex may not behave as the
author had intended (and therefore may be the source of bugs).

For this reason, this rule is reported as an error.

See the ESLint documentation for examples of valid backreferences that always
capture zero-length strings.
*/

/* ❗ERROR: "Backreference '\1' will be ignored. It references group '(a)' which is in another alternative." */
const regex_one = /^(?:(a)|\1b)$/u

/* ✅ */
const regex_two = /^(?:(a)|(b)\2)$/u

console.log(regex_one, regex_two)
