/*
https://eslint.org/docs/latest/rules/no-implicit-globals

This rule applies only to non-strict mode scripts, and is usually relevant only
in the context of web site scripts.

It is best practice to avoid "polluting" the global scope with variables that
are intended for use only by the local script. Global variables may collide
with global variables with the same identifiers from other scripts, producing
unexpected behavior or runtime errors.

`var` and `function` declarations are the most dangerous. Declared in the
top-level scope, these become global variables. `let`, `const` and `class` are
lexical declaration that produce block-scoped identifiers, but these too can
create name collisions when declared in the top-level scope.

The solution is to wrap declarations in an IIFE. For lexical bindings (`let`,
`const` and `class`) it is sufficient to use braces to create a block scope.
Where globals are intended to be created, the code SHOULD be explicit in its
intent, by explicitly assigning to `window` or `self`.
*/

/* eslint-disable func-style, no-unused-vars, no-var, strict */

/* ❗ERROR: "Unexpected 'var' declaration in the global scope, wrap in an IIFE for a local variable, assign as global property for a global variable." */
var one = 1

/* ❗ERROR: "Unexpected 'let' declaration in the global scope, wrap in a block or in an IIFE." */
// eslint-disable-next-line prefer-const
let two = 2

/* ❗ERROR: "Unexpected 'const' declaration in the global scope, wrap in a block or in an IIFE." */
const three = 3

/* ❗ERROR: "Unexpected function declaration in the global scope, wrap in an IIFE for a local variable, assign as global property for a global variable" */
function doThis () {}

/* ❗ERROR: "Unexpected class declaration in the global scope, wrap in a block or in an IIFE." */
class TestClass {}

/* ✅ */
window.four = 4

/* ✅ */
window.doThat = function doThat () {}

;(() => {

  /* ✅ */
  var seven = 7

  /* ✅ */
  function doSomething () {}

})()

{
  /* ✅ */
  // eslint-disable-next-line prefer-const
  let five = 5

  /* ✅ */
  const six = 6

  /* ✅ */
  class AnotherTestClass {}
}
