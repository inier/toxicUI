import React from 'react';
import { BasePage, Header, PageContainer } from '@/components';
import Footer from './components/Footer/index';
import { getPageTitle } from '@/utils';
import routerData from '@/routerConfig';
import mainRoutes from './MainRoutes';

export default ({ location }) => {
    return (
        <BasePage header={<Header title={getPageTitle(location, routerData)} noBack />}>
            <PageContainer>{mainRoutes(routerData)}</PageContainer>
            <Footer />
        </BasePage>
    );
};
