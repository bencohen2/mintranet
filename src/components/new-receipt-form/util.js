// @flow

export const BudgetOptions = [
    {id: 1, label: 'House Budget'},
    {id: 2, label: 'EPF Budget'},
    {id: 3, label: 'Special Budget'},
    {id: 4, label: 'Residents Conference'},
    {id: 5, label: 'Scholarship'},
    {id: 6, label: 'House Cleaning'},
    {id: 7, label: 'Learning Retreat'},
    {id: 8, label: 'Tikkun Olam Justice Grants'},
    {id: 9, label: 'Chagim Grants'},
    {id: 10, label: 'Israeli Culture Grants'},
    {id: 11, label: 'Transportation for Convenings'},
    {id: 12, label: 'International Grants'},
    {id: 13, label: 'Shabbat EPF'},
    {id: 14, label: '4HQ Israel'},
    {id: 15, label: 'International Travel Insurance'},
];

export const Fields = {
    programName: {
        name: 'programName',
        errorString: 'Please select a program',
        required: true
    },
    programDate: {
        name: 'budget',
        errorString: 'Please select a budget',
        required: true
    },
    amount: {
        name: 'amount',
        errorString: 'Please enter the receipt amount',
        required: true
    },
    description: {
        name: 'description',
        errorString: 'Please enter a receipt description',
        required: true
    },
    submitter: {
        name: 'submitter',
        errorString: 'Please select the receipt submitter',
        required: true,
    },
    purchaser: {
        name: 'purchaser',
        errorString: 'Please select the receipt purchaser',
        required: true,
    }
};