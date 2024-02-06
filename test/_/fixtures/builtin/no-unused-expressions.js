/*
https://eslint.org/docs/latest/rules/no-unused-expressions

Unused expressions – which do not have any effect on the state of the program –
MUST be fixed or removed.

Expressions such as `n + 1` are flagged as errors because they are likely to be
mistakes in logic (in this case the author may have meant something like
`n += 1`). In addition, unused expressions may be removed automatically by
build tools, and it is conceivable that this process could break application
logic.
*/

/* This rule does not apply to directives, which are in the form of literal
string expressions such as "use strict", at the beginning of a script
or function. */

/* ✅ */
'some directive'

/* This rule does not apply to function calls or constructor calls with the
`new` operator, because these could have side effects on the state of
the program. */

/* ✅ */
class TestClass {}
new TestClass()

/* Short circuit evaluations are allowed in expressions, as long as there are
possible side effects. */

const one = null
const two = 2

const doThat = () => {}
const doThis = () => {}

/* There are no side effects of the following expression. */
/* ❗ERROR: "Expected an assignment or function call and instead saw an expression." */
one || two

/* ✅ This has possible side effects - doThis() make mutate state. */
one && doThis()

/* Likewise, expressions consisting only of a ternary expression without
assignment are allowed as long as there are possible side effects. */

/* ❗ERROR: "Expected an assignment or function call and instead saw an expression." */
one ? 1 : 0

/* ✅ */
one ? doThis() : doThat()

/* Template literals that are not used are mistakes, but tagged templates
may have side effects. */

/* ❗ERROR: "Expected an assignment or function call and instead saw an expression." */
;`untagged template string ${one}`

const tag = () => {}

/* ✅ */
tag`tagged template sting`
