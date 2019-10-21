// @flow
import {createPlugin, createToken} from 'fusion-core';
import {MockPrograms} from '../../mocks/program';

// $FlowFixMe
export const ProgramsClientToken = createToken('ProgramsClient');

// $FlowFixMe
const programsClientPlugin = createPlugin({
    deps: {},
    provides: ({}) => {
        return {
            getPrograms(args, ctx) {
                return {
                    programs: MockPrograms
                };
            }
        }
    }
});

export default programsClientPlugin;