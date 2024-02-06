/*
https://eslint.org/docs/latest/rules/computed-property-spacing

It is RECOMMENDED to remove superfluous space characters within the brackets of
computed properties, when written on a single line. The same is RECOMMENDED for
computed keys of class methods, and getters and setters.
*/

const test_object = {
  one: 1,
  two: 2,
}

const one = 'one'

/* ⚡WARNING: "There should be no space after '['." */
test_object[ one]

/* ⚡WARNING: "There should be no space before ']'." */
test_object['one' ]

/* ✅ */
test_object[one]

/* ✅ */
test_object['one']

/* ⚡WARNING: "There should be no space after '['." */
/* ⚡WARNING: "There should be no space before ']'." */
const { [ one ]: three } = test_object
console.log(three)

/* ✅ */
const { [one]: four } = test_object
console.log(four)

class TestClass {
  #test_value = null;

  /* ⚡WARNING: "There should be no space before ']'." */
  [one ]() {
    return this.#test_value
  }

  /* ⚡WARNING: "There should be no space after '['." */
  get [ 'two']() {
    return this.#test_value
  }

  /* ⚡WARNING: "There should be no space after '['." */
  set ['two' ](new_value) {
    this.#test_value = new_value
  }

}
console.log(new TestClass())

class TestClassTwo {
  #test_value = null;

  /* ✅ */
  [one]() {
    return this.#test_value
  }

  /* ✅ */
  get ['two']() {
    return this.#test_value
  }

  /* ✅ */
  set ['two'](new_value) {
    this.#test_value = new_value
  }

}
console.log(new TestClassTwo())
