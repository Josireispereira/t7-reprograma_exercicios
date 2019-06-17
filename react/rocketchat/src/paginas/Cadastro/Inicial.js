import React from 'react';
import Astronauta from '../../Imagem/astronaut.png';
import Globo from '../../Imagem/globe.png';

function Inicial (props){
    return (
        <div className='pagina'>
            <h1>Escolha qual tipo de cadastro</h1>
            <div className='pagina__botao'>
                <button className='botao-imagem'>
                    <img src={Astronauta} alt='icone do Astronauta' />
                    <span>Pessoa física</span>
                </button>
                <button className='botao-imagem'>
                    <img src={Globo} alt='ícone do Globo' />
                    <span>Pessoa jurídica</span>
                </button>
            </div>
        </div>
    )
}

export default Inicial;