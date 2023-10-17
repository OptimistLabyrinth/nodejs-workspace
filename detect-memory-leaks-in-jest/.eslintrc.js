module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
  ],
  ignorePatterns: [
    'coverage/',
    'dist/',
    'node_modules/',
    'package-lock.json',
    'tsconfig.json',
    'yarn.lock',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
    ],
    'object-curly-newline': [
      'error',
      { multiline: true },
    ],
    'newline-per-chained-call': 'off',
    semi: [
      'error',
      'never',
    ],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: [
        '*.ts',
        '*.tsx',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
        ],
      },
    },
  ],
}
