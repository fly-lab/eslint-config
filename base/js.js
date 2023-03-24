module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
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
  plugins: ["prettier"],
  rules: {
    "jest/expect-expect": "off",
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
