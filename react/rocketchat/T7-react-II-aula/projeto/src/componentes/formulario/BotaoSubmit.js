import React from 'react'

// props = {
//     desabilitado=booelan
//     classeBotao=String
//     acaoBotao=Function
//     children=Texto do botao
// }

export default function BotaoSubmit(props) {
    const {desabilitado, classeBotao, acaoBotao, children} = props
    
    console.log(props, "props do botao")
    // quando se vai alterar o prop, se guarda numa variável, para não ter que transformar a função numa classe só por causa da CSSclasse
    // let classes = props.classeBotao 
    // if(props.desabilitado){
    //     classes += ' botao--desabilitado'} 
    
    //pode ser tbm um if ternário
    let classes = desabilitado ? (classeBotao + ' botao--desabilitado') : classeBotao

    return (
        <button className={classes} onClick={acaoBotao}>
            {children}
        </button>
    )
}