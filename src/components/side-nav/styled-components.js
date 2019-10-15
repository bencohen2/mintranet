// @flow
import {styled} from 'baseui';
import {StyleConstants} from '../../constants';

export const SideNavContainer = styled('div', {
    width: '200px',
    height: '100%',
    boxShadow: StyleConstants.shadowRight400
});

export const HeaderContainer = styled('div', props => ({
    marginTop: props.$theme.sizing.scale500,
    marginBottom: props.$theme.sizing.scale500, 
    marginLeft: props.$theme.sizing.scale800,
    display: 'flex',
    alignItems: 'center'
}))

export const HouseNameLink = styled('a', props => ({
    color: props.$theme.colors.mono1000,
    textDecoration: 'none',
    ':hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
    }
}))