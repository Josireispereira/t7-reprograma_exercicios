import React from 'react';
import './Cadastro.css';
import Inicial from './Inicial'

// pagina container 

class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conteudo: undefined
        }
    }

    handleMudaConteudo = (valor) => {
        console.log(valor + " valor do clique")
        this.setState({
            conteudo: valor
        })
    }

    render() {
        return (
            <div className='cadastro'>
                {  // isso é um if, do truthy and falsey, se for verdadeiro, retorna 
                    this.state.conteudo === "undefined" && < Inicial alteraConteudo={this.handleMudaConteudo} />
                }
                {
                    this.state.conteudo === "PF" && < PessoaFisica />
                }
                {
                    this.state.conteudo === "PJ" && < PessoaJuridica />
                }

            </div>
        )
    }

}

export default Cadastro;