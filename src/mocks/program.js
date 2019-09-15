// @flow

import type {ProgramType} from '../types';

export const Program1: ProgramType = {
    uuid: '1',
    eventName: 'Techina Making Event',
    createdAt: '2019-09-16',
    description: 'We will be asking people to bring cans of food to donate to a local food shelter.',
    submittedPhotos: true,
    submittedReceipts: true,
    submittedAttendees: true
};

export const Program2: ProgramType = {
    uuid: '2',
    eventName: 'Downtown Minyan BBQ',
    createdAt: '2019-09-15',
    description: "We're closing out summer with a BBQ on our roof; hot dogs and hamburgers, what could be better?",
    submittedPhotos: false,
    submittedReceipts: true,
    submittedAttendees: true
};

export const Program3: ProgramType = {
    uuid: '3',
    eventName: 'Shabbat Dinner',
    createdAt: '2019-09-13',
    description: "It's our monthly Shabbat dinner at Moho WV. Shabbat Shalom! (WE ARE Fundraising Shabbat) - Shabbat",
    submittedPhotos: true,
    submittedReceipts: true,
    submittedAttendees: false
};

export const Program4: ProgramType = {
    uuid: '4',
    eventName: 'Rooftop Happy Hour',
    createdAt: '2019-09-05',
    description: "We're back at it with another rooftop happy hour. Come thirsty.",
    submittedPhotos: true,
    submittedReceipts: true,
    submittedAttendees: true
};

export const Program5: ProgramType = {
    uuid: '5',
    eventName: 'Hookah on the Roof',
    createdAt: '2019-09-04',
    description: "Come join us for a relaxing night on our roof smoking hookah and hanging with friends.",
    submittedPhotos: true,
    submittedReceipts: true,
    submittedAttendees: true
};