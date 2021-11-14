import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";
import Axios from "axios";

class Arpertri extends Component {

    constructor() {
        super();
        this.state={
            lado1: 0,
            lado2: 0,
            lado3: 0,
            perimetro: 0,
            area: 0,
        }
        this.calculate=this.calculate.bind(this)
    }

    async calculate(e){
        e.preventDefault()
        const url = "https://finalprojectbackjuansehenao.herokuapp.com/api/arpertri"
        const config = {
            method: 'get',
            url: url,
            headers:{
                'lado1': this.state.lado1,
                'lado2': this.state.lado2,
                'lado3': this.state.lado3,
                'area': this.state.area,
                'perim': this.state.perimetro
            }}

        const response = await Axios(config)

        const data = response.data
        console.log(data)
        this.setState({area:data.area,perimetro:data.perim})
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
                            <label>Lado 3: </label>
                            <input type="number" onChange={e => this.setState({lado3:e.target.value})}/>
                        </div>
                        <button type="submit">Mostrar</button>
                    </form>
                    {this.state.perimetro > -1 && (
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
