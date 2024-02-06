/*
https://eslint.org/docs/latest/rules/no-new

Wherever the `new` operator is used to to create a new object of a particular
type, it MUST be in the context of an assignment or (more rarely) a comparison.

Although it is possible that an API could be designed to only require
construction of an object that can be immediately discarded, this is bad design
and more like the following code is a programming mistake:

  new Server()

Most likely, the author had intended to write one of the following:

  const server = new Server()

Or:

  Server()

If non-assignment is indeed the correct usage, you can simply assign the
constructed object to a variable that is marked (by an underscore prefix) as
unused:

  const _server = new Server()
*/

class Thing {}

/* ❗ERROR: "Do not use 'new' for side effects." */
new Thing()

/* ✅ */
const _think = new Thing()

/* ✅ */
Thing()
