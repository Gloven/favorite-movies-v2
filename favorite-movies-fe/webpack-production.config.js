const webpack        = require('webpack');
const path           = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        app: [
            './src/main.js'
        ]
    },

    output: {
        path      : path.join(__dirname, '/public/static/build'),
        filename  : 'build.js',
        publicPath: path.join(__dirname, '/public/static/build/')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            compact: false
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: false
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(otf|eot|ttf|ttc|woff|jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test   : /\.svg$/,
                use    : [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader : 'react-svg-loader',
                        options: {
                            svgo: {
                                plugins       : [ { removeTitle: false } ],
                                floatPrecision: 2
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new UglifyJsPlugin()
    ]
};
