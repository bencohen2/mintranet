// @flow
import React from 'react';
import {StatefulPopover, ACCESSIBILITY_TYPE, PLACEMENT} from 'baseui/popover';
import {NameContainer} from './styled-components';
import {StatefulMenu} from 'baseui/menu';

export const AccountMenu = () => {
    const renderMenuItems = () => {
        return [
            {label: 'Ben Cohen', color: 'mono1000', bold: true},
            {label: 'Profile', color: 'primary', bold: false},
            {label: 'Sign out', color: 'primary', bold: false},
          ];
    }
    return (
        <StatefulPopover 
            accessibilityType={ACCESSIBILITY_TYPE.menu}
            content={<StatefulMenu items={renderMenuItems()} overrides={Overrides}/>}
            placement={PLACEMENT.bottom}
        >
            <NameContainer>
                BC
            </NameContainer>
        </StatefulPopover>
    )
};

const Overrides = {
    ListItem: {
        style: props => ({
            fontWeight: 500,
            color: props.$theme.colors.mono1000
        })
    }
}

export default AccountMenu;