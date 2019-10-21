// @flow
import React from 'react';
import {RoutePaths} from '../../constants';
import {Button, KIND} from 'baseui/button';
import {withRouter} from 'fusion-plugin-react-router';

type RoutedButtonProps = {
    route: string,
    text: string,
    kind?: $Values<typeof KIND>
};
const UnwrappedRoutedButton = ({route, text, history, kind}: RoutedButtonProps) => {
    return <Button onClick={() => history.push(route)} kind={kind}>{text}</Button>
};
const RoutedButton = withRouter(UnwrappedRoutedButton);

type NewButtonProps = {
    text: string,
    kind?: $Values<typeof KIND>
}
const defaultProps = {
    kind: KIND.primary
};

export const NewProgramButton = ({text, kind}: NewButtonProps) => {
    return <RoutedButton route={RoutePaths.NewProgram} text={text} kind={kind}/>
}
NewProgramButton.defaultProps = defaultProps;

export const NewReceiptButton = ({text, kind}: NewButtonProps) => {
    return <RoutedButton route={RoutePaths.NewReceipt} text={text} kind={kind} />;
}
NewReceiptButton.defaultProps = defaultProps;
