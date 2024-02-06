/*
https://eslint.org/docs/latest/rules/no-tabs

Tab characters SHOULD NOT appear anywhere in JavaScript code.

This rule checks for tab characters anywhere in the code, while the `indent`
rule specifically checks their use for indentation.

See also the `no-mixed-spaces-and-tabs` rule.
*/

(() => {
	/* ⚡WARNING: "Unexpected tab character." */
	/* ⚡WARNING: "Expected indentation of 2 spaces but found 1 tab." */
})()

/* This rule will even capture use of tab characters in string literals. */
/* ⚡WARNING: "Unexpected tab character." */
const _tab_character = '	'
