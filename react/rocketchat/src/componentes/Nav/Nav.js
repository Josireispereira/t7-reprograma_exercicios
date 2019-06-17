import React from 'react';
import Menu from './Menu/Menu'
import Logo from '../../Imagem/RocketChat.png';
import '../Nav/Nav.css';

export default function Nav(props) {
    return(
        <nav className='navbar'>
            <div>
            <img className='navbar-logo' src={Logo} alt='Logotipo do RocketChat'/>
            </div>
            <Menu />
        </nav>
    )
}