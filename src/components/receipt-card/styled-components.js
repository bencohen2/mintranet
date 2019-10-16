// @flow
import {styled} from 'baseui';

export const BaseInfoContainer = styled<{}>('div', props => ({
    height: '100px',
    display: 'flex',
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
}))


export const ToolbarContainer = styled<{}>('div', props => ({
    display: 'flex',
    justifyContent: 'flex-end',
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

export const SectionContainer = styled('div', props => ({
    marginBottom: props.$theme.sizing.scale200
}))

export const ReceiptAmountContainer = styled('div', props => ({
    fontWeight: '600',
    marginRight: props.$theme.sizing.scale400
}))