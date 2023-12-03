/* eslint-disable @typescript-eslint/no-var-requires */
const {
  ERROR,
  OFF,
  defaultLevelLogic,
} = require('./levels.eslint')

const rulesJavascriptLogic = {
  // * possible problems [https://eslint.org/docs/latest/rules/#possible-problems]
  'array-callback-return': [
    defaultLevelLogic,
    {
      allowImplicit: false,
      checkForEach: false,
      // allowVoid: true,
    },
  ],
  'no-await-in-loop': defaultLevelLogic,
  'no-constant-binary-expression': defaultLevelLogic,
  'no-constructor-return': ERROR,
  'no-duplicate-imports': OFF,
  'no-new-native-nonconstructor': ERROR,
  'no-promise-executor-return': ERROR,
  'no-self-compare': defaultLevelLogic,
  'no-template-curly-in-string': ERROR,
  'no-unmodified-loop-condition': ERROR,
  'no-unreachable-loop': ERROR,
  'no-unused-private-class-members': defaultLevelLogic,
  'no-use-before-define': ERROR,
  'require-atomic-updates': defaultLevelLogic,
  // * suggestions [https://eslint.org/docs/latest/rules/#suggestions]
  'accessor-pairs': defaultLevelLogic,
  'arrow-body-style': [
    defaultLevelLogic,
    'as-needed',
    { requireReturnForObjectLiteral: false },
  ],
  'block-scoped-var': ERROR,
  camelcase: [
    defaultLevelLogic,
    {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: true,
      allow: [],
    },
  ],
  'capitalized-comments': OFF,
  'class-methods-use-this': [
    defaultLevelLogic,
    {
      exceptMethods: [],
      enforceForClassFields: true,
    },
  ],
  curly: [defaultLevelLogic, 'all'],
  'default-case': ERROR,
  'default-case-last': ERROR,
  'default-param-last': ERROR,
  'dot-notation': defaultLevelLogic,
  eqeqeq: defaultLevelLogic,
  'func-name-matching': [
    defaultLevelLogic,
    'always',
    {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: true,
    },
  ],
  'func-names': [
    defaultLevelLogic,
    'as-needed',
    { generators: 'as-needed' },
  ],
  'func-style': [
    defaultLevelLogic,
    'declaration',
    { allowArrowFunctions: true },
  ],
  'grouped-accessor-pairs': [defaultLevelLogic, 'getBeforeSet'],
  'guard-for-in': defaultLevelLogic,
  'multiline-comment-style': OFF,
  'no-alert': defaultLevelLogic,
  'no-array-constructor': ERROR,
  'no-bitwise': defaultLevelLogic,
  'no-caller': ERROR,
  'no-case-declarations': ERROR,
  'no-console': defaultLevelLogic,
  'no-delete-var': ERROR,
  'no-div-regex': defaultLevelLogic,
  'no-else-return': [
    defaultLevelLogic,
    { allowElseIf: false },
  ],
  'no-empty-function': ERROR,
  'no-empty-static-block': ERROR,
  'no-eq-null': ERROR,
  'no-eval': ERROR,
  'no-extend-native': ERROR,
  'no-extra-bind': ERROR,
  'no-implicit-coercion': [
    defaultLevelLogic,
    {
      boolean: true,
      number: true,
      string: true,
      disallowTemplateShorthand: true,
    },
  ],
  'no-implied-eval': ERROR,
  'no-invalid-this': ERROR,
  'no-lonely-if': defaultLevelLogic,
  'no-loop-func': defaultLevelLogic,
  'no-multi-str': defaultLevelLogic,
  'no-new': ERROR,
  'no-new-func': ERROR,
  'no-new-wrappers': ERROR,
  'no-object-constructor': ERROR,
  'no-octal-escape': ERROR,
  'no-param-reassign': ERROR,
  'no-proto': ERROR,
  'no-script-url': ERROR,
  'no-sequences': ERROR,
  'no-shadow': ERROR,
  'no-shadow-restricted-names': ERROR,
  'no-throw-literal': ERROR,
  'no-undef-init': defaultLevelLogic,
  'no-undefined': ERROR,
  'no-underscore-dangle': defaultLevelLogic,
  'no-unneeded-ternary': defaultLevelLogic,
  'no-unused-expressions': [
    defaultLevelLogic,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      // enforceForJSX: true,
    },
  ],
  'no-useless-call': ERROR,
  'no-useless-computed-key': defaultLevelLogic,
  'no-useless-concat': defaultLevelLogic,
  'no-useless-constructor': defaultLevelLogic,
  'no-useless-rename': [
    defaultLevelLogic,
    {
      ignoreImport: false,
      ignoreExport: false,
      ignoreDestructuring: false,
    },
  ],
  'no-useless-return': defaultLevelLogic,
  'no-var': ERROR,
  'no-void': ERROR,
  'no-with': ERROR,
  'object-shorthand': [
    defaultLevelLogic,
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: true,
      avoidExplicitReturnArrows: true,
    },
  ],
  'operator-assignment': defaultLevelLogic,
  'prefer-arrow-callback': [
    defaultLevelLogic,
    {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    },
  ],
  'prefer-const': defaultLevelLogic,
  'prefer-destructuring': [
    defaultLevelLogic,
    {
      array: false,
      object: true,
    },
    { enforceForRenamedProperties: true },
  ],
  'prefer-exponentiation-operator': defaultLevelLogic,
  'prefer-named-capture-group': defaultLevelLogic,
  'prefer-numeric-literals': defaultLevelLogic,
  'prefer-object-has-own': defaultLevelLogic,
  'prefer-object-spread': defaultLevelLogic,
  'prefer-promise-reject-errors': ERROR,
  'prefer-regex-literals': defaultLevelLogic,
  'prefer-rest-params': defaultLevelLogic,
  'prefer-spread': defaultLevelLogic,
  'prefer-template': defaultLevelLogic,
  radix: [defaultLevelLogic, 'as-needed'],
  'require-await': ERROR,
  'require-unicode-regexp': defaultLevelLogic,
  'require-yield': ERROR,
  strict: [defaultLevelLogic, 'global'],
} // * end of 'rulesJavascriptLogic' object

module.exports = { rulesJavascriptLogic }
