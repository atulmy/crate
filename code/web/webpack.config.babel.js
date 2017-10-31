// Imports
import path from 'path'
import Dotenv from 'dotenv-webpack'

const config = {
    entry: {
        js: './src/client/index.js'
    },

    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                }
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