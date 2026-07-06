/**
 * -----------------------------------------------------------------------------
 * Enterprise React ESLint Standard
 * TypeScript Configuration
 *
 * Purpose:
 * - High ROI TypeScript rules
 * - Type-aware safety
 * - Enterprise friendly
 * -----------------------------------------------------------------------------
 */

module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  // Keep top-level parser options minimal to avoid forcing type-aware
  // parsing for non-TypeScript files that extend this config.
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },

  // Apply TypeScript-specific, type-aware rules only to TS/TSX files.
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      rules: {
        // =========================================================================
        // Disable JS equivalents
        // =========================================================================

        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'no-redeclare': 'off',

        // =========================================================================
        // TypeScript Correctness
        // =========================================================================

        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],

        '@typescript-eslint/no-shadow': 'error',

        '@typescript-eslint/no-redeclare': 'error',

        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: true,
            variables: true,
            typedefs: false,
          },
        ],

        '@typescript-eslint/no-explicit-any': 'error',

        // =========================================================================
        // Async / Promise Safety
        // =========================================================================

        '@typescript-eslint/await-thenable': 'error',

        '@typescript-eslint/no-floating-promises': [
          'error',
          {
            ignoreVoid: true,
            ignoreIIFE: true,
          },
        ],

        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],

        // =========================================================================
        // Consistency
        // =========================================================================

        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],

        '@typescript-eslint/consistent-type-exports': 'warn',

        // =========================================================================
        // Disabled by design
        // =========================================================================

        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        '@typescript-eslint/strict-boolean-expressions': 'off',

        '@typescript-eslint/prefer-readonly': 'off',

        '@typescript-eslint/no-unnecessary-condition': 'off',

        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        '@typescript-eslint/prefer-optional-chain': 'off',

        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
