---
"@mikecbrant/eslint-config": major
---

Breaking change: adopt Option B dependency model. Only the following are required as peer dependencies for consumers:

- `eslint`
- `typescript`

All ESLint plugin/config packages are now regular dependencies of `@mikecbrant/eslint-config` and will be installed transitively by consumers (no need to add them directly):

- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`
- `eslint-config-xo-typescript`
- `eslint-plugin-import`
- `eslint-import-resolver-typescript`
- `eslint-plugin-unicorn`
- `eslint-plugin-sonarjs`
- `eslint-plugin-unused-imports`

Development policy: this package’s `devDependencies` now use caret ranges to track current tooling (no pinning to exact lockfile resolutions).
