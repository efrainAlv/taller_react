
import React, { useState, useEffect } from 'react';

var tiempo;

function NavBar() {


    const [reloj, setReloj] = useState(true);
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador

        if (typeof (Storage) != undefined) {
            var correo = localStorage.getItem('correo');
            var id = localStorage.getItem('id');

            if (correo == null || id == null) {
                window.location.replace("/login");
            }

        }
        else {
            window.location.replace("/login");
        }

        if (reloj) {
            tiempo = setInterval(() => { setHora(new Date().toLocaleTimeString()) }, 1000);
        } else {
            clearInterval(tiempo);
        }


    });

    return (
        <div>

            <nav className="navbar navbar-expand-sm bg-warning navbar-dark">

                <div className="col-9" style={{ float: "right" }}>
                    <button className="btn btn-success" type="button" style={{ float: "left" }} onClick={() => { setReloj(!reloj) }} >
                        {
                            reloj &&
                            "Ocultar reloj"
                        }
                        {
                            !reloj &&
                            "Mostrar reloj"
                        }
                    </button>
                    {
                        reloj &&

                        <div className="nav-link" style={{ float: "left" }}>
                            <h5>{hora}</h5>
                        </div>

                    }
                </div>

                <div className="col-3">
                    <div className="col nav-item">
                        <button className="btn btn-info" onClick={() => localStorage.removeItem('correo')} style={{ color: "black" }}>CERRAR SESION</button>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default NavBar;