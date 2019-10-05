// @flow
import React from 'react';
import {Navigation} from 'baseui/side-navigation';
import {withRouter} from 'fusion-plugin-react-router';
import {SideNavContainer, HeaderContainer} from './styled-components';
import {items} from './util';
import {assetUrl} from 'fusion-core';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Block }from 'baseui/block';
import {RoutePaths} from '../../constants';

const SideNav = (props) => {
  const {location, history, userInfo: {firstName, lastName, houseName}} = props;

  const activePredicate = (item) => {
    if (item.itemId === location.pathname) {
      return true;
    }
    // default page "/" should highlight Programs
    if (location.pathname === "/" && item.itemId === RoutePaths.Programs) {
      return true;
    }
    // new program page should highlight Programs
    if (location.pathname === RoutePaths.NewProgram && item.itemId === RoutePaths.Programs) {
      return true;
    }
    // new receipt page should highlight Receipts
    if (location.pathname === RoutePaths.NewReceipt && item.itemId === RoutePaths.Receipts) {
      return true;
    }
    return false;
  }

  return (
    <SideNavContainer>
      <HeaderContainer>
        <Block marginRight="scale200">
          <img src={assetUrl('../../static/moishe-house-logo.png')} alt="" height="40" width="40"/>
        </Block>
        {houseName}
      </HeaderContainer>
      <Navigation
        items={items}
        onChange={({event, item}) => {
            // prevent page reload
            event.preventDefault();
            history.push(item.itemId);
        }}
        activePredicate={activePredicate}
      />
    </SideNavContainer>
  );
}

export default compose(
  withRouter,
  connect(state => ({
    userInfo: {
      firstName: 'Ben',
      lastName: 'Cohen',
      houseName: 'West Village'
    }
  }))
)(SideNav);
