// @flow
import React from 'react';
import {NotFound} from 'fusion-plugin-react-router';
import {PageContainer} from '../components/shared/styled-components';

const PageNotFound = () => (
  <PageContainer>
    <NotFound>
      <div>404</div>
    </NotFound>
  </PageContainer>
);

export default PageNotFound;