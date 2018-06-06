// Imports
import path from 'path'
import Dotenv from 'dotenv-webpack'

const config = {
  entry: {
    app: './src/setup/client/index.js'
  },

  output: {
    path: path.join(__dirname, 'public', 'js', 'bundles'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all' }
      }
    }
  },

  plugins: [
    new Dotenv()
  ],

  node: {
    fs: "empty"
  }
}

export default config
