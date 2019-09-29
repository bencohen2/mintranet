// @flow
import {RoutePaths} from '../../constants';

export const handleSubmit = async (values, {props}) => {
    const {createProgram, history} = props;
    const {
        programName,
        description,
        programType,
        programDate,
        firstVisitOfYearAttendees,
        is4HQProgram,
        isPartnershipProgram,
        isShabbatProgram,
        residentAttendees,
        totalAttendees  
    } = values;
    await createProgram({
        uuid: '6',
        programName,
        description,
        programType: programType.label,
        firstVisitOfYearAttendees,
        is4HQProgram,
        isPartnershipProgram,
        isShabbatProgram,
        residentAttendees,
        totalAttendees
    });
    history.push(RoutePaths.Programs);
}
