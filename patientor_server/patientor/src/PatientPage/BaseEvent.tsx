import React, { useContext } from "react";
import { Table, List, Icon, Accordion } from "semantic-ui-react";
import { Entry } from "../types";
import Diagnoses from "./Diagnoses";

interface Props {
  entry: Entry;
}

const BaseEvent: React.FC<Props> = ({ entry, children }) => {
  return (
    <>
      <Accordion.Title
      >
        <Icon name="dropdown" />
        <List horizontal relaxed="very">
          <List.Item>{entry.date}</List.Item>
          <List.Item>{entry.type}</List.Item>
        </List>
      </Accordion.Title>
      <Accordion.Content>
        <Table compact definition singleLine>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>Description</Table.Cell>
              <Table.Cell>{entry.description}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Specialist</Table.Cell>
              <Table.Cell>{entry.specialist}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Diagnoses</Table.Cell>
              <Table.Cell>
                <Diagnoses codes={entry.diagnosisCodes || []} />
              </Table.Cell>
            </Table.Row>
            {children}
          </Table.Body>
        </Table>
      </Accordion.Content>
    </>
  );
};

export default BaseEvent;
