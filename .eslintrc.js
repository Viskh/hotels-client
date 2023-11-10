module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "only-warn",
    "prettier",
    "simple-import-sort",
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "import/order": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^react", "^@?\\w"],
          ["^(app|pages|widgets|features|entities|shared)(/.*|$)"],
          [
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
          ],

          ["^"],
          ["^.+\\.?(types)$"],
          [".module.scss", "^.+\\.?(css)$"],
        ],
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "import/no-unresolved": "off",
    "react/display-name": "off",
  },
};
