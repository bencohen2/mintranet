// @flow

export const StyleConstants = {
    shadowRight400: '4px 0 4px -4px hsla(0, 0%, 0%, 0.16)'
};

export const RoutePaths = {
    Programs: '/programs',
    NewProgram: '/new-program',
    Receipts: '/receipts',
    NewReceipt: '/new-receipt',
    Budget: '/budget',
    Contacts: '/contacts',
    Grants: '/grants',
    ApplyForGrant: '/apply-for-grant/:grantID',
    MakeApplyForGrant: grantID => `/apply-for-grant/${grantID}`,
    Resources: '/resources',
    ResidentForum: '/resident-forum'
};

export const RpcIds = {
    getPrograms: 'getPrograms',
    getReceipts: 'getReceipts',
    getUserInfo: 'getUserInfo'
}