// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default tseslint.config(
  [
    globalIgnores(['dist/**', 'coverage/**', 'storybook-static/**', '**/*.md', '**/*.mdx']),
    // Bring in legacy shareable configs using the compatibility layer
    ...compat.extends(
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ),
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      extends: [],
      languageOptions: {
        ecmaVersion: 'latest',
        globals: globals.browser,
      },
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            noWarnOnMultipleProjects: true,
            project: [
              './tsconfig.json',
              './tsconfig.app.json',
              './tsconfig.node.json',
              './.storybook/tsconfig.json',
            ],
          },
        },
      },
      rules: {
        // React modern JSX transform + TS codebases
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',

        // Import hygiene
        'import/order': ['error', { 'newlines-between': 'always' }],
        // Vite and config files can trigger false positives
        'import/no-unresolved': 'error',
      },
    },
    {
      files: ['**/*.{ts,tsx}', '**/*.stories.tsx'],
      ignores: ['coverage/**', 'dist/**', 'node_modules/**', 'src/configs/test/setup.ts'],
      extends: [
        ...tseslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.strict,
        ...tseslint.configs.strictTypeChecked,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
      ],
      languageOptions: {
        parserOptions: {
          // Enable type-aware rules without hardcoding project paths
          projectService: true,
        },
      },
      rules: {
        // Enforce: no non-null assertions (use narrowing/guards instead)
        '@typescript-eslint/no-non-null-assertion': 'error',
        // Project preference: disable strict unsafe checks globally
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
    // Storybook stories can trip no-floating-promises due to testing utils typing
    {
      files: ['**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
    // Node-specific files: use Node globals to avoid false positives
    {
      files: ['vite.config.*', 'vitest.config.*', '.storybook/**/*.ts', 'eslint.config.js'],
      languageOptions: {
        globals: globals.node,
      },
    },
    // Disable import/* rules for this config file to avoid false positives
    {
      files: ['eslint.config.js'],
      rules: {
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/export': 'off',
      },
    },
    // Turn off formatting rules that conflict with Prettier
    prettierConfig,
  ],
  storybook.configs['flat/recommended'],
);
