/*
https://eslint.org/docs/latest/rules/no-implied-eval

Some legacy JavaScript functions have parameters whose values are evaluated
and executed as code when the type is a string, ie `eval()` is implicitly
used. The effected functions are `setTimeout()` and `setInterval()`, and also
Internet Explorer's proprietary `execScript()`.

Use of `eval()` is considered harmful and MUST be avoided wherever possible
in JavaScript programs.

Consistent with the `no-eval` rule, this raises an error.
*/

/* ❗ERROR: "Implied eval. Consider passing a function instead of a string." */
// eslint-disable-next-line no-magic-numbers
setTimeout('alert("Hi!")', 100)
