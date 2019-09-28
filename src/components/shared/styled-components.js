// @flow
import {styled} from 'baseui';

const PageContainerWidth = '850px';

export const Form = styled<{}>('form', {
    width: '500px'
});

export const PageContainer = styled('div', props => ({
    width: PageContainerWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: props.$theme.sizing.scale900,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));