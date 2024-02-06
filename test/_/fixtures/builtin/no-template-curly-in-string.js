/*
https://eslint.org/docs/latest/rules/no-template-curly-in-string

If text like `${variable}` appears within a string literal, it is probably
a programming mistake and the author likely intended it to be in a template
literal. This rule is configured to warn about this. If the syntax is indeed
part of the literal string value, no problem, this rule MAY be disabled on a
case-by-case basis.
*/

/* ⚡WARNING: "Unexpected template string expression." */
// eslint-disable-next-line quotes
const _test1 = "Hello ${name}!"

/* ⚡WARNING: "Unexpected template string expression." */
const _test2 = 'Hello ${name}!'

/* ✅ */
const input_name = 'world'
const _test3 = `Hello ${input_name}!`
