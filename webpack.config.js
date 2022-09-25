const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathName = require("./helpers/helpers");
const entries = require("./entries/entries");

const isSeperateFiles = false;

const htmlCollections = entries.generateHtmlPluigins(__dirname, pathName.input);

const entry = isSeperateFiles
  ? { main: ["./src/index.js"] }
  : entries.generateEntries(__dirname, pathName);

const devServer = (development) => {
  return development
    ? {
        devServer: {
          compress: true,
          port: 9000,
          hot: true,
          open: true,
          static: {
            directory: path.join(__dirname, "src"),
          },
        },
      }
    : {};
};


module.exports = (env) => {
  return {
    mode: env.development ? "development" : "production",
    entry,
    devtool: env.development ? "inline-source-map" : "source-map",
    ...devServer(env.development),
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "",
      assetModuleFilename:'assets/[hash][ext]'
    },
    optimization: {
      usedExports: true,
      runtimeChunk: true,
      splitChunks: {
        chunks: "all",
      },
      minimizer: [new CssMinimizerPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.development ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: 'sass-loader',
                options:{
                    sourceMap:env.development?true:false
                }
            },
            'postcss-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator:{
            filename:"assets/fonts/[hash][ext]"
          }
        },
        {
            test: /\.html$/i,
            include: path.resolve(__dirname, pathName.input.components),
            use:'raw-loader',
            type: 'javascript/auto'
          },
      ],
    },
    plugins: [
      ...htmlCollections,
      new MiniCssExtractPlugin({
        filename: env.development ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: env.development ? "[id].css" : "[id].[contenthash].css",
      }),
      new CopyPlugin({
        patterns: [
          { from: pathName.input.assets.fonts, to: pathName.output.fonts },
          { from: pathName.input.assets.images, to: pathName.output.images },
        ],
      }),
      new CleanWebpackPlugin()
    ],
  };
};
