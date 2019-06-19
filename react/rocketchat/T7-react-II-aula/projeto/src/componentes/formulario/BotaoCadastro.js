import React from 'react'

// props = {
//     srcImagem={Astronauta},
//     altImagem="icone astronauta",
//     titulo="Pessoa Física",
//     valorImagem="PF",
//     acaoBotao={props.alteraConteudo},
// }

export default function BotaoCadastro(props){
    const {acaoBotao, valorImagem, srcImagem, altImagem, titulo} = props
    
    return (
        <button className="botao-icone" onClick={() => acaoBotao(valorImagem)}>
            <img src={srcImagem} className="botao-imagem" alt={altImagem}/>
            <span>{titulo}</span>
        </button> 
    )
}