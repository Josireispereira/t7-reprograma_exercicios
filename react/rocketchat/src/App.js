import React from 'react';
import './App.css';
import Home from './Paginas/Home';
import Cadastro from './Paginas/Cadastro/Cadastro';
import Chat from './Paginas/Chat';
import Nav from './componentes/Nav/Nav';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <div>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/cadastro' exact component={Cadastro} />
        <Route path='/chat' exact component={Chat} />
      </div>
    </Switch>
  );
}

export default App;
