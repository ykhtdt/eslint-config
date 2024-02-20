module.exports = {
  ignorePatterns: ["dist", "public"],
  extends: ["next/core-web-vitals", "eslint-config-prettier"],
  plugins: ["eslint-plugin-prettier"],
  rules: {
    "prettier/prettier": "error"
  }
}