module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  plugins: ["stylelint-scss"],
  customSyntax: "postcss-scss",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "scss/at-rule-no-unknown": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "function-no-unknown": null,
    "declaration-block-trailing-semicolon": null,
    "no-invalid-position-at-import-rule": null,
  },
};
