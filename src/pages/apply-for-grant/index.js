// @flow
import React from 'react';
import {compose} from 'redux';
import {withRouter} from 'fusion-plugin-react-router';
import {PageContainer, PageTitle} from '../../components/shared/styled-components';
import {GrantsList} from '../../mocks/grants';
import {Form} from '../../components/shared/styled-components';
import {Input} from 'baseui/input';
import {FormControl} from 'baseui/form-control';
import {Datepicker} from 'baseui/datepicker';
import {Select} from 'baseui/select';
import {HowManyTimesOptions, GrantAmountOptions} from './util';
import {Textarea} from 'baseui/textarea';
import {Button} from 'baseui/button';
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox';
import {Block} from 'baseui/block';

export const ApplyForGrant = (props) => {
    const {match: {params: {grantID}}} = props;
    const grant = GrantsList.find(grant => grant.id === grantID);
    return  (
    <PageContainer>
        <PageTitle>Apply for {grant.name}</PageTitle>
        <Form>
        <Block marginTop="scale600">Moishe House Israeli Culture grants are generously supported by:</Block>
        <Block>- Aaron and Rebecca Weitman</Block>
        <Block marginBottom="scale600">- Young Judaea, the leading pluralistic Zionist Jewish youth movement in North America</Block>
        <FormControl label="Program Name" >
            <Input 
                name="programName"
                id="programName"
                placeholder="Enter a program name" 
            />
        </FormControl>
        <FormControl 
            label="Program Date" 
            caption="Grants cannot be applied for more than 3 months in advance."
        >
            <Datepicker 
                name="programDate"
                id="programDate"
                minDate={new Date()}
            />
        </FormControl>
        <FormControl label="Please Describe the Program" caption="Be sure to point out the various aspects of Israeli culture you are implementing into your program.">
            <Textarea 
                name="programDescription"
                id="programDescription"
                placeholder="Enter a program description" 
            />
        </FormControl>
        <Checkbox 
            name="is4HQProgram"
            id="is4HQProgram"
            checkmarkType={STYLE_TYPE.toggle} 
        >
            Is this grant being used in conjunction with other added grants (i.e.Shabbat or Chagim Grants)?
        </Checkbox>
        <FormControl label="How many times has your house utilized this grant in the current calendar year?" >
            <Select 
                name="programLocation"
                id="programLocation"
                placeholder="Select"
                options={HowManyTimesOptions}
            />
        </FormControl>
        <FormControl label="Grant amount requested" >
            <Select 
                name="programLocation"
                id="programLocation"
                placeholder="Select"
                options={GrantAmountOptions}
            />
        </FormControl>
        <FormControl label="Itemized Budget for Grant Usage">
            <Textarea 
                name="programDescription"
                id="programDescription"
                placeholder="Enter an itemized budget" 
            />
        </FormControl>
        <Button type="submit">
            Submit application
        </Button>
    </Form>
    </PageContainer>
    )
}

const withApplyForGrant = compose(
    withRouter,
)

export default withApplyForGrant(ApplyForGrant);