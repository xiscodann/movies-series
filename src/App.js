import React, { Component } from 'react';
import './App.css';

import Busqueda from './components/Busqueda';

class App extends Component {
  render() {
    return (
      <div className="App">


        <div className="container">
          <Busqueda />
        </div>


      </div>
    );
  }
}

export default App;
