import React, { Component } from 'react';
import Carga from './Carga';
class Resultados extends Component {
  constructor() {
    super();
    this.state = {
      carga: true
    };
  }

  render() {
   const nResultados = this.props.datos ? this.props.datos.length : 0;
   if(nResultados){
    setTimeout(function(){
      this.setState({
        carga: false
      });
    }, 2000);
   }
    return (
      <div className="App">
        <div className={this.state.carga === true ? 'd-block' : 'd-none'}>
          <Carga />
        </div>
        <div className={`container d-none`}>
            <hr />
            <p>{ nResultados } results for "Batman"</p>
            <hr />
        </div>


      </div>
    );
  }
}

export default Resultados;