import React, { Component } from 'react';

import Foto from './Foto';

import NavBar from './NavBar'

class Album extends Component {

    constructor() {

        super();

        this.state = {

            albums: [],
            fotos: [],
            numeroAlbum: 0

        }


        this.buscarAlbum = this.buscarAlbum.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    async componentDidMount() {

        await fetch('https://jsonplaceholder.typicode.com/albums?userId=' + this.props.match.params.idUsuario)
            .then((response) => response.json())
            .then((json) => { this.setState({ albums: json }) });

        //console.log(this.state.albums);
    }


    async buscarAlbum(id) {

        //console.log(id)

        await fetch('https://jsonplaceholder.typicode.com/albums/' + id + '/photos')
            .then((response) => response.json())
            .then((json) => { this.setState({ fotos: json }) });


    }


    async handleChange(e) {

        const { name, value } = await e.target;
        await this.setState({
            [name]: value
        });

        console.log(this.state);
    }


    render() {
        return (
            <div>

                <NavBar></NavBar>

                <br></br>

                <div className="row">
                    <div className="dropdown">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Seleccione un album
                        </button>
                        <div className="dropdown-menu">
                            {
                                this.state.albums.map((album, i) => {
                                    return (
                                        <div key={i} value={album.id} className="dropdown-item" onClick={() => this.buscarAlbum(album.id)}> { album.id} - {album.title}</div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="btn btn-danger" onClick={() => this.setState({ fotos: [] })}>
                        LIMPIAR
                    </div>
                    
                </div>

                {
                    this.state.fotos.map((foto, i) => {
                        return (
                            <div key={i} className="card-deck">
                                <Foto url={foto.url} title={foto.title}></Foto>
                            </div>
                        )
                    })
                }

            </div>
        )
    };

}


export default Album;