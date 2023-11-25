/* eslint-disable max-lines */

const class_regex = '[A-Z][a-z]([A-Za-z0-9]+)*'
const function_regex = '[_$]?[a-z]([A-Za-z]+)*'
const var_regex = '[$_]?[a-z]([a-z0-9_]+)*'
const dollar_regex = '[$]'

const max_code_line_length = 100
const max_comment_line_length = 120

const max_executable_lines_per_file = 500
const max_executable_lines_per_function = 100

/**
 * Configuration for built-in ESLint rules.
 */
const builtin = Object.freeze({

  /*

  The following resources may be used as references for all available rules:

  https://eslint.org/docs/rules/
  https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-all.js

  Also see the comments in the text fixture files for descriptions and examples
  of each rule, as well as links to relevant documentation.

  This coding standard is based on Standard JS, but with many customizations.

  https://standardjs.com/
  https://github.com/standard/eslint-config-standard/blob/master/src/index.ts

  */

  'accessor-pairs': [
    'warn',
    {
      'enforceForClassMembers': true,
      'getWithoutSet': false,
      'setWithoutGet': true,
    },
  ],
  'array-bracket-newline': [
    'warn',
    {
      'minItems': 1,
      'multiline': true,
    },
  ],
  'array-bracket-spacing': [
    'warn',
    'never',
    {
      'arraysInArrays': true,
      'objectsInArrays': true,
      'singleValue': false,
    },
  ],
  'array-callback-return': [
    'error',
    {
      'allowImplicit': false,
      'allowVoid': false,
      'checkForEach': true,
    },
  ],
  'array-element-newline': [
    'warn',
    {
      'ArrayExpression': 'always',
      'ArrayPattern': {
        'minItems': 2,
        'multiline': true,
      },
    },
  ],
  'arrow-body-style': [
    'warn',
    'always',
  ],
  'arrow-parens': 'warn',
  'arrow-spacing': [
    'warn',
    {
      'after': true,
      'before': true,
    },
  ],
  'block-scoped-var': 'error',
  'block-spacing': [
    'warn',
    'always',
  ],
  'brace-style': [
    'warn',
    '1tbs',
    {
      'allowSingleLine': false,
    },
  ],
  'camelcase': 'off',
  'capitalized-comments': 'off',
  'class-methods-use-this': [
    'warn',
    {
      'enforceForClassFields': true,
      'exceptMethods': [],
    },
  ],
  'comma-dangle': [
    'warn',
    {
      'arrays': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
      'imports': 'always-multiline',
      // eslint-disable-next-line id-denylist
      'objects': 'always-multiline',
    },
  ],
  'comma-spacing': [
    'warn',
    {
      'after': true,
      'before': false,
    },
  ],
  'comma-style': [
    'warn',
    'last',
    {
      'exceptions': {},
    },
  ],
  'complexity': 'off',
  'computed-property-spacing': [
    'warn',
    'never',
    {
      'enforceForClassMembers': true,
    },
  ],
  'consistent-return': [
    'warn',
    {
      'treatUndefinedAsUnspecified': false,
    },
  ],
  'consistent-this': [
    'warn',
    'instance',
  ],
  'constructor-super': 'error',
  'curly': [
    'warn',
    'all',
  ],
  'default-case': [
    'warn',
    {
      'commentPattern': '^No default[.]?$',
    },
  ],
  'default-case-last': 'warn',
  'default-param-last': 'warn',
  'dot-location': [
    'warn',
    'property',
  ],
  'dot-notation': [
    'warn',
    {
      'allowKeywords': true,
    },
  ],
  'eol-last': [
    'warn',
    'always',
  ],
  'eqeqeq': [
    'error',
    'always',
    {
      'null': 'always',
    },
  ],
  'for-direction': 'error',
  'func-call-spacing': [
    'warn',
    'never',
  ],
  'func-name-matching': [
    'warn',
    'always',
    {
      'considerPropertyDescriptor': true,
      'includeCommonJSModuleExports': false,
    },
  ],
  'func-names': [
    'warn',
    'as-needed',
  ],
  'func-style': [
    'warn',
    'expression',
  ],
  'function-call-argument-newline': [
    'warn',
    'consistent',
  ],
  'function-paren-newline': [
    'warn',
    'multiline',
  ],
  'generator-star-spacing': [
    'warn',
    {
      'after': true,
      'before': false,
      'method': {
        'after': false,
        'before': true,
      },
    },
  ],
  'getter-return': [
    'error',
    {
      'allowImplicit': false,
    },
  ],
  'grouped-accessor-pairs': [
    'warn',
    'setBeforeGet',
  ],
  'guard-for-in': 'error',
  'id-denylist': [
    'warn',
    'bar',
    'baz',
    'callback',
    'cb',
    'coll',
    'collection',
    'content',
    'contents',
    'data',
    'e',
    'err',
    'file',
    'foo',
    'handle',
    'hash',
    'hello',
    'info',
    'item',
    'items',
    'list',
    'obj',
    'objects',
    'objs',
    'struct',
    'structure',
    'structures',
    'test',
    'thing',
    'val',
    'vals',
    'var',
    'vars',
  ],
  'id-length': [
    'warn',
    {
      'exceptions': [
        '$',
        'i',
        'id',
        'x',
        'y',
        'z',
      ],
      'min': 3,
    },
  ],
  'id-match': [
    'warn',
    `^((${class_regex})|(${function_regex})|(${var_regex})|(${dollar_regex}))$`,
    {
      'classFields': true,
      'ignoreDestructuring': false,
      'onlyDeclarations': false,
      'properties': true,
    },
  ],
  'implicit-arrow-linebreak': 'off',
  'indent': [
    'warn',
    // eslint-disable-next-line no-magic-numbers
    2,
    {
      'ArrayExpression': 1,
      'CallExpression': {
        'arguments': 1,
      },
      'flatTernaryExpressions': true,
      'FunctionDeclaration': {
        'body': 1,
        'parameters': 1,
      },
      'FunctionExpression': {
        'body': 1,
        'parameters': 1,
      },
      'ignoreComments': false,
      'ignoredNodes': [
        /*
        AST node types are listed in the ESTree specification:
        https://github.com/estree/estree

        See also AST Explorer to examine code snippets:
        https://astexplorer.net/
        */
        'ConditionalExpression',
        'TemplateLiteral *',
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      'ImportDeclaration': 1,
      'MemberExpression': 1,
      'ObjectExpression': 1,
      'offsetTernaryExpressions': true,
      'outerIIFEBody': 1,
      'StaticBlock': {
        'body': 1,
      },
      'SwitchCase': 1,
      'VariableDeclarator': 'first',
    },
  ],
  'init-declarations': 'off',
  'jsx-quotes': 'off',
  'key-spacing': [
    'warn',
    {
      'multiLine': {
        'afterColon': true,
        'beforeColon': false,
        'mode': 'minimum',
      },
      'singleLine': {
        'afterColon': true,
        'beforeColon': false,
        'mode': 'strict',
      },
    },
  ],
  'keyword-spacing': [
    'off',
    {
      'after': true,
      'before': true,
    },
  ],
  'line-comment-position': [
    'warn',
    {
      'applyDefaultIgnorePatterns': false,
      'ignorePattern': '',
      'position': 'above',
    },
  ],
  'linebreak-style': [
    'warn',
    'unix',
  ],
  'lines-around-comment': [
    'warn',
    {
      /* eslint-disable sort-keys */
      'beforeBlockComment': true,
      'afterBlockComment': false,
      'beforeLineComment': false,
      'afterLineComment': false,
      'allowBlockStart': true,
      'allowBlockEnd': true,
      'allowObjectStart': true,
      'allowObjectEnd': true,
      'allowArrayStart': true,
      'allowArrayEnd': true,
      'allowClassStart': true,
      'allowClassEnd': true,
      'ignorePattern': 'eslint',
      'applyDefaultIgnorePatterns': false,
      'afterHashbangComment': true,
      /* eslint-enable sort-keys */
    },
  ],
  'lines-between-class-members': [
    'off',
    'always',
    {
      'exceptAfterSingleLine': true,
    },
  ],
  'logical-assignment-operators': 'off',
  'max-classes-per-file': 'off',
  'max-depth': 'off',
  'max-len': [
    'off',
    {
      /* Hard limit: */
      'code': max_code_line_length,
      'comments': max_comment_line_length,

      /* Skip this check for lines containing long URLs: */
      'ignoreUrls': true,
    },
  ],
  'max-lines': [
    'off',
    {
      'max': max_executable_lines_per_file,
      'skipBlankLines': true,
      'skipComments': true,
    },
  ],
  'max-lines-per-function': [
    'off',
    {
      // eslint-disable-next-line id-match
      'IIFEs': false,
      'max': max_executable_lines_per_function,
      'skipBlankLines': true,
      'skipComments': true,
    },
  ],
  'max-nested-callbacks': [
    'warn',
    // eslint-disable-next-line no-magic-numbers
    3,
  ],
  'max-params': 'off',
  'max-statements': 'off',
  'max-statements-per-line': 'off',
  'multiline-comment-style': 'off',
  'multiline-ternary': [
    'warn',
    'always-multiline',
  ],
  'new-cap': [
    'off',
    {
      'capIsNew': false,
      'newIsCap': true,
      'properties': true,
    },
  ],
  'new-parens': 'off',
  'newline-per-chained-call': [
    'off',
    {
      'ignoreChainWithDepth': 3,
    },
  ],
  'no-alert': 'off',
  'no-array-constructor': 'warn',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'warn',
  'no-bitwise': 'off',
  'no-caller': 'off',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-confusing-arrow': 'off',
  'no-console': 'off',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'off',
  'no-constant-condition': [
    'error',
    {
      'checkLoops': false,
    },
  ],
  'no-constructor-return': 'off',
  'no-continue': 'off',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-div-regex': 'off',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'off',
  'no-else-return': 'off',
  'no-empty': [
    'error',
    {
      'allowEmptyCatch': true,
    },
  ],
  'no-empty-character-class': 'error',
  'no-empty-function': 'off',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'off',
  'no-eq-null': 'off',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'off',
  'no-extra-bind': 'off',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'warn',
  'no-extra-parens': [
    'warn',
    'all',
    {
      // 'allowParensAfterCommentPattern': '',
      'conditionalAssign': false,
      'enforceForArrowConditionals': false,
      'enforceForFunctionPrototypeMethods': false,
      'enforceForNewInMemberExpressions': false,
      'enforceForSequenceExpressions': false,
      'ignoreJSX': 'all',
      'nestedBinaryExpressions': false,
      'returnAssign': false,
      'ternaryOperandBinaryExpressions': false,
    },
  ],
  'no-extra-semi': 'warn',
  'no-fallthrough': 'error',
  'no-floating-decimal': 'off',
  'no-func-assign': 'error',
  'no-global-assign': [
    'error',
    {
      'exceptions': [],
    },
  ],
  'no-implicit-coercion': 'off',
  'no-implicit-globals': [
    'error',
    {
      'lexicalBindings': true,
    },
  ],
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inline-comments': 'warn',
  'no-inner-declarations': [
    'error',
    'functions',
  ],
  'no-invalid-regexp': [
    'error',
    {
      'allowConstructorFlags': [],
    },
  ],
  'no-invalid-this': [
    'error',
    {
      'capIsConstructor': false,
    },
  ],
  'no-irregular-whitespace': [
    'error',
    {

      'skipComments': false,
      'skipJSXText': false,
      'skipRegExps': false,
      'skipStrings': false,
      'skipTemplates': false,
    },
  ],
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': [
    'warn',
    {
      'allowLoop': false,
      'allowSwitch': false,
    },
  ],
  'no-lone-blocks': 'warn',
  'no-lonely-if': 'warn',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-magic-numbers': [
    'warn',
    {
      'detectObjects': true,
      'enforceConst': true,
      'ignore': [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ],
      'ignoreArrayIndexes': true,
      'ignoreClassFieldInitialValues': true,
      'ignoreDefaultValues': true,
    },
  ],
  'no-misleading-character-class': 'error',
  'no-mixed-operators': [
    'warn',
    {
      'allowSamePrecedence': true,
      'groups': [
        /* Arithmetic operators */
        [
          '+',
          '-',
          '*',
          '/',
          '%',
          '**',
        ],
        /* Bitwise operators */
        [
          '&',
          '|',
          '^',
          '~',
          '<<',
          '>>',
          '>>>',
        ],
        /* Comparison operators */
        [
          '==',
          '!=',
          '===',
          '!==',
          '>',
          '>=',
          '<',
          '<=',
        ],
        /* Logical operators */
        [
          '&&',
          '||',
        ],
        /* Coalesce operator */
        // [
        //   '??',
        // ],
        /* Relational operators */
        [
          'in',
          'instanceof',
        ],
        /* Ternary operator */
        // [
        //   '?:',
        // ],
      ],
    },
  ],
  'no-mixed-spaces-and-tabs': [
    'off',
  ],
  'no-multi-assign': [
    'warn',
    {
      'ignoreNonDeclaration': false,
    },
  ],
  'no-multi-spaces': [
    'warn',
    {
      'exceptions': {
        'AssignmentExpression': true,
        'Property':             true,
        'VariableDeclarator':   true,
      },
      'ignoreEOLComments': true,
    },
  ],
  'no-multi-str': 'warn',
  'no-multiple-empty-lines': [
    'warn',
    {
      'max':    1,
      'maxBOF': 0,
      'maxEOF': 0,
    },
  ],
  'no-negated-condition': 'warn',
  'no-nested-ternary': 'off',
  'no-new': 'error',
  'no-new-func': 'warn',
  'no-new-native-nonconstructor': 'error',
  'no-new-object': 'warn',
  'no-new-symbol': 'off',
  'no-new-wrappers': 'warn',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-object-constructor': 'warn',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'warn',
    {
      'props': true,
    },
  ],
  'no-plusplus': [
    'warn',
    {
      'allowForLoopAfterthoughts': true,
    },
  ],
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': [
    'error',
    {
      'builtinGlobals': true,
    },
  ],
  'no-regex-spaces': 'warn',
  'no-restricted-exports': 'off',
  'no-restricted-globals': 'off',
  'no-restricted-imports': 'off',
  'no-restricted-properties': 'off',
  'no-restricted-syntax': 'off',
  'no-return-assign': [
    'warn',
    'always',
  ],
  'no-return-await': 'off',
  'no-script-url': 'warn',
  'no-self-assign': [
    'error',
    {
      'props': true,
    },
  ],
  'no-self-compare': 'error',
  'no-sequences': [
    'warn',
    {
      'allowInParentheses': false,
    },
  ],
  'no-setter-return': 'error',
  'no-shadow': [
    'warn',
    {
      'builtinGlobals': true,
      'hoist': 'all',
    },
  ],
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'warn',
  'no-tabs': [
    'warn',
    {
      'allowIndentationTabs': false,
    },
  ],
  'no-template-curly-in-string': 'warn',
  'no-ternary': 'off',
  'no-this-before-super': 'error',
  'no-throw-literal': 'warn',
  'no-trailing-spaces': [
    'warn',
    {
      'ignoreComments': false,
      'skipBlankLines': false,
    },
  ],
  'no-undef': [
    'error',
    {
      'typeof': false,
    },
  ],
  'no-undef-init': 'warn',
  'no-undefined': 'error',
  'no-underscore-dangle': [
    'off',
    {
      'allow': [],
      'allowAfterSuper': true,
      'allowAfterThis': true,
      'allowAfterThisConstructor': true,
      'allowFunctionParams': true,
      'allowInArrayDestructuring': true,
      'allowInObjectDestructuring': true,
      'enforceInClassFields': true,
      'enforceInMethodNames': true,
    },
  ],
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': [
    'warn',
    {
      'defaultAssignment': false,
    },
  ],
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': [
    'error',
    {
      'enforceForOrderingRelations': true,
    },
  ],
  'no-unsafe-optional-chaining': [
    'error',
    {
      'disallowArithmeticOperators': true,
    },
  ],
  'no-unused-expressions': [
    'error',
    {
      'allowShortCircuit': true,
      'allowTaggedTemplates': true,
      'allowTernary': true,
      'enforceForJSX': true,
    },
  ],
  'no-unused-labels': 'warn',
  'no-unused-private-class-members': 'warn',
  'no-unused-vars': [
    'error',
    {
      'args': 'all',
      'argsIgnorePattern': '^_',
      'caughtErrors': 'all',
      'caughtErrorsIgnorePattern': '^_',
      'destructuredArrayIgnorePattern': '^_',
      'ignoreRestSiblings': true,
      'vars': 'all',
      'varsIgnorePattern': '^_',
    },
  ],
  'no-use-before-define': [
    'error',
    {
      'allowNamedExports': true,
      'classes': true,
      'functions': true,
      'variables': true,
    },
  ],
  'no-useless-backreference': 'error',
  'no-useless-call': 'warn',
  'no-useless-catch': 'warn',
  'no-useless-computed-key': 'warn',
  'no-useless-concat': 'warn',
  'no-useless-constructor': 'warn',
  'no-useless-escape': 'warn',
  'no-useless-rename': 'warn',
  'no-useless-return': 'warn',
  'no-var': 'error',
  'no-void': [
    'warn',
    {
      'allowAsStatement': false,
    },
  ],
  'no-warning-comments': [
    'warn',
    {
      'decoration': [
        '*',
        '!',
        '/',
        '-',
        '=',
      ],
      'location': 'start',
      'terms': [
        'fixme',
        'xxx',
        'xxxx',
        'xxxxx',
        'xxxxxx',
        'xxxxxxx',
        'xxxxxxxx',
        'xxxxxxxxx',
        'xxxxxxxxxx',
      ],
    },
  ],
  'no-whitespace-before-property': 'warn',
  'no-with': 'error',
  'nonblock-statement-body-position': [
    'warn',
    'beside',
  ],
  'object-curly-newline': [
    'warn',
    {
      'ExportDeclaration': 'always',
      'ImportDeclaration': 'never',
      'ObjectExpression': {
        'minProperties': 1,
        'multiline': true,
      },
      'ObjectPattern': {
        'minProperties': 2,
        'multiline': true,
      },
    },
  ],
  'object-curly-spacing': [
    'warn',
    'always',
    {
      'arraysInObjects': true,
      'objectsInObjects': true,
    },
  ],
  'object-property-newline': [
    'warn',
    {
      'allowAllPropertiesOnSameLine': false,
    },
  ],
  'object-shorthand': [
    'warn',
    'always',
  ],
  'one-var': [
    'warn',
    {
      'const': 'never',
      'let': 'never',
      'var': 'never',
      // eslint-disable-next-line sort-keys
      'separateRequires': true,
    },
  ],
  'one-var-declaration-per-line': [
    'warn',
    'always',
  ],
  'operator-assignment': [
    'warn',
    'always',
  ],
  'operator-linebreak': [
    'warn',
    'before',
    {
      'overrides': {},
    },
  ],
  'padded-blocks': [
    'warn',
    {
      // 'blocks': 'always',
      'classes': 'always',
      'switches': 'always',
    },
    {
      'allowSingleLineBlocks': false,
    },
  ],
  'padding-line-between-statements': [
    'warn',
    /* eslint-disable array-bracket-newline, array-element-newline, sort-keys */
    /*
    Empty lines before and after directive prologues, never between
    multiple consecutive directives.
    */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'directive',
    },
    {
      'blankLine': 'always',
      'prev': 'directive',
      'next': '*',
    },
    {
      'blankLine': 'never',
      'prev': 'directive',
      'next': 'directive',
    },
    /*
    Empty lines before and after variable declarations, with
    optional empty lines between multiple consecutive declarations.
    */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': ['const', 'let', 'var'],
    },
    {
      'blankLine': 'always',
      'prev': ['const', 'let', 'var'],
      'next': '*',
    },
    {
      'blankLine': 'any',
      'prev': ['const', 'let', 'var'],
      'next': ['const', 'let', 'var'],
    },
    /* Empty line before every `case` statement. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'case',
    },
    /* Empty line before every `default` statement. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'default',
    },
    /* Empty line before every `continue` statement. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'continue',
    },
    /* Empty line before every `break` statement. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'break',
    },
    /* Empty line before every `return` statement. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'return',
    },
    /* Empty line before every `throw` statement. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'throw',
    },
    /* Before and after multiline expressions. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'multiline-expression',
    },
    {
      'blankLine': 'always',
      'prev': 'multiline-expression',
      'next': '*',
    },
    /*
    Before and after block-like statements (if, while, try, etc)
    when those statements are written over multiple lines.
    */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'multiline-block-like',
    },
    {
      'blankLine': 'always',
      'prev': 'multiline-block-like',
      'next': '*',
    },
    /*
    Before and after import statements, with optional empty lines
    between consecutive imports…
    */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'import',
    },
    {
      'blankLine': 'always',
      'prev': 'import',
      'next': '*',
    },
    {
      'blankLine': 'any',
      'prev': 'import',
      'next': 'import',
    },
    /* … Same for CommonJS imports. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'cjs-import',
    },
    {
      'blankLine': 'always',
      'prev': 'cjs-import',
      'next': '*',
    },
    {
      'blankLine': 'any',
      'prev': 'cjs-import',
      'next': 'cjs-import',
    },
    /*
    Before and after export statements, with optional empty lines
    between consecutive exports…
    */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'export',
    },
    {
      'blankLine': 'always',
      'prev': 'export',
      'next': '*',
    },
    {
      'blankLine': 'any',
      'prev': 'export',
      'next': 'export',
    },
    /* … Same for CommonJS exports. */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'cjs-export',
    },
    {
      'blankLine': 'always',
      'prev': 'cjs-export',
      'next': '*',
    },
    {
      'blankLine': 'any',
      'prev': 'cjs-export',
      'next': 'cjs-export',
    },
    /*
    Empty lines before and after debugger statement, but never between
    multiple consecutive directives.
    */
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'debugger',
    },
    {
      'blankLine': 'always',
      'prev': 'debugger',
      'next': '*',
    },
    {
      'blankLine': 'never',
      'prev': 'debugger',
      'next': 'debugger',
    },
    /* eslint-enable array-bracket-newline, array-element-newline, sort-keys */
  ],
  'prefer-arrow-callback': [
    'warn',
    {
      'allowNamedFunctions': false,
      'allowUnboundThis': false,
    },
  ],
  'prefer-const': [
    'warn',
    {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false,
    },
  ],
  'prefer-destructuring': [
    'warn',
    {
      'AssignmentExpression': {
        'array': true,
        'object': true,
      },
      'VariableDeclarator': {
        'array': true,
        'object': true,
      },
    },
    {
      'enforceForRenamedProperties': false,
    },
  ],
  'prefer-exponentiation-operator': 'warn',
  'prefer-named-capture-group': 'off',
  'prefer-numeric-literals': 'warn',
  'prefer-object-has-own': 'warn',
  'prefer-object-spread': 'warn',
  'prefer-promise-reject-errors': [
    'warn',
    {
      'allowEmptyReject': false,
    },
  ],
  'prefer-regex-literals': [
    'warn',
    {
      'disallowRedundantWrapping': true,
    },
  ],
  'prefer-rest-params': 'warn',
  'prefer-spread': 'warn',
  'prefer-template': 'warn',
  'quote-props': [
    'warn',
    'always',
    {
      'keywords': true,
    },
  ],
  'quotes': [
    'warn',
    'single',
    {
      'allowTemplateLiterals': false,
      'avoidEscape': true,
    },
  ],
  'radix': [
    'warn',
    'always',
  ],
  'require-atomic-updates': [
    'error',
    {
      'allowProperties': false,
    },
  ],
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'require-yield': 'error',
  'rest-spread-spacing': [
    'warn',
    'never',
  ],
  'semi': [
    'warn',
    'never',
    {
      'beforeStatementContinuationChars': 'always',
    },
  ],
  'semi-spacing': [
    'warn',
    {
      'after': true,
      'before': false,
    },
  ],
  'semi-style': [
    'warn',
    'first',
  ],
  'sort-imports': [
    'warn',
    {
      'allowSeparatedGroups': true,
      'ignoreCase': true,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': [
        'none',
        'all',
        'single',
        'multiple',
      ],
    },
  ],
  'sort-keys': [
    'warn',
    'asc',
    {
      'allowLineSeparatedGroups': true,
      'caseSensitive': false,
      'minKeys': 2,
      'natural': true,
    },
  ],
  'sort-vars': [
    'warn',
    {
      'ignoreCase': true,
    },
  ],
  'space-before-blocks': [
    'warn',
    {
      'classes': 'always',
      'functions': 'always',
      'keywords': 'always',
    },
  ],
  'space-before-function-paren': [
    'warn',
    {
      'anonymous': 'always',
      'asyncArrow': 'always',
      'named': 'always',
    },
  ],
  'space-in-parens': [
    'warn',
    'never',
  ],
  'space-infix-ops': [
    'warn',
  ],
  'space-unary-ops': [
    'warn',
    {
      'nonwords': false,
      'words': true,
    },
  ],
  'spaced-comment': [
    'warn',
    'always',
    {
      'block': {
        'balanced': true,
        'exceptions': [
          '*',
        ],
        'markers': [],
      },
      'line': {
        'markers': [],
      },
    },
  ],
  'strict': [
    'warn',
    'global',
  ],
  'switch-colon-spacing': [
    'warn',
    {
      'after': true,
      'before': false,
    },
  ],
  'symbol-description': 'warn',
  'template-curly-spacing': [
    'warn',
    'never',
  ],
  'template-tag-spacing': [
    'warn',
    'never',
  ],
  'unicode-bom': [
    'warn',
    'never',
  ],
  'use-isnan': [
    'error',
    {
      'enforceForIndexOf': true,
      'enforceForSwitchCase': true,
    },
  ],
  'valid-typeof': [
    'error',
    {
      'requireStringLiterals': false,
    },
  ],
  'vars-on-top': 'error',
  'wrap-iife': [
    'warn',
    'any',
    {
      'functionPrototypeMethods': true,
    },
  ],
  'wrap-regex': 'warn',
  'yield-star-spacing': [
    'warn',
    {
      'after': true,
      'before': false,
    },
  ],
  'yoda': [
    'warn',
    'never',
    {
      'exceptRange': false,
      'onlyEquality': false,
    },
  ],
})

export {
  builtin,
}
