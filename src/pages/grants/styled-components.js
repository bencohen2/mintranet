// @flow
import {styled} from 'baseui';

export const GrantContainer = styled('div', props => ({
    color: props.$theme.colors.primary,
    marginBottom: props.$theme.sizing.scale300,
    ':hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
    },
    display: 'inline-block'
}))