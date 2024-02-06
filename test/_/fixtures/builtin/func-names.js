/*
https://eslint.org/docs/latest/rules/func-names

It is RECOMMENDED to use named functions over anonymous functions. From ES6,
JavaScript engines will automatically assign a name to an anonymous function
based on the variable the function is assigned to. Where assignment does not
take place, an explicit name SHOULD be defined.

Naming functions improves the quality of stack traces. In cases where the name
of the function is not relevant – for example, the function is used only to
create a temporary block scope (the closure pattern) – then arrow functions
SHOULD be used instead.

See also the `func-name-matching` rule.
*/

const test_object = {}

/* ⚡WARNING: "Unexpected unnamed function." */
test_object.prototype.doThis = function () {}

/* ✅ */
const doThis = function () {}

doThis()

/* ✅ */
const cat = {
  // eslint-disable-next-line object-shorthand
  'meow': function () {},
}

cat.meow()

/* ✅ */
class Cat {

  #purr = function () {
    this
  }

  meow = function () {
    this.#purr
  }

}

const tabby = new Cat()

tabby.meow()

/* ⚡WARNING: "Unexpected unnamed function." */
;(function () {
  // …
}())

// ⚡WARNING: "Unexpected unnamed generator function."
;(function* () {
  // …
}())

/* ✅ */
;(function wrapper () {
  // …
}())

/* ✅ */
;(function* generate () {
  // …
}())

/* ✅ */
const generate = function* () {}

generate()

/* ⚡WARNING: "Unexpected unnamed function." */
export default function () {}

/* ✅ Can't have a second default export, but this would be okay */
// export default function doThisAndThat () {}
