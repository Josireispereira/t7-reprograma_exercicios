import React from 'react'
import Legenda from '../../componentes/Formulario/Legenda'

// props = { }

export default function Legenda(props){
    return (
        <label
        htmlFor={props.htmlForLegenda}>
        {props.children}
    </label>
    )
}