/*
https://eslint.org/docs/latest/rules/prefer-named-capture-group

ES2018 introduced named capture groups in regexes. When this rule is turned
on, it recommends all capture groups to either be named or non-capturing, so
disabling the default behavior of indexing captured values.

WARNING – "Capture group '([0-9]{4})' should be converted to a named or non-capturing group.":

  /([0-9]{4})/u

OKAY – Non-capturing group:

  ;/(?:[0-9]{4})/u

OKAY – Named group:

  ;/(?<year>[0-9]{4})/u

We've turned off this rule. The syntax for adding a named capture group can
make simple regex more complex than they need to be.
*/

/* ✅ Indexed capture group (default). */
/([0-9]{4})/u

/* ✅ Non-capturing group. */
;/(?:[0-9]{4})/u

/* ✅ Named group. */
;/(?<year>[0-9]{4})/u
