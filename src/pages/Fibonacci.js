import React, {Component} from "react";
import '../assets/css/MainMenu.css';
import {Link} from "react-router-dom";
import Axios from "axios";

class Fibonacci extends Component {

    constructor() {
        super();
        this.state ={
            nums:[],
            cantidad: 0,
        }
        this.calculate=this.calculate.bind(this)
    }

    async calculate(e) {
        e.preventDefault()
        const url = 'https://finalprojectbackjuansehenao.herokuapp.com/api/fibonacci'

        const config = {
            method: 'get',
            url: url,
            headers:{
                'cantidad':this.state.cantidad
            }
        };

        const response = await Axios(config)

        const data = response.data.nums
        console.log(response)
        this.setState({
            nums:
                data.map((i)=>
                    <li className="numsLi">{i}</li>
                )

        })
    }
    render() {
        return (
            <div className="container">
                <div className="fiboC">
                    <h1>Fibonacci</h1>
                    <p>Ingrese la cantidad de números de la serie de Fibonacci que quiere ver</p>
                    <form onSubmit={this.calculate}>
                        <input type="number" required={true} min={1} onChange={e => this.setState({cantidad:e.target.value})}/>
                        <button className="butf">Mostrar</button>
                    </form>
                    {this.state.nums.length > 0
                    &&(
                        <div className="numsC">
                            <ul>{this.state.nums}</ul>
                        </div>
                    )}
                    <Link to="/"><button className="backb">Volver al Menu</button></Link>
                </div>
            </div>
        );
    }
}

export default Fibonacci;
