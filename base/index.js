module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		ecmaVersion: "latest",
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	env: {
		es6: true,
		es2020: true,
		es2021: true,
		commonjs: true,
		node: true,
		browser: true,
		worker: true,
		jest: true,
		"shared-node-browser": true,
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
			},
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
	},
	plugins: ["@typescript-eslint", "prettier", "import"],
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"],
			},
			{
				selector: "function",
				format: ["PascalCase", "camelCase"],
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],

		"jest/expect-expect": "off",

		"@rushstack/typedef-var": "off",
	},
	ignorePatterns: [
		"**/*.json",
		"node_modules",
		"public",
		"styles",
		".next",
		"coverage",
		"dist",
		"build",
		".turbo",
	],
};
