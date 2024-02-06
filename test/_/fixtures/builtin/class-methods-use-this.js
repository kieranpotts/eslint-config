/*
https://eslint.org/docs/latest/rules/class-methods-use-this

If a class method does not use `this`, it is RECOMMENDED to change it to
a static method. The same is RECOMMENDED for class fields that are initialized
with functions for their values.
*/

class TestClassOne {

  /* ⚡WARNING: "Expected 'this' to be used by class method 'field'." */
  getField = () => {}

  /* ⚡WARNING: "Expected 'this' to be used by class method 'doThis'." */
  doThis () {
    // …
  }

  /* ✅ */
  doThat () {
    return this.doThis()
  }

}

const test_class_one = new TestClassOne()
test_class_one.doThis()

class TestClassTwo {

  field = true

  /* ✅ */
  getField = () => {
    return this.field_value
  }

  /* ✅ */
  static doThis () {
    // …
  }

}

TestClassTwo.doThis()
