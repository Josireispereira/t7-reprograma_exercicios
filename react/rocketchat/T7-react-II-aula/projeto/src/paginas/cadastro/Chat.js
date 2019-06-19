import React, { Component } from 'react'
import Comentario from '../../componentes/comentario/Comentario'
import { getComentarios } from '../service/base'

export default class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comentarios: undefined,
        }
    }
    render() {
        return (
            <p>Você está no Chat!</p>
        )
    }
}