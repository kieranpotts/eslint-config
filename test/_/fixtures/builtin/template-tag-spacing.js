/*
https://eslint.org/docs/latest/rules/template-tag-spacing

Authors SHOULD NOT insert spaces between template tag functions and their
template literal values. This is to improve readability.
*/

function testTag (strings) {
  return ``
}

/* ⚡WARNING: "Unexpected space between template tag and template literal." */
testTag `Hello world`

/* ✅ */
testTag`Hello world`
