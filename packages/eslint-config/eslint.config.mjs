// Local, minimal flat config for linting this package's `.mjs` files.
// Keep this JS-only to avoid TS typed-rule requirements.
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
	{
		files: ['**/*.mjs'],
		languageOptions: {
			ecmaVersion: 2023,
			sourceType: 'module',
		},
		plugins: {
			import: importPlugin,
			'unused-imports': unusedImports,
		},
		rules: {
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
		},
	},
	{ ignores: ['**/*.cjs', '**/*.cts'] },
]
