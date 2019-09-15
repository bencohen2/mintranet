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

export const Fields = {
    programName: {
        name: 'programName',
        errorString: 'Please enter a program name',
        required: true
    },
    programDate: {
        name: 'programDate',
        errorString: 'Please enter a program date',
        required: true
    },
    programType: {
        name: 'programType',
        errorString: 'Please select a program type',
        required: true
    },
    description: {
        name: 'description',
        errorString: 'Please enter a program description',
        required: true
    },
    is4HQProgram: {
        name: 'is4HQProgram',
        required: false,
    },
    isShabbatProgram: {
        name: 'isShabbatProgram',
        required: false,
    },
    isPartnershipProgram: {
        name: 'isPartnershipProgram',
        required: false,
    },
    totalAttendees: {
        name: 'totalAttendees',
        errorString: 'Please enter the number of total attendees',
        required: true
    },
    residentAttendees: {
        name: 'residentAttendees',
        errorString: 'Please enter the number of resident attendees',
        required: true
    },
    firstVisitOfYearAttendees: {
        name: 'firstVisitOfYearAttendees',
        errorString: 'Please enter the number of attendees who attended their first program',
        required: true
    }
};