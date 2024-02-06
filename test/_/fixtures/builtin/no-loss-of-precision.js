/*
https://eslint.org/docs/latest/rules/no-loss-of-precision
https://en.wikipedia.org/wiki/IEEE_754

To avoid rounding errors due to the limitations of ECMAScript's 64-bit floating-
point number system, we MUST NOT use literal numbers that will lose precision
when included in calculations.
*/

/* ❗ERROR: "This number literal will lose precision at runtime." */
const _example1 = 9007199254740993

/* ❗ERROR: "This number literal will lose precision at runtime." */
const _example2 = 5123000000000000000000000000001

/* ❗ERROR: "This number literal will lose precision at runtime." */
const _example3 = 1230000000000000000000000.0

/* ❗ERROR: "This number literal will lose precision at runtime." */
const _example4 = .1230000000000000000000000

/* ❗ERROR: "This number literal will lose precision at runtime." */
const _example5 = 0X20000000000001

/* ❗ERROR: "This number literal will lose precision at runtime." */
const _example6 = 0X2_000000000_0001

/* ✅ */
const _example7 = 12345

/* ✅ */
const _example8 = 123.456

/* ✅ */
const _example9 = 123e34

/* ✅ */
const _example10 = 12300000000000000000000000

/* ✅ */
const _example11 = 0x1FFFFFFFFFFFFF

/* ✅ */
const _example12 = 9007199254740991

/* ✅ */
const _example13 = 9007_1992547409_91
