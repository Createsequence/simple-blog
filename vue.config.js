module.exports = {
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
}