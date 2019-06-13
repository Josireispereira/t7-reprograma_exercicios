import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            frase: "Vocês são maravilhosas!"
        }
    }

    AlteraFrase
    render() {
        return (
            < Altera
            btn="Mostrar frase"
            // frase="Vocês são maravilhosas!"
        />
        )
    }
}

class Altera extends React.Component{
    render() {
        return (
            <div>
                <h1>Esconde-Aparece</h1>
                <button>{this.props.btn}</button> //onclick
                <p className="frase">{this.props.frase}</p>
            </div >
        )
    }
}

ReactDOM.render(< Container />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
