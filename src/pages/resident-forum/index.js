// @flow
import React from 'react';
import {PageContainer, PageTitle} from '../../components/shared/styled-components';
import {MockThreads} from '../../mocks/thread';
import Thread from './thread';
import {ThreadContainer} from './styled-components';

export const ResidentForum = (props) => {
    return  (
    <PageContainer>
        <PageTitle>Resident Forum</PageTitle>
        {MockThreads.map((thread, index) => <ThreadContainer $index={index}><Thread key={index} thread={thread} index={0} /></ThreadContainer>)}
    </PageContainer>
    )
}

export default ResidentForum;