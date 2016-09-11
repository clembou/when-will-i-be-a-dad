import moment from 'moment';
import { probabilities } from './probabilities';

export const data = probabilities.map(point => point.prob * 100);

export let cumulativeData = [];
data.reduce((a, b, i) => { return cumulativeData[i] = a + b; },0);

const today = moment().startOf('day');

export const getLabelsForDueDate = (dueDate) => probabilities.map(point => dueDate
  .clone()
  .add(point.relativeDay, 'days')
  .format('DD MMM')
);

export const getTodaysProbabilityForDueDate = (dueDate) => {
  const todaysData = probabilities.find(pt => pt.relativeDay === today.diff(dueDate, 'days'));

  if (todaysData && todaysData.prob) {
    return todaysData.prob * 100;
  }

  return 0;
};

export const getTodaysConditionalProbabilityForDueDate = (dueDate) => {
  const pastProbability = probabilities
    .filter(pt => pt.relativeDay < today.diff(dueDate, 'days'))
    .map(p => p.prob)
    .reduce((a, b) => a + b);

  const todaysProbability = getTodaysProbabilityForDueDate(today);

  return todaysProbability / (1.0 - pastProbability);
};
