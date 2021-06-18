module.exports = {
    // 配置跨域代理
    devServer: {
        // Paths
        host: 'localhost',
        port: '8082',
        https: false,
        open: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // 代理目标的基础路径
                changeOrigin: true, // 支持跨域
                pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
                    '^/api': ''
                }
            },
        },
    },
}
