/*
https://eslint.org/docs/rules/object-shorthand

It is RECOMMENDED to use of ES6 shorthand syntax for defining object methods
and properties.
*/

/* eslint-disable no-unused-vars */

const x = 'x'
const y = 'y'
const z = 'z'

// eslint-disable-next-line id-match
const pre_es6 = {

  /* ⚡WARNING: "Expected property shorthand." */
  'x': x,

  /* ⚡WARNING: "Expected property shorthand." */
  'y': y,

  /* ⚡WARNING: "Expected property shorthand." */
  'z': z,

  /* ⚡WARNING: "Expected method shorthand." */
  'doThis': function () {},

  /* ⚡WARNING: "Expected method shorthand." */
  'doThat': function () {},

}

/* Methods */
const es6 = {

  /* ✅ */
  x,

  /* ✅ */
  y,

  /* ✅ */
  z,

  /* ✅ */
  doThis () {},

  /* ✅ */
  doThat () {},

}
