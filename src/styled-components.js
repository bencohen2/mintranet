// @flow
import {styled} from 'baseui';

export const Container = styled('div', {
    display: 'flex',
    height: '100%'
});

export const ContentWrapper = styled('div', props => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: props.$theme.colors.mono200
}));

export const Content = styled('main', {
    flex: 1,
    overflow: 'auto'
});

export const AccountMenuContainer = styled('div', props => ({
    position: 'absolute',
    top: props.$theme.sizing.scale900,
    right: props.$theme.sizing.scale900,
}))