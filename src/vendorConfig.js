// src/vendorConfig.js
/**
 * 用于配置第三方库分拆方法extractVendors的范围（暂停用）
 * 配置方式1：vendors are defined as: [['moduleA', 'moduleB'], ['moduleC', 'moduleD']]
 * outFiles: vendor${index}.js
 * 配置方式2：vendors are defined as: ['moduleA', 'moduleB']
 * vendors are defined as: { vendorA: ['moduleA', 'moduleB'] }
 * outFiles: vendor.${hash}.js
 */

module.exports = {
    vendors: ['react', 'react-dom', 'react-router-dom'],
};
