import React, { Component } from 'react';
import Carga from './Carga';
import Modal from './Modal';

class Resultados extends Component {
  constructor() {
    super();
    this.state = {
      carga: true,
      imdbID: ''
    };
    this.tiempoCarga = this.tiempoCarga.bind(this);
    this.obtenerImdbID = this.obtenerImdbID.bind(this);
  }
  tiempoCarga() {
    setTimeout(() => {
      this.props.actualizarCarga(false);
    }, 2000);
  }
  obtenerImdbID(e) {
    const imdbID = e.currentTarget.id;
    this.setState({
      imdbID: imdbID
    })
  }

  render() {
    
    const nResultados = this.props.datos ? this.props.datos.length : 0;
    const t = this.props.carga;
    if(nResultados && t === true){this.tiempoCarga(); console.log(nResultados);}
        const resultados = (this.props.datos !== undefined) ? this.props.datos.map((datos) => {
        return (
          <div className="col-md-3">
            <div className="card mt-3" data-toggle="modal" data-target="#exampleModalCenter" id={ datos.imdbID } onClick={this.obtenerImdbID}>
              <div className="card-body">
                <p>{ datos.Poster }</p>
              </div>
              <div className="card-footer">
                <p>{ datos.Title }</p>
                <p>{ datos.Year }</p>
              </div>
            </div>
          </div>
        )
      }) : null
      console.log(this.state.imdbID);
    return (
      <div className="App">
        <div className={`container ${(this.props.valorBuscado.length === 0) ? 'd-none' : 'd-block'}`}>
          <div className={this.props.carga === false ? 'd-none' : 'd-block'}>
            <Carga />
          </div>
          <div className={`${this.props.carga === false ? 'd-block' : 'd-none'}`}>
              <hr />
              <p>{ nResultados } results for "{ this.props.valorBuscado }"</p>
              <hr />
              <div className="row">{(resultados !== null) ? resultados : 'Not found'}</div>
          </div>
        </div>
        <Modal imdbID={this.state.imdbID} />
      </div>
    );
  }
}

export default Resultados;