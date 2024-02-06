/*
https://eslint.org/docs/latest/rules/object-curly-newline

Require line breaks after opening and before closing curly braces,
depending on the context in which these characters are used.

https://eslint.org/docs/latest/rules/object-curly-newline

See also `object-property-newline`, which defines the rules for adding line
breaks between object properties themselves.

See also `array-bracket-newline`, which implements the same rules for
array brackets.
*/

const log = (msg) => {
  return msg
}

/*
ObjectExpression: code style for object literals.

Empty objects may be defined on a single line with object literal syntax,
but must be multiline if they have one or more properties.
*/

/* ✅ */
let dog = {}
dog.name = 'roscoe'

/* ⚡WARNING: "Expected a line break after this opening brace" */
/* ⚡WARNING: "Expected a line break before this closing brace" */
dog = { name: 'roscoe' }

/* ✅ */
dog = {
  name: 'roscoe',
}

/*
ObjectPattern: code style for object destructuring.

When destructuring a single value, the object expression MUST be written on
exactly one line, consistent with rules for declaring variables (one per line)
without destructuring. When two or more values are destructured, newlines
MUST be inserted after the opening brace and before the closing brace.

Since you cannot have zero properties in a destructuring object pattern, the
empty object syntax `{}` will never be applicable in this scenario.
*/

const dogs = {
  rolo: {
    age: 7,
    breed: 'golden-retriever',
  },
  roscoe: {
    age: 10,
    breed: 'springer-spaniel',
  },
}

/* ✅ */
const { roscoe } = dogs
log(roscoe.breed)

/* ⚡WARNING: "Expected a line break after this opening brace" */
/* ⚡WARNING: "Expected a line break before this closing brace" */
const {
  rolo,
} = dogs
log(rolo.breed)

/* ✅ */
const {
  rolo: rolo2,
  roscoe: roscoe2,
} = dogs
log(rolo2.breed, roscoe2.breed)

/*
ImportDeclaration: code style for named imports.

Every `import` statement MUST be written on exactly one line, regardless of
the number of named imports or the line length.
*/

/* ✅ */
import { cat, cats } from '../../mocks/cats.js'

/* ⚡WARNING: "Unexpected line break after this opening brace" */
/* ⚡WARNING: "Unexpected line break before this closing brace" */
import {
  cities,
} from '../../mocks/cities.js'

/* ⚡WARNING: "Unexpected line break after this opening brace" */
/* ⚡WARNING: "Unexpected line break before this closing brace" */
import {
  blue,
  green,
  red,
} from '../../mocks/colors.js'

log(cities)
log(blue)
log(green)
log(red)

/*
ExportDeclaration: code style for named exports.

The opposite is true for named exports. Named exports MUST be one-per-line,
even if there is just one exported identifier.
*/

/* ✅ */
export {
  cat,
  cats,
}

/* ✅ */
export {
  green,
}

/* ⚡WARNING: "Expected a line break after this opening brace" */
/* ⚡WARNING: "Expected a line break before this closing brace" */
export { red }

/* ⚡WARNING: "Expected a line break after this opening brace" */
/* ⚡WARNING: "Expected a line break before this closing brace" */
export { roscoe, rolo }

/* ⚡WARNING: "Expected a line break after this opening brace" */
/* ⚡WARNING: "Expected a line break before this closing brace" */
export { dog,
  dogs }
