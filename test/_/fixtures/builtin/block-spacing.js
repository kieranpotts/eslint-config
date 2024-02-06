/*
https://eslint.org/docs/latest/rules/block-spacing

One or more spaces SHOULD be written inside blocks encapsulated within a
single line.
*/

/* ⚡WARNING: "Requires a space after '{'." */
/* ⚡WARNING: "Requires a space before '{'." */
const doThis = () => {return true}
doThis()

/* ✅ */
const doThat = () => { return true }
doThat()
