// @flow
import {styled} from 'baseui';
import {ChevronUp, ChevronDown, Check, Delete} from 'baseui/icon';

export const CardContainer = styled<{}>('div', props => ({
    backgroundColor: props.$theme.colors.mono400,
    width: '400px',
    padding: '10px',
    marginBottom: props.$theme.sizing.scale300
}));

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
    width: '400px',
    display: 'flex',
    justifyContent: 'flex-end',
}));

export const StyledCheck = styled(Check, props => ({
    ...getStylesForChevron(props)
}));

export const StyledDelete = styled(Delete, props => ({
    ...getStylesForChevron(props),
    color: props.$theme.colors.warning
}));