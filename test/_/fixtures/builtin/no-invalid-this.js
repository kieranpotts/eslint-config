/*
https://eslint.org/docs/latest/rules/no-invalid-this

The variable `this` MUST NOT be used in contexts where its value is `undefined`.
This is almost certainly a programming mistake.
*/

const doThis = () => {}

(function iife () {
  /* ❗ERROR: "Unexpected 'this'." */
  this.a = 0

  doThis(() => {
    /* ❗ERROR: "Unexpected 'this'." */
    const { b } = this

    console.log(b)
  })
})()
