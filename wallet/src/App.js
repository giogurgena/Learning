import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap';
import $ from 'jquery';

import Header from './components/layout/Header';
import Balance from './components/Balance';
import LastRecords from './components/records/LastRecords';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './sass/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Wallet" />
        <Balance />
        <LastRecords />
      </div>
    );
  }
}

export default App;
