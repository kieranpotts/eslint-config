/*
https://eslint.org/docs/latest/rules/prefer-regex-literals

It is RECOMMENDED to use regex literals over the `RegExp` constructor, for
their better readability, unless you need to dynamically generate the pattern,
in which case the constructor pattern is more convenient.

It also makes no sense to wrap a regex literal in a `RegExp` constructor.
*/

/* ⚡WARNING: "Use a regular expression literal instead of the 'RegExp' constructor." */
new RegExp('^\\d\\.$', 'u')

/* ⚡WARNING: "Use regular expression literal with flags instead of the 'RegExp' constructor." */
/* ⚡WARNING: "Use the 'u' flag." */
new RegExp(/abc/, 'u')

/* ✅ */
;/^\d\.$/u
