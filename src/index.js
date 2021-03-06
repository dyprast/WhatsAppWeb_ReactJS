import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';
import Main from './screens/Main';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/whatsapp">
          <Main />
        </Route>
      </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
