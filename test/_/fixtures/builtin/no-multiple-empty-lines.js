
/* ⚡WARNING: "Too many blank lines at the beginning of file. Max of 0 allowed." */

/*
https://eslint.org/docs/latest/rules/no-multiple-empty-lines

Sometimes it can be useful to include some large blocks of blank space within
program code, to separate distinct logical blocks. However, this can be
considered a code smell. There are usually better ways to do this, using the
available constructs of the programming language itself. For example, large
blocks of logic SHOULD be refactored to be composed from smaller functions.

For this reason, our house style RECOMMENDS there never to be multiple
consecutive empty lines.
*/

/* ✅ */
const first = 1


/* ⚡WARNING: "More than 1 blank line not allowed." */
const second = 2

/* ✅ */
console.log(first, second)

/* There SHOULD NOT be any empty lines at the end of a file, however this
excludes the trailing newline character (see `eol-last` rule). */

/* ⚡WARNING: "Too many blank lines at the end of file. Max of 0 allowed." */

