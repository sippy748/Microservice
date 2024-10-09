import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import prettierConfig from "eslint-config-prettier";

const dirName = dirname(fileURLToPath(import.meta.url));
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  prettierConfig,

  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dirName,
      },
    },
  },
  {
    ignores: [
      "/node_modules/",
      "eslint.config.mjs",
      "/config/",
      "/*.js",
      "dist",
    ],
  },
  {
    rules: {
      "no-console": "error",
      "dot-notation": "error",
    },
  },
);
