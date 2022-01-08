const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/'),
    }
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/source',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
