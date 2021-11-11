import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";

class Arpertri extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Área y Perímetro de un triángulo</h1>
                    <p>Ingrese los lados y la base para conocer el área y el perímetro del triángulo</p>
                    <form>
                        <div>
                            <label>Lado 1: </label>
                            <input type="number"/>
                        </div>
                        <div>
                            <label>Lado 2: </label>
                            <input type="number"/>
                        </div>
                        <div>
                            <label>Base: </label>
                            <input type="number"/>
                        </div>
                        <div>
                            <label>Altura: </label>
                            <input type="number"/>
                        </div>
                        <button>Mostrar</button>
                    </form>
                    <h4>Perímetro:</h4>
                    <h4>Área:</h4>
                    <Link to="/"><button>Volver al Menu</button></Link>
                </div>
            </div>
        );
    }
}

export default Arpertri;
