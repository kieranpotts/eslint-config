/*
https://eslint.org/docs/latest/rules/no-shadow

Variable declarations SHOULD NOT shadow variables declared in an outer scope.
In other words, all declared variables within a scope and all its outer scopes
SHOULD have unique identifiers.

Shadowing user-declared variables can be useful sometimes, but it causes
confusions, makes code harder to debug, and locks out access to variables in
the outer scope.
*/

const one = 1

const doThis = () => {
  /* ⚡WARNING: "'one' is already declared in the upper scope…" */
  const one = 1

  console.log(one)
}

console.log(one, doThis())

/* The following example demonstrates reassignment of a global variable,
in this case `Object`. This is not the same thing as shadowing.
Reassignment of built-in globals is more dangerous and this scenario
is covered by the `no-global-assign` rule. */

const doThatOne = () => {
  /* ❗ERROR: "Read-only global 'Object' should not be modified." */
  Object = 0
}

/* The `no-shadow` rule is configured to WARN about shadowing of global
built-in variables like `Object`, as demonstrated in the following code
example: */

const doThatTwo = () => {
  /* ⚡WARNING: "'Object' is already a global variable." */
  const Object = 0

  console.log(Object)
}

console.log(doThatOne(), doThatTwo())

/* This rule is also configured to WARN of shadowing even before outer
functions or variables are declared. */

const is_true = true

if (is_true) {
  /* ⚡WARNING: "'three' is already declared in the upper scope on line…" */
  const three = 3

  console.log(three)
}

// eslint-disable-next-line func-style
function three () {
  // …
}

three()
