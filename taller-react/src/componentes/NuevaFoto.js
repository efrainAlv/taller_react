import React from 'react';

const API = "https://jsonplaceholder.typicode.com/photos";

class NuevoAlbum extends React.Component {

    constructor() {

        super();
        this.state = {
            titulo:'',
            url:'',
            miniatura:'',
            id:0
        }

        this.agregarFoto = this.agregarFoto.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(e) {

        const { name, value } = await e.target;
        await this.setState({
            [name]: value
        });

        console.log(this.state);
    }

    agregarFoto(e) {

        var data = this.state;
        fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        e.preventDefault();
    }

    render() {
        return (
            <div className="card card-body bg-info">
                <div className="container">
                    <h2>Agregar foto nueva</h2>

                    <form onSubmit={this.agregarFoto} className="was-validated">
                        <div className="form-group">
                            <label htmlFor="id">ID del album:</label>
                            <input className="form-control" placeholder="Ingrese la URL de la miniatura" type="number" name="id" required onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="uname">Titulo:</label>
                            <input type="text" className="form-control" id="titulo" placeholder="Ingrese el titulo de la foto." name="titulo" required onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">URL:</label>
                            <input type="text" className="form-control" id="url" placeholder="Ingrese la URL de la foto." name="url" required onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="miniatura">URL de la miniatura:</label>
                            <input className="form-control" placeholder="Ingrese la URL de la miniatura" type="text" name="miniatura" required onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        )
    };

}


export default NuevoAlbum;