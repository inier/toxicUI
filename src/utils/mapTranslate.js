// 常量定义
const xPi = (3.14159265358979324 * 3000.0) / 180.0;
const PI = 3.1415926535897932384626;
const a = 6378245.0;
const ee = 0.00669342162296594323;

/**
 * 判断是否在国内，不在国内则不做偏移
 * @param {number} lng1 纬度
 * @param {number} lat1 经度
 * @returns {boolean}
 */
const outOfChina = function outOfChina(lng1, lat1) {
    const lat = +lat1;
    const lng = +lng1;

    // 纬度3.86~53.55,经度73.66~135.05
    return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
};

/**
 * 转换经度
 * @param {number} lng1 纬度
 * @param {number} lat1 经度
 * @returns {boolean}
 */
const transformLat = function transformLat(lng1, lat1) {
    const lat = +lat1;
    const lng = +lng1;
    let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));

    ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
    ret += ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) / 3.0;
    ret += ((160.0 * Math.sin((lat / 12.0) * PI) + 320 * Math.sin((lat * PI) / 30.0)) * 2.0) / 3.0;

    return ret;
};

/**
 * 转换纬度
 * @param {number} lng1 纬度
 * @param {number} lat1 经度
 * @returns {boolean}
 */
const transformLng = function transformLng(lng1, lat1) {
    const lat = +lat1;
    const lng = +lng1;
    let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));

    ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
    ret += ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) * 2.0) / 3.0;
    ret += ((150.0 * Math.sin((lng / 12.0) * PI) + 300.0 * Math.sin((lng / 30.0) * PI)) * 2.0) / 3.0;

    return ret;
};

/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换，即 百度 转 谷歌、高德
 * @param {number} bdLon 纬度
 * @param {number} bdLat 经度
 * @returns {*[]}
 */
const BD09toGCJ02 = function BD09toGCJ02(bdLon, bdLat) {
    const bdLonNew = +bdLon;
    const bdLatNew = +bdLat;
    const x = bdLonNew - 0.0065;
    const y = bdLatNew - 0.006;
    const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * xPi);
    const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * xPi);
    const ggLng = z * Math.cos(theta);
    const ggLat = z * Math.sin(theta);

    return [ggLng, ggLat];
};

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换，即谷歌、高德 转 百度
 * @param {number} lng1 纬度
 * @param {number} lat1 经度
 * @returns {*[]}
 */
const GCJ02toBD09 = function GCJ02toBD09(lng1, lat1) {
    const lat = +lat1;
    const lng = +lng1;
    const z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * xPi);
    const theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * xPi);
    const bdLng = z * Math.cos(theta) + 0.0065;
    const bdLat = z * Math.sin(theta) + 0.006;

    return [bdLng, bdLat];
};

/**
 * WGS84转GCj02
 * @param {number} lng1 纬度
 * @param {number} lat1 经度
 * @returns {*[]}
 */
const WGS84toGCj02 = function WGS84toGCj02(lng1, lat1) {
    const lat = +lat1;
    const lng = +lng1;
    if (outOfChina(lng, lat)) {
        return [lng, lat];
    }

    let dLat = transformLat(lng - 105.0, lat - 35.0);
    let dLng = transformLng(lng - 105.0, lat - 35.0);
    const radLat = (lat / 180.0) * PI;
    let magic = Math.sin(radLat);

    magic = 1 - ee * magic * magic;

    const rSqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * rSqrtMagic)) * PI);
    dLng = (dLng * 180.0) / ((a / rSqrtMagic) * Math.cos(radLat) * PI);
    const mgLat = lat + dLat;
    const mgLng = lng + dLng;

    return [mgLng, mgLat];
};

/**
 * GCJ02 转换为 WGS84
 * @param {number} lng1 纬度
 * @param {number} lat1 经度
 * @returns {*[]}
 */
const GCj02toWGS84 = function GCj02toWGS84(lng1, lat1) {
    const lat = +lat1;
    const lng = +lng1;
    if (outOfChina(lng, lat)) {
        return [lng, lat];
    }

    let dLat = transformLat(lng - 105.0, lat - 35.0);
    let dLng = transformLng(lng - 105.0, lat - 35.0);
    const radLat = (lat / 180.0) * PI;
    let magic = Math.sin(radLat);

    magic = 1 - ee * magic * magic;

    const rSqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * rSqrtMagic)) * PI);
    dLng = (dLng * 180.0) / ((a / rSqrtMagic) * Math.cos(radLat) * PI);

    const mgLat = lat + dLat;
    const mgLng = lng + dLng;

    return [lng * 2 - mgLng, lat * 2 - mgLat];
};

export { BD09toGCJ02, GCJ02toBD09, WGS84toGCj02, GCj02toWGS84 };
