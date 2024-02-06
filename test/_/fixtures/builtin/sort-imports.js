/*
https://eslint.org/docs/latest/rules/sort-imports

Imports SHOULD be sorted alphabetically. This is particularly important where
there are long lists of imports. Sorted lists of imports, OPTIONALLY organized
into groups of different categories of modules, makes it easier for developers
to find imports and to build a mental picture of a module's dependency tree.
*/

/* eslint-disable no-unused-vars */

/* Imports without export bindings SHOULD be first. */
import '../../mocks/empty'

/* Imports that capture all exports in a namespace SHOULD be next. */
import * as delta from '../../mocks/delta'

/* Imports that capture a module's default export SHOULD be next.
The imported identifiers SHOULD be sorted alphabetically. */

/* ⚡WARNING: "Imports should be sorted alphabetically." */
import gamma from '../../mocks/gamma'
import alpha from '../../mocks/alpha'

/* But the order can be reset by adding an empty line or comment. */
import beta from '../../mocks/beta'

/* Named imports SHOULD ne last. Within the curly braces, identifiers
SHOULD be listed alphabetically. In addition, there SHOULD be alphabetical
ordering of the first identifier in each import group – but this ordering
can also be broken by injecting empty lines or block-level comments. */

/* ⚡WARNING: "Member 'blue' of the import declaration should be sorted alphabetically." */
/* ⚡WARNING: "Imports should be sorted alphabetically." */
import { colors, blue } from '../../mocks/colors'
import { cat, cats, dogs } from '../../mocks/cats'
