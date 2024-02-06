/*
https://eslint.org/docs/latest/rules/no-unused-private-class-members

All private class members – including fields, methods and accessors (getters and
setters) – SHOULD be used.
*/

class TestClassC {

  #used_private_field = 0

  /* ⚡WARNING: "'#unused_private_field' is defined but never used." */
  #unused_private_field = null

  /* ⚡WARNING: "'#only_written_to' is defined but never used." */
  #only_written_to = 5

  set #usedAccessor (value) {
    this.#used_private_field = value
  }

  /* ✅ Getter is not used, but the setter is, so it's okay. */
  get #usedAccessor () {
    return this.#used_private_field
  }

  set #unusedAccessor (value) {
    this.#used_private_field = value
  }

  /* ⚡WARNING: "'#unusedAccessor' is defined but never used." */
  get #unusedAccessor () {
    return this.#used_private_field
  }

  publicMethod () {
    this.#usedAccessor = 42
  }

  updateSomething () {
    this.#only_written_to++
  }

  /* ⚡WARNING: "'#unusedMethod' is defined but never used." */
  #unusedMethod() {
    this
  }

}

new TestClassC()
