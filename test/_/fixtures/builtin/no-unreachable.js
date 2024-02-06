/*
https://eslint.org/docs/latest/rules/no-unreachable

Unreachable code – after `return`, `throw`, `continue` and `break` statements –
MUST be removed. Unreachable statements are usually mistakes left over from
refactoring.

More obscure examples of unreachable code include when fields of a subclass do
not get added to an instance because `super()` is not called from the class
constructor.
*/

const doThis = () => {
  throw new Error()

  /* ❗ERROR: "Unreachable code." */
  console.log('I will not be logged')
}

doThis()
