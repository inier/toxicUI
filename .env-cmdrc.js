// .env-cmdrc.js
// 环境变量值会被识别为string，在使用时需要处理类型，特别是bool值，需要 === "true"判断真值。

module.exports = {
    development: {
        REACT_APP_HMR: true,
        GENERATE_SOURCEMAP: true,
        EXTEND_ESLINT: true,
    },
    production: {
        GENERATE_SOURCEMAP: true,
        BUNDLE_VISUALIZE: true,
        STYLELINT: true,
    },
    test: {},
    uat: {
        PORT: 8080,
    },
};
