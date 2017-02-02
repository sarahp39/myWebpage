import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App'; //import our component

//can load other CSS files (e.g,. Bootstrap) here

//load our CSS file
import './index.css';

//render the Application view
ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = '/'component = './App'>
    </Route>
  </Router>,
  document.getElementbyID('root')

);
