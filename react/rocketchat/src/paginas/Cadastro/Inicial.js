import React from 'react';
import Astronauta from '../../Imagem/astronaut.png';
import Globo from '../../Imagem/globe.png';
import BotaoCadastro from '../../componentes/Formulario/BotaoCadastro'

// props = {alteraConteudo}

function Inicial (props){
    return (
        <div className='pagina'>
            <h1>Escolha qual tipo de cadastro</h1>
            <div className='pagina__botao'>
                <BotaoCadastro 
                scrImagem={Astronauta}
                altImagem='icone de astronauta'
                titulo='Pessoa Física'
                valorImagem='PF'
                acaoBotao={props.alteraConteudo}
                />
                <BotaoCadastro 
                scrImagem={Globo}
                altImagem='icone do Globo'
                titulo='Pessoa Física'
                valorImagem='PF'
                acaoBotao={props.alteraConteudo}
                />
            </div>
        </div>
    )
}

export default Inicial;