import React, { Component } from 'react';
import Axios from 'axios';

class Busqueda extends Component {
  baseUrl = 'http://www.omdbapi.com';
  apikey = 'apikey=edce8fb8';

  constructor() {
    super();
    this.state = {
      datos: [],
      titulo: '',
      tipo: 'movie'
    };
    this.validarCaracteres = this.validarCaracteres.bind(this);
    this.validarTipo = this.validarTipo.bind(this);
  }

  omdbAPI() {
    console.log(this.state.titulo);
    console.log(this.state.tipo);
    Axios.get(`${this.baseUrl}/?t=${this.state.titulo}&type=${this.state.tipo}&${this.apikey}`)
    .then(res => {
      console.log(res.data);
      this.setState({
        datos: res.data
      })
    })
  }
  validarCaracteres(e) {
    const { value } = e.target;
    if(value.length >= 3) {
       this.setState({
        titulo: e.target.value,
      }, () => {
        this.omdbAPI();
      });
    }
  }
  validarTipo(e) {
    const tipo = e.target.id;
    this.setState({
      tipo: tipo
    }, () => {
      this.omdbAPI();
    });
    
  }

  render() {
    return (
      <div className="App">


        <div className="container">
          <form className="col-12 col-md-6">
            <div className="input-group mb-3">
              <input type="text" name="busqueda" className="form-control" placeholder="Search movie or serie" aria-label="Search movie or serie" aria-describedby="basic-addon2" onChange={ this.validarCaracteres } required />
            </div>
            <div className="row">
              <div className="btn-group btn-group-toggle col-12">
                <label className="btn btn-secondary col">
                  <input type="radio" name="filtro" id="movie" onClick={ this.validarTipo } /> Movie
                </label>
                <label className="btn btn-secondary col" >
                  <input type="radio" name="filtro" id="serie" onClick={ this.validarTipo } /> Serie
                </label>
              </div>
            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default Busqueda;
