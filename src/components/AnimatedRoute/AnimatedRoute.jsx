/**
 * 支持动画的路由组件
 */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Animate from './components/Animate';
import NProgress from './components/NProgress';

// 按照 Layout 分组路由
const AnimatedRoute = ({ prefix, hasLoading = true, children }) => {
    const [isLoading, setLoading] = useState(false);

    return (
        <Route
            render={({ location }) => (
                <React.Fragment>
                    {hasLoading && <NProgress isAnimating={isLoading} tKey={location.key} />}
                    <Animate
                        tKey={location.key}
                        classNames={prefix}
                        timeout={{ enter: 300 }}
                        onEnter={() => {
                            setLoading(true);
                        }}
                        onEntered={() => {
                            setLoading(false);
                        }}
                    >
                        <Switch location={location}>{children}</Switch>
                    </Animate>
                </React.Fragment>
            )}
        />
    );
};
AnimatedRoute.propTypes = {
    prefix: PropTypes.string,
    hasLoading: PropTypes.bool,
};

export default AnimatedRoute;
