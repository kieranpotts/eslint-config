/*
https://eslint.org/docs/rules/comma-dangle

Our house style RECOMMENDS trailing commas on multi-line arrays,
multi-line object literals, multi-line imports and exports, and
for function parameters written over multiple lines (in both function
declarations and function calls), when the last element or property
is on a different line than the closing bracket or brace.

It is RECOMMENDED to not include trailing commas after the last element
or property when the closing bracket or brace is on the same line.

The aim is to limit the scope off diffs in version control commits when
these structures are extended. When you add a new element, ideally you
want the change to require adding a new line but not require making any
changes to existing lines (the necessity to add a trailing comma to the
previous element).
*/

/* Our house style RECOMMENDED each import statement be confined to a single
line, which means named imports SHOULD NOT be wrapped. But if they are,
trailing commas SHOULD be written after the last import. */

/* ⚡WARNING: "Missing trailing comma." */
/* eslint-disable object-curly-newline */
import {
  cat,
  cats
} from '../../mocks/cats'
/* eslint-enable object-curly-newline */

console.log(cat, cats)

/* ✅ */
/* eslint-disable object-curly-newline */
import {
  blue,
  colors,
} from '../../mocks/colors'
/* eslint-enable object-curly-newline */

console.log(blue, colors)

/* ⚡WARNING: "Missing trailing comma." */
const incorrect_struct = {
  one: 1,
  two: 2
}

/* ✅ */
const correct_struct = {
  one: 1,
  two: 2,
}

console.log(incorrect_struct, correct_struct)

/* ⚡WARNING: "Missing trailing comma." */
const incorrect_array = [
  1,
  2
]

/* ✅ */
const correct_array = [
  1,
  2,
]

console.log(incorrect_array, correct_array)

/* ⚡WARNING: "Missing trailing comma." */
const doThis = (
  arg_one,
  arg_two
) => {
  console.log(arg_one, arg_two)
}

/* ✅ */
const doThat = (
  arg_one,
  arg_two,
) => {
  console.log(arg_one, arg_two)
}

/* ⚡WARNING: "Missing trailing comma." */
doThis(
  1,
  2
)

/* ✅ */
doThat(
  1,
  2,
)

/* ⚡WARNING: "Missing trailing comma." */
export {
  cat,
  cats,
  doThis
}

/* ✅ */
export {
  blue,
  colors,
}
