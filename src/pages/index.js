// 页面统一导出

import { lazy } from '@ozo/lazy-loader';

const About = lazy(() => import('./About'));
const IframeView = lazy(() => import('./IframeView'));
// 提前加载
const NotFound = lazy(() => import(/* webpackPrefetch: true */ './NotFound'));

export { About, IframeView, NotFound };
