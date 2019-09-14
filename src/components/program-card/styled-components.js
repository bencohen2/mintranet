// @flow
import {styled} from 'baseui';

export const BaseCardContainer = styled<{}>('div', props => ({
    backgroundColor: props.$theme.colors.mono400,
    height: '100px',
    width: '400px'
}));