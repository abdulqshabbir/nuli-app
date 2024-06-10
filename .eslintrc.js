// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["expo"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
  },
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/recommended-type-checked"],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
