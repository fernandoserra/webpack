const patch = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: patch.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: patch.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
            },
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css")
    ]

}