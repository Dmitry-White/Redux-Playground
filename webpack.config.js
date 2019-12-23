module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets",
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /{node_modules}/,
        use: "babel-loader",
      }
    ]
  }
}