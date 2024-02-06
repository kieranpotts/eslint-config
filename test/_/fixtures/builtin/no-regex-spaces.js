/*
https://eslint.org/docs/latest/rules/no-regex-spaces

There SHOULD NOT be two or more consecutive space characters in any RegExp
literal or constructor string. Although the following code is perfectly
correct:

  const test = /abc   def/

This is more readable:

  const test = /abc {3}def/

It is much clearer how many spaces exactly should match.
*/

/* ⚡WARNING: "Spaces are hard to count. Use {3}." */
const _test_1 = /abc   def/u

/* ⚡WARNING: "Spaces are hard to count. Use {3}." */
// eslint-disable-next-line prefer-regex-literals
const _test_2 = new RegExp('abc   def', 'u')

/* ✅ */
const _test_3 = /abc {3}def/u

/* ✅ */
// eslint-disable-next-line prefer-regex-literals
const _test_4 = new RegExp('abc {3}def', 'u')
