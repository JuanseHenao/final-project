import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";

class MainMenu extends Component {
    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Selecciona la funcionalidad que deseas</h1>
                    <div className="buttonC">
                        <Link to="/fibonacci"><button>Fibonacci</button></Link>
                        <Link to="/factorial"><button>Factorial</button></Link>
                        <Link to="/arpertri"><button>Área y Perímetro de un triángulo</button></Link>
                        <Link to="/arpercir"><button>Área y Perímetro de un círculo</button></Link>
                        <Link to="/arperec"><button>Área y Perímetro de un rectángulo</button></Link>
                    </div>
                    <p>Realizado por: Juan Sebastián Henao</p>
                </div>
            </div>
        );
    }
}

export default MainMenu;
