// @flow

export const Options = [
    {id: 1, label: 'International Resident and Host Training Conference'},
    {id: 2, label: 'Jewish Culture and Holidays'},
    {id: 3, label: 'Jewish Learning'},
    {id: 4, label: 'Latin American Resident and Host Training Conference'},
    {id: 5, label: 'Learning Retreat'},
    {id: 6, label: 'North American Resident and Host Training Conference'},
    {id: 7, label: 'RSJ Resident Conference'},
    {id: 8, label: 'Scholarship'},
    {id: 9, label: 'Social'},
    {id: 10, label: 'Special Budget'},
    {id: 11, label: 'Tikkun Olam'},
    {id: 12, label: 'Us Time'},
];

export const FieldErrors = {
    programName: 'Please enter a program name',
    programDate: 'Please enter a program date',
    programType: 'Please select a program type',
    description: 'Please enter a program description',
    totalAttendees: 'Please enter the number of total attendees',
    residentAttendees: 'Please enter the number of resident attendees',
    firstVisitOfYearAttendees: 'Please enter the number of attendees who attended their first program',
};

export const CheckboxOverride = {
    ToggleTrack: {
        style: {
            cursor: 'pointer'
        }
    }
}