import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        <div className="container">
          <form className="col-12 col-md-6">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search movie or serie" aria-label="Search movie or serie" aria-describedby="basic-addon2" autoFocus required />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">Search</button>
              </div>
            </div>
            <div className="row">
              <div className="btn-group btn-group-toggle col-12" data-toggle="buttons">
                <label className="btn btn-secondary col active">
                  <input type="radio" name="filtro" id="movie" autoComplete="off" defaultChecked /> Movie
                </label>
                <label className="btn btn-secondary col">
                  <input type="radio" name="filtro" id="serie" autoComplete="off" /> Serie
                </label>
              </div>
            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default App;
