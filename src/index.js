import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.js';


ReactDOM.render(
  <App futureDad="Alex" dueDate={new Date(2016, 7 - 1, 22)} />,
  document.getElementById('root'));
