/*
https://eslint.org/docs/latest/rules/id-length

With a few exceptions, identifiers SHOULD be at least three characters in
length. Shorter than this and the identifier is probably not adequately
descriptive.
*/

/* ⚡WARNING: "Identifier name 'a' is too short (< 3)." */
const a = 'ab'

/* ⚡WARNING: "Identifier name 'ab' is too short (< 3)." */
const ab = 'ab'

/* ✅ */
const abc = 'abc'

console.log(a, ab, abc)

/* ✅ These are exceptions: */
const i = 0
const id = 'identifier'
const x = 0
const y = 0
const $ = null

console.log(i, id, x, y, $)

