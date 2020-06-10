/**
 * 定义应用路由
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy } from '@ozo/lazy-loader';

// 方式1：手工引入，适合简单项目
const Routers = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={lazy(() => import('@/pages/Entrance'))} />
                <Route path="/About" exact component={lazy(() => import('@/pages/About'))} />
            </Switch>
        </Router>
    );
};

export default Routers;
