import Button from './components/Button';
import ButtonX from './components/ButtonX';
import Icon from './components/Icons';
import Tag from './components/Tag';
import Navbar from './components/Navbar';
import Field from './components/Field';
import Search from './components/Search';

export { default as Button } from './components/Button';
export { default as ButtonX } from './components/ButtonX';
export { default as Icon } from './components/Icons';
export { default as Tag } from './components/Tag';
export { default as Navbar } from './components/Navbar';
export { default as Field } from './components/Field';
export { default as Search } from './components/Search';
/*
 * basis 单体组件（原子性）
 * 网页构成的基本元素。例如图标、按钮、字体、色调等。
 */
export { default as Icons } from './components/Icon/index';
export { default as Prompt } from './components/Prompt/index';
export { default as Timer } from './components/Timer/index';
export { default as InputSingle } from './components/InputSingle/index';
export { default as Modal } from './components/Modal/index';
/*
 * module 模块组件
 * 具备独立的功能，由一个以上的 basis 或 block 组件组成。例如整站头部（包括导航菜单、搜索框等）、支持筛选和分页的表格、对话框等。
 */

/*
 * layout 布局组件
 * 用于组织页面框架布局的组件。例如，一个实现底部按钮的容器、左右侧边栏等。
 */
export { default as ErrorBoundary } from './components/ErrorBoundary/index';
export { default as BasePage } from './components/BasePage/index';
export { default as PageContainer } from './components/PageContainer/index';
export { default as Iframe } from './components/Iframe/index';
export { default as Header } from './components/Header/index';
export { default as Heading } from './components/Heading/index';
export { default as Placeholder } from './components/Placeholder/index';
export { default as WingBlank } from './components/WingBlank/index';
export { default as WhiteSpace } from './components/WhiteSpace/index';

/*
 * template 模板组件
 * 可重用的复杂UI结构，一般为页面级组件。由1个以上 module 及多个 basis/block 组件组成，例如支付成功页等。
 */
export { default as BasicNotFound } from './components/BasicNotFound/index';

const Toxic = {
    ButtonX,
    Button,
    Icon,
    Tag,
    Navbar,
    Field,
    Search,
};

export default Toxic;
