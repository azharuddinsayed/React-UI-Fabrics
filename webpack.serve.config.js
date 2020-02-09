const {
  webpackMerge,
  htmlOverlay,
  webpackServeConfig
} = require("just-scripts");
module.exports = webpackMerge(
  webpackServeConfig,
  htmlOverlay({
    template: "public/index.html"
  }),
  {
    // Here you can custom webpack configurations
    output: {
      publicPath: "/"
    }
  },
  {
    watch: true,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: ["react-hot-loader/babel"]
            }
          }
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "less-loader" // compiles Less to CSS
            }
          ]
        }
      ]
    }
  }
);
