/*
https://eslint.org/docs/latest/rules/no-import-assign

Imported bindings MUST be treated as read-only, ie the identifiers MUST NOT
be reassigned new values.
*/

/* eslint-disable no-unused-vars */

import * as alpha from '../../mocks/gamma'
import { one } from '../../mocks/alpha'

/* ❗ERROR: "'one' is read-only." */
one = 1

/* ❗ERROR: "The member's of 'alpha' are read-only." */
Object.assign(alpha, {
  'one': 1,
})
