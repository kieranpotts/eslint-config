/*
https://eslint.org/docs/latest/rules/arrow-spacing

Recommend including space before and after the fat arrows in arrow functions,
for improved readability.
*/

/* ⚡WARNING: "Missing space before =>." */
/* ⚡WARNING: "Missing space after =>." */
const arrow1 = (arg)=>{
  return arg
}
arrow1(1)

/* ✅ */
const arrow2 = (arg) => {
  return arg
}
arrow2(2)
