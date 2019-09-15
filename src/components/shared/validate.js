// @flow
export const validate = fields => values => {
    const errors = {};
    Object.keys(fields).forEach(field => {
        if (fields[field].required && !values[field]) {
            errors[field] = fields.field.errorString;
        }
    });
    return errors;
}