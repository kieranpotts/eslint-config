/*
https://eslint.org/docs/latest/rules/no-undefined

Although it is no longer possible (since ES5) to overwrite the value of the
global `undefined` property, it _is_ still possible to shadow it. You do this
by creating a variable called `undefined` within a function's scope.

  const doSomething = (arg) => {
    const undefined = true

    if (arg === undefined) {
      // …
    }
  }

We can protect against shadowing of undefined using the `no-global-assign` and
`no-shadow-restricted-names` rules. But the safest thing to do is never read
`undefined` directly. Instead you can use `typeof` or even `void 0`.

Because accessing `undefined` is a potential source of logic errors, however
unlikely, we MUST NOT use `undefined` and this rule raises an error if we do.
*/

/* ❗ERROR: "Unexpected use of undefined." */
const is_undefined = undefined

console.log(is_undefined)

/* ❗ERROR: "Unexpected use of undefined." */
if (is_undefined === undefined) {
  // …
}

/* ✅ */
if (typeof is_undefined === 'undefined') {
  // …
}
