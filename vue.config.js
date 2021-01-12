module.exports = {
    runtimeCompiler: true,
    configureWebpack: (config) => {
        //添加textloader以读取md文件
        config.module.rules.push({
            test: /\.md$/,
            use: [{
                loader: 'text-loader'
            }]
        })
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
    //解决打包后资源路径缺“.”的文件
    publicPath: './',
    //调整dev服务器端口
    devServer: {
        port: '8082'
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
}