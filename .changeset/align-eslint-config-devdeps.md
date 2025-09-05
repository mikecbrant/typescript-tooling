---
"@mikecbrant/eslint-config": major
---

Breaking change: move ESLint core and all ESLint plugin/config packages from `dependencies` to `peerDependencies`. Consumers must now install these directly in their projects to use this shared config:

- `eslint`
- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`
- `eslint-config-xo-typescript`
- `eslint-plugin-import`
- `eslint-import-resolver-typescript`
- `eslint-plugin-unicorn`
- `eslint-plugin-sonarjs`
- `eslint-plugin-unused-imports`

Also align this package’s `devDependencies` with the exact versions resolved in the workspace lockfile to support local development of the config.
