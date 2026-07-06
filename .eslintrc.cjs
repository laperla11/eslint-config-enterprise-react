module.exports = {
  root: true,

  env: {
    browser: true,
    es2022: true,
    jest: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'build/',
  ],

  overrides: [
    // --------------------------
    // JavaScript
    // --------------------------
    {
      files: ['**/*.js', '**/*.jsx'],

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },

      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],

      rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-multiple-empty-lines': 'error',
      },
    },

    // --------------------------
    // TypeScript
    // --------------------------
    {
      files: ['**/*.ts', '**/*.tsx'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },

      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
      ],

      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-multiple-empty-lines': 'error',
      },
    },

    // --------------------------
    // Tests
    // --------------------------
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],

      rules: {
        '@typescript-eslint/require-await': 'off',
      },
    },
  ],
};
