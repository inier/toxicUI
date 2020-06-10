// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

// 开发环境代理配置
module.exports = function (app) {
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
