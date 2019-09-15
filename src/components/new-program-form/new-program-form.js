// @flow
import React from 'react';
import {addMonths} from 'date-fns';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Datepicker} from 'baseui/datepicker';
import {Select} from 'baseui/select';
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox';
import {AttendeesInputContainer} from './styled-components';
import {Button} from 'baseui/button';
import {options} from './util';

type Props = {
    onSubmit: () => void
}

export const NewProgramForm = (props: Props) => {
    const {onSubmit} = props;
    return ( 
    <>
        <FormControl label="Program Name"><Input placeholder="Enter a program name"/></FormControl>
        <FormControl label="Program Date" caption="Programs cannot be applied for more than 3 months in advance."><Datepicker maxDate={addMonths(new Date(), 3)}/></FormControl>
        <FormControl label="Program Type"><Select options={options}/></FormControl>
        <FormControl label="Description"><Input placeholder="Enter a program description"/></FormControl>
        <FormControl label="Is this a 4HQ Israel program?"><Checkbox checkmarkType={STYLE_TYPE.toggle} /></FormControl>
        <FormControl label="Is this a Shabbat program?"><Checkbox checkmarkType={STYLE_TYPE.toggle} /></FormControl>
        <FormControl label="Is this a partnership prgoram?"><Checkbox checkmarkType={STYLE_TYPE.toggle} /></FormControl>
        <FormControl label="Attendees">
            <>
                <AttendeesInputContainer><Input type="number" placeholder="Total attendees" / ></AttendeesInputContainer>
                <AttendeesInputContainer><Input type="number" placeholder="Resident attendees" / ></AttendeesInputContainer>
                <AttendeesInputContainer><Input type="number" placeholder="First visit of the year" / ></AttendeesInputContainer>
            </>
        </FormControl>
        <Button onClick={onSubmit}>Save program details</Button>
    </>
    );
};

export default NewProgramForm;

