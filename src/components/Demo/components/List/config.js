import { lazy } from '@ozo/lazy-loader';

// 组件类型列表
const typeList = [
    {
        type: 'basis',
        title: '基础',
        list: [],
    },
    {
        type: 'block',
        title: '块',
        list: [],
    },
    {
        type: 'layout',
        title: '布局',
        list: [],
    },
    {
        type: 'module',
        title: '模组',
        list: [],
    },
    {
        type: 'template',
        title: '模板',
        list: [],
    },
];

// 组件注册列表
export const regList = [
    {
        id: 'Base',
        type: 'basis',
        title: '基础组件',
    },
    {
        id: 'Card',
        type: 'module',
        title: '卡片',
    },
    {
        id: 'Collapse',
        type: 'module',
        title: '折叠面板',
    },
    {
        id: 'Modal',
        type: 'module',
        title: '弹出框',
    },
    {
        id: 'Tabs',
        type: 'module',
        title: '选项卡',
    },
    {
        id: 'Toast',
        type: 'module',
        title: '轻提示',
    },
    {
        id: 'Button',
        type: 'basis',
        title: '按钮',
    },
    {
        id: 'Input',
        type: 'basis',
        title: '输入框',
    },
    {
        id: 'Radio',
        type: 'basis',
        title: '单选框',
    },
    // {
    //     id: 'Checkbox',
    //     type: 'basis',
    //     title: '复选框',
    // },
    {
        id: 'Text',
        type: 'basis',
        title: '文字',
    },
    {
        id: 'Widget',
        type: 'basis',
        title: '小部件',
    },
    {
        id: 'Icon',
        type: 'basis',
        title: '字体图标',
    },
];

// ListRouteConfig
export const ListRouteConfig = regList.map((item) => {
    const tId = item.id;
    /* eslint-disable no-param-reassign */
    item.path = `/demo/${tId.toLowerCase()}`;
    return {
        path: item.path,
        title: item.title,
        component: lazy(() => import(`./pages/${tId}`)),
    };
});

// 列表转换
regList.forEach((component) => {
    const tType = component.type;
    typeList.forEach((type) => {
        if (type.type === tType) {
            const { id, path, title } = component;
            type.list.push(Object.assign({}, { id, path, title }));
        }
    });
});

export default typeList;
