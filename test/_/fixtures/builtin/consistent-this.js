/*
https://eslint.org/docs/latest/rules/consistent-this

The current execution context, `this`, often needs to be aliased to a variable.
Common identifiers used for this purpose include `that` and `me`. (The word
`self` is also sometimes used, but that is NOT RECOMMENDED as it is an
ECMAScript keyword and has special meaning in the language.)

It is RECOMMENDED to use a consistent naming convention for `this` aliases. Our
house style RECOMMENDS using the identifier `instance`.
*/

/* ✅ */
const instance = this
console.log(instance)

/* ⚡WARNING: "Unexpected alias 'other_alias' for 'this'." */
const other_alias = this
console.log(other_alias)
