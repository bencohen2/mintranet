// @flow
import React from 'react';
import {Navigation} from 'baseui/side-navigation';
import {RoutePaths} from '../../constants';
import {withRouter} from 'fusion-plugin-react-router';
import {SideNavContainer} from './styled-components';

const items = [
  {
    title: 'Home',
    itemId: RoutePaths.Home
  },
  {
    title: 'Programs',
    itemId: RoutePaths.Programs
  },
  {
    title: 'Receipts',
    itemId: RoutePaths.Receipts
  },
  {
    title: 'Budget',
    itemId: RoutePaths.Budget
  },
  {
    title: 'Contact list',
    itemId: RoutePaths.Contacts
  },
  {
    title: 'Grants',
    itemId: RoutePaths.Grants
  },
  {
    title: 'Resource list',
    itemId: RoutePaths.Resources
  }
]

const SideNav = (props) => {
  const {location, history} = props;
  return (
    <SideNavContainer>
      <Navigation
      items={items}
      activeItemId={location.pathname}
      onChange={({event, item}) => {
          // prevent page reload
          event.preventDefault();
          history.push(item.itemId);
      }}
      />
    </SideNavContainer>
  );
}

export default withRouter(SideNav);
