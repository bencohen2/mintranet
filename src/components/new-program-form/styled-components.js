// @flow
import {styled} from 'baseui';

export const Form = styled<{}>('form', {
    width: '500px'
})

export const AttendeesInputContainer = styled<{}>('div', props => ({
    marginBottom: props.$theme.sizing.scale300
}));
