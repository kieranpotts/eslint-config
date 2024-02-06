/*
https://eslint.org/docs/latest/rules/no-script-url

In client-side web applications, `javascript:` URLs MUST NOT be used. This
linting rule checks for the syntax of `javascript:` URLs in string literals
and warns about them. It is possible such strings have perfectly valid use
cases, so this issue is not raised as an error.

In web browsers, the code after the `javascript:` prefix is evaluated as
though passed to `eval()`, which is considered dangerous.
*/

/* ⚡WARNING: "Script URL is a form of eval." */
const _href = 'javascript:void(0)'
