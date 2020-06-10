// src/routerConfig.js

import { DemoRouteConfig } from '@/components';
import { Entrance, List, Doc, About, IframeView } from '@/pages';

const DemoRouters = DemoRouteConfig.map((item) => ({
    path: item.path,
    title: item.title,
    component: item.component,
}));

// 描述路由的协议格式
const routerConfig = [
    {
        path: '/home',
        title: '首页',
        component: Entrance,
    },
    {
        path: '/list',
        title: '组件库',
        component: List,
    },
    {
        path: '/doc',
        title: '文档',
        component: Doc,
    },
    {
        path: '/about',
        title: '关于',
        component: About,
    },
    {
        path: '/view/iframe/:title',
        title: '外链网页',
        component: IframeView,
    },
    ...DemoRouters,
];

export default routerConfig;
