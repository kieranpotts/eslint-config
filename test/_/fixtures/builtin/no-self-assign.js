/*
https://eslint.org/docs/latest/rules/no-self-assign

Self-assignments, where the value of variable is reassigned to the same
variable, has no effect. Although the syntax is valid, it is clearly a logic
error, and is flagged as such.
*/

let one = 1

/* ❗ERROR: "'one' is assigned to itself." */
one = one
console.log(one)

const obj1 = {
  'prop_a': 'a',
}

/* ❗ERROR: "'obj1.prop_a' is assigned to itself." */
obj1.prop_a = obj1.prop_a
