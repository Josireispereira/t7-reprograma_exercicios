import React from 'react'
import './cadastro.css'
import Inicial from './Inicial'
import Final from './Final'
import PessoaFisica from './PessoaFisica'
import PessoaJuridica from './PessoaJuridica'

export default class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conteudo: undefined
        }
    }

    handleMudaConteudo = (valor) => {
        console.log(valor, "valor do clique")
        this.setState({
            conteudo: valor
        })
    }

    render() {
        const {conteudo} = this.state
        
        return(
            <div className="cadastro">
                {
                    conteudo === undefined && 
                    <Inicial alteraConteudo={this.handleMudaConteudo}/>
                }
                {
                     conteudo === "PF" && 
                     <PessoaFisica alteraConteudo={this.handleMudaConteudo}/>
                }
                {
                     conteudo === "PJ" && 
                     <PessoaJuridica />
                }
                {
                    conteudo === "final" && <Final />
                }
            </div> 
        )
    }
}
