import React from 'react';
import Legenda from '../../componentes/Formulario/legenda';
import CaixaTexto from '../../componentes/Formulario/CaixaTexto';
import BotaoSubmit from '../../componentes/Formulario/BotaoSubmit';

class PessoaFisica extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeSobrenome: {
                valor: '',
                erro: ''
            },
            numeroCpf: {
                valor: '',
                erro: ''
            },
            dataNascimento: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            senha: {
                valor: '',
                erro: ''
            },
        }
    }

    // ou = e => (não precisa colocar parenteses quando é um único parâmetro)
    handleSubmit = (event) => {
        event.preventDefault() // impede que o submit atualize a pag por padrão
        console.log('enviou')
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {
        console.log(e.target, 'evento onChange') // o target é uma prop do evento onChange
        this.setState({
            // é o mesmo que this.setState{ nomeSobrenome: valor}, como é variável,fica em chaves [] (pra acessar uma prop do obj por variável), ou const nomeDoInput= e.target.name e colocar [nomeDoInput]
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
        console.log(this.state[nomeDoInput], 'nome do input')
    }

    render() {
        return (
            <div className='pagina'>
                <h2>Cadastro de Pessoa Física</h2>
                <form className='formulario' onSubmit={this.handleSubmit}>
                    <div>
                        <Legenda
                            htmlforLegenda='nomeSobrenome'> Nome Completo:
                             // como é um elemento de leitura, não precisa ser jogado como prop
                        </Legenda>
                        < CaixaTexto
                            className='campo'
                            id='nomeSobrenome'
                            type='text'
                            placeholder='Nome'
                            name='nomeSobrenome'
                            value={this.state.nomeSobrenome}
                            onChange={this.handleChange} />
                        < BotaoSubmit desabilitado={} acaoBotao={this.handleSubmit} className='botao'>
                        </BotaoSubmit>
                    </div>
                    <div>
                        <Legenda
                            htmlforLegenda='numeroCpf'> Número do CPF:
                        </Legenda>
                        <input
                            className='campo'
                            id='numeroCpf'
                            type='text'
                            placeholder='000.000.000-00'
                            name='numeroCpf'
                            value={this.state.numeroCpf}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <Legenda
                            htmlforLegenda='dataNascimento'> Data de Nascimento:
                        </Legenda>
                        <input
                            className='campo'
                            id='dataNascimento'
                            type='text'
                            placeholder='01/01/2000'
                            name='dataNascimento'
                            value={this.state.dataNascimento}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <Legenda
                            htmlforLegenda='email'> Email:
                        </Legenda>
                        <input
                            className='campo'
                            id='email'
                            type='text'
                            placeholder='exemplo@gmail.com'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <Legenda
                            htmlforLegenda='senha'> Senha:
                        </Legenda>
                        <input
                            className='campo'
                            id='senha'
                            type='text'
                            placeholder='Senha'
                            name='senha'
                            value={this.state.senha}
                            onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default PessoaFisica