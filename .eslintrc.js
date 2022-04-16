module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  globals: {
    __DEV__: 'readonly',
    Atomics: 'readonly',
    fetch: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      // disable the rule specifically for Javascript files
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'filenames',
    'import',
    'jest',
    'graphql',
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/consistent-type-imports': [1],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-shadow': [1],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': [1],
    'filenames/match-exported': ['error', [null, 'kebab']],
    'filenames/match-regex': [
      'error',
      '^[\\.]?[A-z]+(-[A-z]+)*(\\.[A-z]+)?$',
      true,
    ], // kebab-case with optional suffix (foo-bar.config.js)
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'], // relative imports are allowed only up two one directory above the current
      },
    ],
    'no-shadow': 'off', // Disabling to use tslint rule
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-use-before-define': 'off', // Disabling to use tslint rule
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'sort-keys': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
