import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";

class Fibonacci extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Fibonacci</h1>
                    <p>Ingrese la cantidad de números de la serie de Fibonacci que quiere ver</p>
                    <form>
                        <input type="number"/>
                        <button>Mostrar</button>
                    </form>
                    <h4>Aquí ira el resultado</h4>
                    <Link to="/"><button>Volver al Menu</button></Link>
                </div>
            </div>
        );
    }
}

export default Fibonacci;
