/*
https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs

Spaces and tabs SHOULD NOT be used interchangeably for indentation.

This rule doesn't seem to work as expected, but the `indent` and `no-tabs` rules
do the job. For this reason, we've turned off this rule.
*/

(() => {
	/* ⚡WARNING: "Unexpected tab character." */
  /* ⚡WARNING: "Expected indentation of 2 spaces but found 1 tab." */

	const _is_true = true
  const _is_false = false
})()
