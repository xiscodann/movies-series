import React, { Component } from 'react';
import Carga from './Carga';
class Resultados extends Component {
  constructor() {
    super();
    this.state = {
      datos: [],
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
    if(nResultados){this.tiempoCarga();}

        const resultados = (this.props.datos !== undefined) ? this.props.datos.map((data, i) => {
        return (
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-body">
                <p>{ data.Poster }</p>
              </div>
              <div className="card-footer">
                <p>{ data.Title }</p>
                <p>{ data.Year }</p>
              </div>
            </div>
          </div>
        )
      }) : null

    return (
      <div className="App">
        <div className={this.props.carga === false ? 'd-none' : 'd-block'}>
          <Carga />
        </div>
        <div className={`container ${this.props.carga === false ? 'd-block' : 'd-none'}`}>
            <hr />
            <p>{ nResultados } results for "Batman"</p>
            <hr />
            <div></div>
        </div>
        <div>{resultados}</div>

      </div>
    );
  }
}

export default Resultados;