import {Diagnosis, Patient} from "../types";
import {Action} from "./reducer";

export const setPatientList = (patientListFromApi: Patient[]): Action => ({
    type: "SET_PATIENT_LIST",
    payload: patientListFromApi,
});

export const setDiagnosisList = (diagnosisListFromApi: Diagnosis[]): Action => ({
    type: "SET_DIAGNOSIS_LIST",
    payload: diagnosisListFromApi,
});

export const addPatient = (patient: Patient): Action => ({
    type: "ADD_PATIENT",
    payload: patient,
});

export const updatePatient = (patient: Patient): Action => ({
    type: "UPDATE_PATIENT",
    payload: patient,
});