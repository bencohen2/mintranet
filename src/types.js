// @flow

export type ProgramType = {
    uuid: string,
    programName: string,
    createdAt: string,
    description: string,
    submittedPhotos: boolean,
    submittedReceipts: boolean,
    submittedReceiptTotal: number,
    acceptedReceiptTotal: number
};

export type ReceiptType = {
    uuid: string,
    programName: string,
    createdAt: string,
    budget: string,
    amount: number,
    description: string,
    submitter: string,
    purchaser: string,
    approved: boolean,
    submittedPhotos: boolean
}

export type ResidentType = {
    uuid: string,
    name: string
}