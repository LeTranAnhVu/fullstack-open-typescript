import {State} from "./state";
import {Diagnosis, Entry, Patient} from "../types";

export type Action =
    | {
    type: "SET_PATIENT_LIST";
    payload: Patient[];
}
    | {
    type: "ADD_PATIENT";
    payload: Patient;
}
    | {
    type: "UPDATE_PATIENT";
    payload: Patient;
}
    | {
    type: "SET_DIAGNOSIS_LIST";
    payload: Diagnosis[];
} | {
    type: "ADD_ENTRY";
    payload: {
        id: Patient["id"];
        entry: Entry;
    };
};

const assertNever = (arg: never): never => {
    throw new Error("Assert never");
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_PATIENT_LIST":
            return {
                ...state,
                patients: {
                    ...action.payload.reduce(
                        (memo, patient) => ({...memo, [patient.id]: patient}),
                        {}
                    ),
                    ...state.patients,
                },
            };
        case "ADD_PATIENT":
            return {
                ...state,
                patients: {
                    ...state.patients,
                    [action.payload.id]: action.payload,
                },
            };
        case "UPDATE_PATIENT":
            return {
                ...state,
                patients: {
                    ...state.patients,
                    [action.payload.id]: {
                        ...state.patients[action.payload.id],
                        ...action.payload,
                    },
                },
            };
        case "SET_DIAGNOSIS_LIST":
            return {
                ...state,
                diagnoses: {
                    ...action.payload.reduce(
                        (memo, diagnosis) => ({...memo, [diagnosis.code]: diagnosis}),
                        {}
                    ),
                    ...state.patients,
                },
            };
        case "ADD_ENTRY":
            return {
                ...state,
                patients: {
                    ...state.patients,
                    [action.payload.id]: {
                        ...state.patients[action.payload.id],
                        entries: [
                            action.payload.entry,
                            ...state.patients[action.payload.id].entries,
                        ],
                    },
                },
            };
        default:
            return assertNever(action);
    }
};
