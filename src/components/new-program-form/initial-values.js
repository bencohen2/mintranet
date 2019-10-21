// @flow

export const getInitialValues = () => {
    return {
        programName: '',
        programDate: '',
        programLocation: '',
        programType: undefined,
        description: '',
        is4HQProgram: false,
        item0: {
            name: '',
            budget: ''
        },
        isShabbatProgram: false,
        programLeader: undefined,
        isPartnershipProgram: false,
        totalAttendees: undefined,
        residentAttendees: undefined,
        firstVisitOfYearAttendees: undefined,
    }
}