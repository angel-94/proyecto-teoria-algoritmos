import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import HomeTemplate from './templates/HomeTemplate';
import Home from './components/Home';

import Afd from './templates/AfdTemplate';
import Entradas from './components/Entradas';

// Render the main component into the dom
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomeTemplate}>
      <Route path="home" component={Home}/>
    </Route>
    <Route path="/afd" component={Afd}>
      <Route path="entradas" component={Entradas}/>
    </Route>
  </Router>, document.getElementById('app'));
