import React, { Component } from 'react';
import Carga from './Carga';
class Resultados extends Component {
  constructor() {
    super();
    this.state = {
      carga: true
    };
    this.tiempoCarga = this.tiempoCarga.bind(this);
  }
  tiempoCarga() {
    setTimeout(() => {
      this.props.actualizarCarga(false);
    }, 2000);
  }

  render() {
   
    const nResultados = this.props.datos ? this.props.datos.length : 0;
    if(nResultados){this.tiempoCarga()}
    return (
      <div className="App">
        <div className={this.props.carga === false ? 'd-none' : 'd-block'}>
          <Carga />
        </div>
        <div className={`container ${this.props.carga === false ? 'd-block' : 'd-none'}`}>
            <hr />
            <p>{ nResultados } results for "Batman"</p>
            <hr />
        </div>


      </div>
    );
  }
}

export default Resultados;