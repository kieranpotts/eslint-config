/*
https://eslint.org/docs/latest/rules/no-inner-declarations

Prior to ES6, function declarations were REQUIRED to be written in the first
level of a program or in the body of another function. Functions could not be
declared within an `if` block, for example.

In strict mode, functions can be declared anywhere that a statement is permitted.
Nevertheless, it remains good practice to declare all functions at the root of
a program, or in the root of the body of another function, or in the root of the
body of a static class block. This is to protect against unexpected behaviors
due to the hoisting of function declarations.

We've configured this rule only to check for nested function declaration. Checks
for nested `var`s are covered by the `block-scope-var` rule.
*/

/* eslint-disable func-style, strict */

const is_true = true

if (is_true) {
  /* ❗ERROR: "Move function declaration to program root." */
  function doSomething () {}
  doSomething()
}

function doSomethingElse () {
  if (test) {
    /* ❗ERROR: "Move function declaration to function body root." */
    function doAnotherThing () {}
    doAnotherThing()
  }
}

doSomethingElse()

class TestClass {

  static {
    if (is_true) {
      /* ❗ERROR: "Move function declaration to class static block body root." */
      function doThisToo () { }
      doThisToo()
    }
  }

}

const test_obj = new TestClass()

console.log(test_obj)
