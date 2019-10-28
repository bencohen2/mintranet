// @flow
import React, {useState, useEffect} from 'react';
import {Button} from 'baseui/button';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Block} from 'baseui/block';
import Plus from 'baseui/icon/plus';

type SupplyType = {
    name: string,
    budget: string
}

type SingleSupplyProps = {
    index: number,
    supply: SupplyType,
    setSupplies: any => void,
    supplies: SupplyType[]
}
const SingleSupply = (props: SingleSupplyProps) => {
    const [supply, setSupply] = useState(props.supply);
    const {supplies, index, setSupplies} = props;
    useEffect(() => {
        supplies[index] = supply;
        setSupplies(supplies);
    }, [supply])
    return (
        <Block display="flex">
            <Block display="flex" width="80%">
            <Block marginRight="scale300" flex="1">
                <Input
                    placeholder="Item" 
                    value={supply.name}
                    onChange={({target: {value}}) => setSupply({
                        ...supply,
                        name: value
                    })}
                />
            </Block>
            <Block flex="1" >
                <Input
                    placeholder="Amount" 
                    value={supply.budget}
                    type="number"
                    onChange={({target: {value}}) => setSupply({
                        ...supply,
                        budget: value
                    })}
                    startEnhancer="$"
                />
            </Block>
            </Block>
            {index + 1 === supplies.length && 
            <Block marginLeft="auto">
                <Button onClick={() => {
                    setSupplies([...supplies, {name: '', budget: ''}])
                }}>
                <Plus size={25}/>
            </Button>
            </Block>
            }
        </Block>
    )
}

type SuppliesSectionProps = {};
const SuppliesSection = (props: SuppliesSectionProps) => {
    const [supplies, setSupplies] = useState([{
        name: '',
        budget: ''
    }]);
    return <FormControl label="Program supplies" caption="Optional - for resident use only">
        <>
            {supplies.map((supply, index) => {
                return <SingleSupply key={index} index={index} supply={supply} setSupplies={setSupplies} supplies={supplies}/>
            })}
        </>
    </FormControl>
}

export default SuppliesSection;