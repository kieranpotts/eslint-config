/*
https://eslint.org/docs/latest/rules/multiline-ternary

Newlines SHOULD be inserted between all operands of ternary expressions, to
improve readability. Alternatively, whole ternary expressions MAY be confined
to a single line. There SHOULD NOT be two operands on one line and the remaining
operand on another line.

See also `operator-linebreak`, which enforces where the operators are placed
in multiline ternaries (at the end of a line versus the beginning of the next).
*/

const isTrue = () => {}
const value1 = 1
const value2 = 2

/* ⚡WARNING: "Expected newline between test and consequent of ternary expression." */
const _test1 = isTrue() ? value1
  : value2

/* ⚡WARNING: "Expected newline between consequent and alternate of ternary expression." */
const _test2 = isTrue()
  ? value1 : value2

/* ✅ */
const _test3 = isTrue() ? value1 : value2

/* ✅ */
const _test4 = isTrue()
  ? value1
  : value2
