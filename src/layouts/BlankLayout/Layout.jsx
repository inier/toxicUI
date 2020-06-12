import React from 'react';
import routerData from '../../routerConfig';
import mainRoutes from './MainRoutes';

export default ({ children }) => {
    return <React.Fragment>{children || mainRoutes(routerData)}</React.Fragment>;
};
