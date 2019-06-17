import React from 'react';
import './Cadastro.css';
import Inicial from './Inicial'


class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state;

    }
    render() {
        return (
            <div className='cadastro'>
                <Inicial />
            </div>
        )
    }

}

export default Cadastro;