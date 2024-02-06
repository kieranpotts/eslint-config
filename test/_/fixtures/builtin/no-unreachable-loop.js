/*
https://eslint.org/docs/latest/rules/no-unreachable-loop

Loops that iterate once only (so never reaching the second loop) are
probably logic errors.

In cases where one – or at most one – iteration is the intended behavior,
the loop SHOULD be replaced for an `if` condition.

Due to the limits of static analysis, this rule will not capture all instances
of single-iteration loops.
*/

const is_true = true

/* ❗ERROR: "Invalid loop. Its body allows only one iteration." */
while (is_true) {
  break
}
