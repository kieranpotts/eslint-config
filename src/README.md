# @hacksjs/eslint-config

This is a shareable ESLint configuration for JavaScript and TypeScript projects.

This is used to enforce consistent coding styles and conventions across the Hacks.js project. Our ESLint configuration is shared with the wider community for the benefit of other projects that may wish to adopt the same default constraints.

The Hacks.js coding style is loosely based on the [Standard Style](https://standardjs.com/), which itself embraces the prevailing coding conventions in the JavaScript community. A terse, clean coding style is encouraged, free of unnecessary semi-colons to terminate statements, preferring lightweight arrow function expressions, and just two spaces for indentation.

We've designed our linter to flag stylistic preferences as **warnings**, while **errors** are reserved only for anti-patterns that are common sources of bugs. For example, with this configuration ESLint will warn about the use of yoda syntax (comparisons where the literal value is on the left and the variable is on the right of the operator).

```js
/* ⚡WARNING: "Expected literal to be on the right side of ===." */
if ('red' === color) {
  // …
}
```

This is primarily a stylistic preference. "If the color is red" makes more sense than "if red is the color". But a counter-argument, in favor of using yoda syntax, is that it protects against logical errors where the equals sign is accidentally used for assignment (`=`) instead of comparison (`==` or `===`). But there are other checks in place for these mistakes, and they will be flagged as errors rather than warnings.

```js
/* ❗ERROR: "Expected a conditional expression and instead saw an assignment." */
/* ❗ERROR: "Unexpected constant condition." */
if (color = 'red') {
  // …
}
```

To remove both the errors and warnings from the linter output, you would need to refactor this logic as follows:

```js
/* ✅ */
if (color === 'red') {
  // …
}
```

## Documentation

### Requirements

- Node.js ^16.13.0 || ^18.12.0

### Installation

```txt
npm install @hacksjs/eslint-config --save-dev
```

```txt
yarn add @hacksjs/eslint-config --dev
```

### Dependencies

#### REQUIRED dependencies

ESLint ^8.21.0 is REQUIRED. Earlier versions of ESLint are _not_ supported. That's because the configuration exported from this package is compatible with ESLint's [new "flat file" configuration format](https://eslint.org/docs/latest/use/configure/configuration-files-new), which uses the file name `eslint.config.js`.

```txt
npm install eslint@^8.21.0 --save-dev
```

```txt
yarn add eslint@^8.21.0 --dev
```

#### OPTIONAL dependencies

If your source code is transformed by Babel, you will need to install `@babel/eslint-parser` and plug this in to your ESLint config (see usage instructions, below). This will transform your source code, for example polyfilling experimental ECMAScript features, before statically analyzing it.

It is also recommended to install the `globals` package, which will allow easy configuration of global identifiers enabled in your JavaScript runtime environment.

## Usage

To use this ESLint configuration, you are REQUIRED to use ESLint's new ["flat file" configuration format](https://eslint.org/docs/latest/use/configure/configuration-files-new), which is enabled via a file called `eslint.config.js`.

> ℹ
> If your project has an ESLint configuration file named `.eslintrc.*`, then you are using ESLint's _old_ configuration file format. The "eslintrc" configuration system is still the default in ESLint v8, but it will be deprecated in ESLint v9 and removed entirely in ESLint v10. Therefore, it is RECOMMENDED you upgraded to the new "flat file" configuration format as early as possible. See the [migration guide](https://eslint.org/docs/latest/use/configure/migration-guide), and the [ESLint blog](https://eslint.org/blog/) for more background.

Use the following configuration as a template for your project's `eslint.config.js`. For more detailed instructions, see [ESLint's own documentation on using predefined configurations](https://eslint.org/docs/latest/use/configure/configuration-files-new#using-predefined-configurations).

```js
import globals from 'globals'
import babelParser from '@babel/eslint-parser'
import { rules } from "@hacksjs/eslint-config"

export default [
  {
    'files': [
      '**/*.js'
    ],

    /*

    Include the rest of your ESLint configuration here, including
    any custom parsers and language options. See:
    https://eslint.org/docs/latest/use/configure/configuration-files-new

    */

    'languageOptions': {
      'globals': {
        ...globals.node,
      },
      'parser': babelParser,
      'sourceType': 'module',
    },

    'rules': {
      ...rules.builtin,  // REQUIRED
    },

  },
]
```

Of course, you MAY override and extend the imported rules, which you can do like this:

```js
{
  'rules': {
    ...rules.builtin,
    'no-unused-vars': 'warn',
  },
}
```

### VS Code integration

TODO

```json
{
  // Settings for the ESLint extension.
  // https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

  // Enable support of the new flat file configuration format,
  // `eslint.config.js`, available since ESLint v8.21.
  "eslint.experimental.useFlatConfig": true,

  // Enable ESLint as a code formatter.
  "eslint.format.enable": true,

  // Use ESLint to validate both JS and TS source files.
  "eslint.validate": ["javascript", "typescript"],
}
```

-----
Copyright © 2020-present Kieran Potts and contributors, [MIT license](./LICENSE.txt)
