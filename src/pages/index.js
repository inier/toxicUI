import { lazy } from '@ozo/lazy-loader';

// import Entrance from './Entrance/index';
const Entrance = lazy(() => import('./Entrance'));
const List = lazy(() => import('./List'));
const Doc = lazy(() => import('./Doc'));
const About = lazy(() => import('./About'));
const IframeView = lazy(() => import('./IframeView'));
// 提前加载
const NotFound = lazy(() => import(/* webpackPrefetch: true */ './NotFound'));

export { Entrance, List, Doc, About, IframeView, NotFound };
