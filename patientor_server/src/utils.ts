import { NewPatient, Gender } from "./types";

const errorStr = (name: string, value: any): string => {
    return `Missing or incorrect ${name}: ${value}`;
};

const isString = (text: any): text is string => {
    return typeof text === "string" || text instanceof String;
};

const parseName = (name: any): string => {
    if (!name || !isString(name)) {
        throw new Error(errorStr("name", name));
    }
    return name;
};

const isDOB = (param: any): boolean => {
    return Boolean(Date.parse(param));
};

const parseDOB = (dob: any): string => {
    if (!dob || !isString(dob) || !isDOB(dob)) {
        throw new Error(errorStr("dateOfBirth", dob));
    }
    return dob;
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};


const parseSSN = (ssn: any): string => {
    if (!ssn || !isString(ssn)) {
        throw new Error(errorStr("ssn", ssn));
    }
    return ssn;
};


const parseOccupation = (occupation: any): string => {
    if (!occupation || !isString(occupation)) {
        throw new Error(errorStr("occupation", occupation));
    }
    return occupation;
};

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error(errorStr("gender", gender));
    }
    return gender;
};

export const toNewPatient = (object: any): NewPatient => {
    const newPatient = {
        dateOfBirth: parseDOB(object.dateOfBirth),
        name: parseName(object.name),
        ssn: parseSSN(object.ssn),
        occupation: parseOccupation(object.occupation),
        gender: parseGender(object.gender),
    };
    return newPatient;
};
