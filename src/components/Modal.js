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
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal