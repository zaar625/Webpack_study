//webpack 3.x ver

var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/", //CDN으로 배포할 때 cdn 주소에 포함될 수 있겠끔 해주는 속성
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/, //라이브러리와 관계된 내용이기 때문에 바벨이 굳이 변환할 필요가 없어 배제.
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  resolve: {
    // 웹팩으로 파일의 연관 관계를 파악해 나갈때 파일의 해석 방식
    alias: {
      //별칭 지정
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"], // 예를 들어 import {} from './component' 할때 .js를 붙이지 않아도 알아서 확장해주겠다.
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: "#eval-source-map",
};

//배포를 할때는 추가적으로 무언가를 하겠다.
// if (process.env.NODE_ENV === "production") {
//   module.exports.devtool = "#source-map";
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: '"production"',
//       },
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false,
//       },
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true,
//     }),
//   ]);
// }
