// Migrating from create-react-app without ejecting

// https://github.com/timarney/react-app-rewired/
// https://github.com/arackaf/customize-cra
const {
    override,
    addBabelPlugin,
    addBabelPlugins,
    addBundleVisualizer,
    addDecoratorsLegacy,
    addWebpackAlias,
    addWebpackExternals,
    adjustWorkbox,
    addPostcssPlugins,
    disableEsLint,
    enableEslintTypescript,
    fixBabelImports,
    useEslintRc,
    useBabelRc,
    setWebpackOptimizationSplitChunks,
} = require('customize-cra');

// 自定义配置
const {
    buildFriendly,
    speedMeasure,
    prerender,
    rewireReactHotLoader,
    vConsole,
    getWebpackAlias,
    extractVendors,
    vendorConfig,
    addStylelint,
    minimizer,
    dropConsole,
    namedOptimize,
    optimizeLodash,
    optimizeMoment,
    rewireThemeIce,
    rewireThemeFusion,
} = require('./config');

const pkgJSON = require(`${__dirname}/package.json`);

// https://github.com/postcss/postcss
const postcssPlugins = [
    // 合并重复项
    require('css-mqpacker')(),
    // px2rem
    // require('postcss-px2rem')({ remUnit: 37.5 }),
];

const { BUNDLE_VISUALIZE, STYLELINT, VCONSOLE, DROP_CONSOLE } = process.env;
console.log('当前环境：', process.env.NODE_ENV);

module.exports = override(
    vConsole(VCONSOLE),
    rewireThemeIce(pkgJSON),
    rewireThemeFusion(pkgJSON),
    buildFriendly(),
    addWebpackAlias(getWebpackAlias(pkgJSON)),
    addPostcssPlugins(postcssPlugins),
    addStylelint(STYLELINT),
    setWebpackOptimizationSplitChunks(vendorConfig),
    // addWebpackExternals({
    //     react: 'React',
    //     'react-dom': 'ReactDom',
    // }),
    // extractVendors(),
    useEslintRc(),
    useBabelRc(),
    namedOptimize(),
    optimizeLodash(),
    optimizeMoment(),
    minimizer({
        drop_console: DROP_CONSOLE,
    }),
    // 开启打包速度分析
    // speedMeasure(),
    BUNDLE_VISUALIZE === 'true' && addBundleVisualizer(),
    // prerender(),
);
