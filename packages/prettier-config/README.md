# @mikecbrant/prettier-config

Prettier 3 config matching the Node 22+ baseline (tabs, no semicolons, single quotes, trailing commas).

## Usage

- In `package.json`:

```json
{ "prettier": "@mikecbrant/prettier-config" }
```

- Or `.prettierrc.mjs`:

```js
export { default } from "@mikecbrant/prettier-config";
```

Peer dependency: `prettier@^3`.
