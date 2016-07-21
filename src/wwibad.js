import { probabilities } from './probabilities';

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export const getLabelsForDueDate = (dueDate) => probabilities.map(point => addDays(
  dueDate,
  point.relativeDay).toLocaleDateString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric',
  })
);

export const getTodaysProbabilityForDueDate = (dueDate) => {
  const todaysData = probabilities.find(pt => pt.relativeDay === (today - dueDate) / 3600 / 24 / 1000);

  if (todaysData && todaysData.prob) {
    return todaysData.prob * 100;
  }

  return 0;
};

export const data = probabilities.map(point => point.prob * 100);
