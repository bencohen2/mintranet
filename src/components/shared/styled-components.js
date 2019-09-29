// @flow
import {styled} from 'baseui';

const PageContainerWidth = '660px';

export const Form = styled<{}>('form', {
    width: '500px'
});

export const PageContainer = styled('div', props => ({
    width: PageContainerWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: props.$theme.sizing.scale900,
}));

export const CardContainer = styled('div', props => {
    const {
        $theme: {
            lighting: {shadow400, shadow700},
            sizing: {scale100, scale200},
            borders: {border100},
            colors: {borderFocus, mono100}
        },
        $isOpen
    } = props;
    return {
        boxShadow: $isOpen ? shadow700 : shadow400,
        borderRadius: scale100,
        ...border100,
        ':hover': {
            borderColor: borderFocus
        },
        backgroundColor: mono100,
        marginBottom: scale200,
        padding: `0 ${scale200}`
    }
});