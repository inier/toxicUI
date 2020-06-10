/** src/routerConfig.js */
import { MainLayout, BlankLayout } from '@/layouts';
import { Entrance, List, Doc, About, NotFound } from '@/pages';

// 描述路由的协议格式
const routerConfig = [
    {
        path: '/home',
        title: '首页',
        component: Entrance,
        layout: MainLayout,
    },
    {
        path: '/list',
        title: '组件库',
        component: List,
        layout: MainLayout,
    },
    {
        path: '/doc',
        title: '文档',
        component: Doc,
        layout: MainLayout,
    },
    {
        path: '/about',
        title: '关于',
        component: About,
        layout: MainLayout,
    },
    {
        path: '*',
        title: '404',
        component: NotFound,
        layout: BlankLayout,
    },
];

export default routerConfig;
