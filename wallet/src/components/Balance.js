import React, { Component } from 'react';

class Balance extends Component {
  state = {
    balance: 1200.0
  };
  render() {
    return (
      <div className="container">
        <div className="balance-container">
          <div className="balance d-flex">
            <div className="balance__icon my-auto mx-3">
              <i class="fas fa-wallet"></i>
            </div>
            <div className="balance__content">
              <p class="balance__text">Ballance</p>
              <p class="balance__amount">GEL {this.state.balance}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
