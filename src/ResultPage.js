import * as React from 'react';
import moment from 'moment';
import { PageHeader, Button } from 'react-bootstrap';
import Graph from './Graph';
import { today, data, cumulativeData, getTodaysConditionalProbabilityForDueDate, getLabelsForDueDate } from './wwibad';

const makeTweetLink = (text, hashtags) => {
  return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) +
  '&hashtags=' + encodeURIComponent(hashtags) + '&url=' + encodeURIComponent(window.location.href);
}

export default (props) => {
  if (!props.params.dueDate || !props.params.futureDad) {
    return null;
  }

  const dueDate = moment(props.params.dueDate).startOf('day');
  const todaysProbability = getTodaysConditionalProbabilityForDueDate(dueDate);
  let pageBody;

  if (today.diff(dueDate, 'days') < -35) {
    pageBody = <h3>We can't give you estimates yet! chances are you won't be a dad today... Come back on {dueDate.clone().add(-35, 'days').format('LL')}</h3>
  } else if (today.diff(dueDate, 'days') > 21) {
    pageBody = <h3>We can't give you estimates any more! chances are you are already a dad...</h3>
  } else {
    pageBody = (
      <div>
        <h3>There is a <strong>{getTodaysConditionalProbabilityForDueDate(dueDate).toFixed(1)} %</strong> chance you will be a dad today!</h3>
        <Button href={makeTweetLink(`I have ${todaysProbability.toFixed(1)} chances of becoming a dad today!`, "when-will-i-be-a-dad")}>
          <i className="fa fa-twitter" aria-hidden="true"></i> Tweet it!
        </Button>
        <br />
        <Graph
          seriesTitle="Probability of being a dad"
          labels={getLabelsForDueDate(dueDate)}
          data={data}
          cumulativeData={cumulativeData}
        />
      </div>
    )
  }

  return (
    <div className="container">
      <PageHeader>#when-will-{props.params.futureDad}-be-a-dad</PageHeader>
      <h1>Hello, {props.params.futureDad}!</h1>
      {pageBody}
    </div>
  );
};

