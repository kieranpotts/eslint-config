/*
https://eslint.org/docs/latest/rules/accessor-pairs

If an object has a setter, it SHOULD have a corresponding getter for the
same property. However, getters MAY exist without setters. The same rules
apply to getters and setters defined on classes.

See also `grouped-accessor-pairs`.
*/

/* eslint-disable max-classes-per-file */

/* ✅ */
let dog = {
  set 'name' (value) {
    this.name = value
  },
  get 'name' () {
    return this.name
  },
}

dog = {
  /* ⚡WARNING: "Getter is not present for setter 'name'." */
  set 'name' (value) {
    this.name = value
  },
}

/* ✅ */
dog = {}

Object.defineProperty(
  dog,
  'name',
  {
    get () {
      return this.name
    },
    set (value) {
      this.name = value
    },
  },
)

dog = {}

Object.defineProperty(
  dog,
  'name',

  /* ⚡WARNING: "Getter is not present in property descriptor." */
  {
    set (value) {
      this.name = value
    },
  },
)

/* ✅ */
class Dog {

  #breed

  set breed (value) {
    this.#breed  = value
  }

  get breed () {
    return this.#breed
  }

}

const roscoe = new Dog()

roscoe.breed('spaniel')

class Horse {

  #breed

  /* ⚡WARNING: "Getter is not present for class setter 'breed'." */
  set 'breed' (value) {
    this.#breed  = value
  }

  getBreed () {
    return this.#breed
  }

}

const bella = new Horse()

bella.breed('arabian')

/* Getters may exist without setters. */

/* ✅ */
let cat = {
  get 'name' () {
    return this.name
  },

}

/* ✅ */
cat = {}

Object.defineProperty(
  cat,
  'name',
  {
    get () {
      return this.name
    },
  },
)

/* ✅ */
class Cat {

  #breed

  get breed () {
    return this.#breed
  }

}

const pinky = new Cat()

pinky.breed('european-shorthair')
