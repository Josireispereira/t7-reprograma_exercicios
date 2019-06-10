import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let contNum = 0;
const nome = {
    primeiroNome: "Jess",
    sobrenome: "Lopes"
}

function nomeComp(nome){
    if(nome){    
        return nome.primeiroNome + " " + nome.sobrenome;} 
    else{
        return "desconhecida"}
}

const template = 
<div>
    <h1 className="contador">Cont: {contNum}</h1>
    <h2>oi, {nomeComp(nome)}</h2>
    <button>+1</button>
    <button>-1</button>
    <button>reset</button>
</div>
ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
