import patientsData from "../../data/patients";
import {v1 as uuid } from 'uuid'
import {NewEntry, NonSensitivePatient, Patient, Entry, NewPatient} from '../types';

const patients: Patient[] = patientsData;

const getPatients = (): Patient[] => {
    return patients;
};


const getPatient = (id: string): Patient | undefined => {
    const patient = patients.find((p) => p.id === id);
    return patient;
};


const getNonSensitivePatients = (): NonSensitivePatient [] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (patient: NewPatient): Patient => {
    const newPatient = {
        id: uuid(),
        ...patient,
    };
    patients.push(newPatient);
    return newPatient;
};

const addEntry = (id: Patient["id"], entry: NewEntry): Entry => {
    const newEntry = {
        id: uuid(),
        date: new Date().toISOString().slice(0, 10),
        ...entry,
    };
    const patient = patients.find((p) => p.id === id);
    if (!patient) {
        throw new Error("Patient not found");
    }

    patient.entries.push(newEntry);
    return newEntry;
};

export default {
    getPatients,
    getPatient,
    addEntry,
    addPatient,
    getNonSensitivePatients
};