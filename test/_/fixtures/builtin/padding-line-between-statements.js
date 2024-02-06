/*
https://eslint.org/docs/latest/rules/padding-line-between-statements

It is RECOMMENDED to place single empty lines between blocks of statements
in the following cases:

- Before and after every block of directive prologues (eg 'use strict'). All
  directives SHOULD be grouped together in a single unbroken block.

- Before and after every discrete block of variable declarations. Empty lines
  MAY be used to create groups of variable declarations.

- Before and after all multiline expressions, and multiline block-like statements
  which include things like `if` conditionals,`while` loops and `try/catch`
  structures, as well as IIFEs written over multiple lines.

- Before `case` and `default` in `switch` blocks, and also before `break` and
  `continue` in loops.

- Before every `return` statement. Same for `throw`.

- Before and after blocks of `import` declarations. Before and after blocks of
  `export` declarations.

- Before and after blocks of `debugger` statements.

Padding can be skipped if the statement is at the beginning or end of a block.
For example, it is not necessary to add a blank line before a `return` statement
if that is the only statement in the function body. Likewise, the first `case`
at the top of a `switch` block does not need a space before it, but all
subsequent ones do. And directive prologues ay be written on the first line of
a file.

Comment lines immediately before and after statements are ignored by this rule.
Thus, the line padding rules are applied as though all the comments are removed
from the file. See the `lines-around-comment` rule for equivalent rules ofr
comment blocks.
*/

/* eslint-disable line-comment-position, no-debugger, no-unused-vars, vars-on-top */

'use directive one'
'use directive two'

'use directive three' // ⚡WARNING
import { cat } from '../../mocks/cats' // ⚡WARNING

import { one as one_alias } from '../../mocks/alpha'
import { two as two_alias } from '../../mocks/beta'
cat // ⚡WARNING

const one = 1
const two = 2
const three = 3

let five, four
let six
var seven = 7
one // ⚡WARNING

one
let multiline_string = ` // ⚡WARNING
  This is
  a multiline expression`
two // ⚡WARNING

multiline_string = `
  This is
  a multiline expression`

const isTrue = () => {
  return true
}

// Single-line block-like statements do not need padding, but multi-line
// ones do. Function declarations are an example of a block-like statement.
function isTruthy () {}
function isFalsy () {}
(() => {})()
function isThisTrue () { // ⚡WARNING
  return true
}

one
if (isTrue()) { // ⚡WARNING
  // …
}
two // ⚡WARNING

if (isTrue()) {
  // …
}

let is_true = true
while (is_true) { // ⚡WARNING
  is_true = false
}
is_true // ⚡WARNING

while (is_true) {
  is_true = false
}

const test_value = 1
const doSomething = () => {}
const doSomethingElse = () => {}

switch (test_value) {
  case 1:
    doSomething()
    break // ⚡WARNING

  case 2:
    doSomethingElse()
    break // ⚡WARNING
  default: // ⚡WARNING
    break
}

(() => {
  // Multiline IIFE
})()

five
try { // ⚡WARNING
  isTruthy()
} catch(error) {
  throw new Error(error)
}
six // ⚡WARNING

try {
  isTruthy()
} catch(error) {
  throw new Error(error)
}

one
function doThisOne () { // ⚡WARNING
  return
}
two // ⚡WARNING

function doThisTwo () {
  doThisOne()

  // Optional comment. Still needs a blank line before!
  return
}

function doThisThree () {
  doThisTwo()
  return // ⚡WARNING
}

function throwThis () {
  doThisTwo()
  throw new Error() // ⚡WARNING
}

two
export { // ⚡WARNING
  doThisOne,
}
three // ⚡WARNING

export {
  doThisTwo,
}
export {
  doThisThree,
}

// Multiple consecutive debugger statement should be grouped together.

debugger
debugger

debugger // ⚡WARNING
