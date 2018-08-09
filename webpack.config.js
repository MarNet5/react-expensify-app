//entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //loader
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,  //regexp finding all files end with .js
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,  //regexp finding all files end with .css and .scss
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //tells devserver we're gona be handling routing via our client side code
    }
};

