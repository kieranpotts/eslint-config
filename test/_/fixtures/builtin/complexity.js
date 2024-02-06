/*
https://eslint.org/docs/latest/rules/complexity

Cyclomatic complexity is a metric for the complexity of a program. It measures
the number of linearly independent paths through the program. Here's a good
introduction to how it is calculated:

https://dev.to/igneel64/easing-into-cyclomatic-complexity-38b1

It is RECOMMENDED to keep the number of possible code paths through functions
and methods as low as possible. This improves testability and understanding
of the code.

However, we have disabled this check in our ESLint configuration. Automated
analysis of software complexity is problematic. It will sometimes be the case
that a high degree of complexity – as evaluated through metrics – will be
necessary to implement effective, simple solutions for humans to reason with.
For example, large numbers of conditional statements within the scope of a
block can sometimes be preferable to extracting some of the logic.

For this reason, measurement of complexity is generally best left to
human evaluation through procedures such as code review.
*/
