// @flow
import React from 'react';
import {compose} from 'redux';
import {withRouter} from 'fusion-plugin-react-router';
import {PageContainer, PageTitle} from '../../components/shared/styled-components';
import {GrantContainer} from './styled-components';
import {RoutePaths} from '../../constants';
import {GrantsList} from '../../mocks/grants';
import {Block} from 'baseui/block';

export const Grants = (props) => {
    return  (
    <PageContainer>
        <PageTitle>Grants</PageTitle>
        <Block marginBottom="scale300"> Below is a list of all the available grants.  If you think your house may qualify, click the link and apply.  Once approved, you'll have access to additional programming funds by selecting the grant when creating receipts.</Block>
        {GrantsList.map(({name, id}) => (
            <Block>
                <GrantContainer key={id} onClick={() => {props.history.push(RoutePaths.MakeApplyForGrant(id))}}>{name}</GrantContainer>
            </Block>
        )
        )}
    </PageContainer>
    )
}

const withGrants = compose(
    withRouter,
)

export default withGrants(Grants);