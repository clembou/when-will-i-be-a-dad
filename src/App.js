import * as React from 'react';
import { PageHeader } from 'react-bootstrap';
import Graph from './Graph';
import { data, getTodaysProbabilityForDueDate, getLabelsForDueDate } from './wwibad';

export default (props) => (
  <div className="container">
    <PageHeader>#when-will-{props.futureDad}-be-a-dad</PageHeader>
    <h1>Hello, {props.futureDad}!</h1>
    <h3>There is a <strong>{getTodaysProbabilityForDueDate(props.dueDate)} %</strong> chance you will be a dad today!</h3>
    <Graph
      seriesTitle="When will I be a dad?"
      labels={getLabelsForDueDate(props.dueDate)}
      data={data}
    />
  </div>
);
