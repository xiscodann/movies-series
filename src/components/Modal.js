import React, { Component } from 'react';
import Axios from 'axios';

class Modal extends Component {
    baseUrl = 'http://www.omdbapi.com';
    apikey = 'apikey=edce8fb8';

    constructor() {
        super();
        this.state = {
            datos: []
        }
    }
    obtenerDatos(id) {
        Axios.get(`${this.baseUrl}/?i=${id}&${this.apikey}`)
        .then(res => {
        this.setState({
            datos: res.data
        })
        })
    }
    render(){
        this.obtenerDatos(this.props.imdbID);
        const imdbRating = Math.round((this.state.datos.imdbRating / 2));
    
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body row">
                            <div className="col-5">
                                <img className="poster-modal" alt={this.state.datos.Title} src={ this.state.datos.Poster } />
                            </div>
                            <div className="col-7">
                                <div>
                                    <p>{this.state.datos.Title}</p>
                                    <p>{this.state.datos.Year}</p>
                                    <div class="star-rating">
                                        <span class={`fa fa-star ${(imdbRating === 1 || imdbRating === 2 || imdbRating === 3 || imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span class={`fa fa-star ${(imdbRating === 2 || imdbRating === 3 || imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span class={`fa fa-star ${(imdbRating === 3 || imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span class={`fa fa-star ${(imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span class={`fa fa-star ${(imdbRating === 5) ? 'checked' : null}`}></span>
                                    </div>
                                    <span className="badge badge-pill badge-dark ml-2">
                                        {this.state.datos.Genre}
                                    </span>
                                    <p>{ this.state.datos.Actors }</p>
                                </div>
                                <div><p>{ this.state.datos.Plot }</p></div>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal