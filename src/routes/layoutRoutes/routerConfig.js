/** src/routerConfig.js */
import { Entrance, List, Doc, About } from '@/pages';

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
];

export default routerConfig;
