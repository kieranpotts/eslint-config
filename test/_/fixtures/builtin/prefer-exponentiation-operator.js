/*
https://eslint.org/docs/latest/rules/prefer-exponentiation-operator

Introduced in ES2016, the infix exponentiation operator `**` is an alternative
to the `Math.pow()` function. In keeping with our preference for declarative
over imperative style, the `**` operator is RECOMMENDED.
*/

/* ⚡WARNING: "Use the '**' operator instead of 'Math.pow'." */
Math.pow(2, 8)

/* ✅ */
2 ** 8
