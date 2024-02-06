/*
https://eslint.org/docs/latest/rules/no-useless-computed-key

Unnecessary computed property keys in objects and classes SHOULD be
refactored.
*/

/* ⚡WARNING: "Unnecessarily computed property ['a'] found." */
const test_one = {
  ['a']: 'b',
}

/* ✅ */
const test_two = {
  'a': 'b',
}

console.log(test_one, test_two)
