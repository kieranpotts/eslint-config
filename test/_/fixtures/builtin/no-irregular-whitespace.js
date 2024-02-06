/*
https://eslint.org/docs/latest/rules/no-irregular-whitespace

Irregular whitespace characters such as line tabulation (`\v`, `\u000B`),
no-break space (`\u00A0`), and em space (`\u2003`) MUST NOT appear in code
or comments. Even in the context of string literals, template literals and
regexes, Unicode escape sequences MUST be used to represent these characters
instead of the literal characters themselves.
*/

/* ❗ERROR: "Irregular whitespace not allowed." */
const str = ' NBSP'

console.log(str)

/* ❗ERROR: "Irregular whitespace not allowed." */
// ← No-break space.

const testRegExp = () => {
  /* ❗ERROR: "Irregular whitespace not allowed." */
  return / regexp/u
}

testRegExp()
