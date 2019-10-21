// @flow
import React, {useState} from 'react';
import {Datepicker} from 'baseui/datepicker';
import {styled} from 'baseui';
import {Block} from 'baseui/block';
import Delete from 'baseui/icon/delete';
import {assetUrl} from 'fusion-core';

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
        overrides={createOverrides(value, onClose, placeholder)}
    />
};

const CloseIcon = styled(Delete, props => ({
    width: props.$theme.sizing.scale600,
    height: props.$theme.sizing.scale600,
    ':hover': {
        cursor: 'pointer'
    }
}));

const createOverrides = (value, onClose, placeholder: string) => ({
    Input: {
        props: {
            overrides: {
                Root: {
                    style: {
                        minWidth: '280px'
                    }
                },                    
                After: {
                    component: () => {
                        return value.length > 0 ? <Block display="flex" alignItems="center" marginRight="scale500">
                            <CloseIcon onClick={onClose} />
                        </Block> : null;
                    }
                },
                Before: {
                    component: () =>  <Block display="flex" justifyContent="center" alignItems="center" paddingLeft="scale300"> 
                        <Calendar/>
                    </Block>
                }
            },
            placeholder,
            ...(value.length === 0 ? {value: placeholder}: {}),
            mask: undefined,
        }
    }
});

const Calendar = () => <img src={assetUrl('../../assets/calendar.svg')} alt="" height="24px" width="24px" />;
export default DateRangePicker;