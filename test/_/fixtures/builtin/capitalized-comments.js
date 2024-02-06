/*
https://eslint.org/docs/latest/rules/capitalized-comments

TODO: This information is out of date, inline-comment syntax is now used for
commenting-out code only, and for special cases like line-level ESLint directives
that require this comment syntax.

Our house style is to use inline comment syntax (`// …`) for all comments
except JSDoc annotations which are intended to be parsed to provide
automated documentation of internal APIs.

Inline comment syntax SHOULD be used for all comments, even multi-line comments.
Unfortunately, ESLint assumes every `//` is the start of a new sentence, so we
are not able to use this rule to check that every sentence in a multi-line
comments starts with a capital letter.
*/
