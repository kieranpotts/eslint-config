// /**
//  * Configuration for ESLint rules enabled via the "node" plugin.
//  *
//  * This configuration is based the `n/recommended` configuration, which
//  * considers both ES and CommonJS modules. If the `type` field in `package.json`
//  * has the value "module", then JavaScript files will be treated as ES modules,
//  * otherwise they will be treated as CommonJS. The file extensions `*.mjs` and
//  * `*.cjs` are also considered and override the `type` config.
//  *
//  * https://github.com/mysticatea/eslint-plugin-n
//  */
// const node = Object.freeze({
//   'n/callback-return': 'off',
//   'n/exports-style': 'off',
//   'n/file-extension-in-import': 'off',
//   'n/global-require': 'off',
//   'n/handle-callback-err': [
//     'error',
//     '^(e|err|error)$',
//   ],
//   'n/no-callback-literal': 'off',
//   'n/no-deprecated-api': 'error',
//   'n/no-exports-assign': 'error',
//   'n/no-extraneous-import': 'error',
//   'n/no-extraneous-require': 'error',
//   'n/no-missing-import': 'error',
//   'n/no-missing-require': 'error',
//   'n/no-mixed-requires': 'off',
//   'n/no-new-require': 'off',
//   'n/no-path-concat': 'off',
//   'n/no-process-env': 'off',
//   'n/no-process-exit': 'error',
//   'n/no-restricted-import': 'off',
//   'n/no-restricted-require': 'off',
//   'n/no-sync': 'off',
//   'n/no-unpublished-bin': 'error',
//   'n/no-unpublished-import': 'error',
//   'n/no-unpublished-require': 'error',
//   'n/no-unsupported-features/es-builtins': 'error',
//   'n/no-unsupported-features/es-syntax': [
//     'error',
//     {
//       'ignores': [
//         'modules',
//       ],
//     },
//   ],
//   'n/no-unsupported-features/node-builtins': 'error',
//   'n/prefer-global/buffer': 'off',
//   'n/prefer-global/console': 'off',
//   'n/prefer-global/process': 'off',
//   'n/prefer-global/text-decoder': 'off',
//   'n/prefer-global/text-encoder': 'off',
//   'n/prefer-global/url': 'off',
//   'n/prefer-global/url-search-params': 'off',
//   'n/prefer-promises/dns': 'off',
//   'n/prefer-promises/fs': 'off',
//   'n/process-exit-as-throw': 'error',
//   'n/shebang': 'error',
// })

// export {
//   node,
// }
