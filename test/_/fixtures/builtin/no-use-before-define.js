/*
https://eslint.org/docs/latest/rules/no-use-before-define

In JavaScript, variables declared with `var`, and function declarations (using
the `function` keyword) are "hoisted" to the top of their block scope. Therefore
it is possible to use variables and functions before they are defined.

Hoisting is confusing and is a common source of unexpected regressions when
code is refactored. Variables declared with `let` and `const` are not hoisted,
and for this reason it is good practice to use these over `var`. However,
functions defined through the traditional declaration syntax (rather than
expression syntax) are still hoisted in modern JS engines.

Named exports are another unusual example where hoisting is a deliberate
feature of the language. An identifier can be declared after the `export`
statement that shares it with other modules. This is to support the design
pattern of putting `export` statements at the top of modules, rather than the
bottom. But our house style is to put exports at the very bottom of modules.
This is more intuitive, and the code ie easier to reason with.

This rule is configured to raise an error whenever it encounters a reference
to an identifier that has not yet been declared. It will do this for all kinds
of variables, functions and classes, and also for named exports. Thus, many
runtime errors will be caught early, and some sources of bugs will be warned
about too.

See also the `vars-on-top` rule, which suggests `var` declarations be written
at the start of their block scope. See also the `func-style` rule, which
recommends using function expressions over function declarations, to remove
risks associated with hoisting functions.
*/

/* ❗ERROR: "'hoistedFunction' was used before it was defined." */
hoistedFunction ()
function hoistedFunction () {}

/* ❗ERROR: "'HoistedClass' was used before it was defined." */
new HoistedClass()
class HoistedClass {}

/* ❗ERROR: "'hoisted_var' was used before it was defined." */
hoisted_var

/* ❗ERROR: "All 'var' declarations must be at the top of the function scope." */
var hoisted_var = 1

/* ❗ERROR: "'hoistedReferenceToArrowFunction' was used before it was defined." */
hoistedReferenceToArrowFunction()
const hoistedReferenceToArrowFunction = () => {}

/* ❗ERROR: "'export_one' was used before it was defined." */
export default export_one
const export_one = 1

/* ✅ */
export const export_two = 2

/* ❗ERROR: "'doThis' was used before it was defined." */
export {
  doThis,
}

/* ❗ERROR: "'export_one' was used before it was defined." */
function doThis () {
  return export_three
}
const export_three = 3
