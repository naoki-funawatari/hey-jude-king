const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const TerserWebpack = require("terser-webpack-plugin");

// https://webpack.js.org/configuration/mode/#mode-none
module.exports = (env, options) => {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public", "index.html"),
  });
  // https://webpack.js.org/configuration/mode/#mode-none
  const devMode = options.mode !== "production";
  const styleLoader = devMode ? "style-loader" : MiniCssExtractPlugin.loader;
  const plugins = [];
  plugins.push(htmlWebpackPlugin);
  if (!devMode) {
    // https://webpack.js.org/plugins/mini-css-extract-plugin/
    plugins.push(new MiniCssExtractPlugin());
  }

  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.join(__dirname, "build"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: "babel-loader",
              options: { presets: ["@babel/preset-env", "@babel/react"] },
            },
            {
              loader: "ts-loader",
              options: { configFile: path.resolve(__dirname, "tsconfig.json") },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [styleLoader, "css-loader", "sass-loader"],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
    devServer: {
      open: true,
      static: { directory: path.join(__dirname, "public") },
      port: 3000,
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: { "@": path.resolve(__dirname, "src") },
    },
    target: "web",
    stats: "normal",
    optimization: {
      // https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
      minimizer: [new TerserWebpack(), new CssMinimizer()],
    },
    plugins,
  };
};
