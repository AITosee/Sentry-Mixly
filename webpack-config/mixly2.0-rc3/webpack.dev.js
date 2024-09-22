const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { name } = require('../../package.json');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new ESLintPlugin({
            context: process.cwd(),
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(process.cwd(), 'src/template.xml'),
            filename: 'index.xml',
            minify: false,
            publicPath: `./libraries/ThirdParty/${name}/`,
            excludeChunks: ['language/zh-hans', 'language/zh-hant', 'language/en']
        }),
    ]
});
