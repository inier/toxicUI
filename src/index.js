// index/js ：应用入口，引入全局兼容等
// 低版本浏览器兼容
// import '@/utils/polyfill';
import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundary } from '@/components';
import './index.scss';

import App from './App';

render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root')
);

// 热加载，局部刷新
if (process.env.REACT_APP_HMR === 'true' && module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
