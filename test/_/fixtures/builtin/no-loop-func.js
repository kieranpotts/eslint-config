/*
https://eslint.org/docs/latest/rules/no-loop-func

Functions SHOULD NOT be defined inside loops. If they are, the nested functions
MUST NOT contain references to unsafe variables, such as those created with
`var`, which will cause the code to behave in unexpected ways.
*/

/* eslint-disable func-names, no-var, vars-on-top */

const fns = []

/* ❗ERROR: "Function declared in a loop contains unsafe references to variable(s) 'i'." */
for (var i = 0; i < 10; i++) {
  fns[i] = function () {
    return i
  }
}

/* ✅ */
for (let x = 0; x < 10; x++) {
  fns[x] = function () {
    return x
  }
}
