/*
https://eslint.org/docs/latest/rules/comma-style

Our house style RECOMMENDS writing commas on the same line as the elements,
properties or parameters they come after, in multi-line lists.

The alternative style is to put the commas at the start of lines, before the
next element. The argument for doing this is it makes it easier to see missing
trailing commas, which can lead to bugs in variable declarations (through
leakage of global variables). But this syntax is ugly and the probability of
bugs is minimal, and anyway static code analysis warns of this issue.
*/

/* ⚡WARNING: "',' should be placed last." */
const one = 1
  , two = 2
console.log(one, two)

/* ✅ */
const three = 3,
      four = 4
console.log(three, four)

/* ⚡WARNING: "',' should be placed last." */
/* ⚡WARNING: "Bad line breaking before and after ','." */
const fruits = [
  'apples'
  , 'oranges'
  ,
]
console.log(fruits)

/* ✅ */
const vegetables = [
  'carrots',
  'parsnips',
]
console.log(vegetables)

/* ⚡ This is expected to be invalid, but ESLint seems to fail to detect this. */
const doThis = (
  arg_one
  , arg_two
  ,
) => {
  console.log(arg_one, arg_two)
}

/* ⚡ This is also expected to be invalid, but ESLint also fails to detect it. */
doThis(
  1
  , 2
  ,
)

/* ✅ */
const doThat = (
  arg_one,
  arg_two,
) => {
  console.log(arg_one, arg_two)
}

/* ✅ */
doThat(
  1,
  2,
)
