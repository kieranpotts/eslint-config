// @ts-check

/*

TEST DRIVERS

This module exports a function called `lint()`, which is a simple wrapper for
ESLint's programmatic API and which we use in our test scripts to verify how
our ESLint rules apply to different snippets of code.

*/

import { resolve as resolvePath } from 'node:path'

// eslint-disable-next-line id-match
import { ESLint } from 'eslint'

import { rules } from '../../src/lib/index.js'

/** @typedef {import("eslint").ESLint.Options} ESLintOptions */
/** @typedef {import("eslint").Linter.Config} LinterConfig */
/** @typedef {import("eslint").ESLint.LintResult} LintResult */

/*

In ESLint v8, the configuration object that is passed to ESLint's programmatic
API is still the "old" configuration format. This is expected to be fully
replaced by the new flat-file configuration format in ESLint v9, at which
point we should be able to simply import our project-level `eslint.config.js`
file, rather than duplicate it's configuration here.

https://eslint.org/docs/latest/integrate/integration-tutorial
https://eslint.org/docs/latest/use/configure/configuration-files

*/

/** @type {LinterConfig} */
const eslint_config = {
  'env': {
    'es2022': true,
    'node': true,
  },
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'root': true,
  // @ts-ignore - Type error but configuration looks correct.
  'rules': {
    ...rules.builtin,
  },
}

/**
 * Wrapper for ESLint's programmatic API.
 *
 * https://eslint.org/docs/latest/integrate/nodejs-api
 *
 * @param {string} file_path Path to file to lint, relative to `test/_/fixtures`.
 * @return {Promise<LintResult>}
 */
const lint = async (file_path) => {

  /*

  This is the config for ESLint's programmatic API (`new ESLint()`),
  which is separate from the configuration loaded from "rc" files,
  `.eslintrc.* `.

  https://eslint.org/docs/latest/integrate/nodejs-api#-new-eslintoptions

  - overrideConfig: This is the "rc" configuration that we want to test.
  - plugins: This maps the plugin identifiers defined in the "rc" config
    to plugin implementations.
  - useEslintrc: We disable loading of external ESLint "rc" files, which
    means that only the configuration passed to `overrideConfig` will apply.

  */

  /** @type {ESLintOptions} */
  const config = {
    'overrideConfig': eslint_config,
    'useEslintrc': false,
  }

  /* https://eslint.org/docs/latest/integrate/nodejs-api */

  const eslint = new ESLint(config)
  const resolved_path = resolvePath('test/_/fixtures/', file_path)
  const result = await eslint.lintFiles(resolved_path)

  /* We're only interested in the first LinterResult object, which will give
  us all the data we need for testing purposes. */

  const first = 0

  return result[first] ?? {}

}

export {
  lint,
}
