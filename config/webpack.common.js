const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require("../package.json");
module.exports = {
    module: {
        // questo è un loader che dice a webpack di processare file diversi nel progetto corrente
        rules: [
            // settiamo il loader di babel - è una configurazione molto comune
            { 
                test: /\.m?js$/,  // importa file con estensione mjs o solo js
                exclude: /node_modules/, // escludi i file del mode_module
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], 
                        plugins: ['@babel/plugin-transform-runtime'], 
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}