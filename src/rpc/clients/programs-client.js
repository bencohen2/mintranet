// @flow
import {createPlugin, createToken} from 'fusion-core';
import {Program1, Program2, Program3, Program4, Program5} from '../../mocks/program';

// $FlowFixMe
export const ProgramsClientToken = createToken('ProgramsClient');

// $FlowFixMe
const programsClientPlugin = createPlugin({
    deps: {},
    provides: ({}) => {
        return {
            getPrograms(args, ctx) {
                return {
                    programs: [Program1, Program2, Program3, Program4, Program5]
                };
            }
        }
    }
});

export default programsClientPlugin;