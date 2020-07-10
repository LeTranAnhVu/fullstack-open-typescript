import React, {FC} from "react";
import {Entry} from "../types";
import {Accordion, List, Table} from "semantic-ui-react";
import Diagnoses from "./Diagnoses";
import HealthCheckEvent from "./HealthCheckEvent";
import HospitalEvent from "./HospitalEvent";
import OccupationalHealthcareEvent from "./OccupationalHealthcareEvent";
import {assertNever} from "../utils";

type Props = {
    entry: Entry
}
const EntryDetail: FC<Props> = ({entry}) => {
    switch (entry.type) {
        case "HealthCheck":
            return <HealthCheckEvent entry={entry}/>;
        case "Hospital":
            return <HospitalEvent entry={entry}/>;
        case "OccupationalHealthcare":
            return <OccupationalHealthcareEvent entry={entry} />;
        default:
            return assertNever(entry);
    }
};

export default EntryDetail;