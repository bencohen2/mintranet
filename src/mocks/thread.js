// @flow
import {type ThreadType} from '../types';

export const MockThread2: ThreadType = {
    content: `Hi Moho! My name is Ben Cohen and I'm a new resident in Moho NYC - West Village. We put on a Tikkun Olam event last week with a local food shelter. Usually have 20+ people at each event, but we only had 3 people show up to this event. How can we make our Tikkun Olam events more engaging? Thanks in advance!`,
    title: 'Struggling with making engaging Tikkun Olam programs.',
    createdAt: '5 hours ago',
    createdByName: 'Ben Cohen',
    createdByHouseName: 'Moho NYC - West Village',
    upvotes: 7,
    responses: [
        {
            content: `Hi Ben! Let me follow up with you over Facebook - we have tons of ideas to help you out!`,
            createdAt: '1 hour ago',
            createdByName: 'David Braha',
            createdByHouseName: 'Moho NYC - Williamsburg',
            upvotes: 3,
            responses: [{
                content: `Thanks so much David! Really appreciate it :)`,
                createdAt: '10 minutes ago',
                createdByName: 'Ben Cohen',
                createdByHouseName: 'Moho NYC - West Village',
                upvotes: 2,
                responses: []
            }],
        },
        {
                content: `My house also struggles a lot with this. It'd be great if Moishe House did some kind of webinar to help residents make more engaging Tikkun Olam programming.`,
                createdAt: '2 hour ago',
                createdByName: 'Marisa Jones',
                createdByHouseName: 'Moho NYC - Park Slope',
                upvotes: 2,
                responses: []
        }
    ]
};

export const MockThread1: ThreadType = {
    content: `I've been living in Moishe House for two years, and our community has always been really dynamic. Recently, however, our house has become really cliquey, and new people who come to our events tell us that they don't feel comfortable coming back because nobody seems interested in talking to them. What can we do as hosts to make these people's experiences better?`,
    title: 'How to deal with cliquey community?',
    createdAt: '2 days ago',
    createdByName: 'Lauren Dahar',
    createdByHouseName: 'Moho NYC - Murray Hill',
    upvotes: 30,
    responses: [
        {
            content: `Omg literally the same thing is happening to our community as well..`,
            createdAt: '1 hour ago',
            createdByName: 'Ben Cohen',
            createdByHouseName: 'Moho NYC - West Village',
            upvotes: 1,
            responses: []
        },
        {
            content: `It's a tough issue, and nobody really knows what to do here.`,
            createdAt: '2 hour ago',
            createdByName: 'Philip Trencher',
            createdByHouseName: 'Moho NYC - West Village',
            upvotes: 1,
            responses: []
        }
    ]
};

export const MockThread3: ThreadType = {
    content: `What're people doing for Rosh Hashanah programming?!`,
    title: `RH 5780`,
    createdAt: '1 month ago',
    createdByName: 'Alyssa Silva',
    createdByHouseName: 'Moho Washington D.C. - Columbia Heights',
    upvotes: 15,
    responses: [
        {
            content: `Honey tasing with tons of honey from local artisanal beehives`,
            createdAt: '3 hours ago',
            createdByName: 'Ben Cohen',
            createdByHouseName: 'Moho NYC - West Village',
            upvotes: 1,
            responses: [{
                content: `Soooo bougie lol`,
                createdAt: '3 hours ago',
                createdByName: 'Alyssa Silva',
                createdByHouseName: 'Moho Washington D.C. - Columbia Heights',
                upvotes: 1,
                responses: []
            }]
        },
        {
            content: `Apple picking!`,
            createdAt: '5 hours ago',
            createdByName: 'Brandon Schuster',
            createdByHouseName: 'Moho NYC - Williamsburg',
            upvotes: 2,
            responses: []
        },
        {
            content: `Learning with a rabbi!`,
            createdAt: '7 hours ago',
            createdByName: 'Shachar Milhous Binyamin',
            createdByHouseName: 'Moho NYC - Upper West Side',
            upvotes: 2,
            responses: []
        }
    ]
};

export const MockThreads = [
    MockThread1,
    MockThread2,
    MockThread3
]