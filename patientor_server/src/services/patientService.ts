import patientsData from '../../data/patients.json'
import {v1 as uuid } from 'uuid'
import {NewPatient, NonSensitivePatient, Patient} from '../types';

const patients: Array<Patient> = patientsData;

const getEntries = (): Array<Patient> => {
    return patients;
};


const getEntry = (id: string): Patient | undefined => {
    const patient = patients.find((p) => p.id === id);
    return patient;
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

const addEntry = (patient: NewPatient): Patient => {
    const newPatient = {
        id: uuid(),
        ...patient,
    };
    patients.push(newPatient);
    return newPatient;
};

export default {
    getEntries,
    getEntry,
    addEntry,
    getNonSensitiveEntries
};