import React, { Component } from 'react';

class Carga extends Component {

  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-center">
          <div className="algin-self-center carga-p">
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              <p>Loading</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Carga;