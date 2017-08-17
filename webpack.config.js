const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const sourcePath = 'src'
const outPath = 'distribution'

module.exports = function (env = {}) {
  return {
    entry: `./${sourcePath}/app.js`,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, outPath),
      publicPath: '/'
    },
    module: {
      rules: [
        { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlPlugin({ template: `./${sourcePath}/index.html` })
    ],
    devtool: 'source-map'
  }
}
