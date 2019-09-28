// @flow
import {createPlugin, createToken} from 'fusion-core';

// $FlowFixMe
export const UserClientToken = createToken('UserClient');

// $FlowFixMe
const userClientPlugin = createPlugin({
    deps: {},
    provides: ({}) => {
        return {
            getUserInfo(args, ctx) {
                return {
                    userInfo: {
                        firstName: 'Ben',
                        lastName: 'Cohen',
                        houseName: 'Moishe House West Village'
                    }
                };
            }
        }
    }
});

export default userClientPlugin;