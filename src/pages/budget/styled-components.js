// @flow
import {styled} from 'baseui';


export const ValueContainer = styled('div', props => ({
    ...(props.$bold ? {fontWeight: '600'} : {})
}));

export const UnusedBudgetContainer = styled('div', props => ({
    borderTop: `${props.$theme.sizing.scale0} solid black`,
    marginTop: props.$theme.sizing.scale400,
    paddingTop: props.$theme.sizing.scale400
}));

export const SubmittedReceiptsBudgetContainer = styled('div', props => ({
    borderBottom: `${props.$theme.sizing.scale0} solid black`,
    marginBottom: props.$theme.sizing.scale400,
    paddingBottom: props.$theme.sizing.scale400
}))