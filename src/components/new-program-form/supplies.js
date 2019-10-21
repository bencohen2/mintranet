// @flow
import React from 'react';
import {Button} from 'baseui/button';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Block} from 'baseui/block';

type SingleSupplyProps = {
    index: number,
    value: number,
    handleChange: any,
    handleBlur: any,
}
const SingleSupply = ({index, value, handleChange, handleBlur}: SingleSupplyProps) => {
    return (
        <Block display="flex">
            <Block marginRight="scale300">
                <Input
                    name={`item${index}.name`}
                    id={`item${index}.name`}
                    placeholder="Item" 
                    value={value.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Block>
            <Block>
            <Input
                name={`item-${index}.budget`}
                id={`item-${index}.budget`}
                placeholder="Amount" 
                value={value.budget}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
            />
            </Block>
        </Block>
    )
}

type SuppliesSectionProps = {
    values: any,
    handleChange: any,
    handleBlur: any,
}
const SuppliesSection = (props: SuppliesSectionProps) => {
    const {values, ...rest} = props;
    const itemsValuesKeys = Object.keys(values).filter(key => key.includes('item'));
    return <FormControl label="Program supplies" caption="Optional - for resident use only">
        <>
            {itemsValuesKeys.map((key, index) => {
                return <SingleSupply index={index} value={props.values[key]} {...rest} />
            })}
        </>
    </FormControl>
}

export default SuppliesSection;