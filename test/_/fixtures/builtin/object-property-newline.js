/*
https://eslint.org/docs/latest/rules/object-property-newline

Recommend placing object properties on separate lines.

We have disabled the option to allow all of an object's properties to be
declared on the same line. Therefore, there must always be line breaks
between properties of all objects.

See also `object-curly-newline`, which defines the rules for adding line
breaks after the opening brace of an object, and before the closing brace.
See also `array-element-newline`, which implements the same rules for
array elements.
*/

const log = (...args) => {
  return args
}

/* ⚡WARNING: "Object properties must go on a new line." */
const obj1 = {
  one: 'a.m.', three: 'daylight saving time', two: 'p.m.',
}

/* ✅ */
const obj2 = {
  one: 'a.m.',
  three: 'daylight saving time',
  two: 'p.m.',
}

log(obj1, obj2)
