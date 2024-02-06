/*
https://eslint.org/docs/latest/rules/prefer-template

It is RECOMMENDED to use template literals in place of string concatenation.

See also `no-useless-concat` and `quotes`.
*/

/* eslint-disable no-unused-vars */

const my_name = 'Bob'

/* ⚡WARNING: "Unexpected string concatenation." */
const greet_one = 'Hello, ' + my_name + '!'

/* ⚡WARNING: "Unexpected string concatenation." */
const total_one = 'Total: ' + (12 * 60 * 60 * 1000)

/* ✅ */
const greet_two = `Hello, ${my_name}!`;

/* ✅ */
const total_two = `Total: ${12 * 60 * 60 * 1000}`;
