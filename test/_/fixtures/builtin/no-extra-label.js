/*
https://eslint.org/docs/latest/rules/no-extra-label

If a loop contains no nested or loops or switches, labelling the loop is
unnecessary and the label SHOULD be removed.

See also `no-labels` and `no-unused-labels`.
*/

/* eslint-disable no-labels, no-unmodified-loop-condition, no-unreachable-loop */

const isTrue = () => {}

/* ⚡WARNING: "This label 'loop_a' is unnecessary" */
loop_a: while (isTrue) {
  break loop_a
}

/* ✅ */
while (isTrue) {
  break
}
