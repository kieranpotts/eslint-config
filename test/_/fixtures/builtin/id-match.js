/*
https://eslint.org/docs/latest/rules/id-match

The `camelcase` rule is disabled and we instead use the `id-match` rule to
define a custom regex to match identifier names.

It is not possible for static analysis tools to consistently distinguish
between different types of identifiers such as variables and function
declarations. Therefore, this rule applies to all kinds of identifiers, and
for this reason we have built-in quite a bit of flexibility.

It is RECOMMENDED to:

* use camel case for functions (`doThis`);
* use snake case for data variables (`some_var`);
* use Pascal case for class names (`MyClass`).

But this rule is configured to allow all three naming conventions to be used
interchangeably.
*/

/* ✅ RECOMMENDED convention for variables. */
let one_int = 1

/* ✅ RECOMMENDED convention for functions. */
function doThis (...args) {
  return args
}
doThis(one_int)

/* ✅ The following convention MAY be used for private-scope functions. */
const _hiddenFn = () => {
  return
}
_hiddenFn(one_int)

/* All all-caps for variable names is NOT RECOMMENDED. */

/* ⚡WARNING: "Identifier 'HELLO' does not match the pattern…" */
const HELLO = 'hello'
console.log(HELLO)

/* ⚡WARNING: "Identifier 'HELLO_WORLD' does not match the pattern…" */
const HELLO_WORLD = 'hello world'
console.log(HELLO_WORLD)

/* Double underscore prefix is NOT RECOMMENDED. */
/* ⚡WARNING: "Identifier '__invalid' does not match the pattern…" */
const __invalid = null
console.log(__invalid)

/* Use of numbers anywhere in identifiers is NOT RECOMMENDED. */
/* ⚡WARNING: "Identifier '__invalid' does not match the pattern…" */
const invalid1 = null
console.log(invalid1)

/* The `onlyDeclarations` option is disabled, which means are `id-match` regex
is checked against class definitions, too. */

/* ⚡WARNING: "Identifier 'MYYClass' does not match the pattern…" */
class MYYClass {}
console.log(MYYClass)

/* ⚡WARNING: "Identifier 'My_Class' does not match the pattern…" */
class My_Class {}
console.log(My_Class)

/* ⚡WARNING: "Identifier 'ANOTHER_CLASS' does not match the pattern…" */
class ANOTHER_CLASS {}
console.log(ANOTHER_CLASS)

/* ✅ */
class MyClass {
  /* Class fields are checked against the naming regex, too. */
  doSomething () {}
}
console.log(MyClass)

/* Object property names are checked. */

const options = {
  is_true: true,
  isTrue: () => {
    return true
  },
  /* ⚡WARNING: "Identifier '__wrong' does not match the pattern…" */
  __wrong: false,
  /* ⚡WARNING: "Identifier 'ALSO_WRONG' does not match the pattern…" */
  ALSO_WRONG: false,
}
console.log(options.isTrue())

/* Destructured identifiers are checked, too. If an external system provides
an invalid identifier, we SHOULD alias is to a valid identifier in our code. */

/* ⚡WARNING: "Identifier '__wrong' does not match the pattern…" */
const { __wrong } = options
console.log(__wrong)

/* ✅ */
const { __wrong: wrong } = options
console.log(wrong)

/* The identifier `$` is allowed (see exceptions for `id-denylist`, and it
can also be used as a prefix for any identifier. This is to allow for
common design patterns, especially in DOM programming, where the `$` is
used to denote a special wrapper. */

/* ✅ */
const $ = () => {}

/* ✅ */
const $el = null
console.log($(), $el)

/* It is possible to use the various naming conventions in different
places. For example, the class naming convention can be used for
function names, and vice versa. This is a limitation of what is possible
with static analysis of JS code. */

/* ✅ */
class doThat {}
console.log(doThat)

/* ✅ */
function ConstructorFunction () {}
console.log(new ConstructorFunction())

const SomethingNew = null
console.log(SomethingNew)
