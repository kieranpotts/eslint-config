/*
https://eslint.org/docs/latest/rules/no-label-var

Labels MUST NOT share a name with a variable in the same scope. This is almost
certainly a programming error.
*/

/* eslint-disable no-extra-label, no-labels, no-var, no-unused-vars, no-unreachable-loop */

var loop = true

/* ❗ERROR: "Found identifier with same name as label." */
loop:
for (;;) {
  break loop
}
