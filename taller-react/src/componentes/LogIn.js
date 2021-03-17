import React, { Component } from 'react';


const API = "https://jsonplaceholder.typicode.com/users"

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            correo: '',
            tipoAlerta: '',
            usuario: [],
            usuarios: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => { this.setState({ usuarios: json }); console.log(json) });

    }

    async login(e) {


        await fetch(API + "?email=" + this.state.correo)
            .then((response) => response.json())
            .then((json) => {

                this.setState({ usuario: json }, () => {
                    if (this.state.usuario.length === 0) {
                        this.setState({ tipoAlerta: "alert-danger" })
                    }
                    else {

                        if (typeof (Storage) != undefined) {
                            localStorage.setItem('correo', this.state.usuario[0].email);
                            localStorage.setItem('id', this.state.usuario[0].id);

                            window.location.replace("/Inicio/" + localStorage.getItem('id'));
                        }

                    }
                })


            });

        console.log(this.state.usuario);
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

            <div className="container" >
                <h2 style={{ color: "white" }} >INICIAR SESION</h2>
                <p style={{ color: "white" }} >Ingrese a la plataforma para obtener acceso a sus fotos</p>

                {
                    this.state.tipoAlerta === "alert-danger" &&
                    <div className={"alert " + this.state.tipoAlerta}>
                        <div>
                            <strong>Error!</strong> La direccion de correo electronico ingresada no existe.
                        </div>
                    </div>
                }


                <div className="form-group">
                    <label htmlFor="alias" style={{ color: "white" }}>CORREO</label>
                    <input type="email" className="form-control" id="correo" name="correo" onChange={this.handleChange} placeholder="Ingrese su direccion de correo electronico." />
                </div>
                <input type="button" className="btn btn-primary" value="INGRESAR" onClick={this.login} />

                <br></br>
                <u>
                    {
                        this.state.usuarios.map((usuario, i) => {
                            return (
                                <li key={i} style={{ color: "white" }} onClick={() => {document.getElementById("correo").value = usuario.email; this.setState({correo:usuario.email})} }>
                                    { usuario.name}
                                </li>
                            )
                        })
                    }
                </u>

            </div>

        );
    }
}

export default LogIn;