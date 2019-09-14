// @flow
import {styled} from 'baseui';
import {StyleConstants} from './constants';

export const Container = styled<{}>('div', {
    display: 'flex',
    height: '100%'
});

export const ContentContainer = styled<{}>('div', props => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: props.$theme.colors.mono200
}));