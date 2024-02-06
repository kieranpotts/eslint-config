/*
https://eslint.org/docs/latest/rules/line-comment-position

TODO: Change this rule? Since // is used to comment-out code, can't we
comment-out code on the end of a line?

Inline comment notation (`//`) SHOULD be used as block-level comments, ie
comments SHOULD be written above lines, not beside them. Keeping code and
comment lines separate improves readability.
*/

/* eslint-disable no-unused-expressions */

/* ✅ */
// Valid comment.
1 + 1

/* ⚡WARNING: "Expected comment to be above code." */
1 + 1 // Invalid comment.

/* There are no exceptions. Even `eslint` comments should be on separate
lines to the code they impact. */

/* ⚡WARNING: "Expected comment to be above code." */
1 + 1 // eslint-xxxxx
