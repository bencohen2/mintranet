// @flow
import React from 'react';
import {addMonths} from 'date-fns';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Datepicker} from 'baseui/datepicker';
import {Select} from 'baseui/select';
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox';
import {Form, AttendeesInputContainer} from './styled-components';
import {Button} from 'baseui/button';
import {Options, Fields} from './util';
import {connect} from 'formik';

type Props = {
    onSubmit: () => void
}

export const NewProgramForm = (props: Props) => {
    const {
        onSubmit, 
        formik: {values, errors, setFieldValue, handleChange, handleBlur, handleSubmit: handleFormikSubmit}
    } = props;
    return ( 
    <Form onSubmit={() => {
        handleFormikSubmit();
        // onSubmit();
    }}>
        <FormControl label="Program Name">
            <Input 
                name={Fields.programName.name}
                id={Fields.programName.name}
                placeholder="Enter a program name" 
                value={values.programName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[Fields.programName.name]}
            />
        </FormControl>
        <FormControl label="Program Date" caption="Programs cannot be applied for more than 3 months in advance.">
            <Datepicker 
                name={Fields.programDate.name}
                id={Fields.programDate.name}
                onChange={handleChange}
                onBlur={handleBlur}
                maxDate={addMonths(new Date(), 3)}
                onChange={newDate => {
                    setFieldValue(Fields.programDate.name, newDate.date);
                    handleChange();
                }}
                error={errors[Fields.programDate.name]}
            />
        </FormControl>
        <FormControl label="Program Type">
            <Select 
                name={Fields.programType.name}
                id={Fields.programType.name}
                placeholder="Select"
                options={Options}
                value={values.programType}
                onChange={({value}) => {
                    setFieldValue(Fields.programType.name, Options.find(o => o.id === value[0].id));
                    handleChange();
                }}
                onBlur={handleBlur}
                error={errors[Fields.programType.name]}
            />
        </FormControl>
        <FormControl label="Description">
            <Input 
                name={Fields.description.name}
                id={Fields.description.name}
                placeholder="Enter a program description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[Fields.description.name]}
            />
        </FormControl>
        <Checkbox 
            name={Fields.is4HQProgram.name}
            id={Fields.is4HQProgram.name}
            checkmarkType={STYLE_TYPE.toggle} 
            checked={values.is4HQProgram}
            onChange={newValue => setFieldValue(Fields.is4HQProgram.name, newValue.target.checked)}
            onBlur={handleBlur}
        >
            Is this a 4HQ Israel program?
        </Checkbox>
        <Checkbox 
            name={Fields.isShabbatProgram.name}
            id={Fields.isShabbatProgram.name}
            checkmarkType={STYLE_TYPE.toggle} 
            checked={values.isShabbatProgram}
            onChange={handleChange}
            onBlur={handleBlur}
        >
            Is this a Shabbat program?
        </Checkbox>
        <Checkbox 
            name={Fields.isPartnershipProgram.name}
            id={Fields.isPartnershipProgram.name}
            checkmarkType={STYLE_TYPE.toggle} 
            checked={values.isPartnershipProgram}
            onChange={handleChange}
            onBlur={handleBlur}
        >
            Is this a partnership prgoram?
        </Checkbox>
        <FormControl label="Attendees">
            <>
                <AttendeesInputContainer>
                    <Input 
                        name={Fields.totalAttendees.name}
                        id={Fields.totalAttendees.name}
                        type="number" 
                        placeholder="Total attendees"
                        value={values.totalAttendees}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors[Fields.totalAttendees.name]}
                    />
                </AttendeesInputContainer>
                <AttendeesInputContainer>
                    <Input 
                        name={Fields.residentAttendees.name}
                        id={Fields.residentAttendees.name}
                        type="number" 
                        placeholder="Resident attendees"
                        value={values.residentAttendees}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors[Fields.residentAttendees.name]}
                    />
                </AttendeesInputContainer>
                <AttendeesInputContainer>
                    <Input 
                        name={Fields.firstVisitOfYearAttendees.name}
                        id={Fields.firstVisitOfYearAttendees.name}
                        type="number" 
                        placeholder="First visit of the year"
                        value={values.firstVisitOfYearAttendees}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors[Fields.firstVisitOfYearAttendees.name]}
                    />
                </AttendeesInputContainer>
            </>
        </FormControl>
        <Button type="submit">
            Save program details
        </Button>
    </Form>
    );
};

export default connect(NewProgramForm);

