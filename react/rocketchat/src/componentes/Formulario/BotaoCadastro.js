import React from './node_modules/react'
import 

//PRA LEMBRAR DO props = {
//     scrImagem={Globo}
//     altImagem='icone do Globo'
//     titulo='Pessoa Física'
//     valorImagem='PF'
//     acaoBotao={props.alteraConteudo}}

export default function BotaoCadastro (props){
    return( // a classe do botao não precisa ser prop pois é compartilhada
        <button className='botao-imagem' onClick={() => props.acaoBotao(valorImagem)}> 
        <img src={props.scrImagem} alt={props.altImagem} />
        <span>{props.titulo}</span>
        </button>
    )
}