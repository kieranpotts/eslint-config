/*
https://eslint.org/docs/latest/rules/func-name-matching

If a named function is assigned to a variable, for clarity the name of the
function and the name of the variable that references it SHOULD match.

See also the `func-names` rule, which compliments this one.
*/

/* ⚡WARNING: "Function name `doThis` should match variable name `doThat`." */
const fnTwo = function fnOne () {}

/* ✅ */
const fnThree = function fnThree () {}

function fnFour () {}

/* This won't be caught. */
const fnFive = fnFour

/* Checks property names, including those defined with `Object.create`,
`Object.defineProperty`, `Object.defineProperties` and
`Reflect.defineProperty`. */

const test_struct = {}

/* ✅ */
test_struct.propOne = function propOne () {}

/* ⚡WARNING: "Function name `propOne` should match property name `propTwo`." */
test_struct.propTwo = function propOne () {}

/* This syntax is not checked. */
// eslint-disable-next-line dot-notation
test_struct['propThree'] = function propThree () {}

Object.create(Object.prototype, {
  'propFour': {
    'configurable': true,

    /* The following warning is not expected, this looks to be an ESLint bug. */
    /* ⚡WARNING: "Function name `propFour` should match property name `value`." */
    'value': function propFour () {},
    'writable': true,
  },
})

class TestClass {

  /* Private fields are ignored. */
  #doThis = function doThat () {
    this
  }

  /* ⚡WARNING: "Function name `doThis` should match class method `doThat`." */
  doThat = function doThis () {
    this
  }

  setup() {
    /* Private fields are ignored. */
    this.#doThis = function doThat () {}

    /* ⚡WARNING: "Function name `doThis` should match property name `doThat`." */
    this.doThat = function doThis () {}
  }

}

console.log(fnTwo, fnThree, fnFive)
