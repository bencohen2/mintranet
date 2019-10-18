// @flow
import {styled} from 'baseui';
import ArrowUp from 'baseui/icon/arrow-up';

export const Header = styled('div', props => ({
    ...props.$theme.typography.font600,
    color: props.$theme.colors.mono1000,
    marginBottom: props.$theme.sizing.scale300,
}))

export const Link = styled('a', props => ({
    ':hover': {
        color: props.$theme.colors.primary,
        cursor: 'pointer'
    },
    ':visited': {
        color: props.$theme.colors.primary,
    },
    ':active': {
        color: props.$theme.colors.primary,
    },
    ':focus': {
        color: props.$theme.colors.primary,
    },
    ...(props.$inline ? {display: 'inline-block' }: {})
}))

export const StyledArrowUp = styled(ArrowUp, props => ({
    ':hover': {
        cursor: 'pointer'
    },
}))