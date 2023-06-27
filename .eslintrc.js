module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "prettier",
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
        {
            env: { node: true },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["@typescript-eslint", "react", "prettier"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": ["error"]
    }
}
