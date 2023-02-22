const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'module_federation',
            filename: 'remoteEntry.js',
            exposes: {
                './Auth': './src/Authentication.js',
            },
            //shared: ['react', 'react-dom'],
        }),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        port: 3001,
    },
}