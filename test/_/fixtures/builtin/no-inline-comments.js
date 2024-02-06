/*
https://eslint.org/docs/latest/rules/no-inline-comments

TODO: Review this rule. Inline comments can be removed to comment-out code on
the end of a line.

Comments SHOULD NOT be on the same line as code. This makes the code harder to
read.

This rule complements the `line-comment-position` rules, except this rule also
covers block-level comment syntax.
*/

/* eslint-disable no-unused-vars */

/* ⚡WARNING: "Expected comment to be above code." */
/* ⚡WARNING: "Unexpected comment inline with code." */
const result1 = 1 + 1 // → 2

/* ⚡WARNING: "Unexpected comment inline with code." */
const result2 = 1 + 1 /* → 2 */
