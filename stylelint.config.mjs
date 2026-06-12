/** @type {import('stylelint').Config} */
const config = {
  extends: [
    "stylelint-config-standard",
    "@dreamsicle.io/stylelint-config-tailwindcss",
    "stylelint-config-recess-order",
  ],
  plugins: ["stylelint-order"],
  rules: {
    /* ─── Modern Syntax & i18n Logical Properties ───────────────────────── */
    "at-rule-no-unknown": null,
    "property-no-unknown": null,
    "no-descending-specificity": null,
    "import-notation": "string",
    "property-disallowed-list": [
      "/^padding-(left|right)$/",
      "/^margin-(left|right)$/",
      "/^border-(left|right)/",
      "left",
      "right",
    ],

    /* ─── Security Hardening ─────────────────────────────────────────────── */
    "function-url-no-scheme-relative": true,
    "function-url-scheme-allowed-list": ["https", "data"],
    "custom-property-no-missing-var-function": true,

    /* ─── Unit & value enforcement ───────────────────────────────────────── */
    "unit-allowed-list": ["%", "deg", "px", "rem", "ms", "fr"],
    "declaration-property-unit-allowed-list": { "/^border/": ["px"], "/^padding|^gap/": ["rem"] },
    "declaration-property-unit-disallowed-list": {
      "font-size": ["px"],
      "line-height": ["px", "rem"],
    },
    "length-zero-no-unit": [true, { ignore: ["custom-properties"] }],
    "color-hex-length": "short",
    "color-function-notation": "modern",
    "color-named": "never",
    "alpha-value-notation": "percentage",
    "font-weight-notation": "numeric",
    "shorthand-property-no-redundant-values": true,

    /* ─── Selector conventions & Performance ─────────────────────────────── */
    "selector-pseudo-element-colon-notation": "double",
    "selector-not-notation": "complex",
    "selector-max-id": 0,
    "selector-max-compound-selectors": 4,
    "selector-no-vendor-prefix": true,
    "selector-no-qualifying-type": true,
    "max-nesting-depth": [3, { ignoreAtRules: ["media", "supports", "layer"] }],
    "selector-max-specificity": "0,4,0",

    /* ─── Code quality ───────────────────────────────────────────────────── */
    "declaration-no-important": [true, { severity: "warning" }],
    "media-feature-range-notation": "context",
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "comment-no-empty": true,
    "number-max-precision": 4,
  },
};

export default config;
