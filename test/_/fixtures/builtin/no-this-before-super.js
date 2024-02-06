/*
https://eslint.org/docs/latest/rules/no-this-before-super

In the constructors of derived classes, a reference error is thrown at runtime
if `this` is used before the call to `super()`. This rule captures this error
earlier at build time.
*/

class ParentClass {}

// eslint-disable-next-line no-unused-vars
class DerivedClass extends ParentClass {

  constructor () {
    /* ❗ERROR: "'this' is not allowed before 'super()'." */
    this.prop = 0
    super()
  }

}
