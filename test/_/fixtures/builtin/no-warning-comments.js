/*
https://eslint.org/docs/latest/rules/no-warning-comments

Our house style is relaxed about using TODO comments in code. Although these
look messy, they are useful in the early stages of the design of a solution,
when code is still a work-in-progress.

We only check for FIXME comments (which should be replaced by TODO) and short
chains of Xs at the start of a comment. (Other comment-decorating characters
such as `-`, `*` and `!` are ignored.)
*/

/* TODO: This comment is allowed ✅ */

/* todo: this comment is allowed. ✅ */

/* xxx ⚡ */

/*-- fixme ⚡ */

/** FIXME ⚡ */

/* But FIXME or xxx in the middle is okay. ✅ */
