# @mikecbrant/eslint-config

ESLint 9 flat config for ESM-only Node 22/24 projects.

- Based on `eslint-config-xo-typescript` with additional strict rules
- ESM-only: no `.cjs`, no eslintrc format
- CJS (`*.cjs`, `*.cts`) files are ignored by default

## Install

```bash
pnpm add -D eslint @mikecbrant/eslint-config
```

This shareable config brings along the necessary plugins/configs internally (XO + TypeScript, import resolver, SonarJS, unicorn, and unused-imports). Your project only needs `eslint` and this package.

## Usage

Create `eslint.config.js` in your repo root:

```js
import config from '@mikecbrant/eslint-config'
export default config
```

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
