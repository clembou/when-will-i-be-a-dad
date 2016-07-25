import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ResultPage from './ResultPage';
import HomePage from './HomePage';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}>
      <Route path="/:futureDad/:dueDate/" component={ResultPage} />
      <Route path="*" component={HomePage} />
    </Route>
  </Router>),
  document.getElementById('root')
);
