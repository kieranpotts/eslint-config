/*
https://eslint.org/docs/latest/rules/no-useless-constructor

Constructors that are either empty or only call `super()` with the same
arguments are redundant and SHOULD be deleted.
*/

class ClassA {

  /* ⚡WARNING: "Useless constructor." */
  constructor () {}

}

// eslint-disable-next-line no-unused-vars
class ClassB extends ClassA {

  /* ⚡WARNING: "Useless constructor." */
  constructor (...args) {
    super(...args);
  }

}
