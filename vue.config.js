const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        rules: {
            test: /\.md$/,
            use: [{
                loader: 'text-loader'
            }]
        }
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions:{
                    javascriptEnabled: true,
                }
            }
        }
    },
}