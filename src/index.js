import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ResultPage from './ResultPage';
import HomePage from './HomePage';
import { Router, Route, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path=":futureDad/:dueDate/" component={ResultPage} />
  </Router>),
  document.getElementById('root')
);
