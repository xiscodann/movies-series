import React, { Component } from 'react';

class Carga extends Component {

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Cargando...
        </button>
      </div>
    );
  }
}

export default Carga;