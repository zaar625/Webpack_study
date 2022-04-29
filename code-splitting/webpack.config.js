var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none", //production, development, none
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         { loader: MiniCssExtractPlugin.loader },
  //         "css-loader"
  //       ]
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ['babel-loader']
  //     }
  //   ]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      //index.html 템플릿을 기반으로 빌드 결과물을 추가해줌.
      template: "index.html",
    }),
  ],
};
