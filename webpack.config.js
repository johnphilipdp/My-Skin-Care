const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, './js/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}