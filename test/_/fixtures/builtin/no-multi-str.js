/*
https://eslint.org/docs/latest/rules/no-multi-str

JavaScript allows the creation of multiline strings by adding a slash before a
newline. This was originally an undocumented feature but it has since been
standardized. Nevertheless, this is still considered bad practice due to poor
readability and maintainability (the syntax is quite brittle and easy to break).

String concatenation or, better still, template literals SHOULD be used instead.
*/

/* ⚡WARNING: "Multiline support is limited to browsers supporting ES5 only." */
// eslint-disable-next-line quotes
const _str1 = "some very \
long text"

/* ⚡WARNING: "Multiline support is limited to browsers supporting ES5 only." */
const _str2 = 'some very \
long text'

/* ✅ */
const _str3 = 'some very '
            + 'long text'

/* ✅ */
const _str4 = `some very
long text`
