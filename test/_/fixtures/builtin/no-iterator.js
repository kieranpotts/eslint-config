/*
https://eslint.org/docs/latest/rules/no-iterator

The `__iterator__` property MUST NOT be used in code. This was a SpiderMonkey
extension that is now obsolete. Standard ES iterators and generators MUST be
used instead.
*/

/* eslint-disable id-match */

const TestObject = {}

/* ❗ERROR: "Reserved name '__iterator__'." */
TestObject.prototype.__iterator__ = () => {
  // …
}
