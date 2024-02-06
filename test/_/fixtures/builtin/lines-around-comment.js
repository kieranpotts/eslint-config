#!foo ⚡WARNING: "Expected line after comment."
'hello, world'

/*
https://eslint.org/docs/latest/rules/lines-around-comment

An empty line SHOULD be placed before most comments, even if the next statement
is at the top of a block.

Placing empty lines after comments is OPTIONAL in all cases. This flexibility
is intended to support JSDoc and other comment notations.

As per this rule's configuration, comments MAY be written at the start and end
of blocks such as conditional statements and function bodies, and at the top of
structures (objects, arrays and classes). However, the rules for `padded-blocks`
will disallow comments in some of these contexts.

There SHOULD be an empty line after hashbang comments, however, as per the
example at the top of this file.

ESLint comments are ignored by this rule.
*/

/* eslint-disable no-unused-vars */

/* Block-style comment. ✅ */
const one = 1

const two = 2
/* Block-style comment. ⚡WARNING: "Expected line before comment." */

/* Block-style comment. ✅ */

const three = 3
// Line-style comment. ⚡WARNING: "Expected line before comment."
const four = 4

// Line-style comment. ✅ Empty lines after line-style comments are NOT
// disallowed, we're just not *requiring* there to be an empty line after.

const five = 5

// Line-style comment. ✅
const six = 6

const test_structure = {
  /* Block-style comment at immediate start of block. ✅ */
  'day': 'great',

  // Line-style comment at immediate end of block. ✅
}

class TestClassC {
  /* Block-style comment at immediate start of block. ✅ */
  /* ⚡WARNING: "Block must be padded by blank lines." (padded-blocks) */

  #internal_value = 0

  doThis () {
    // Inline comment at start of block. ✅
    // ⚡WARNING: "Block must be padded by blank lines." (padded-blocks)
    this.#internal_value = 1

    // Inline comments at immediate end of block. ✅
  }

  /* Block-level at immediate end of block. ✅ */
  /* ⚡WARNING: "Block must be padded by blank lines." (padded-blocks) */
}

'ignore-the-next-comment'
// eslint-something-something ✅
