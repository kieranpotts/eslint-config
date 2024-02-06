/*
https://eslint.org/docs/latest/rules/linebreak-style

The line break (aka new line) characters typically used in Windows are carriage
returns (CR) followed by a line feed (LF), whereas Unix-like systems use only
a line feed (LF). The control sequences are `\r\n` and `\n` respectively.

ECMAScript supports files with both new line formats, but is is RECOMMENDED that
the source code for programs use a consistent standard. Unix line breaks are
the most widely adopted.

NOTE: By default, Git on Windows will automatically convert LF line breaks to
CRLF when files are checked out, and convert them back to LF when pushing
changes to the remote. This will conflict with this ESLint rule, which checks
for Unix line endings. Therefore, it is RECOMMENDED to add the following to
`.gitattributes`, which will check out files with LF line endings, even on
Windows.

  *.js text eol=lf

Or, to enable LF line endings for all text files:

  * text=auto eol=lf

This rule MUST be checked manually. Simply change the encoding of this file
to the Windows format (CRLF or `\r\n`) using your code editor, and run ESLint
on this file. Unfortunately, we cannot check-in these changes, because our Git
configuration will automatically transform it back to Unix format (LF or `\n`).
*/
