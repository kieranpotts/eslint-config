# kieranpotts-eslint-config

This is a shareable ESLint configuration for JavaScript and TypeScript projects.

I use this to enforce consistent coding styles and conventions across my JavaScript/TypeScript codebases. I'm sharing my ESLint configuration with the wider community for the benefit of other projects that may wish to adopt the similar constraints.

My preferred JavaScript coding style is loosely based on the [Standard Style](https://standardjs.com/), which itself embraces the prevailing coding conventions in the JavaScript community. A terse, clean coding style is encouraged, free of unnecessary semi-colons to terminate statements, preferring lightweight arrow function expressions, and just two spaces for indentation.

I've designed the linting rules to flag stylistic preferences as **warnings**, while **errors** are reserved only for anti-patterns that are common sources of bugs. For example, ESLint will only warn about the use of yoda syntax – comparisons where the literal value is on the left and the variable is on the right of the operator – since this is primarily a stylistic preference. It's not _wrong_ to write "if red is the color", but "if the color is red" is easier to read.

```js
/* ⚡WARNING: "Expected literal to be on the right side of ===." */
if ('red' === color) {
  // …
}
```

A counter-argument in favor of using yoda syntax is that it protects against logical errors where the equals sign is accidentally used for assignment (`=`) instead of comparison (`==` or `===`). But there are other checks in place for these mistakes, and they will be flagged as errors rather than warnings.

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
npm install kieranpotts-eslint-config --save-dev
```

```txt
yarn add kieranpotts-eslint-config --dev
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

If your source code is transformed by Babel, you will need to install `@babel/eslint-parser` and plug this in to your ESLint config. This will transform your source code, for example polyfilling experimental ECMAScript features, before statically analyzing it.

It is also recommended to install the `globals` package, which will allow easy configuration of global identifiers enabled in your JavaScript runtime environment.

See the `eslint.config.js` examples below for instructions on using both these dependencies.

<!--

The following packages are also OPTIONAL:

* `eslint-plugin-import` ^2.27.5
* `eslint-plugin-n` ^16.0.0
* `eslint-plugin-promise` ^6.1.1
* `eslint-plugin-security` ^1.7.1

These are ESLint plugins, which extend ESLint's built-in code parsing and analysis capabilities. These plugins have the following purposes:

* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) — Adds checks for good coding practices related to `import`/`export` syntax.

* [eslint-plugin-n](https://github.com/mysticatea/eslint-plugin-n) — Adds linting capabilities for common patterns found in the use of Node APIs. (This is a fork of the original `eslint-plugin-node` package, which is [no longer actively maintained](https://github.com/mysticatea/eslint-plugin-node/issues/300).)

* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) — Enforces additional best practices related to the use of promises.

* [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) — This is a popular plugin that checks for common security issues in JavaScript applications.

ESLint plugins must be installed relative to the end user's project, which is why these dependencies are defined as "peer dependencies" in this package's manifest file (`package.json`). Peer dependencies are not installed automatically. You must add the plugins you want to use as development dependencies of your own project.

You need to install only the plugins for which you enable corresponding rules (see the "usage" section, below). For example, if your code will be run in web browsers, you probably will not benefit from the rules enabled by the Node.js plugin, `eslint-plugin-n`.

-->

### Usage

To use this ESLint configuration, you are REQUIRED to use ESLint's new ["flat file" configuration format](https://eslint.org/docs/latest/use/configure/configuration-files-new), which is enabled via a file called `eslint.config.js`.

If your project has an ESLint configuration file named `.eslintrc.*`, then you are using ESLint's _old_ configuration file format. The "eslintrc" configuration system is still the default in ESLint v8, but it will be deprecated in ESLint v9 and removed entirely in ESLint v10. Therefore, it is RECOMMENDED you upgraded to the new "flat file" configuration format as early as possible. See the [migration guide](https://eslint.org/docs/latest/use/configure/migration-guide), and the [ESLint blog](https://eslint.org/blog/) for more background.

Use the following configuration as a template for your project's `eslint.config.js`. For more detailed instructions, see [ESLint's own documentation on using predefined configurations](https://eslint.org/docs/latest/use/configure/configuration-files-new#using-predefined-configurations).

```js
import { rules } from "kieranpotts-eslint-config"

/* OPTIONAL dependencies */
import globals from 'globals'
import babelParser from '@babel/eslint-parser'

/* OPTIONAL plugins */
// import importPlugin from 'eslint-plugin-import'
// import nodePlugin from 'eslint-plugin-n'
// import promisePlugin from 'eslint-plugin-promise'
// import securityPlugin from 'eslint-plugin-security'

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

     /* Enable the plugins required for the extended rules you want to use. */
     plugins: {
      // 'import': importPlugin,
      // 'node': nodePlugin,
      // 'promise': promisePlugin,
      // 'security': securityPlugin,
    },

    'languageOptions': {
      'globals': {
        ...globals.node,
      },
      'parser': babelParser,
      'sourceType': 'module',
    },

    'rules': {
      ...rules.builtin,   /* REQUIRED */
      // ...rules.imports,   /* OPTIONAL */
      // ...rules.node,      /* OPTIONAL */
      // ...rules.promises,  /* OPTIONAL */
      // ...rules.security,  /* OPTIONAL */
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
<!--
> ℹ
> The security plugin is known to detect many false positives, so warnings raised by any `security/*` rules you enable will need to be triaged by humans. You may need to silence some security warnings by adding inline `eslint-disable` comments to your application code.
-->

### VS Code integration

If you have installed the ESLint extension in VS Code, the following settings are recommended. This will enable support for ESLint's new flat file configuration format (`eslint.config.js`) and enable ESLint as a code formatter for both JavaScript and TypeScript files.

For more usage instructions, see the documentation for the link:https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint[ESLint extension for VS Code].

```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.format.enable": true,
  "eslint.validate": ["javascript", "typescript"],
}
```

----
Copyright © 2020-present Kieran Potts and contributors, [MIT license](./LICENSE.txt)
