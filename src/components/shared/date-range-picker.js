// @flow
import React, {useState} from 'react';
import {Datepicker} from 'baseui/datepicker';
import {styled, mergeOverrides} from 'baseui';
import {Block} from 'baseui/block';
import Delete from 'baseui/icon/delete';

type Props = {
    placeholder: string,
    initialValue: Date[],
    onChange: (Date[]) => void,
    quickSelect: boolean,
};

export const DateRangePicker = (props: Props) => {
    const {placeholder, onChange, quickSelect, initialValue} = props;
    const [value, setValue] = useState(initialValue);
    const onClose = () => setValue(initialValue);
    return <Datepicker 
        range={true} 
        quickSelect={quickSelect} 
        placeholder={placeholder} 
        value={value} 
        onChange={data => {
            const {date}: Date[] = data;
            const newDates = [];
            if (date[0]) {
                newDates.push(date[0]);
            }
            if (date[1]) {
                newDates.push(date[1]);
                onChange(newDates);
            }
            setValue(newDates);
        }}
        overrides={createOverrides(value, onClose)}
    />
};

const CloseIcon = styled(Delete, props => ({
    width: props.$theme.sizing.scale600,
    height: props.$theme.sizing.scale600,
    ':hover': {
        cursor: 'pointer'
    }
}));

const createOverrides = (value, onClose) => ({
    Input: {
        props: {
            overrides: {
                Root: {
                    style: {
                        width: '300px'
                    }
                },
                After: {
                    component: () => {
                        return value.length > 0 ? <Block display="flex" alignItems="center" marginRight="scale500">
                            <CloseIcon onClick={onClose} />
                        </Block> : null;
                    }
                },
            },
            placeholder: 'Filter programs',
            ...(value.length === 0 ? {value: 'Filter programs'}: {})
        }
    }
});

export default DateRangePicker;