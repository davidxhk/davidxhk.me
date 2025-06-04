import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended",
    ],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": [
        "warn",
        {
          semi: false,
          singleQuote: false,
          trailingComma: "all",
          arrowParens: "always",
          endOfLine: "lf",
          plugins: ["prettier-plugin-tailwindcss"],
          tailwindStylesheet: "./src/app/globals.css",
          tailwindFunctions: ["cn"],
        },
        {
          usePrettierrc: false,
        },
      ],
    },
  }),
]

export default eslintConfig
