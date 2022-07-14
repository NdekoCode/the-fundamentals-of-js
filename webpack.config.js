const path = require("path");
module.exportd = {
  mode: "production",
  entry: {
    app: "index.js",
  },
  output: {
    filename: "[name].bundler.js",
    path: path.resolve(__dirname, "dist"),
  },
};
