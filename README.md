# @fly-lab ESLint & Prettier Rules

ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

This package is @rushstack/eslint-config based custom ESLint rules. It will remove most of the headache of configuring ESLint and prettier in every project.

<p align="center">
    <img src="./eslint.png" alt="@fly-lab ESLint & Prettier Rules" width="300" height="300" />
</p>

## Installation

```shell
$ npm i -D @fly-lab/eslint-config
$ pnpm i -D @fly-lab/eslint-config
$ yarn add -D @fly-lab/eslint-config
```

## Usages

### ESLint

Usage is very easy. Just extend required [profile](#profile) in your .eslintrc file.

For example, extending in react project:

.eslintrc.js file in root directory:

```shell
module.exports = {
	root: true,
	extends: ["@fly-lab/eslint-config/react"],
	parserOptions: {
		tsconfigRootDir: __dirname,
	},
};
```

### Prettier

Extending prettier is super easy. Just create .prettierrc file with content:

```shell
"@fly-lab/eslint-config/prettier-config.json"
```

## Profile

Extending depends upon project:

- React TypeScript: `@fly-lab/eslint-config/react`
- React JavaScript: `@fly-lab/eslint-config/react/js`
- Node TypeScript: `@fly-lab/eslint-config/node`
- Node JavaScript: `@fly-lab/eslint-config/node/js`

## ESLint ignoring

If we want to ignore specific file or folder to lint, use gitignore like syntax.

.eslintignore file:

```eslint
node_modules
some_file.js
**/*html
```

## Prettier ignoring

Just like ESLint ignoring:

.prettierignore file:

```eslint
.github
dist
**/*.md
coverage
```