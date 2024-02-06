/*
https://eslint.org/docs/latest/rules/no-ternary

This rule is disabled. Ternary operators MAY be used.

See also the rules `no-nested-ternary` and `no-unneeded-ternary`.
*/

const isTrue = () => {}

/* ✅ */
const _result = isTrue ? 1 : 2
