import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faUsers,
  faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';

import './App.css';

library.add(faPlus, faUsers, faArrowAltCircleRight);

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
