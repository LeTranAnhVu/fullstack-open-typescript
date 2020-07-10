import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Header, Loader, Icon, SemanticICONS, Label} from "semantic-ui-react";
import axios from "axios";
import {apiBaseUrl} from "../constants";
import {useStateValue} from "../state";
import {Patient, Gender} from "../types";
import {updatePatient} from "../state/actions";

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
        </div>
    );
};

export default PatientPage;
