// @flow
import {styled} from 'baseui';

export const ThreadContainer = styled('div', props => ({
    ...(props.$index !== 0 ? {borderTop: '2px solid black', paddingTop: props.$theme.sizing.scale500}: {}),
    marginBottom: props.$theme.sizing.scale600
}))

export const Container = styled('div', props => ({
    marginLeft: `calc(${props.$index}*${props.$theme.sizing.scale800})`,
    marginBottom: props.$theme.sizing.scale200
}))
export const TitleContainer = styled('div', props => ({
    fontSize: '16px',
    fontWeight: 'bold',
}));
export const CommentorContainer = styled('div', props => ({
    fontSize: '14px',
    fontWeight: '200'
}));
export const ContentContainer = styled('div');
export const ResponsesContainer = styled('div', props => ({
    marginTop: props.$theme.sizing.scale200
}))
export const ReplyContainer = styled('div', {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    ':hover': {
        cursor: 'pointer'
    }
})