import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

// páginas
import Home from "./pages/Home/Home";
import LoginPage from './pages/LoginPage';

function estaAutenticado(){
    if(localStorage.getItem('TOKEN')){
        return true
    }
    else {
        return false
    }
}

// ou ternário! localStorage.getItem('TOKEN') === true ? 'aeee' : false ''

class PrivateRoute extends React.Component {
    render(){ 
        const Componente = this.props.component
        console.log(this.props)
        if(estaAutenticado()){
            // componentes do tweets
            return <Route render={() => (<Componente{...this.props}></Componente>)}></Route> 
        }
        else{
            //componentes do login
            return <Redirect to='/login'></Redirect>
        }
    }
}

const Roteamento = () => {
    return(
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento;