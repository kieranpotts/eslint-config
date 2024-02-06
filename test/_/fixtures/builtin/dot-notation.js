/*
https://eslint.org/docs/latest/rules/dot-notation

It is RECOMMENDED to use dot notation, over square bracket notation, wherever
possible. It is more succinct and readable. It may also work better with code
minimizers.
*/

const test_object = {
  class: 'CS50x',
}

/* In ES3, Square bracket was required to encapsulate reserved words like
`class`. But we can safely use dot-notation in modern JS. */

/* ⚡WARNING: "["class"] is better written in dot notation." */
test_object['class']

/* ✅ */
test_object.class
