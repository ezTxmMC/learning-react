import { resolve as _resolve } from "path";

export const resolve = {
  alias: {
    "@": _resolve(__dirname, "../src"),
  },
  extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
};
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
  ],
};
