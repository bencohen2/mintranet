// @flow
import {styled} from 'baseui';
import {ChevronUp, ChevronDown, Check, Delete} from 'baseui/icon';

const PageContainerWidth = '660px';

export const Form = styled<{}>('form', {
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

export const StyledCheck = styled(Check, props => ({
    ...getStylesForChevron(props)
}));

export const StyledDelete = styled(Delete, props => ({
    ...getStylesForChevron(props),
    color: props.$theme.colors.negative
}));


const getStylesForChevron = props => ({
    height: props.$theme.sizing.scale600,
    width: props.$theme.sizing.scale600
});

export const StyledChevronUp = styled<{}>(ChevronUp, getStylesForChevron);
export const StyledChevronDown = styled<{}>(ChevronDown, getStylesForChevron);

export const PageTitle = styled('div', props => ({
    ...props.$theme.typography.font700,
    color: props.$theme.colors.mono1000,
    marginBottom: props.$theme.sizing.scale300
}))