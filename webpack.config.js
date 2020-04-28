const path = require('path');

module.exports = {    
    entry: ['./src/index.js','./src/assets/styles/main.scss'], 
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: [
                    "@babel/env",
                    "@babel/react"
                ]
            }
        }]
    },
}
