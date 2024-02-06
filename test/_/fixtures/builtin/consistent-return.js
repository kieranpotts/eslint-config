/*
https://eslint.org/docs/latest/rules/consistent-return

It is RECOMMENDED for `return` statements to always explicitly specify
return values, even if it is the default `undefined` value.
*/

function doSomething (condition) {
  if (condition) {
    return true
  } else {
    /* ⚡WARNING: "Function 'doSomething' expected a return value." */
    return
  }
}
doSomething(true)

/* ⚡WARNING: "Expected to return a value at the end of arrow function." */
const doSomethingElse = (condition) => {
  if (condition) {
    return true
  }
}
doSomethingElse(true)

/* ⚡WARNING: "Expected to return a value at the end of function 'doThis'." */
function doThis (test_fn) {
  if (test_fn) {
    return void test_fn()
  }
  /* No return statement */
}
doThis(() => {})

function doThisToo (test_fn) {
  if (test_fn) {
    return void test_fn()
  }
  /* ⚡WARNING: "Function 'doThisToo' expected a return value." */
  return
}
doThisToo(() => {})

/* ✅ */
function doThat (test_fn) {
  if (test_fn) {
    return void test_fn()
  }
  return undefined
}
doThat(() => {})
