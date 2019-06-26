import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'
import './loginPage.css'


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aparecer: false
        }
    }

    fazerLogin = (e) => {
        e.preventDefault()
        const dadosDeLogin = {
            login: this.inputLogin.value,
            senha: this.inputSenha.value
        }
        console.log(dadosDeLogin)
        // a ordem do fetch é: rota, dados da requisição com método http e dados
        fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify(dadosDeLogin)
        })
            .then(resp => {
                if (!resp.ok)
                    throw resp;
                //   console.log(resp)
                return resp.json()
            })
            // Esse segundo then serve para conseguir pegar em variável o retorno com os JSONS
            .then((respJson) => {
                console.log('then ok', respJson)
                // fazemos o controle se usuário está logado pelo token
                localStorage.setItem('TOKEN', respJson.token)
                // redireciona para a Home, isso é do router DOM
                this.props.history.push('/')
            })
            .catch((err) => {
                err.json()
                    .then(res => {
                        this.setState({
                            aparecer:true
                        })
                        // alert(res.message)
                    })
            })
    }

    render() {
        
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form className="loginPage__form" action="/" onSubmit={this.fazerLogin}>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label>
                                    <input
                                        className="loginPage__input"
                                        type="text"
                                        id="login"
                                        name="login"
                                        ref={(elementoInput) => { this.inputLogin = elementoInput }} />
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label>
                                    <input
                                        className="loginPage__input"
                                        type="password"
                                        id="senha"
                                        name="senha"
                                        ref={(elemento) => { this.inputSenha = elemento }}
                                    />
                                </div>
                                { this.state.aparecer === true ? <div className="loginPage__errorBox">
                                  Mensagem de erro!
                                  </div> : ''
                                }
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage