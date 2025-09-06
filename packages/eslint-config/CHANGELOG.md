# @mikecbrant/eslint-config

## 1.0.0

### Major Changes

- 1286dde: Breaking change: adopt Option B dependency model. Only the following are required as peer dependencies for consumers:
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

## 0.1.0

### Minor Changes

- 752f763: Initial release of ESM-only shareable configs (ESLint 9 flat, Prettier 3, TS configs).
