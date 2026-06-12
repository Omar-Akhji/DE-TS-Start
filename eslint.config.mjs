import markdown from "@eslint/markdown";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nounsanitized from "eslint-plugin-no-unsanitized";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import securityPlugin from "eslint-plugin-security";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  // ─── Markdown ──────────────────────────────────────────────────
  ...markdown.configs.recommended,
  {
    files: ["**/*.md"],
    rules: { "markdown/no-missing-label-refs": "off", "markdown/no-multiple-h1": "off" },
  },

  // ─── Unicorn ───────────────────────────────────────────────────
  { ...unicorn.configs["flat/recommended"], files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"] },

  // ─── Security ──────────────────────────────────────────────────
  { ...securityPlugin.configs.recommended, files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"] },
  { ...nounsanitized.configs.recommended, files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"] },

  // ─── Unicorn overrides ─────────────────────────────────────────
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    rules: {
      "unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
      "unicorn/prevent-abbreviations": [
        "error",
        { replacements: { props: false, ref: false, params: false, e: false, err: false } },
      ],
      "unicorn/no-null": "off",
      "unicorn/no-array-reduce": "off",
    },
  },

  // ─── TypeScript ────────────────────────────────────────────────
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: { "@typescript-eslint": tseslintPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      // Basic unused and formatting constraints
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      // Strict Type-Aware Rules (2026 Gold Standard)
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-argument": "error",

      // Promise & Async Safety
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/await-thenable": "error",

      // Quality & Unnecessary Operations Guards
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true, allowBoolean: true },
      ],
    },
  },

  // ─── General quality ───────────────────────────────────────────
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-nested-ternary": "off",
      "no-implicit-coercion": "error",
      "no-return-assign": "error",
      "no-throw-literal": "error",
    },
  },

  // ─── Security tuning ───────────────────────────────────────────
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    rules: {
      "security/detect-eval-with-expression": "error",
      "security/detect-unsafe-regex": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-child-process": "error",
      "security/detect-no-csrf-before-method-override": "error",
      "security/detect-pseudoRandomBytes": "error",
      "security/detect-object-injection": "warn",
      "no-unsanitized/method": "error",
      "no-unsanitized/property": "error",
    },
  },

  // ─── Prettier — MUST be last ───────────────────────────────────
  { ...prettierRecommended, files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"] },

  // ─── Global ignores ────────────────────────────────────────────
  globalIgnores([
    "dist/**",
    "out/**",
    "build/**",
    "public/**",
    "graphify-out/**",
    "scratch/**",
    "docs/**",
    ".gemini/**",
    ".agents/**",
    ".codex/**",
    ".claude/**",
    ".cursor/**",
  ]),
]);

export default eslintConfig;
