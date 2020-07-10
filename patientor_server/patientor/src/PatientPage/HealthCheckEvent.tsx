import React from "react";
import { Table } from "semantic-ui-react";
import { HealthCheckEntry, HealthCheckRating } from "../types";
import BaseEvent from "./BaseEvent";

interface Props {
  entry: HealthCheckEntry;
}

type TableCellType = "warning" | "positive" | "negative";

const ratingToColor: Record<HealthCheckRating, TableCellType> = {
  [HealthCheckRating.Healthy]: "positive",
  [HealthCheckRating.LowRisk]: "positive",
  [HealthCheckRating.HighRisk]: "warning",
  [HealthCheckRating.CriticalRisk]: "negative",
};

const HealthCheckEvent: React.FC<Props> = ({ entry }) => {
  return (
    <BaseEvent entry={entry}>
      <Table.Row>
        <Table.Cell>Health Check Rating</Table.Cell>
        <Table.Cell {...{ [ratingToColor[entry.healthCheckRating]]: true }}>
          {HealthCheckRating[entry.healthCheckRating]}
        </Table.Cell>
      </Table.Row>
    </BaseEvent>
  );
};

export default HealthCheckEvent;
