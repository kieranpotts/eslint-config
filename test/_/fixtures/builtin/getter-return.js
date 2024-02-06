/*
https://eslint.org/docs/latest/rules/getter-return

Getters MUST have a `return` statement. This is a constraint of the
ECMAScript language.

As a matter of style, getters SHOULD be explicit in the value being returned.

See also `no-setter-return`.
*/

/* eslint-disable no-unused-vars */

Object.defineProperty({}, 'age', {
  /* ❗ERROR: "Expected to return a value in method 'get'." */
  // eslint-disable-next-line object-shorthand
  'get': function () {
    /* No return */
  },
})

Object.defineProperty({}, 'age', {
  /* ✅ */
  // eslint-disable-next-line object-shorthand
  'get': function () {
    return 42
  },
})

class Person {

  /* ❗ERROR: "Expected to return a value in method 'name'." */
  // eslint-disable-next-line class-methods-use-this
  get name () {
    /* No return */
  }

}

class Animal {

  /* Implicit undefined return values are not allowed. */

  /* ❗ERROR: "Expected to return a value in method 'name'." */
  // eslint-disable-next-line class-methods-use-this
  get name () {
    return
  }

}

class Anonymous {

  /* ✅ */
  // eslint-disable-next-line class-methods-use-this
  get name () {
    return undefined
  }

}
