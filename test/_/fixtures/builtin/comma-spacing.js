/*
https://eslint.org/docs/latest/rules/comma-spacing

It is RECOMMENDED to include a space after commas, but not before them.
This applies everywhere commas may be used: variable declarations, function
parameters, objects and arrays, etc.
*/

/* ⚡WARNING: "There should be no space before ','." */
/* ⚡WARNING: "A space is required after ','." */
const one = 1 ,two = 2
console.log(one, two)

/* ✅ */
const three = 3, four = 4
console.log(three, four)

/* ⚡WARNING: "There should be no space before ','."
/* ⚡WARNING: "A space is required after ','."
const doThis = (arg_one ,arg_two) => {
  console.log(arg_one, arg_two)
}
doThis(1, 2)

/* ✅ */
const doThat = (arg_one ,arg_two) => {
  console.log(arg_one, arg_two)
}
doThat(1, 2)
