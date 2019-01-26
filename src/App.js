import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';

import Resultados from './components/Resultados';

class App extends Component {
  baseUrl = 'http://www.omdbapi.com';
  apikey = 'apikey=edce8fb8';

  constructor() {
    super();
    this.state = {
      datos: [],
      titulo: '',
      tipo: 'movie',
      carga: false,
      reposicion: false
    };
    this.validarCaracteres = this.validarCaracteres.bind(this);
    this.validarTipo = this.validarTipo.bind(this);
    this.actualizarCarga = this.actualizarCarga.bind(this);
  }

  omdbAPI() {
    console.log(this.state.titulo);
    console.log(this.state.tipo);
    Axios.get(`${this.baseUrl}/?s=${this.state.titulo}&type=${this.state.tipo}&${this.apikey}`)
    .then(res => {
      console.log(res.data.Search);
      this.setState({
        datos: res.data.Search
      })
    })
  }
  validarCaracteres(e) {
    const { value } = e.target;
    if(value.length >= 3) {
       this.setState({
        titulo: e.target.value,
        carga: true,
        reposicion: true
      }, () => {
        this.omdbAPI();
      });
    }
    if(value.length === 0) {
      this.setState({
        titulo: '',
        reposicion: false
      })
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
  actualizarCarga(data){
    this.setState({
      carga: data
    })
  }
  
  render() {
    return (
      <div className="App">


        <div className="container">
          <form className={`col-12 col-md-6 ${(this.state.reposicion === true) ? 'reposicionamientoIn' : 'reposicionamientoOut'}`}>
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
        
        <Resultados datos={this.state.datos} carga={this.state.carga} valorBuscado={this.state.titulo} actualizarCarga={this.actualizarCarga} />
      </div>
    );
  }
}

export default App;
