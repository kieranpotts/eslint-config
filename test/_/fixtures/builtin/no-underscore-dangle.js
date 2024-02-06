/*
https://eslint.org/docs/latest/rules/no-underscore-dangle

This rule is turned off. Authors MAY prefix identifiers with a single
underscore character to indicate either pseudo-private variables or variables
that are required to make the code "correct" but are not used by the logic.

TODO: Consider tightening up this rule to allow underscore-prefixed variables
in specific contexts only. Also, can we disallow underscore on the _end_ of
identifiers?
*/

/* ✅ */
const _variable = 'okay'
