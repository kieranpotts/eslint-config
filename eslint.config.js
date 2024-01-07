/*
ESLint configuration for this repository. The ESLint rules are imported
directly from the source files for the `@hacksjs/eslint-config` package
maintained in this repository, thus the source files are linted against
the same coding standards.

https://eslint.org/docs/latest/use/configure/configuration-files-new
*/

// import babelParser from '@babel/eslint-parser'

// import import_plugin from 'eslint-plugin-import'
// import node_plugin from 'eslint-plugin-n'
// import promise_plugin from 'eslint-plugin-promise'
// import security_plugin from 'eslint-plugin-security'

import globals from 'globals'

import { rules } from './src/lib/index.js'

/** @type {import("eslint").Linter.FlatConfig} */
const src_files = {
  'files': [
    'src/**/*.js',
  ],
  'languageOptions': {
    'globals': {
      ...globals.node,
    },
    // 'parser': babelParser,
    'sourceType': 'module',
  },
  // plugins: {
  //   'import': import_plugin,
  //   'n': node_plugin,
  //   'promise': promise_plugin,
  //   'security': security_plugin,
  // },
  'rules': {
    ...rules.builtin,
    // ...rules.imports,
    // ...rules.node,
    // ...rules.promises,
    // ...rules.security,
  },
  // TODO: Install `eslint-import-resolver-node` as `debDependency`.
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       'extensions': [
  //         '.js',
  //       ],
  //     },
  //   },
  // },
}

/** @type {import("eslint").Linter.FlatConfig} */
const test_mjs_files = {
  'files': [
    'test/**/*.js',
  ],
  'languageOptions': {
    'globals': {
      ...globals.node,
      ...globals.browser,
      ...globals.jest,
    },
    'sourceType': 'module',
  },
  'rules': {
    ...rules.builtin,
  },
}

/** @type {import("eslint").Linter.FlatConfig} */
const test_cjs_files = {
  'files': [
    'test/**/*.cjs',
  ],
  'languageOptions': {
    'globals': {
      ...globals.node,
      ...globals.browser,
      ...globals.jest,
    },
    'sourceType': 'script',
  },
  'rules': {
    ...rules.builtin,
  },
}

export default [
  src_files,
  test_mjs_files,
  test_cjs_files,
]
