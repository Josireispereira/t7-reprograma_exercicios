import React from 'react'
import Grupo from '../../componentes/formulario/Grupo';
import BotaoSubmit from '../../componentes/formulario/BotaoSubmit';

export default class PessoaFisica extends React.Component {
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

    handleSubmit = e => {
        e.preventDefault()
        console.log("enviou")
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {
        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
    }

    estaDesabilitado = () => {
        const { nomeSobrenome, numeroCpf, dataNascimento, email, senha} = this.state
        if(!nomeSobrenome.valor || nomeSobrenome.erro || !numeroCpf.valor || numeroCpf.erro || !dataNascimento.valor || dataNascimento.erro || !email.valor || email.erro || !senha.valor || senha.erro) {
            return true
        } else {
            return false
        }
    }

    render() {
        const desabilitado = this.estaDesabilitado()
        return (
            <div className='pagina'>
                <h2>Cadastro Pessoa Fisica </h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <Grupo erro={nomeSobrenome.erro}>
                        <Grupo.Legenda htmlForLegenda="nomeSobrenome">
                            Nome Completo:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true}
                            placeholder="Nome" 
                            id="nomeSobrenome"
                            type="text" 
                            value={nomeSobrenome.valor}
                            name="nomeSobrenome" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={numeroCpf.erro}>
                        <Grupo.Legenda htmlForLegenda="numeroCpf">
                            CPF:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true}
                            type="text" 
                            placeholder="000.000.000-00" id="numeroCpf" 
                            value={numeroCpf.valor} name="numeroCpf" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={dataNascimento.erro}>
                        <Grupo.Legenda htmlForLegenda="dataNascimento">
                            Data de Nascimento:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                           required={true}
                           type="text" 
                           placeholder="00/00/00" id="dataNascimento" 
                           value={dataNascimento.valor} name="dataNascimento" 
                           onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={email.erro}>
                        <Grupo.Legenda htmlForLegenda="email">
                            Email:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true} 
                            type="email" 
                            placeholder="email" 
                            id="email" 
                            value={email.valor} name="email" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={senha.erro}>
                        <Grupo.Legenda htmlForLegenda="senha">
                            Senha:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true}
                            type="password" 
                            placeholder="senha" 
                            id="senha" 
                            value={senha.valor} 
                            name="senha" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <BotaoSubmit desabilitado={desabilitado} acaoBotao={this.handleSubmit} className='botao'>
                        Enviar
                    </BotaoSubmit>    
                </form>
            </div>
        )
    }
}