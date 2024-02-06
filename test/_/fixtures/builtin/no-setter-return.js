/*
https://eslint.org/docs/latest/rules/no-setter-return

The ECMAScript language specification does not allow setters to return values.
This is an error, and this rule is configured to raise such errors early at
build time.

NOTE: Using `return` without a value is allowed by this rule, because this is
considered to be a control flow statement.

See also `getter-return`.
*/

const _test_object = {
  set 'prop_a' (value) {
    /* ❗ERROR: "Setter cannot return a value." */
    return value
  },
  get 'prop_a' () {
    return 'a'
  },
}

class TestClass {

  #prop_a

  set 'prop_a' (value) {
    this.#prop_a = value

    /* ❗ERROR: "Setter cannot return a value." */
    return value
  }

  get 'prop_a' () {
    return this.#prop_a
  }

}

new TestClass()
