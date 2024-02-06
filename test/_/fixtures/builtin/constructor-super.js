/*
https://eslint.org/docs/latest/rules/constructor-super

In ECMAScript, it is REQUIRED that constructors of derived classes call
`super()`, but that constructors of non-derived classes do not, else JavaScript
engines will raise a runtime error.

We have therefore configured ESLint to raise an error, to catch this mistake
early.
*/

class TestClassA {
  constructor() {
    /* ❗ERROR: "Unexpected 'super()'." */
    /* At runtime, this will throw a SyntaxError. */
    super()
  }
}
console.log(new TestClassA())

class TestClassB {
  constructor() {
    /* ✅ No use of super() */
    // super()
  }
}
console.log(new TestClassB())

class TestClassC extends TestClassB {
  constructor() {
    /* ✅ super() allowed in a class that extend another */
    super()
  }
}
console.log(new TestClassC())
