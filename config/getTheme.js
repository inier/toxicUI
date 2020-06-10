// 获取 package.json 中的主题配置信息
function getTheme({ buildConfig }) {
    try {
        if (buildConfig && buildConfig.theme) {
            return buildConfig.theme;
        }
        return null;
    } catch (e) {
        console.error(e);
        console.log(
            `请在 package.json 中配置
            "buildConfig":{
                "theme": {
                    "ice": "@icedesign/theme",
                    "alifd": "@alifd/xxx",    
                }
            }`
        );
    }
}

module.exports = getTheme;
