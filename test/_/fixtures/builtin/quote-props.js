/*
https://eslint.org/docs/latest/rules/quote-props

In ECMAScript, quotes around object properties are optional except:

- For property names containing spaces, hyphens, or other characters that are
  illegal for use in identifiers in ES.
- In earlier versions of the ES language (pre-ES5), quotes were needed for
  property names that matched an ES keyword like `if`.

For consistency, it is RECOMMENDED to always quote properties in object
literals. If the recommendation were the opposite – to remove the quotes
wherever possible – then there would always be some inconsistency, because
there will always be cases were the quotes are required.

If we removed quotes from properties where they are needed, ESLint will run
our `id-match` against those property, restricting us further in how we name
properties. ESLint treats quotes properties as string literals rather than
identifiers.

We think quoting properties is more representative of their semantics.
Properties are keys in key-value pairs and, with greater flexibility over
their naming conventions than identifiers, they can be treated as string
literals.

This rules does not restrict our use of object shorthand notation, where
property names can be dropped entirely – see the `object-shorthand` rule.

See also the `quotes` rule, which determines whether single or double quotes
is preferred for string encapsulation.
*/

/* eslint-disable no-unused-vars */

/* ✅ */
const okay = {
  'one': 1,
  'two': 2,
}

/* ⚡WARNING: "Unquoted property 'one' found." */
/* ⚡WARNING: "Unquoted property 'two' found." */
const bad = {
  one: 1,
  two: 2,
}
