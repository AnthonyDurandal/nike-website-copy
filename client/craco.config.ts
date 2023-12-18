import * as path from "path";

const config = {
  webpack: {
    alias: {
      "@/*": path.resolve(__dirname, "src/*"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
};

export default config;
