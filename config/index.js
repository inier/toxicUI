// 构建显示优化
const buildFriendly = require('./buildFriendly');
// 构建速度分析
const speedMeasure = require('./speedMeasure');
// prerender SPA
const prerender = require('./prerender');
// react-hot-loader
const rewireReactHotLoader = require('./rewireReactHotLoader');
// webpack alias
const getWebpackAlias = require('./aliasConfig');
// 提取第三方库（暂停用）
// const extractVendors = require('./extractVendors');
// 抽出第三方库的配置
const vendorConfig = require('./vendorConfig');
// 开启移动端调试面板
const vConsole = require('./vConsole');
// 增加stylelint
const addStylelint = require('./addStyleLint');
// 代码优化压缩: 在react-scripts 3.4.0的基础上增加了去除console的功能
const minimizer = require('./minimizer');
// dropConsole
const dropConsole = require('./dropConsole');
// moduleIds和chunkIds固化
const namedOptimize = require('./namedOptimize');
// 优化lodash打包
const optimizeLodash = require('./optimizeLodash');
// Moment库语言包优化
const optimizeMoment = require('./optimizeMoment');
// 飞冰业务组件按需加载
const rewireThemeIce = require('./rewire-theme-ice');
// Fusion组件按需加载（@alifd/next）
const rewireThemeFusion = require('./rewire-theme-fusion');

module.exports = {
    buildFriendly,
    speedMeasure,
    prerender,
    rewireReactHotLoader,
    getWebpackAlias,
    // extractVendors,
    vendorConfig,
    vConsole,
    addStylelint,
    minimizer,
    dropConsole,
    namedOptimize,
    optimizeLodash,
    optimizeMoment,
    rewireThemeIce,
    rewireThemeFusion,
};
