const path= require('path')
const htmlplugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    plugins : [
        new htmlplugin ({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}