/*
https://eslint.org/docs/latest/rules/indent

It is RECOMMENDED to use two spaces for indentation in most cases.
*/

/* Imports statements SHOULD be on a single line anyway, as per the
rules for `object-curl-newline`. But in the event this rule is disabled,
normal indentation rules apply for multiline named imports. */

/* ⚡WARNING: "Expected indentation of 2 spaces but found 0." */
/* ⚡WARNING: "Expected indentation of 2 spaces but found 4." */
/* eslint-disable object-curly-newline */
import {
cat,
    cats,
} from '../../mocks/cats'
/* eslint-enable object-curly-newline */

console.log(cat, cats)

/* ⚡WARNING: "Expected indentation of 2 spaces but found 4." */
const isTrue = () => {

    return true

}

/* ⚡WARNING: "Expected indentation of 2 spaces but found 4." */
if (isTrue()) {

    console.log(true)

}

/* ⚡WARNING: "Expected indentation of 2 spaces but found 0." */
/* ⚡WARNING: "Expected indentation of 2 spaces but found 0." */
const my_list = [
1,
2,
]

console.log(my_list)

/* ⚡WARNING: "Expected indentation of 2 spaces but found 4." */
/* ⚡WARNING: "Expected indentation of 2 spaces but found 4." */
const my_struct = {
    'one': 1,
    'two': 2,
}

console.log(my_struct)

/* ✅ */
const isFalse = () => {

  return false

}

/* ✅ */
if (isFalse()) {

  console.log(false)

}

/* ✅ */
switch(isTrue()) {

  case true:
    break

  case false:
    break

  default:
    break

}

/* Normal indentation rules apply to the body of immediately-invoked function
expressions. */

/* ✅ */
(function () {

  function addOne (x) {

    return x + 1

  }

  addOne(2)

})()

/* Normal indentation rules apply to chained members that are wrapped
over multiple lines. */

/* ✅ */
console
  .log('hello')

/* Multiline variable declaration statements SHOULD be lined up. */

/* ✅ */
// eslint-disable-next-line vars-on-top
var var_a,
    var_b,
    var_c
let var_d,
    var_e,
    var_f
const var_g = 1,
      var_h = 2,
      var_i = 3

console.log(
  var_a,
  var_b,
  var_c,
  var_d,
  var_e,
  var_f,
  var_g,
  var_h,
  var_i,
)

/* For functional declarations, the `function-paren-newline` rule recommends
newlines after the opening bracket and before the closing bracket when
the parameters themselves are wrapped over multiple lines. This rule
recommends that wrapped parameters line-up with the first parameter, so
we end up with a style as follows. (Normal indentation rules apply for
the function body.) */

/* ✅ */
function logThese (
  one,
  two,
  three,
  four,
) {

  console.log(one, two, three, four)

}

logThese(1, 2, 3, 4)

/* The same rules apply for function expressions. */

/* ✅ */
const logTheseToo = (
  one,
  two,
  three,
  four,
) => {

  console.log(one, two, three, four)

}

/* The arguments for multiline call expressions SHOULD be indented, too. */

/* ✅ */
logTheseToo(
  1,
  2,
  3,
  4,
)

/* Conditional expressions (ie ternary operators) MAY be written over
multiple lines. OPTIONALLY extra padding may be applied to line-up operators. */

/* ✅ */
const is_true = isTrue()
              ? true
              : false

console.log(is_true)

/* Nested ternary expressions SHOULD NOT be "flat". Indentation SHOULD be
used to represent the nesting. */

/* ✅ */
const result
  = isTrue() ? true
    : isFalse() ? false
      : null

console.log(result)

/* Nested ternary conditionals SHOULD be "flat", ie don't use indentation to
denote the nesting. */

/* ✅ */
isTrue()
  ? () => {

    return true

  }
  : isFalse()
  ? () => {

    return true

  }
  : () => {

    /* ⚡WARNING: "Expected indentation of 8 spaces but found 6. */
    return false

  }

/* ⚡ Comments SHOULD also be lined up with the code below them. */
console.log('bye')

/* TODO: Add examples of ignoredNodes, perhaps template literals? */
