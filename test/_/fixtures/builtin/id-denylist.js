/*
https://eslint.org/docs/rules/id-denylist

Authors SHOULD NOT use generic identifiers such as "data", "items", "values",
"callback", "file" or "handle", nor abbreviations such as "vals" or "objs".

The identifier "error" is allowed, but not the abbreviations "e" or "err".
Other than this, all identifiers SHOULD be descriptive of their purpose or
contents. Prefer identifiers such as "encoding_options", "selected_items"
or "successHandler".

See also the `id-length` rule, which restricts identifiers ot a minimum length.
*/

/* ⚡WARNING: "Identifier 'callback' is restricted." */
/* ⚡WARNING: "Identifier 'data' is restricted." */
/* ⚡WARNING: "Identifier 'data' is restricted." */
const callback = (data) => {
  return data
}

/* ⚡WARNING: "Identifier 'value' is restricted." */
/* ⚡WARNING: "Identifier 'e' is restricted." */
try {
  const value = {}

  callback(value)
} catch(e) {
  console.log(e)
}
