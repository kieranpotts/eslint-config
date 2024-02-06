/*
https://eslint.org/docs/latest/rules/symbol-description

The `Symbol` function accepts an optional description. It is RECOMMENDED to
use this, as it promotes easier debugging. When a symbol is logged, its
description is used.
*/

/* eslint-disable no-unused-vars */

/* ⚡WARNING: "Expected Symbol to have a description." */
const test_one = Symbol()

/* ✅ */
const test_two = Symbol('Some description')
