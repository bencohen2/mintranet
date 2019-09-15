// @flow

export type ProgramType = {
    uuid: string,
    programName: string,
    createdAt: string,
    description: string,
    submittedPhotos: boolean,
    submittedReceipts: boolean,
    submittedAttendees: boolean
};

export type ReceiptType = {
    uuid: string,
    programName: string,
    createdAt: string,
    budget: string,
    amount: number,
    description: string,
    submitter: string,
    purchaser: string
}