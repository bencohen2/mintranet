// @flow
import {styled} from 'baseui';
import {ChevronUp, ChevronDown, Check, Delete} from 'baseui/icon';

export const BaseInfoContainer = styled<{}>('div', props => ({
    height: '100px',
    display: 'flex',
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
}))

const getStylesForChevron = props => ({
    height: props.$theme.sizing.scale600,
    width: props.$theme.sizing.scale600
});

export const StyledChevronUp = styled<{}>(ChevronUp, getStylesForChevron);
export const StyledChevronDown = styled<{}>(ChevronDown, getStylesForChevron);

export const ToolbarContainer = styled<{}>('div', props => ({
    display: 'flex',
    justifyContent: 'flex-end',
}));

export const StyledCheck = styled(Check, props => ({
    ...getStylesForChevron(props)
}));

export const StyledDelete = styled(Delete, props => ({
    ...getStylesForChevron(props),
    color: props.$theme.colors.negative
}));

export const DetailDisplayContainer = styled('div', props => ({
    marginBottom: props.$theme.sizing.scale300,
    ':last-child': {
        marginBottom: 0
    }
}));

export const ToolbarButtonContainer = styled('div', props => ({
    marginRight: props.$theme.sizing.scale300,
    ':last-child': {
        marginRight: 0
    }
}))

export const DetailsContainer = styled('div', props => ({
    paddingBottom: props.$theme.sizing.scale300
}))