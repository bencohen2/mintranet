// @flow
import {styled} from 'baseui';

export const SideNavContainer = styled('div', props => ({
    width: '200px',
    height: '100%',
    boxShadow: `1px 0 0 -0 ${props.$theme.colors.mono200}`
}));