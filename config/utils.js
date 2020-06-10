/**
 * 检查命令行是否带有指定的flag标记
 * @param {String} flag 标记
 * @returns {Boolean} 是否带有标记
 */
function checkCLIOptions(flag) {
    if (process.argv.includes(flag)) {
        return true;
    }
    return false;
}

module.exports = {
    checkCLIOptions,
};
