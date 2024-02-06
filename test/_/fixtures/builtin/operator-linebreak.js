/*
https://eslint.org/docs/latest/rules/operator-linebreak

Where linebreaks are inserted next to operators to wrap statements, the breaks
SHOULD be placed before the operators rather than after them.

This style is more readable, and it supports additional chaining without
needing to modify existing lines.
*/

/* eslint-disable no-unused-vars */

const border_bottom = 0
const border_top = 0
const inner_height = 0

const isFalse = () => {}
const isTrue = () => {}

/* ⚡WARNING: "'+' should be placed at the beginning of the line." */
/* ⚡WARNING: "'+' should be placed at the beginning of the line." */
let full_height = border_top +
                  inner_height +
                  border_bottom

/* ✅ */
full_height = border_top
            + inner_height
            + border_bottom

/* ⚡WARNING: "'?' should be placed at the beginning of the line." */
/* ⚡WARNING: "':' should be placed at the beginning of the line." */
const alt_answer = isTrue() ?
                   42 :
                   null

const answer = isTrue()
             ? 42
             : null

/* ⚡WARNING: "':' should be placed at the beginning of the line." */
let sum = 1 +
  2

/* ✅ */
sum = 1
    + 2

/* ⚡WARNING: "'||' should be placed at the beginning of the line." */
if (isTrue() ||
  isFalse()) {
  // …
}

if (isTrue()
  || isFalse()) {
  // …
}
