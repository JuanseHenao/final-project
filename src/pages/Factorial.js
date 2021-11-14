import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";
import Axios from "axios";

class Factorial extends Component {


    constructor() {
        super();
        this.state={
            numero: 0,
            fact: 0,
        }
        this.calculate=this.calculate.bind(this)
    }

    async calculate(e){
        e.preventDefault()
        const url = "https://finalprojectbackjuansehenao.herokuapp.com/api/factorial"
        const config = {
            method: 'get',
            url: url,
            headers:{
                'numero': this.state.numero,
                'fact': this.state.fact
            }}

        const response = await Axios(config)

        const data = response.data
        console.log(data)
        this.setState({fact:data.fact})
    }

    render() {
        return (
            <div className="container">
                <div className="fiboC">
                    <h1>Factorial</h1>
                    <p>Ingrese el número del que deseas conocer su factorial</p>
                    <form onSubmit={this.calculate}>
                        <input type="number" max={170} required={true} min={0} onChange={e => this.setState({numero:e.target.value})}/>
                        <button type="submit" className="butf">Mostrar</button>
                    </form>
                    {this.state.fact >= 0 && (
                        <div>
                            <h4>Resultado: {this.state.fact}</h4>
                        </div>
                    )}
                    <Link to="/"><button className="backb">Volver al Menu</button></Link>
                </div>
            </div>
        );
    }
}

export default Factorial;
