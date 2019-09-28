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
import {Options, CheckboxOverride} from './util';
import {connect} from 'formik';
import {Form} from '../shared/styled-components';

type Props = {};

export const NewProgramForm = (props: Props) => {
    const {
        formik: {values, errors, setFieldValue, handleChange, handleBlur, handleSubmit}
    } = props;
    return ( 
    <Form onSubmit={handleSubmit}>
        <FormControl label="Program Name" error={errors.programName}>
            <Input 
                name="programName"
                id="programName"
                placeholder="Enter a program name" 
                value={values.programName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.programName}
            />
        </FormControl>
        <FormControl 
            label="Program Date" 
            caption="Programs cannot be applied for more than 3 months in advance."
            error={errors.programDate}
        >
            <Datepicker 
                name="programDate"
                id="programDate"
                onChange={handleChange}
                onBlur={handleBlur}
                maxDate={addMonths(new Date(), 3)}
                onChange={newDate => {
                    setFieldValue("programDate", newDate.date);
                    handleChange();
                }}
                error={errors.programDate}
            />
        </FormControl>
        <FormControl label="Program Type" error={errors.programType}>
            <Select 
                name="programType"
                id="programType"
                placeholder="Select"
                options={Options}
                value={values.programType}
                onChange={({value}) => {
                    setFieldValue("programType", Options.find(o => o.id === value[0].id));
                    handleChange();
                }}
                onBlur={handleBlur}
                error={errors.programType}
            />
        </FormControl>
        <FormControl label="Description" error={errors.description}>
            <Input 
                name="description"
                id="description"
                placeholder="Enter a program description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.description}
            />
        </FormControl>
        <Checkbox 
            name="is4HQProgram"
            id="is4HQProgram"
            checkmarkType={STYLE_TYPE.toggle} 
            checked={values.is4HQProgram}
            onChange={newValue => setFieldValue("is4HQProgram", newValue.target.checked)}
            onBlur={handleBlur}
        >
            Is this a 4HQ Israel program?
        </Checkbox>
        <Checkbox 
            name="isShabbatProgram"
            id="isShabbatProgram"
            checkmarkType={STYLE_TYPE.toggle} 
            checked={values.isShabbatProgram}
            onChange={handleChange}
            onBlur={handleBlur}
            overrides={CheckboxOverride}
        >
            Is this a Shabbat program?
        </Checkbox>
        <Checkbox 
            name="isPartnershipProgram"
            id="isPartnershipProgram"
            checkmarkType={STYLE_TYPE.toggle} 
            checked={values.isPartnershipProgram}
            onChange={handleChange}
            onBlur={handleBlur}
        >
            Is this a partnership prgoram?
        </Checkbox>
        <FormControl label="Total attendees" error={errors.totalAttendees}>
            <AttendeesInputContainer>
                <Input 
                    name="totalAttendees"
                    id="totalAttendees"
                    type="number" 
                    placeholder="Total attendees"
                    value={values.totalAttendees}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.totalAttendees}
                />
            </AttendeesInputContainer>
        </FormControl>
        <FormControl label="Resident attendees" error={errors.residentAttendees}>
            <AttendeesInputContainer>
                <Input 
                    name="residentAttendees"
                    id="residentAttendees"
                    type="number" 
                    placeholder="Resident attendees"
                    value={values.residentAttendees}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.residentAttendees}
                />
            </AttendeesInputContainer>
        </FormControl>
        <FormControl label="First visit of the year" error={errors.firstVisitOfYearAttendees}>
            <AttendeesInputContainer>
                <Input 
                    name="firstVisitOfYearAttendees"
                    id="firstVisitOfYearAttendees"
                    type="number" 
                    placeholder="First visit of the year"
                    value={values.firstVisitOfYearAttendees}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstVisitOfYearAttendees}
                />
            </AttendeesInputContainer>
        </FormControl>
        <Button type="submit">
            Save program details
        </Button>
    </Form>
    );
};

export default connect(NewProgramForm);

