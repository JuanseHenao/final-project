import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";
import Axios from "axios";

class Factorial extends Component {


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
                <div className="menuC">
                    <h1>Factorial</h1>
                    <p>Ingrese el número del que deseas conocer su factorial</p>
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

export default Factorial;
