/*
https://eslint.org/docs/latest/rules/no-whitespace-before-property

For readability, it is NOT RECOMMENDED to pad properties with blank space
in dot notation, except where properties are wrapped on newlines.
*/

const one = {
  'two': {
    'three': {},
  },
}

/* ✅ */
one.two.three

/* ✅ */
one
  .two
  .three

/* ⚡WARNING: "Unexpected whitespace before property two." */
one. two.three

/* ⚡WARNING: "Unexpected whitespace before property two." */
one .two.three
