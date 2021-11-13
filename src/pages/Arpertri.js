import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";

class Arpertri extends Component {

    constructor() {
        super();
        this.state={
            lado1: 0,
            lado2: 0,
            altura: 0,
            base: 0,
            perimetro: 0,
            area: 0,
        }
    }

    calculate(e){
        e.preventDefault()
        const url = "localhost:5000/api/arpertri"
        const config = {
            method: 'get',
            url: url,
            headers:{
                'base': this.state.base,
                'altura': this.state.altura,
                'lado1': this.state.lado1,
                'lado2': this.state.lado2,
                'area': this.state.area,
                'perimetro': this.state.perimetro
            }}
    }

    render() {
        return (
            <div className="container">
                <div className="menuC">
                    <h1>Área y Perímetro de un triángulo</h1>
                    <p>Ingrese los lados y la base para conocer el área y el perímetro del triángulo</p>
                    <form onSubmit={this.calculate}>
                        <div>
                            <label>Lado 1: </label>
                            <input type="number" onChange={e => this.setState({lado1:e.target.value})}/>
                        </div>
                        <div>
                            <label>Lado 2: </label>
                            <input type="number" onChange={e => this.setState({lado2:e.target.value})}/>
                        </div>
                        <div>
                            <label>Base: </label>
                            <input type="number" onChange={e => this.setState({base:e.target.value})}/>
                        </div>
                        <div>
                            <label>Altura: </label>
                            <input type="number" onChange={e => this.setState({altura:e.target.value})}/>
                        </div>
                        <button type="submit">Mostrar</button>
                    </form>
                    {this.state.perimetro > 0 && (
                            <div>
                                <h4>Perímetro: {this.state.perimetro}</h4>
                                <h4>Área: {this.state.area}</h4>
                            </div>
                    )}

                    <Link to="/"><button>Volver al Menu</button></Link>
                </div>
            </div>
        );
    }
}

export default Arpertri;
