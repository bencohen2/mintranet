// @flow
import {type ResidentType} from '../types';

export const Resident1: ResidentType = {
    uuid: '1',
    name: 'Ben Cohen'
}

export const Resident2: ResidentType = {
    uuid: '2',
    name: 'Philip Trencher'
}

export const Resident3: ResidentType = {
    uuid: '3',
    name: 'Daniel Rabban'
}

export const MockResidents = [
    Resident1,
    Resident2,
    Resident3
]

export const ResidentSelectOptions = MockResidents.map(resident => ({
    id: resident.uuid,
    label: resident.name
}))