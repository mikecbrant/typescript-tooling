# @mikecbrant/eslint-config

ESLint 9 flat config for ESM-only Node 22/24 projects.

- Based on `eslint-config-xo-typescript` with additional strict rules
- ESM-only: no `.cjs`, no eslintrc format
- CJS (`*.cjs`, `*.cts`) files are ignored by default

## Peer dependencies

This package requires the following peers in your project:

- `eslint` (^9.0.0)
- `typescript` (^5.0.0)

All ESLint plugins/configs used by this shareable config are regular dependencies and install transitively with `@mikecbrant/eslint-config`.

## Install

```bash
pnpm add -D eslint typescript @mikecbrant/eslint-config
```

This installs the two peers alongside the shared config. The plugin/config packages (XO TypeScript, import resolver, SonarJS, unicorn, and unused-imports) are bundled as dependencies of this package—you do not need to add them yourself.

## Usage

Create `eslint.config.js` in your repo root:

```js
import config from '@mikecbrant/eslint-config'
export default config
```

### Avoid duplicated config values

When using the flat config exported by this package, do not re-declare the same plugins/configs or duplicate rules in your local `eslint.config.*`. This config already registers:

- `@typescript-eslint`
- `eslint-plugin-import`
- `eslint-plugin-unicorn`
- `eslint-plugin-sonarjs`
- `eslint-plugin-unused-imports`

Re-declaring these can lead to duplicate plugin instances or conflicting rules (an issue we hit in a recent PR). If you need project-specific tweaks, place additional overrides after the imported config without re-adding the same plugins/configs.

Key strict rules (all error):

- `max-lines-per-function` = 60 (skip comments/blank lines)
- `complexity` = 10
- `max-depth` = 3
- `max-params` = 4
- `@typescript-eslint/consistent-type-imports`
- `@typescript-eslint/no-floating-promises`
- `import/no-duplicates`
- `import/order` (grouped + alphabetized)
- `unused-imports/no-unused-imports`
- `no-console`
