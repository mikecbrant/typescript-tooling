# `@mikecbrant/tsconfig`

Shareable TypeScript presets for modern ESM Node projects. This package exports three JSON/JSONC presets that downstream projects can extend via the `tsconfig.json` `extends` field:

- `@mikecbrant/tsconfig/base`
- `@mikecbrant/tsconfig/node-library`
- `@mikecbrant/tsconfig/node-test`

Baseline and assumptions

- Runtime: Node 22 (ES2023). This matches the repository `engines.node` and the root `tsconfig.json` baseline discussed in PR #1.
- File format: JSON/JSONC is intentionally used for `tsconfig` files. The TypeScript compiler resolves only JSON/JSONC via `extends`; JS/ESM (`.mjs`) tsconfig files are not supported by `tsc`, so keeping JSON/JSONC ensures consumers can extend these presets reliably.

## Presets

### `base.json` → `@mikecbrant/tsconfig/base`

Intended for ESM Node codebases as a strict, no‑emit baseline that you can extend in apps or libraries.

Key options (as defined in this preset):

- `target`: `ES2023`
- `lib`: `["ES2023"]`
- `module`: `ESNext`
- `moduleResolution`: `Bundler`
- `verbatimModuleSyntax`: `true`
- `strict`: `true`
- `exactOptionalPropertyTypes`: `true`
- `noUncheckedIndexedAccess`: `true`
- `noImplicitOverride`: `true`
- `useDefineForClassFields`: `true`
- `resolvePackageJsonExports` / `resolvePackageJsonImports`: `true`
- `skipLibCheck`: `true`
- `noEmit`: `true`

### `node-library.json` → `@mikecbrant/tsconfig/node-library`

For publishable Node libraries that produce `.d.ts` files.

Differences vs `base`:

- Enables declaration output: `declaration: true`, `declarationMap: true`
- Allows emitting build output: `noEmit: false` (inherits all strictness from `base`)

Typical consumers will also set `outDir`, `rootDir`, and `include`/`exclude` to match their project layout.

### `node-test.json` → `@mikecbrant/tsconfig/node-test`

For Node test code. Extends `base` and preloads common test type packages.

Differences vs `base`:

- Adds `types`: `["node", "vitest", "vitest/globals"]`
- Keeps `noEmit: true`

Consumers can replace or augment the `types` array if they use a different runner.

## Usage

Extend a preset from your project `tsconfig.json`:

App or library baseline (no emit):

```jsonc
{
  "extends": "@mikecbrant/tsconfig/base",
  "compilerOptions": {
    // project-specific options here (paths/outDir/isolatedModules/etc.)
  },
  "include": ["src/**/*.ts"],
  "exclude": ["dist", "node_modules"],
}
```

Node library (generate declarations):

```jsonc
{
  "extends": "@mikecbrant/tsconfig/node-library",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
  },
  "include": ["src/**/*.ts"],
  "exclude": ["dist", "node_modules", "**/*.test.ts"],
}
```

Node tests:

```jsonc
{
  "extends": "@mikecbrant/tsconfig/node-test",
  "compilerOptions": {
    // add any runner-specific types if needed
  },
  "include": ["src/**/*.test.ts", "tests/**/*.ts"],
}
```

## Compatibility notes

- ESM-first: The presets assume ESM (`module: ESNext`) with `moduleResolution: Bundler` and `verbatimModuleSyntax: true`. Prefer explicit `type`-only imports and avoid deep CJS interop.
- JSON/JSONC only: Presets are published as JSON; this is by design for `tsc` compatibility when using `extends`.
- TypeScript peer: `typescript >=5.6` is required by consumers.

If you need to diverge (e.g., CommonJS, different `types` for tests, or a stricter/looser lib target), override those fields in your project’s `tsconfig.json`.
