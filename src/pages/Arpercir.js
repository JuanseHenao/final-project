import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";
import Axios from "axios";

class Arpercir extends Component {

    constructor() {
        super();
        this.state={
            radio: 0,
            perimetro: 0,
            area: 0,
        }
        this.calculate=this.calculate.bind(this)
    }

    async calculate(e){
        e.preventDefault()
        const url = "https://finalprojectbackjuansehenao.herokuapp.com/api/arpercir"
        const config = {
            method: 'get',
            url: url,
            headers:{
                'radio': this.state.radio,
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
                <div className="triC">
                    <h1>Área y Perímetro de un círculo</h1>
                    <p>Ingrese el radio para conocer el área y el perímetro del círculo</p>
                    <form onSubmit={this.calculate}>
                        <div>
                            <label>Radio: </label>
                            <input type="number" step={0.1} min={1} required={true} onChange={e => this.setState({radio:e.target.value})}/>
                        </div>
                        <button type="submit">Mostrar</button>
                    </form>
                    {this.state.perimetro >= 0 && (
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

export default Arpercir;
