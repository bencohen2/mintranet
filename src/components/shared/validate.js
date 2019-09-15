// @flow
export const validate = fields => values => {
    const errors = {};
    Object.keys(fields).filter(field => !values[field]).forEach(field => errors[field] = fields[field]);
    return errors;
}