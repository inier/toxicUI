// App.js 应用顶层组件，用于接驳数据层等
import React, { Component } from 'react';
// 应用路由
import Router from './router';

class App extends Component {
    render() {
        return <Router />;
    }
}

export default App;
