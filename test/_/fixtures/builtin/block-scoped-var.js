/*
https://eslint.org/docs/latest/rules/block-scoped-var

Variables declared with `var` MUST NOT be used outside of their binding context,
to protect against difficult bugs caused by variable hoisting and to emulate
the block scope of `let`/`const`, which behave more like variable declarations
in most other modern programming languages.

See also `no-inner-declarations`.
*/

const is_true = true

const doIf = () => {
  if (is_true) {
    /* ❗ERROR: "All 'var' declarations must be at the top of the function scope." (vars-on-top) */
    var build = true
  }

  /* ❗ERROR: "'build' declared on line… is used outside of binding context." (block-scoped-var) */
  console.log(build)
}

doIf()
