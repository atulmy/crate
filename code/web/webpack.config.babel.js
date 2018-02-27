// Imports
import path from 'path'
import Dotenv from 'dotenv-webpack'

const config = {
  entry: {
    js: './src/setup/client/index.js'
  },

  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js'
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

  plugins: [
    new Dotenv()
  ],

  node: {
    fs: "empty"
  }
}

export default config