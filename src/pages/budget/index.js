// @flow
import React from 'react';
import {compose} from 'redux';
import {withRouter} from 'fusion-plugin-react-router';
import {PageContainer, PageTitle} from '../../components/shared/styled-components';
import {Block} from 'baseui/block';
import {ValueContainer, UnusedBudgetContainer, SubmittedReceiptsBudgetContainer} from './styled-components';
import {RoutePaths} from '../../constants';
import {Button} from 'baseui/button';

export const Budget = (props) => {
    const {history} = props;
    return  (
    <PageContainer>
        <PageTitle>Budget</PageTitle>
            <Field name="Program Budet" amount="$525.00" />
            <Field name="Rollover" amount="$25.00" />
            <Field name="Approved Receipts" amount="$0.00" />
            <SubmittedReceiptsBudgetContainer>
                <Field name="Submitted Receipts" amount="$100.00" hasBottomMargin={false} />
            </SubmittedReceiptsBudgetContainer>
            <IndentedField name="Techina Making Event: Techina, lemons, and garlic" amount="$20.00"/ >
            <IndentedField name="Downtown Minyan: Sangria and hula hoops" amount="$30.00"/ >
            <IndentedField name="Shabbat Dinner: FreshDirect delivery to our apartment" amount="$40.00"/ >
            <IndentedField name="Hookah on the Roof: Hookah and Snacks" amount="$10.00"/ >
            <UnusedBudgetContainer>
                <Field name="Unused" amount="$450.00" />
            </UnusedBudgetContainer>
            <Block display="flex" justifyContent="center" marginTop="scale500">
                <Block marginRight="scale300">
                    <Button onClick={() => history.push(RoutePaths.NewProgram)}>New program</Button>
                </Block>
                <Button onClick={() => history.push(RoutePaths.NewReceipt)}>New receipt</Button>
            </Block>
    </PageContainer>
    )
}

type FieldProps = {
    name: string,
    amount: string
};
const Field = ({name, amount, isIndented, hasBottomMargin}: Props) => {
    return <Block display="flex" {...(hasBottomMargin ? {marginBottom:'scale300'} : {})}>
        <Block marginRight="auto">{name}</Block>
        <ValueContainer $bold={!isIndented}>{amount}</ValueContainer>
    </Block>
}
Field.defaultProps = {
    isIndented: false,
    hasBottomMargin: true
}

const IndentedField = (props: Props) => {
    return <Block marginLeft="scale800"><Field isIndented={true} {...props}/></Block>
}

const withBudget = compose(
    withRouter,
)

export default withBudget(Budget);