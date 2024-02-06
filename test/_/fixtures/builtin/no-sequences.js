/*
https://eslint.org/docs/latest/rules/no-sequences

The comma operator SHOULD NOT be used to create sequences of expressions,
not even if the sequence is captured in parentheses. This syntax is usually a
programming mistake and, more dangerously still, it can obscure side effects.
*/

/* ⚡WARNING: "Unexpected use of comma operator." */
/* _test1 = 5 */
const _test1 = (3, 5)
