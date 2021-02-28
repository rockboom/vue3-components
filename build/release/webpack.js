const $utils = require("../build.utils")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: {
        index: $utils.resolve('src/index.ts')
    },
    externals: {
        vue: {
            root: 'Vue', // 引入浏览器环境下的Vue
            commonjs: 'vue', // 引入node环境下的Vue
            commonjs2: 'vue',
        }
    },
    output: {
        filename: '[name].js',
        path: $utils.resolve('dest'),
        libraryTarget: 'umd',
        // libraryExport: 'default',
        library: 'Vue3Components',
        globalObject: 'this' // 导出的对象应该赋值给谁 此处是指把导出的对象赋值给浏览器的window对象
    },
    plugins: [
        new $utils.webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
        alias: {
            '@': $utils.resolve('src'),
            'src': $utils.resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {loader: 'babel-loader',},
                    {loader: 'ts-loader',}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData: `@import "src/style/global-import.scss";` // 全局引入的文件
                        }
                    }
                ]
            },
        ]
    }
}