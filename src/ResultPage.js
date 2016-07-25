import * as React from 'react';
import { PageHeader } from 'react-bootstrap';
import Graph from './Graph';
import { data, getTodaysProbabilityForDueDate, getLabelsForDueDate } from './wwibad';

export default (props) => {
  if (!props.params.dueDate || !props.params.futureDad) {
    return null;
  }
  let dueDate = new Date(props.params.dueDate);
  dueDate = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
  return (
    <div className="container">
      <PageHeader>#when-will-{props.params.futureDad}-be-a-dad</PageHeader>
      <h1>Hello, {props.params.futureDad}!</h1>
      <h3>There is a <strong>{getTodaysProbabilityForDueDate(dueDate)} %</strong> chance you will be a dad today!</h3>
      <Graph
        seriesTitle="When will I be a dad?"
        labels={getLabelsForDueDate(dueDate)}
        data={data}
      />
    </div>
  );
};

