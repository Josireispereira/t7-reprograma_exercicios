import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let contNum = 0;

const nome = {
    primeiroNome: "Jess",
    sobrenome: "Lopes"
}

function verificaNum(contador){
    if(contador == 0){
        return <p>contador não iniciado</p>
    }
    else {
        return <p>contador iniciado</p>
    }
}

setInterval(() => {
    contNum++
    const template =
        <div>
            <h1 className="contador">Cont: {contNum}</h1>
            <h2> oi {nome.primeiroNome + " " + nome.sobrenome}</h2>
            <button>+1</button>
            <button>-1</button>
            <button>reset</button>
            verificaNum(contNum)
        </div>
    ReactDOM.render(template, document.getElementById("root"))

}, 9000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// funcção(parametro que é um objeto){
//     que retorna um jsx
// }