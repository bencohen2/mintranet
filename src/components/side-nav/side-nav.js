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

const SideNav = (props) => {
  const {location, history, userInfo: {firstName, lastName, houseName}} = props;
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
