import React, { Component } from 'react';
import Record from './Record';

class LastRecords extends Component {
  render() {
    return (
      <div className="container">
        <div className="last-records">
          <div className="card">
            <div className="card-header font-weight-bolder">Last Records</div>
            <Record />
            <Record />
            <Record />
            <Record />
          </div>
        </div>
      </div>
    );
  }
}

export default LastRecords;
