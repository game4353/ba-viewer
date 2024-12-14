import { includeIgnoreFile } from "@eslint/compat";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  ...pluginVue.configs["flat/essential"],
  ...vueTsEslintConfig(),
  includeIgnoreFile(gitignorePath),
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-namespace": "warn",
      "@typescript-eslint/no-wrapper-object-types": "off",
    },
  },
  {
    ignores: ["*.config.*", "**/type.ts", "**/*.d.ts"],
  },
];
