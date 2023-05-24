module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "next/core-web-vitals",
        "prettier",
        "plugin:prettier/recommended"
    ],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": ["error"],
        "react/prop-types": ["error"]
    }
}
