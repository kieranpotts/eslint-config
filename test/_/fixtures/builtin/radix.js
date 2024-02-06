/*
https://eslint.org/docs/latest/rules/radix
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

It is common practice to explicitly provide the second argument to the
`parseInt()` function, the radix argument, rather than let the function
magically determine it from the type of number provided as the first argument.

This best practice emerged in the pre-ES5 days, when this function could
automatically distinguish between strings encoding decimals, octals and
hexadecimal numbers. This created some confusion. Developers who were not
familiar with the function's internal algorithm would often assume that
leading zeros would be ignored:

  parseInt('015')     // → 13 (input autodetected as octal)
  parseInt('015', 10) // → 15 (input declared as decimal)

ES5 changed the behavior of `parseInt()` so that it no longer autodetects
octal literals (base 8). Now, if the radix argument is not provided, all strings
beginning `0x` or `0X`, with an optional `+` or `-` prefix (base 16), are parsed
as hexadecimal numbers, else they are parsed as decimals (base 10).

So, programming mistakes are less common now, however we RECOMMEND continuing
to be explicit about the base encoding of the provided number value, even if
`parseInt()` behaves as expected without the radix argument.

See also the `prefer-numeric-literals` rule.
*/

/* ⚡WARNING: "Missing radix parameter." */
parseInt('071')

/* ⚡WARNING: "Missing radix parameter." */
parseInt('0xF')

/* ✅ */
parseInt('071', 10)

/* ✅ */
parseInt('0xF', 16)
