import React, { Component } from 'react';
import Axios from 'axios';
import Carga from './Carga';
import Modal from './Modal';

class Resultados extends Component {
  baseUrl = 'http://www.omdbapi.com';
  apikey = 'apikey=edce8fb8';
  constructor(props) {
    super(props);
    this.state = {
      datos:[],
      carga: true
    };
    this.tiempoCarga = this.tiempoCarga.bind(this);
    this.obtenerImdbID = this.obtenerImdbID.bind(this);
  }
 
  tiempoCarga() {
    setTimeout(() => {
      this.props.actualizarCarga(false);
    }, 1500);
  }
  obtenerImdbID(e) {
    const imdbID = e.currentTarget.id;
    Axios.get(`${this.baseUrl}/?i=${imdbID}&${this.apikey}`)
      .then(res => {
        this.setState({
        datos: res.data
      })
    })
  }

  render() {

    const nResultados = this.props.datos ? this.props.datos.length : 0;
    const t = this.props.carga;
    if(nResultados && t === true){this.tiempoCarga();}
        const resultados = (this.props.datos !== undefined) ? this.props.datos.map((datos) => {
        return (
          <div className="col-md-3">
            <div className="card mt-3" data-toggle="modal" data-target="#modal-resultado" id={ datos.imdbID } onClick={this.obtenerImdbID}>
              <div className="card-body p-0">
                <img className="w-100" src={ datos.Poster } alt={ datos.Title } />
              </div>
              <div className="card-footer text-center text-white p-2">
                <div>
                  <p className="m-1">{ datos.Title }</p>
                  <p><span>{ datos.Year }</span></p>
                </div>
              </div>
            </div>
          </div>
        )
      }) : null
    return (
      <div className="App">
        <div className={`container ${(this.props.valorBuscado.length === 0) ? 'd-none' : 'd-block'}`}>
          <div className={this.props.carga === false ? 'd-none' : 'd-block'}>
            <Carga />
          </div>
          <div className={`${this.props.carga === false ? 'd-block' : 'd-none'}`}>
              <hr />
              <p className="mensaje-nResultados"><span>{ nResultados }</span> results for "{ this.props.valorBuscado }"</p>
              <hr />
              <div className="row text-center mensaje-resultado">{(resultados !== null) ? resultados : 'Not found'}</div>
              <div className={`text-center mt-5 mb-5 ${(resultados !== null) ? 'd-block' : 'd-none'}`}>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><button className="page-link">1</button></li>
                    <li className="page-item"><button className="page-link">2</button></li>
                    <li className="page-item"><button className="page-link">3</button></li>
                  </ul>
                </nav>
              </div>
          </div>
        </div>
        <Modal imdbID={this.state.datos} />
        
      </div>
    );
  }
}

export default Resultados;