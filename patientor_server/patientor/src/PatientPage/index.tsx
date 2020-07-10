import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Header, Loader, Icon, SemanticICONS, Label} from "semantic-ui-react";
import axios from "axios";
import { useAsyncCallback } from "react-async-hook";
import {apiBaseUrl} from "../constants";
import {useStateValue} from "../state";
import {Patient, Gender, NewHospitalEntry, Entry} from "../types";
import {addEntry, updatePatient} from "../state/actions";
import EntryList from "./EntryList";
import AddEventForm from "../components/AddEventForm";
import { FormikHelpers } from "formik";

const iconsByGender: Record<Gender, SemanticICONS> = {
    [Gender.Male]: "man",
    [Gender.Female]: "woman",
    [Gender.Other]: "other gender",
};

const PatientPage: React.FC = () => {
    const [{patients}, dispatch] = useStateValue();
    const [fullPatient, setFullPatient] = useState<boolean>(false);
    const {id: patientId} = useParams();
    const patient = patients[patientId];
    const postEvent = async (
        entry: NewHospitalEntry,
        formikBag: FormikHelpers<NewHospitalEntry>
    ) => {
        formikBag.setStatus({});
        try {
            const resp = await axios.post<Entry>(
                `${apiBaseUrl}/patients/${patientId}/entries`,
                entry
            );
            formikBag.resetForm({
                status: {
                    success: true,
                },
            });
            return resp.data;
        } catch (err) {
            formikBag.setStatus({
                error: true,
            });
            throw err;
        }
    };
    const asyncAddEvent = useAsyncCallback(postEvent);
    useEffect(() => {
        const fetchPatient = async () => {
            if (!patient?.ssn) {
                const {data: fullPatient} = await axios.get<Patient>(
                    `${apiBaseUrl}/patients/${patientId}`
                );
                dispatch(updatePatient(fullPatient));
            } else {
                setFullPatient(true);
            }
        };
        fetchPatient();
    }, [patientId, dispatch, patient]);

    useEffect(() => {
        if (asyncAddEvent.result) {
            dispatch(addEntry(patientId, asyncAddEvent.result));
        }
    }, [dispatch, asyncAddEvent.result, patientId]);

    if (!fullPatient) {
        return <Loader active>Loading patient...</Loader>;
    }
    return (
        <div>
            <h1>{patient.name}
            <span><Icon corner name={iconsByGender[patient.gender]} color="red"/></span>
            </h1>
            <p>{patient.dateOfBirth}</p>
            <p>{patient.ssn}</p>
            <p>{patient.occupation}</p>
            <h3>Entries:</h3>
            <EntryList entryList={patient.entries || []}/>
            <AddEventForm onSubmit={asyncAddEvent.execute}/>
        </div>
    );
};

export default PatientPage;
