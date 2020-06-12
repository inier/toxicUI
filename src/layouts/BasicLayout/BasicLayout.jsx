import React from 'react';
import { withRouter } from 'react-router-dom';
import { BasePage, Header, PageContainer } from '../../components';
// import BasicLayoutHoc from './BasicLayoutHoc';
import { getPageTitle } from '../../utils';
import routerData from '../../routerConfig';
import MainRoutes from './MainRoutes';

export default withRouter(({ location, history }) => {
    return (
        <BasePage header={<Header title={getPageTitle(location, routerData)} onLeftClick={history.goBack} />}>
            <PageContainer>
                <MainRoutes routerData={routerData} />
            </PageContainer>
        </BasePage>
    );
});
