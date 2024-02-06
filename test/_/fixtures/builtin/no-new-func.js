/*
https://eslint.org/docs/latest/rules/no-new-func

Authors SHOULD NOT use the `Function` function to generate functions from
string literals. This is widely considered to be bad practice due to difficulties
in debugging and conflicts with Content-Security-Policy configurations in some
environments.

  const fn1 = Function('a', 'b', 'return a + b')
  const fn2 = Function.call(null, 'a', 'b', 'return a + b')
  const fn3 = Function.apply(null, ['a', 'b', 'return a + b'])
  const fn4 = Function.bind(null, 'a', 'b', 'return a + b')()
  const fn5 = new Function('a', 'b', 'return a + b')

There are some valid edge cases for using this API, so we've configured this
ESLint rule to flag this as a warning.
*/

/* ⚡WARNING: "The Function constructor is eval." */
const _fn1 = Function('a', 'b', 'return a + b')

/* ⚡WARNING: "The Function constructor is eval." */
// eslint-disable-next-line no-useless-call
const _fn2 = Function.call(null, 'a', 'b', 'return a + b')

/* ⚡WARNING: "The Function constructor is eval." */
// eslint-disable-next-line no-useless-call
const _fn3 = Function.apply(null, ['a', 'b', 'return a + b'])

/* ⚡WARNING: "The Function constructor is eval." */
const _fn4 = Function.bind(null, 'a', 'b', 'return a + b')()

/* ⚡WARNING: "The Function constructor is eval." */
const _fn5 = new Function('a', 'b', 'return a + b')
