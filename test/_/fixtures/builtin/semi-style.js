/*
https://eslint.org/docs/latest/rules/semi-style

Where semicolons are used, they SHOULD be placed at the end of the statements
they terminate, they SHOULD HOT be placed at the start of the next statement
instead.

See also the `semi` rule. This style only makes sense in the context of
semicolons being omitted in all cases except where they are required for
valid syntax parsing.

See also the `no-unexpected-multiline` rule, which watches out for places
where semicolons are required to terminate statements.
*/

/* ✅ */
console.log(1, 2)
;(function () {})()
;/^\d\.$/u

/* ⚡WARNING: "Expected this semicolon to be at the beginning of the previous line." */
/* ⚡WARNING: "Expected this semicolon to be at the beginning of the previous line." */
console.log(1, 2);
(function () {})();
/^\d\.$/u

/* The check doe not apply to `for()` loops, where the semicolons between the
statements within the brackets should still be on the end of lines when
wrapped. */

/* ⚡WARNING: "Expected this semicolon to be at the end of the previous line." */
/* ⚡WARNING: "Expected this semicolon to be at the end of the previous line." */
for (
  let i = 0
  ; i < 10
  ; ++i
) {
  // …
}

/* ✅ */
for (
  let i = 0;
  i < 10;
  ++i
) {
  // …
}
