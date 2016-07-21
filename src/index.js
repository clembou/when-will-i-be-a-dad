import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.js';
import { Router, Route, Link, hashHistory } from 'react-router';



// <App futureDad="Alex" dueDate={new Date(2016, 7 - 1, 22) } />
ReactDOM.render((
  <Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/:futureDad/:dueDate" component={App}/>
    <Route path="*" component={App}/>
  </Route>
</Router>),
  document.getElementById('root'));
