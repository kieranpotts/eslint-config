/*
https://eslint.org/docs/latest/rules/no-misleading-character-class

There are certain characters that do not work when used in character classes in
JavaScript regular expressions. Characters that are made of multiple code points
are treated as separate characters in character classes.

For example, you can't use the ❇️ character directly in a character class to
match it. This character is made of two others: ❇ (U+2747) and VARIATION
SELECTOR-16 (U+FE0F), so `/[❇️]/` wil match either of these characters but not
❇️ itself.

For some characters this can be fixed using the Unicode modifier (`u`). But
for many composite characters it is almost certainly a logic error to include
them in character classes.
*/

/* ❗ERROR: "Unexpected combined character in character class." */
(/^[❇️]$/u).test('❇️') // → false */

/* ❗ERROR: "Unexpected combined character in character class." */
;(/^[👶🏻]$/u).test('👶🏻') // → false */

/* ❗ERROR: "Unexpected combined character in character class." */
;(/^[🇯🇵]$/u).test('🇯🇵') // → false */

/* ❗ERROR: "Unexpected combined character in character class." */
;(/^[👨‍👩‍👦]$/u).test('👨‍👩‍👦') // → false */

/* Regexes that include characters composed of surrogate pairs can be
fixed using the `u` modifier. */

/* ❗ERROR: "Unexpected surrogate pair in character class. Use 'u' flag." */
/* ❗ERROR: "Use the 'u' flag." */

;(/^[👍]$/).test('👍') // → false

/* ✅ */
;(/^[👍]$/u).test('👍') // → true
