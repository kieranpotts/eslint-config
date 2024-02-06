/*
https://eslint.org/docs/latest/rules/no-unused-vars

Variables – as well as functions and function parameters – that are declared but
not used add unnecessary clutter and lead to confusion. Worse, they signal
there may be bugs in the logic due to incomplete refactoring. For this reason
unused variables MUST be removed. Alternatively, unused variables MAY be
prefixed with an underscore – this can be done for function parameters that are
not needed either, which can be useful for incrementally changing a function's
signature in a non-breaking way.

Caught error objects MUST also be used, unless underscore-prefixed.
*/

/* ❗ERROR: "'unused' is assigned a value but never used." */
const unused = 42

/* ✅ */
const _unused = 42

/* ❗ERROR: "'unused' is assigned a value but never used." */
;((unused) => {
  return 4
})()

/* ✅ */
;((_unused) => {
  return 4
})()

/* ✅ */
;((_unused, used) => {
  return used
})()

const doThis = () => {}

/* ❗ERROR: "'error' is defined but never used. Allowed unused args must match /[_]./u." */
try {
  doThis()
} catch(error) {
  console.error('There was an error')
}

/* ✅ */
try {
  doThis()
} catch(error) {
  console.error(error)
}

const test_object = {
  'one': 1,
  'three': 3,
  'two': 2,
}

/* destructuredArrayIgnorePattern: Underscore-prefixing destructured array elements
allows this rule to be disabled for those particular variables. */

;(() => {
  /* ❗ERROR: "'three' is assigned a value but never used. Allowed unused vars must match /[_]./u." */
  const [
    one,
    two,
    three,
    _four,
  ] = [
    1,
    2,
    3,
    4,
  ]

  console.log(one + two)
})

/* ignoreRestSiblings: In the following example, the destructured variable `one` is ignored,
because it is only destructured for the purpose of removing it from `rest`. */

/* ❗ERROR: "'rest' is assigned a value but never used. Allowed unused vars must match /[_]./u." */
const {
  one,
  ...rest
} = test_object
