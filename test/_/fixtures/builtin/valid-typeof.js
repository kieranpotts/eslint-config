/*
https://eslint.org/docs/latest/rules/valid-typeof

This rule checks that `typeof` expressions compare against valid strings,
which are understood by JavaScript engines. This protects against typos
which produce bugs.
*/

const test_string = ''
const test_undefined = undefined
const test_number = 1
const test_function = () => {}

/* ❗ERROR: "Invalid typeof comparison value." */
typeof test_string === "strnig"

/* ❗ERROR: "Invalid typeof comparison value." */
typeof test_undefined === "undefimed"

/* ❗ERROR: "Invalid typeof comparison value." */
typeof test_number === "nunber"

/* ❗ERROR: "Invalid typeof comparison value." */
typeof test_function === "fucntion"

/* ✅ */
typeof test_string === 'string'

/*
It is NOT RECOMMENDED to use the `typeof` operator to make comparisons
against variables. Valid string literals MUST be used for comparison.
There are no good reasons to do anything, as there is only a small range
of possible values and these tests can be easily encapsulated in
utility functions. See:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/

const types = {
  number: 'number',
}

/* ❗ERROR: "Typeof comparisons should be to string literals." */
typeof test_number === types.number
