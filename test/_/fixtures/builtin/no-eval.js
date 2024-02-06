/*
https://eslint.org/docs/latest/rules/no-eval

JavaScript’s `eval()` is potentially dangerous. Although it is theoretically
safe to run this function on _trusted_ code, if the code is trusted it can
be refactored, negating the need for `eval()` altogether.

See also `no-implied-eval` rule.
*/

/* ❗ERROR: "eval can be harmful." */
eval('2 + 2')
