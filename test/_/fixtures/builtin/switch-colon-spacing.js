/*
https://eslint.org/docs/latest/rules/switch-colon-spacing

In `switch` statements, there SHOULD NOT be any spaces before the colon. If the
body of the case is on the same line, there SHOULD be at least one space after
the colon.
*/

const state = true

/* ✅ */
switch (state) {
  case true:
    break
  default:
    break
}

switch (state) {
  /* ⚡WARNING: "Unexpected space(s) before this colon." */
  case true : break
  /* ⚡WARNING: "Expected space(s) after this colon." */
  default:break
}
