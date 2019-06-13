import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numContador: 0
        }
    }
    addUm = () => {
        // NO LUDAR DE ReactDOM.render(<Contador />, document.getElementById('root'));
        this.setState((estadoAnterior) => {
            return ({
                numContador: estadoAnterior.numContador + 1
            })
        })

    }
    subUm = () => {
        // NO LUDAR DE ReactDOM.render(<Contador />, document.getElementById('root'));
        this.setState((estadoAnterior) => {
            return ({
                numContador: estadoAnterior.numContador - 1
            })
        })
    }

    reset = () => {
        // NO LUDAR DE ReactDOM.render(<Contador />, document.getElementById('root'));
        this.setState((estadoAnterior) => {
            return ({ // o esdato.numCont tem ponto pois o num é A PROPRIEDADE DO OBJETO QUE O ESTADO PEGA, NO CASO O PRÓPRIO STATE
                numContador: 0
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.numContador}</h2>
                <button onClick={this.addUm}>+1</button>
                <button onClick={this.subUm}>-1</button>
                <button onClick={this.reset}>Reset</button>
                <p>{this.state.numContador !== 0 ? "Contador iniciado" : "Contador não iniciado"}</p>
            </div>
                )
    }
}
            
ReactDOM.render(<Contador />, document.getElementById('root'));
                
                // If you want your app to work offline and load faster, you can change
                // unregister() to register() below. Note this comes with some pitfalls.
                // Learn more about service workers: https://bit.ly/CRA-PWA
                serviceWorker.unregister();
