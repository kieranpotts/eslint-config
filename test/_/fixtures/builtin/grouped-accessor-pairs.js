/*
https://eslint.org/docs/latest/rules/grouped-accessor-pairs

It is RECOMMENDED that setter and setter pairs be grouped together, with
setters first in property order.

This rule compliments the `accessor-pairs` rule, which enforces pairs of
getters and setters.
*/

/* ⚡WARNING: "Expected setter 'prop' to be before getter 'prop'." */
const test_object_one = {
  get 'prop' () {
    return this.value
  },
  set 'prop' (value) {
    this.value = value
  },
}

console.log(test_object_one)

/* ✅ */
const test_object_two = {
  set 'prop' (value) {
    this.value = value
  },
  get 'prop' () {
    return this.value
  },
}

console.log(test_object_two)

/* ⚡WARNING: "Expected setter 'prop' to be before getter 'prop'." */
class TestClassOne {

  get prop () {
    return this.value
  }

  set prop (value) {
    this.value = value
  }

}

const instance_one = new TestClassOne()

instance_one.prop = 1

/* ✅ */
class TestClassTwo {

  set prop (value) {
    this.value = value
  }

  get prop () {
    return this.value
  }

}

const instance_two = new TestClassTwo()

instance_two.prop = 1
