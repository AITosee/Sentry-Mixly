const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('../../package.json');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: path.resolve(process.cwd(), 'src/template.xml'),
                filename: 'sentry.xml',
                minify: false,
                publicPath: `../../${name}/`,
                excludeChunks: [
                    'language/sentry/zh-hans',
                    'language/sentry/zh-hant',
                    'language/sentry/en',
                    'block/sentry',
                    'generator/sentry'
                ]
            })
        ]
    }
});
