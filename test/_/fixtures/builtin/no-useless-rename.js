/*
https://eslint.org/docs/latest/rules/no-useless-rename

Renaming imports, exports and destructured assignments to the same name is
redundant and SHOULD be avoided.
*/

/* ⚡WARNING: "Import blue unnecessarily renamed." */
import { blue as blue } from '../../mocks/colors'

const test_structure = {
  'one': 1,
}

/* ⚡WARNING: "Destructuring assignment one unnecessarily renamed." */
const { 'one': one } = test_structure

/* ✅ */
const { 'one': two } = test_structure

console.log(one, two)

/* ⚡WARNING: "Export blue unnecessarily renamed." */
export { blue as blue }
