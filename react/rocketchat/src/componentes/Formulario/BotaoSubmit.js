import React from 'react'

{/*  props = desabilitado=bolean
    classeBotao=String
    acaoBotao=Funcion
    children=texto do botao */}

export default function BotaoSubmit(props){
    return (
        <button className={props.classeBotao} onClick={props.acaoBotao}>
            {props.children}
        </button>
    )
}