import moment from 'moment';

// 获取今天天的开始结束时间
export function getTodayRange() {
    let date = [];
    date.push(moment().subtract('days', 0).format('YYYY/MM/DD'));
    date.push(moment().subtract('days', 0).format('YYYY/MM/DD'));
    return date;
}

// 获取昨天的开始结束时间
export function getYesterdayRange() {
    let date = [];
    date.push(moment().subtract('days', 1).format('YYYY/MM/DD'));
    date.push(moment().subtract('days', 1).format('YYYY/MM/DD'));
    return date;
}
// 获取最近七天的开始结束时间
export function getLast7DaysRange() {
    let date = [];
    date.push(moment().subtract('days', 7).format('YYYY/MM/DD'));
    date.push(moment().subtract('days', 1).format('YYYY/MM/DD'));
    return date;
}
// 获取最近30天的开始结束时间
export function getLast30DaysRange() {
    let date = [];
    date.push(moment().subtract('days', 30).format('YYYY/MM/DD'));
    date.push(moment().subtract('days', 1).format('YYYY/MM/DD'));
    return date;
}

/**
 * 获取上一周的开始结束时间
 * @param {*} options 参数 其中startDay为起始第一天， 值为"Mondy" 和 "Sunday"
 * @returns Array 上周起止时间数组
 */
export function getLastWeekDaysRange(options = { startDay: 'Monday' }) {
    let date = [];
    let weekOfday = parseInt(moment().format('d'), 10);

    // 计算今天是本周第几天，默认为周一为第一天
    let s1 = options.startDay === 'Monday' ? weekOfday + 7 - 1 : weekOfday + 7;
    let s2 = options.startDay === 'Monday' ? weekOfday : weekOfday + 1;

    let start = moment().subtract(s1, 'days').format('YYYY/MM/DD'); // 周一日期
    let end = moment().subtract(s2, 'days').format('YYYY/MM/DD'); // 周日日期
    date.push(start);
    date.push(end);
    return date;
}

/**
 * 获取当前周的开始结束时间
 * @param {*} options 参数 其中startDay为起始第一天， 值为"Mondy" 和 "Sunday"
 * @returns Array 本周起止时间数组
 */
export function getCurrWeekDaysRange(options = { startDay: 'Monday' }) {
    let date = [];
    let weekOfday = parseInt(moment().format('d'), 10);

    // 计算今天是本周第几天，默认为周一为第一天
    let s1 = options.startDay === 'Monday' ? weekOfday - 1 : weekOfday;
    let s2 = options.startDay === 'Monday' ? 7 - weekOfday : 7 - weekOfday - 1;

    let start = moment().subtract(s1, 'days').format('YYYY/MM/DD'); // 周一日期
    let end = moment().add(s2, 'days').format('YYYY/MM/DD'); // 周日日期
    date.push(start);
    date.push(end);
    return date;
}

// 获取上一个月的开始结束时间
export function getLastMonthDaysRange() {
    let date = [];
    let start = `${moment().subtract('month', 1).format('YYYY/MM')}/01`;
    let end = moment(start).subtract('month', -1).add('days', -1).format('YYYY/MM/DD');
    date.push(start);
    date.push(end);
    return date;
}

// 获取当前月的开始结束时间
export function getCurrMonthDaysRange() {
    let date = [];
    let start = `${moment().add('month', 0).format('YYYY/MM')}/01`;
    let end = moment(start).add('month', 1).add('days', -1).format('YYYY/MM/DD');
    date.push(start);
    date.push(end);
    return date;
}
