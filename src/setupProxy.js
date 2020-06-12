// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

// 开发环境代理配置
module.exports = function (app) {
    app.use(
        '/api/mock',
        createProxyMiddleware({
            // mock api地址
            target: 'http://10.64.13.160:9090/mock/156',
            changeOrigin: true,
            pathRewrite: {
                '^/api/mock': '',
            },
        })
    );
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://gank.io/api',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
