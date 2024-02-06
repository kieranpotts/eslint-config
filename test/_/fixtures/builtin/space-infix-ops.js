/*
https://eslint.org/docs/latest/rules/space-infix-ops

It is RECOMMENDED to include spacing around infix operators. Infix operators
include `+` and `*` when they are placed between two operands.

Other operators are postfix (placed after an operand) or prefix (placed before).
*/

/* ⚡WARNING: "Operator '+' must be spaced." */
3+3

/* ⚡WARNING: "Operator '+' must be spaced." */
3 +3

/* ⚡WARNING: "Operator '+' must be spaced." */
3+ 3

/* ✅ */
3 + 3
