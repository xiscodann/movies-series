import React, { Component } from 'react';


class Modal extends Component {

    render(){
        const imdbRating = Math.round((this.props.imdbID.imdbRating / 2));
            
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body row">
                            <div className="d-flex justify-content-center">
                            <div className="col-5 contenedor-poster-modal">
                                <img className="poster-modal" alt={this.props.imdbID.Title} src={ this.props.imdbID.Poster } />
                            </div>
                            <div className="col-10 col-md-7">
                                <div>
                                    <p className="modal-titulo">{this.props.imdbID.Title}</p>
                                    <p className="modal-año">{this.props.imdbID.Year}</p>
                                    <div>
                                        <span className={`fa fa-star ${(imdbRating === 1 || imdbRating === 2 || imdbRating === 3 || imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span className={`fa fa-star ${(imdbRating === 2 || imdbRating === 3 || imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span className={`fa fa-star ${(imdbRating === 3 || imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span className={`fa fa-star ${(imdbRating === 4 || imdbRating === 5) ? 'checked' : null}`}></span>
                                        <span className={`fa fa-star ${(imdbRating === 5) ? 'checked' : null}`}></span>
                                    </div>
                                    <span className="badge badge-pill badge-dark ml-2">
                                        {this.props.imdbID.Genre}
                                    </span>
                                    <p className="modal-actores">{ this.props.imdbID.Actors }</p>
                                </div>
                                <div><p className="modal-reseña">{ this.props.imdbID.Plot }</p></div>
                                <div className="modal-cerrar"><button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;