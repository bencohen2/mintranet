// @flow

import type {ReceiptType} from '../types';

export const Receipt1: ReceiptType = {
    uuid: 1,
    programName: 'Techina Making Event',
    budget: 'House Budget',
    amount: 20.43,
    description: 'Techina, lemons, and garlic',
    submitter: 'Ben Cohen',
    purchaser: 'Ben Cohen',
    createdAt: '2019-09-16',
    approved: true,
    submittedPhotos: false,
};

export const Receipt2: ReceiptType = {
    uuid: 2,
    programName: 'Downtown Minyan',
    budget: 'EPF Budget',
    amount: 18.18,
    description: 'Sangria and hula hoops',
    submitter: 'Philip Trencher',
    purchaser: 'Philip Trencher',
    createdAt: '2019-09-15',
    approved: false,
    submittedPhotos: true,
};

export const Receipt3: ReceiptType = {
    uuid: 3,
    programName: 'Shabbat Dinner',
    budget: 'Shabbat EPF',
    amount: 123.12,
    description: 'FreshDirect delivery to our apartment',
    submitter: 'Daniel Rabban',
    purchaser: 'Daniel Rabban',
    createdAt: '2019-09-13',
    approved: true,
    submittedPhotos: true,
};

export const Receipt4: ReceiptType = {
    uuid: 4,
    programName: 'Rooftop Happy Hour',
    budget: 'Chagim Grants',
    amount: 20.43,
    description: 'Wine and some non-alcoholic beverages',
    submitter: 'Ben Cohen',
    purchaser: 'Philip Trencher',
    createdAt: '2019-09-05',
    approved: false,
    submittedPhotos: true,
};

export const Receipt5: ReceiptType = {
    uuid: 5,
    programName: 'Hookah on the Roof',
    budget: 'Tikkun Olan Justice Grants',
    amount: 50.50,
    description: 'Hookah and snacks',
    submitter: 'Daniel Rabban',
    purchaser: 'Philip Trencher',
    createdAt: '2019-09-04',
    approved: true,
    submittedPhotos: false,
};

