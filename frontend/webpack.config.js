const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')

// dotenv 설정: 환경 변수를 명확하게 로드
const env = dotenv.config().parsed

// DefinePlugin을 통해 개별 환경 변수를 Webpack에서 사용할 수 있도록 설정
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = (env, argv) => {
  const prod = argv.mode === 'production'

  return {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'eval',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js',
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@/components': path.resolve(__dirname, 'src/components'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: prod
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public', to: 'public' }],
      }),
      // DefinePlugin에 명확한 환경 변수를 전달
      new webpack.DefinePlugin(envKeys),
    ],
  }
}
