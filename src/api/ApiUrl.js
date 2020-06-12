// 发布后的相对根目录
const ROOT = process.env.NODE_ENV === 'development' ? `/api` : '';
const loc = '';
const urls = {
    GET_NEWS_LIST: `${loc}/today`, // 获取新闻列表，示例代码
    GET_ARTICLE_LIST: `${loc}/search/query/listview/category/前端/count/20/page/1`, // 获取指定分类下的文章列表
};

Object.keys(urls).forEach((key) => {
    let v = urls[key];
    if (v.indexOf('http') > -1) {
        urls[key] = v;
    } else {
        if (v.indexOf('/') > 0) {
            v = `/${v}`;
        }
        urls[key] = `${ROOT}${v}`;
    }
});

export default urls;
