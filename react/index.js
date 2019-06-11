import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// função(parametro que é um objeto){
//     que retorna um jsx}

function BemVinda(props){
    console.log(props)
    return (
        <div>
        <h1>Oi, {props.apelido}</h1>
        <h2>{props.saudacao}</h2>
        </div>
        )
}

function Chamar (){
        <div>
    <bemVinda />
    </div>
}

ReactDOM.render(< BemVinda 
    apelido="Mellina"
    idade="20"
    saudacao="heeey"
    signo="gêmeos"/>, document.getElementById('caixa'))