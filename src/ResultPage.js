import * as React from 'react';
import moment from 'moment';
import { PageHeader } from 'react-bootstrap';
import Graph from './Graph';
import { data, cumulativeData, getTodaysConditionalProbabilityForDueDate, getLabelsForDueDate } from './wwibad';

export default (props) => {
  if (!props.params.dueDate || !props.params.futureDad) {
    return null;
  }

  const dueDate = moment(props.params.dueDate).startOf('day');

  return (
    <div className="container">
      <PageHeader>#when-will-{props.params.futureDad}-be-a-dad</PageHeader>
      <h1>Hello, {props.params.futureDad}!</h1>
      <h3>There is a <strong>{getTodaysConditionalProbabilityForDueDate(dueDate).toFixed(1)} %</strong> chance you will be a dad today!</h3>
      <Graph
        seriesTitle="Probability of being a dad"
        labels={getLabelsForDueDate(dueDate)}
        data={data}
        cumulativeData={cumulativeData}
      />
    </div>
  );
};

