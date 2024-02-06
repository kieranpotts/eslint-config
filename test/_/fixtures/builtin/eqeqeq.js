/*
https://eslint.org/docs/latest/rules/eqeqeq

It is widely considered good practice to use JavaScript's strict equality
operators `===` and `!==` instead of the weaker comparison operators `==`
and `!=`.

The reason is that the strict equality operators are more type safe. The
regular comparisons do type coercion, which for historical reasons can
produce some obscure results. The ESLint documentation has more background
on this – see the link below.

It is RECOMMENDED to use the strict equality operators in all scenarios, even
when it is not necessary – for example, when comparing two primitive values or
testing against `null` – for consistency.

Our ESLint configuration actually raises this as an error, rather than a mere
warning, because using weak comparisons is a common source of bugs in JavaScript
programs.
*/

const var_one = 1
const var_two = 2

/* ❗ERROR: "Expected '===' and instead saw '=='." */
var_one == var_two

/* ✅ */
var_one === var_two

/* ❗ERROR: "Expected '!==' and instead saw '!='." */
var_one != null

/* ✅ */
var_one !== null
