import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import xoTypeScript from 'eslint-config-xo-typescript'
import importPlugin from 'eslint-plugin-import'
import sonarjs from 'eslint-plugin-sonarjs'
import unicornPlugin from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
	// Base XO TypeScript config (flat)
	...xoTypeScript,

	// SonarJS recommended (flat)
	sonarjs.configs.recommended,

	// Strict overlays and additional plugins
	{
		name: '@mikecbrant/eslint-config/strict-overrides',
		files: [
			'**/*.js',
			'**/*.mjs',
			'**/*.jsx',
			'**/*.ts',
			'**/*.mts',
			'**/*.tsx',
			'**/*.d.ts',
		],
		plugins: {
			'@typescript-eslint': tsPlugin,
			import: importPlugin,
			unicorn: unicornPlugin,
			'unused-imports': unusedImports,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tsParser,
			parserOptions: {
				// Enable type-aware rules without hardcoding absolute tsconfig paths
				projectService: true,
			},
		},
		settings: {
			'import/resolver': {
				typescript: { alwaysTryTypes: true },
			},
		},
		rules: {
			// Confirmed strict thresholds (errors)
			'max-lines-per-function': [
				'error',
				{ max: 60, skipComments: true, skipBlankLines: true },
			],
			complexity: ['error', 10],
			'max-depth': ['error', 3],
			'max-params': ['error', 4],

			// TS hygiene
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
			],
			'@typescript-eslint/no-floating-promises': 'error',

			// Imports hygiene & sorting
			'import/no-duplicates': 'error',
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					alphabetize: { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always',
				},
			],
			'unused-imports/no-unused-imports': 'error',

			// Misc
			'no-console': 'error',

			// Tame a few unicorn defaults
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/no-null': 'off',
		},
	},

	// Explicitly omit CommonJS and TypeScript CJS
	{ ignores: ['**/*.cjs', '**/*.cts'] },
]
