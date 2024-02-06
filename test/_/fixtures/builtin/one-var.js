/*
https://eslint.org/docs/latest/rules/one-var

There SHOULD be exactly one variable declaration for each defined variable.
This style makes code easier to refactor, in general.

The alternative style, in which multiple consecutive variables are declared
together in a single statement, was popular when `var` was the only way to
declare variables. By declaring all variables in a single statement at the
top of a block, this style helped to protect against unexpected hoisting.

With the introduction of `let` and `const`, there are few benefits to this
style.
*/

/* eslint-disable no-unused-vars */

function doThis () {

  /* ⚡WARNING: "Split 'var' declarations into multiple statements." */
  var one,
      two

  /* ⚡WARNING: "Split 'let' declarations into multiple statements." */
  let three,
      four

  /* ⚡WARNING: "Split 'const' declarations into multiple statements." */
  const five = true,
         six = false

}

function doThat () {

  /* ✅ */
  var one
  var two

  /* ✅ */
  let three
  let four

  /* ✅ */
  const five = true
  const six = false

}
