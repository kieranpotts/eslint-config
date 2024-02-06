/*
https://eslint.org/docs/latest/rules/object-curly-spacing

Enforce consistent spacing inside braces.

Because of our configuration for the `object-curly-newline` and
`no-trailing-spaces` rules, this rule is only applicable in the few scenarios
were object structures exist on a single line.
*/

const log = (...args) => {
  return args
}

/* ✅ */
const obj1 = {}
log(obj1)

/* ✅ */
const obj2 = {
  one: 'one',
}
log(obj2)

/* ✅ */
const obj3 = {
  one: {
    two: 'two',
  },
  three: 'three',
}
log(obj3)

/* ✅ */
const obj4 = {
  one: 'one',
}
log(obj4)

/* ✅ */
const { one } = obj4
log(one)

/* ✅ */
import { cats } from '../../mocks/cats.js'
log(cats)

/* ⚡WARNING: A space is required after '{'. */
/* ⚡WARNING: A space is required before '}'. */
const {one: one1} = obj4
log(one1)

/* ⚡WARNING: A space is required after '{'. */
/* ⚡WARNING: A space is required before '}'. */
import {dogs} from '../../mocks/dogs.js'
log(dogs)
