// @flow
import {Fields} from './util';
export const validate = (values, props) => {
    const errors = {};
    Object.keys(Fields).forEach(field => {
        if (Fields[field].required && !values[field]) {
            errors[field] = Fields.field.errorString;
        }
    });
    return errors;
}