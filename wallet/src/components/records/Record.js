import React, { Component } from 'react';

class Record extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between list-group-item-action">
          <div className="last-records__icon">
            <i class="fas fa-utensils text-danger"></i>
          </div>
          <ul className="list-unstyled">
            <li className="font-weight-bold">Food/Drink</li>
            <li class="font-weight-lighter font-italic">Coca cola, bread</li>
          </ul>
          <ul className="list-unstyled">
            <li className="font-weight-bolder text-danger">-7.00 GEL</li>
            <li class="text-muted">1 hour ago</li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Record;
