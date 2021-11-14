import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";
import Axios from "axios";

class Arperec extends Component {

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
        const url = "https://finalprojectbackjuansehenao.herokuapp.com/api/arperec"
        const config = {
            method: 'get',
            url: url,
            headers:{
                'base': this.state.base,
                'altura': this.state.altura,
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
                    <h1>Área y Perímetro de un rectángulo</h1>
                    <p>Ingrese la base y la altura para conocer el área y el perímetro del rectángulo</p>
                    <form onSubmit={this.calculate}>
                        <div>
                            <label>Base : </label>
                            <input type="number" required={true} min={1} onChange={e => this.setState({base:e.target.value})}/>
                        </div>
                        <div>
                            <label>Altura : </label>
                            <input type="number" required={true} min={1} onChange={e => this.setState({altura:e.target.value})}/>
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

export default Arperec;
