import React from "react";
import { Table } from "semantic-ui-react";
import { HospitalEntry } from "../types";
import BaseEvent from "./BaseEvent";

interface Props {
  entry: HospitalEntry;
}

const HospitalEvent: React.FC<Props> = ({ entry }) => {
  return (
    <BaseEvent entry={entry}>
      <Table.Row>
        <Table.Cell>Discharge</Table.Cell>
        <Table.Cell>
          {entry.discharge.date}
          <br />
          {entry.discharge.criteria}
        </Table.Cell>
      </Table.Row>
    </BaseEvent>
  );
};

export default HospitalEvent;
