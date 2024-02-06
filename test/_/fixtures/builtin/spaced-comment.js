/*
https://eslint.org/docs/latest/rules/spaced-comment

To make comments easier to read, it is RECOMMENDED to include at least one space
after the opening `//` or `/*`, and at least one space before the close.

This configuration also allows a great deal of flexibility in how comments
are formatted.
*/

// ✅
//⚡WARNING: "Expected space or tab after '//' in comment."

/** ✅ Inline JSDoc */

/**
 * ✅ Block-level JSDoc
 */

/************************
 * ✅ Block-level JSDoc
 ***********************/

/* ⚡WARNING: "Expected space or tab after '//' in comment." */
//-----------------

/* ⚡WARNING: "Expected exception block, space or tab after '/*' in comment." */
/* ⚡WARNING: "Expected space or tab before '*/' in comment." */
/*---------------*/

/* ⚡WARNING: "Expected space or tab after '//=' in comment." */
//=================

/* ⚡WARNING: "Expected exception block, space or tab after '/*' in comment." */
/* ⚡WARNING: "Expected space or tab before '*/' in comment." */
/*===============*/

/* The above comment formats can be "fixed" simply by adding a single space
after the comment open, and before the comment close. */

// ----------------
/* ------------- */
// ================
/* ============= */
