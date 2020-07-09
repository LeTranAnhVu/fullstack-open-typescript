import patientsData from '../../data/patients.json'

import {NonSensitivePatient, Patient} from '../types';

const patients: Array<Patient> = patientsData;

const getEntries = (): Array<Patient> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatient [] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const addEntry = () => {
    return null;
};

export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries
};