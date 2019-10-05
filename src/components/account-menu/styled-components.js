// @flow
import {styled, withStyle} from 'baseui';

export const NameContainer = styled('div', props => ({
    height: props.$theme.sizing.scale1000,
    width: props.$theme.sizing.scale1000,
    display: 'flex',
    borderRadius: '50%',
    backgroundColor: props.$theme.colors.mono100,
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center'
}))
    